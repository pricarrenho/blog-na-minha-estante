import type { Variables } from "graphql-request";
import { api } from "./api";

const freshFor = 60_000;
const staleFor = 24 * 60 * 60_000;
const retryAfter = 15_000;
const maxEntries = 256;

type CacheEntry = {
  data: unknown;
  loadedAt: number;
  refreshAfter: number;
};

const entries = new Map<string, CacheEntry>();
const pending = new Map<string, Promise<unknown>>();

export async function cachedQuery<Data>(
  document: string,
  variables?: Variables
): Promise<Data> {
  const key = JSON.stringify([document, variables]);
  const entry = entries.get(key);
  const now = Date.now();

  if (entry) {
    if (now - entry.loadedAt >= staleFor) {
      entries.delete(key);
    } else {
      entries.delete(key);
      entries.set(key, entry);
      if (entry.refreshAfter > now) return entry.data as Data;
    }
  }

  const existing = pending.get(key);
  if (existing) return existing as Promise<Data>;

  const request = api.request<Data>(document, variables)
    .then((data) => {
      const loadedAt = Date.now();
      entries.delete(key);
      entries.set(key, { data, loadedAt, refreshAfter: loadedAt + freshFor });

      if (entries.size > maxEntries) {
        const oldest = entries.keys().next().value;
        if (oldest !== undefined) entries.delete(oldest);
      }

      return data;
    })
    .catch((error: unknown) => {
      if (!entry || Date.now() - entry.loadedAt >= staleFor) throw error;

      entry.refreshAfter = Date.now() + retryAfter;
      return entry.data as Data;
    })
    .finally(() => pending.delete(key));

  pending.set(key, request);
  return request;
}
