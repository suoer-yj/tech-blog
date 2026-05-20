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

​```video
youtube:VIDEO_ID:视频标题
​```

​```video
bilibili:BVID:视频标题
​```

### YouTube 视频示例

下面是一个 YouTube 视频的嵌入演示：

```video
youtube:dQw4w9WgXcQ:这里是youtube视频
```

### Bilibili 视频示例

下面是一个 Bilibili 视频的嵌入演示：

```video
bilibili:BV1GJ411x7h7:Bilibili 视频演示
```

## 功能特点

1. **封面预览** - 自动获取视频封面图，YouTube 直接显示，Bilibili 通过 API 获取
2. **点击播放** - 点击封面或播放按钮后，在当前页面内嵌播放视频
3. **平台标识** - 显示视频来源平台（YouTube 红色标识 / Bilibili 粉色标识）
4. **响应式设计** - 视频播放器自适应不同屏幕尺寸
5. **标题显示** - 可选择显示视频标题

## 获取视频 ID

### YouTube
1. 打开 YouTube 视频页面
2. 复制 URL 中的视频 ID（`v=` 后面的部分）
3. 例如：`https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID 是 `dQw4w9WgXcQ`

### Bilibili
1. 打开 Bilibili 视频页面
2. 复制 URL 中的 BV 号
3. 例如：`https://www.bilibili.com/video/BV1GJ411x7h7` → BV 号是 `BV1GJ411x7h7`

## 注意事项

- 视频标记需要放在 Markdown 文件的 frontmatter 之后
- 标题是可选的，如果不填则显示默认标题"视频"
- 目前支持 YouTube 和 Bilibili 两个平台
- 视频播放需要用户点击封面，不会自动播放

---

希望这个功能能够帮助您创建更丰富的博客内容！
