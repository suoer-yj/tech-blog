---
title: "视频嵌入功能演示 - 支持 YouTube 和 Bilibili"
date: "2025-05-20"
category: "AI工具"
tags: ["视频", "教程", "演示"]
author: "技术博主"
excerpt: "本文演示如何在博客文章中嵌入 YouTube 和 Bilibili 视频，点击封面即可在当前页面播放。"
image: "https://picsum.photos/seed/video-demo/800/400"
featured: false
---

## 视频嵌入功能介绍

现在您可以在博客文章中方便地嵌入 YouTube 和 Bilibili 视频了！只需在 Markdown 文件中添加简单的代码块标记，系统会自动渲染出漂亮的视频播放器。

## 使用方法

在 Markdown 文件的任意位置添加以下格式的代码块：

````markdown
```video
youtube:VIDEO_ID:视频标题
```

```video
bilibili:BVID:视频标题:封面图片URL
```
````

> **注意**：Bilibili 视频需要手动提供封面图片 URL（从视频页面右键复制封面图片地址），YouTube 视频会自动获取封面。

### YouTube 视频示例

下面是一个 YouTube 视频的嵌入演示（封面自动获取）：

```video
youtube:dQw4w9WgXcQ:这里是youtube视频
```

### Bilibili 视频示例

下面是一个 Bilibili 视频的嵌入演示（手动提供封面）：

```video
bilibili:BV1GJ411x7h7:Bilibili 视频演示:https://i1.hdslb.com/bfs/archive/5242750857121e05146d5d5b13a47a2a6dd36e98.jpg
```

## 如何获取 Bilibili 封面 URL

1. 打开 Bilibili 视频页面
2. 右键点击视频封面图，选择"复制图片地址"
3. 将 URL 作为第四个参数填入

## 功能特点

1. **封面预览** - YouTube 自动获取，Bilibili 手动提供
2. **点击播放** - 点击封面或播放按钮后，在当前页面内嵌播放视频
3. **平台标识** - 显示视频来源平台（YouTube 红色标识 / Bilibili 粉色标识）
4. **响应式设计** - 视频播放器自适应不同屏幕尺寸
5. **本地和线上一致** - 不依赖任何外部 API，本地和部署后效果完全一致

---

希望这个功能能够帮助您创建更丰富的博客内容！
