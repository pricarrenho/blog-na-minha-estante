import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://sa-east-1.cdn.hygraph.com/content/clee7h8o75ehj01t6ebjb1lz7/master",
  documents: "src/service/**/queries.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
