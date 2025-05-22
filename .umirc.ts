import { defineConfig } from "umi";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/charles/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/charles/' : '/',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
