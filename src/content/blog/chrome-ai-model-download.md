---
title: 'Chrome 被曝偷偷下载 4GB AI 模型：你的电脑，正在替 Google 跑本地 AI？'
excerpt: 'Google Chrome 浏览器被发现偷偷下载大型 AI 模型，占用用户带宽和存储空间...'
image: 'https://picsum.photos/seed/chrome/800/400'
category: '网络安全'
tags: ['Chrome', 'Google', 'AI', '隐私']
date: '2026-05-09'
author: 'admin'
featured: false
---

## 前言

近日，多位用户发现 Google Chrome 浏览器在后台偷偷下载了一个约 4GB 的 AI 模型文件。这一行为未经用户明确同意，引发了广泛的隐私和资源占用争议。

## 事件经过

### 用户发现

最早由 Reddit 用户 @tech_sleuth 发现，他在检查网络流量时注意到 Chrome 在后台大量下载不明数据。经过追踪，发现这些数据被存储在 Chrome 的用户数据目录中：

```
C:\Users\<用户名>\AppData\Local\Google\Chrome\User Data\optimization_guide_model
```

### Google 的回应

Google 随后确认了这一行为，表示这是 Chrome 新的"AI 辅助功能"的一部分，用于：

- 网页内容智能翻译
- 搜索结果智能摘要
- 表单自动填充增强
- 恶意网站检测

## 技术分析

### 模型信息

- **模型大小**：约 4GB
- **模型类型**：基于 Gemini Nano 的轻量级版本
- **运行方式**：本地推理，使用 WebView 的 ML API
- **触发条件**：Chrome 更新后自动下载

### 资源占用

| 资源 | 占用情况 |
|------|---------|
| 磁盘空间 | 约 4GB |
| 下载带宽 | 约 4GB（首次下载） |
| 内存（运行时） | 约 1-2GB |
| CPU（推理时） | 10-30% |

## 如何禁用

### 方法一：Chrome 设置

1. 打开 Chrome 设置
2. 进入"隐私和安全" > "AI 功能"
3. 关闭"在设备上运行 AI 模型"

### 方法二：通过 Flags 禁用

在 Chrome 地址栏输入：

```
chrome://flags/#optimization-guide-model
```

将选项设置为 "Disabled"，然后重启 Chrome。

### 方法三：通过注册表（Windows）

```powershell
# 禁用 Chrome AI 模型下载
reg add "HKLM\SOFTWARE\Policies\Google\Chrome" /v "OptimizationGuideModelDownloading" /t REG_DWORD /d 0 /f
```

### 方法四：删除已下载的模型

```powershell
# 关闭 Chrome 后删除模型文件
Stop-Process -Name chrome -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Google\Chrome\User Data\optimization_guide_model"
```

## 隐私影响分析

### 数据是否上传？

根据 Google 的说明，模型在本地运行，**不会将用户数据上传到服务器**。但考虑到 Google 的隐私记录，许多用户对此持怀疑态度。

### 潜在风险

- **存储空间**：4GB 对于存储空间有限的设备来说不小
- **带宽消耗**：在网络条件较差的地区，后台下载可能影响其他应用
- **电池消耗**：AI 推理会增加 CPU/GPU 负载，影响笔记本续航
- **隐私担忧**：即使用户声称数据不上传，本地模型仍能访问用户浏览的所有内容

## 行业反应

- **Mozilla**：Firefox 团队表示不会在未经用户同意的情况下下载 AI 模型
- **Apple**：Safari 的 AI 功能需要用户手动开启
- **隐私倡导组织**：呼吁对浏览器内置 AI 功能进行更严格的监管

## 总结

Chrome 偷偷下载 AI 模型的行为引发了合理的隐私担忧。虽然 Google 声称这是为了提升用户体验，但未经明确同意就占用用户资源的行为是不可接受的。建议用户按照上述方法检查并禁用这一功能。
