# 技术博客

基于 Astro + Tailwind CSS 构建的现代化技术博客网站。

## 特性

- 🚀 **静态生成** - 极快的加载速度，优秀的 SEO
- 📱 **响应式设计** - 完美适配 PC 和移动端
- 🎨 **现代化 UI** - 简洁现代的设计风格
- 🔍 **SEO 优化** - 自动生成 Meta 标签
- 💬 **评论系统** - Giscus (基于 GitHub Discussions)
- ⚡ **零成本部署** - 支持 Vercel / Netlify 免费托管

## 技术栈

- **框架**: Astro 4
- **样式**: Tailwind CSS + @tailwindcss/typography
- **图标**: 内联 SVG
- **图片**: Unsplash (示例图片)

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
tech-blog/
├── public/              # 静态资源
│   └── favicon.svg     # 网站图标
├── src/
│   ├── components/     # Astro 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Sidebar.astro
│   ├── layouts/        # 页面布局
│   │   └── BaseLayout.astro
│   ├── pages/          # 页面
│   │   ├── index.astro          # 首页
│   │   ├── about.astro          # 关于页
│   │   ├── articles/            # 文章详情
│   │   ├── categories/          # 分类页
│   │   └── tags/                # 标签页
│   └── styles/
│       └── global.css           # 全局样式
├── astro.config.mjs    # Astro 配置
├── tailwind.config.mjs # Tailwind 配置
└── package.json
```

## 部署

### Vercel (推荐)

1. Fork 本仓库
2. 在 Vercel 中导入项目
3. 点击 Deploy

### Netlify

1. Fork 本仓库
2. 在 Netlify 中导入项目
3. 构建命令留空
4. 发布目录设置为 `dist`

### 手动部署

```bash
npm run build
# 将 dist 目录内容上传到你的服务器
```

## 自定义

### 修改网站信息

1. 编辑 `src/layouts/BaseLayout.astro` 修改默认标题和描述
2. 编辑 `src/components/Header.astro` 修改导航链接
3. 编辑 `src/components/Footer.astro` 修改页脚信息

### 修改颜色主题

编辑 `tailwind.config.mjs` 中的 `theme.extend.colors`:

```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color'
}
```

### 添加新文章

在 `src/pages/articles/[slug].astro` 的 `getStaticPaths` 中添加新文章数据。

## 许可证

MIT License
