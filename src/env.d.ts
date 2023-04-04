/// <reference types="astro/client" />

type ImportMetaEnv = {
  readonly DATABASE_URL: string;
  readonly API_URL: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
