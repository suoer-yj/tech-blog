#!/usr/bin/env node
/**
 * 构建前脚本：获取所有 Bilibili 视频封面
 * 这个脚本会在构建时运行，获取所有 Bilibili 视频的封面 URL
 * 并将它们保存到 JSON 文件中，供页面使用
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/bilibili-covers.json');

// 解析 Markdown 中的视频代码块
function parseVideoBlocks(content) {
  const videos = [];
  const regex = /```video\n([^`]+)```/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const lines = match[1].trim().split('\n');
    for (const line of lines) {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const platform = parts[0].trim().toLowerCase();
        const id = parts[1].trim();
        const title = parts.slice(2).join(':').trim() || '视频';
        
        if (platform === 'bilibili') {
          videos.push({ platform, id, title });
        }
      }
    }
  }
  
  return videos;
}

// 获取 Bilibili 视频封面
async function fetchBilibiliCover(bvid) {
  try {
    const response = await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const data = await response.json();
    
    if (data.data && data.data.pic) {
      return data.data.pic;
    }
  } catch (error) {
    console.error(`Failed to fetch cover for ${bvid}:`, error.message);
  }
  return null;
}

async function main() {
  console.log('Fetching Bilibili video covers...');
  
  try {
    // 读取所有 Markdown 文件
    const files = await fs.readdir(CONTENT_DIR);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    
    const allVideos = [];
    
    for (const file of mdFiles) {
      const content = await fs.readFile(path.join(CONTENT_DIR, file), 'utf-8');
      const videos = parseVideoBlocks(content);
      allVideos.push(...videos);
    }
    
    console.log(`Found ${allVideos.length} Bilibili videos`);
    
    // 获取封面
    const covers = {};
    
    for (const video of allVideos) {
      const bvid = video.id.startsWith('BV') ? video.id : `BV${video.id}`;
      console.log(`Fetching cover for ${bvid}...`);
      
      const coverUrl = await fetchBilibiliCover(bvid);
      if (coverUrl) {
        covers[video.id] = coverUrl;
        console.log(`  ✓ Got cover: ${coverUrl}`);
      } else {
        console.log(`  ✗ Failed to get cover`);
      }
      
      // 添加延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // 确保输出目录存在
    const outputDir = path.dirname(OUTPUT_FILE);
    await fs.mkdir(outputDir, { recursive: true });
    
    // 保存封面数据
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(covers, null, 2));
    console.log(`\nSaved ${Object.keys(covers).length} covers to ${OUTPUT_FILE}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
