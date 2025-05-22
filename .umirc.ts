import { defineConfig } from "umi";

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/charles/' : '/',
  history: {type: 'hash'},
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
