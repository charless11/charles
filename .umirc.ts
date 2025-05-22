import { defineConfig } from "umi";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/charles/' : '/', // 项目站点需设置
  publicPath: process.env.NODE_ENV === 'production' ? '/charles/' : '/',
  history: { type: 'hash' }, // 避免 GitHub Pages 路由 404
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
