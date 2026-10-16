import { createClient } from "microcms-js-sdk";

// 環境変数からサービスドメインとAPIキーを読み込んでクライアントを作成
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログの型定義（TypeScript用）
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
};