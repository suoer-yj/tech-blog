// remark 插件：将视频代码块转换为 HTML 元素
// 支持格式：
// ```video
// youtube:VIDEO_ID:标题:封面URL(可选)
// ```
// 或
// ```video
// bilibili:BVID:标题:封面URL(可选)
// ```

import { visit } from 'unist-util-visit';

export function remarkVideoEmbed() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'video' || !parent) return;
      
      const lines = (node.value || '').trim().split('\n');
      const videos = [];
      
      for (const line of lines) {
        const parts = line.split(':');
        if (parts.length >= 2) {
          const platform = parts[0].trim().toLowerCase();
          const id = parts[1].trim();
          const title = parts.length >= 3 ? parts[2].trim() : '视频';
          const cover = parts.length >= 4 ? parts.slice(3).join(':').trim() : '';
          
          if (platform === 'youtube' || platform === 'bilibili') {
            videos.push({ platform, id, title, cover });
          }
        }
      }
      
      if (videos.length === 0) return;
      
      // 将代码块节点替换为 HTML 节点
      const htmlNodes = videos.map(v => {
        const coverAttr = v.cover ? ` data-cover="${v.cover.replace(/"/g, '&quot;')}"` : '';
        return {
          type: 'html',
          value: `<div class="video-embed-placeholder" data-platform="${v.platform}" data-video-id="${v.id}" data-video-title="${v.title.replace(/"/g, '&quot;')}"${coverAttr}></div>`
        };
      });
      
      // 替换原来的代码块节点
      parent.children.splice(index, 1, ...htmlNodes);
    });
  };
}
