---
title: 'Windows 11 BitLocker 被 5 分钟绕过？BitUnlocker 降级攻击到底有多危险!'
excerpt: '安全研究人员发现了一种新的 BitLocker 降级攻击方法，可以在 5 分钟内绕过磁盘加密...'
image: 'https://picsum.photos/seed/security/800/400'
category: '网络安全'
tags: ['网络安全', 'BitLocker', 'Windows']
date: '2026-05-12'
author: 'admin'
featured: false
---

## 前言

BitLocker 是 Windows 内置的磁盘加密功能，被广泛用于保护企业和个人数据安全。然而，最近安全研究人员展示了一种名为 BitUnlocker 的降级攻击方法，声称可以在 5 分钟内绕过 BitLocker 加密。这到底是怎么回事？

## 攻击原理

### 什么是降级攻击？

降级攻击（Downgrade Attack）的核心思路是：将系统的固件或软件版本回退到存在漏洞的旧版本，然后利用旧版本的漏洞来绕过安全机制。

BitUnlocker 攻击的具体流程如下：

1. **物理访问**：攻击者需要物理接触目标电脑
2. **固件降级**：将 TPM 固件降级到存在漏洞的版本
3. **提取密钥**：利用旧版 TPM 的漏洞提取 BitLocker 加密密钥
4. **解密数据**：使用提取的密钥解密磁盘数据

### 攻击条件

需要注意的是，这种攻击需要满足以下条件：

- 攻击者需要**物理接触**目标设备
- TPM 固件需要支持降级（部分设备有防降级保护）
- 目标设备需要使用 TPM + PIN 的 BitLocker 配置

## 影响范围

### 受影响的设备

- 部分使用旧版 TPM 固件的设备
- 未启用 Secure Boot 的设备
- 未启用 TPM 防降级保护的设备

### 不受影响的场景

- 使用纯密码模式（无 TPM）的 BitLocker
- 启用了 TPM 防降级保护的设备
- 使用硬件安全密钥的配置

## 防护措施

### 1. 启用 TPM 防降级保护

```powershell
# 检查 TPM 版本和状态
Get-Tpm

# 确保启用了 Secure Boot
Confirm-SecureBootUEFI
```

### 2. 使用增强的 BitLocker 配置

```powershell
# 启用 BitLocker 并使用 TPM + PIN
Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAes256 -TPMandPinProtector

# 启用预启动认证
Enable-BitLocker -MountPoint "C:" -PrebootAuthentication
```

### 3. 其他安全建议

- 保持系统和固件及时更新
- 启用 Secure Boot
- 使用强 PIN 码（至少 6 位）
- 考虑使用额外的硬件安全密钥

## 总结

BitUnlocker 降级攻击确实是一个值得关注的安全问题，但它需要物理接触设备和特定条件才能实施。对于普通用户来说，只要保持系统和固件更新，并使用强 PIN 码，BitLocker 仍然是可靠的磁盘加密方案。
