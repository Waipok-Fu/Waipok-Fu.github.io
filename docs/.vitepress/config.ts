import { defineConfig } from 'vitepress'
import './theme/custom.css'

export default defineConfig({
  title: 'Site of Waipok Fu',
  description: '这是一个使用 VitePress 搭建的个人网站',
  base: '/', // 如果部署在根域名
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '项目经验', link: '/projects' },
      { text: '简历', link: '/resume' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waipok-Fu' }
    ]
  }
})
