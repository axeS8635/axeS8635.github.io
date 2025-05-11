/*
 * @Author: 危齐晟 1913361097@qq.com
 * @Date: 2025-05-11 17:45:33
 * @LastEditors: 危齐晟 1913361097@qq.com
 * @LastEditTime: 2025-05-11 19:51:50
 * @FilePath: \Myblog\docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "My Awesome Project",
  description: "A VitePress Site",
  // head:[
  //   ['link',{rel:'icon',href:'/logo.png'}]
  // ],
  themeConfig: {
    // logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '指南',
        items:[
          {
            text:'介绍',
            items:[
              {text:'前言',link:'/preface'},
            ]
          },
          {
            text:'基础',
            items:[
              {text:'安装',link:'/install'},
              {text:'快速开始',link:'/quickstart'},
              {text:'配置',link:'/config'},
              {text:'主题',link:'/theme'},
            ]
          },
          {
            text:'进阶',
            items:[
              {text:'付费',link:'/fee'},
            ]
          }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' }
    ],
    search: {
      provider: 'local',
    },
  }
})
