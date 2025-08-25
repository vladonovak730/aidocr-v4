/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_KEY: string
  readonly VITE_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
