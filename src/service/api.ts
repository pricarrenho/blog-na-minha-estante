import { GraphQLClient } from "graphql-request";

export const api = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "", {
  fetch: async (input, init) => {
    const request = () => {
      const timeout = AbortSignal.timeout(3_000);
      const signal = init?.signal ? AbortSignal.any([init.signal, timeout]) : timeout;
      return fetch(input, { ...init, signal, cache: "no-store" });
    };

    try {
      return await request();
    } catch (error) {
      const transient = error instanceof TypeError ||
        (error instanceof Error && error.name === "TimeoutError");
      if (!transient || init?.signal?.aborted) throw error;

      return request();
    }
  },
});
