/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_W3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
