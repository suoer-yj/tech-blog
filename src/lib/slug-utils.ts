// 分类名到 slug 的映射
export const categorySlugMap: Record<string, string> = {
  'AI': 'ai',
  'Claude': 'claude',
  'OpenAI': 'openai',
  'Windows': 'windows',
  '网络安全': 'security',
  '挖矿': 'mining',
  'Python': 'python',
  '开发工具': 'devtools',
  'Linux': 'linux',
};

// slug 到分类名的反向映射
export const slugToCategoryName: Record<string, string> = {};
for (const [name, slug] of Object.entries(categorySlugMap)) {
  slugToCategoryName[slug] = name;
}

// 标签名到 slug 的映射
export const tagSlugMap: Record<string, string> = {
  'AI': 'ai',
  'Claude': 'claude',
  'Ollama': 'ollama',
  'llama.cpp': 'llama-cpp',
  'GGUF': 'gguf',
  'Windows': 'windows',
  '备份': 'backup',
  'BitLocker': 'bitlocker',
  'npm': 'npm',
  '安全': 'security',
  '视频': 'video',
  '本地部署': 'local-deploy',
  'Bitcoin': 'bitcoin',
  '挖矿': 'mining',
  'JDownloader': 'jdownloader',
  'OpenAI': 'openai',
  'GPT': 'gpt',
  'ChatGPT': 'chatgpt',
  'Chrome': 'chrome',
  'Google': 'google',
  '隐私': 'privacy',
  'Python': 'python',
  '编程': 'programming',
  'Docker': 'docker',
  '开发工具': 'devtools',
  'GitHub': 'github',
  'Linux': 'linux',
  'Ubuntu': 'ubuntu',
};

// slug 到标签名的反向映射
export const slugToTagName: Record<string, string> = {};
for (const [name, slug] of Object.entries(tagSlugMap)) {
  slugToTagName[slug] = name;
}

// 文章数据类型
export interface PostData {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  tags: string[];
  date: string;
  slug: string;
  author: string;
  featured: boolean;
}

// 将 content collection 的原始数据转换为 PostData
export function toPostData(raw: { id: string; data: any }): PostData {
  return {
    title: raw.data.title,
    excerpt: raw.data.excerpt,
    image: raw.data.image,
    category: raw.data.category,
    categorySlug: categorySlugMap[raw.data.category] || raw.data.category.toLowerCase(),
    tags: raw.data.tags || [],
    date: raw.data.date,
    slug: raw.id.replace(/\.md$/, ''),
    author: raw.data.author || 'admin',
    featured: raw.data.featured || false,
  };
}
