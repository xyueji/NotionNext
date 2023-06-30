import BLOG from '@/blog.config'
import { useEffect } from 'react'

/**
 * 添加ouo
 * @returns
 */
const Ouo = () => {
  const loadOuo = async () => {
    try {
      const url = '//adfoc.us/js/fullpage/script.js'
      // 检查是否已存在
      const elements = document.querySelectorAll(`[href='${url}']`)
      if (elements.length > 0 || !url) {
        return
      }
      const tag1 = document.createElement('script')
      tag1.src = url
      document.head.appendChild(tag1)

      const tag2 = document.createElement('script')
      tag2.type = 'text/javascript'
      tag2.text = `
                     var id_user = '${BLOG.OUO_TOKEN}';
                     var domains_include = [${BLOG.OUO_DOMAINS}]; 
                   `
      document.head.appendChild(tag2)
      console.log('ouo 加载成功')
    } catch (error) {
      console.error('ouo 加载失败', error)
    }
  }

  useEffect(() => {
    BLOG.OUO && BLOG.OUO_TOKEN && BLOG.OUO_DOMAINS && loadOuo()
  }, [])
}

export default Ouo
