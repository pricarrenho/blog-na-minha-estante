import type { GetServerSideProps, GetServerSidePropsResult } from "next";
import { getCategories } from "./category/getCategories";

export async function optionalPageData<Data>(request: Promise<Data>): Promise<Data | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    const timeout = new Promise<null>((resolve) => {
      timer = setTimeout(() => resolve(null), 1_200);
    });
    return await Promise.race([request, timeout]);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export function withPageData<Props extends Record<string, unknown>>(
  load: (
    context: Parameters<GetServerSideProps>[0],
    categories: ReturnType<typeof getCategories>
  ) => Promise<GetServerSidePropsResult<Props>>
): GetServerSideProps<Props | { contentUnavailable: true }> {
  return async (context) => {
    const categories = getCategories();
    const navigation = categories.catch(() => null);

    try {
      const result = await load(context, categories);
      if (!("props" in result)) return result;

      return {
        props: {
          ...await result.props,
          navigationCategories: (await optionalPageData(navigation)) ?? [],
        },
      };
    } catch (error) {
      const cause = error instanceof Error ? error.cause : undefined;
      console.error(
        "Não foi possível consultar o conteúdo do blog.",
        error instanceof Error ? error.name : "UnknownError",
        cause && typeof cause === "object" && "code" in cause ? cause.code : ""
      );
      context.res.statusCode = 503;
      return {
        props: {
          contentUnavailable: true,
          navigationCategories: (await optionalPageData(navigation)) ?? [],
        },
      };
    }
  };
}
