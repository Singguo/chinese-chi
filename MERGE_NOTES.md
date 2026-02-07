# 合并说明（/26 会议页面）

## 本次修改内容
- 新增 `/26` 路由及 7 个子页面（callforpapers、attend、program、workshops、amalunch、committee、sponsorship），用于 1:1 复刻 2025 年会议页面结构与内容。
- 新增 `src/lib/legacy-ichec.ts`，用于读取本地 2025 HTML 并在服务端做链接改写与注释插入。
- 新增 `/26` 专用布局与样式（`src/app/26/layout.tsx`、`src/app/26/ichec-26.css`、`src/app/26/head.tsx`），引入 2025 站点 CSS 并覆盖为澳门绿色主题。
- 新增 2025 风格导航与页脚组件（`Legacy26Header` / `Legacy26Footer`）。
- 为 2026 待更新信息添加了页面级注释，并输出了对应说明文档。

## 合并注意事项
- `/26` 使用外部样式资源（`https://ichec.icachi.org/assets/...`），需确保部署环境可访问。
- `/26` 页面使用本地 `content/legacy-25` HTML 文件，已支持离线渲染。
