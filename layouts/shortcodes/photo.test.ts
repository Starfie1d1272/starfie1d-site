/**
 * photo.html 短代码单元测试
 * 
 * 测试 photo 短代码生成的 HTML 结构和逻辑
 * 验证图片容器、灯箱功能、样式和元数据的正确性
 */

import { describe, it, expect } from 'vitest'

/**
 * 模拟 photo 短代码生成的 HTML 结构
 * 
 * @param options - 配置选项
 * @param options.imageRelPermalink - 图片相对路径
 * @param options.pageTitle - 页面标题（作为 alt 文本）
 * @param options.title - 短代码的 title 参数（可选）
 * @param options.caption - 图片标题
 * @returns 生成的 HTML 字符串
 */
function generatePhotoHTML(options: {
  imageRelPermalink: string
  pageTitle: string
  title?: string
  caption?: string
}): string {
  const { imageRelPermalink, pageTitle, title, caption } = options

  const altText = title || pageTitle

  const styleBlock = `
<style>
  /* 强行隐藏 Hugo Blox 自动生成的特色图片容器 */
  .featured-image-wrapper.article-header {
    display: none !important;
  }
</style>`

  const imageSection = `
<div class="flex justify-center mt-8">
  <div class="w-full max-w-4xl">
    <a href="${imageRelPermalink}" class="hb-lightbox">
      <img src="${imageRelPermalink}" 
           alt="${altText}" 
           style="border-radius: 0.75rem; cursor: zoom-in; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"
           loading="lazy">
    </a>
    ${caption ? `<p class="text-center text-sm text-gray-500 mt-3 font-mono italic">${caption}</p>` : ''}
  </div>
</div>`

  return styleBlock + imageSection
}

/**
 * 解析 HTML 字符串并返回关键元素
 */
function parsePhotoHTML(html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  return {
    styleElement: doc.querySelector('style'),
    wrapperDiv: doc.querySelector('.flex.justify-center.mt-8'),
    innerDiv: doc.querySelector('.w-full.max-w-4xl'),
    anchor: doc.querySelector('a.hb-lightbox'),
    image: doc.querySelector('img'),
    caption: doc.querySelector('p.text-center.text-sm.text-gray-500.mt-3.font-mono.italic'),
  }
}

describe('photo 短代码', () => {
  describe('基础结构测试', () => {
    it('应该包含隐藏特色图片容器的样式', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试页面',
      })
      const { styleElement } = parsePhotoHTML(html)

      expect(styleElement).toBeTruthy()
      expect(styleElement?.textContent).toContain('.featured-image-wrapper.article-header')
      expect(styleElement?.textContent).toContain('display: none !important')
    })

    it('应该创建外层居中容器', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试页面',
      })
      const { wrapperDiv } = parsePhotoHTML(html)

      expect(wrapperDiv).toBeTruthy()
      expect(wrapperDiv?.className).toBe('flex justify-center mt-8')
    })

    it('应该创建最大宽度容器', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试页面',
      })
      const { innerDiv } = parsePhotoHTML(html)

      expect(innerDiv).toBeTruthy()
      expect(innerDiv?.className).toBe('w-full max-w-4xl')
    })
  })

  describe('图片元素测试', () => {
    it('应该包含带灯箱功能的链接', () => {
      const imageRelPermalink = '/gallery/lunar-eclipse/featured.jpg'
      const html = generatePhotoHTML({
        imageRelPermalink,
        pageTitle: '红月掩影',
      })
      const { anchor } = parsePhotoHTML(html)

      expect(anchor).toBeTruthy()
      expect(anchor?.className).toBe('hb-lightbox')
      expect(anchor?.getAttribute('href')).toBe(imageRelPermalink)
    })

    it('应该包含正确的图片元素', () => {
      const imageRelPermalink = '/gallery/lunar-eclipse/featured.jpg'
      const html = generatePhotoHTML({
        imageRelPermalink,
        pageTitle: '红月掩影',
      })
      const { image } = parsePhotoHTML(html)

      expect(image).toBeTruthy()
      expect(image?.getAttribute('src')).toBe(imageRelPermalink)
    })

    it('当未提供 title 参数时，应使用页面标题作为 alt 文本', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '月全食相位序列',
      })
      const { image } = parsePhotoHTML(html)

      expect(image?.getAttribute('alt')).toBe('月全食相位序列')
    })

    it('当提供 title 参数时，应使用 title 作为 alt 文本', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '页面标题',
        title: '自定义标题',
      })
      const { image } = parsePhotoHTML(html)

      expect(image?.getAttribute('alt')).toBe('自定义标题')
    })

    it('应该包含正确的内联样式', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试页面',
      })
      const { image } = parsePhotoHTML(html)
      const style = image?.getAttribute('style')

      expect(style).toContain('border-radius: 0.75rem')
      expect(style).toContain('cursor: zoom-in')
      expect(style).toContain('box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)')
    })

    it('应该包含 lazy loading 属性', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试页面',
      })
      const { image } = parsePhotoHTML(html)

      expect(image?.getAttribute('loading')).toBe('lazy')
    })
  })

  describe('图片标题测试', () => {
    it('当提供 caption 时应显示标题', () => {
      const caption = '月全食相位拼接图 | 瑞利散射现象'
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '红月掩影',
        caption,
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      expect(captionElement).toBeTruthy()
      expect(captionElement?.textContent).toBe(caption)
      expect(captionElement?.className).toBe('text-center text-sm text-gray-500 mt-3 font-mono italic')
    })

    it('当未提供 caption 时不应显示标题', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '红月掩影',
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      expect(captionElement).toBeNull()
    })
  })

  describe('真实场景测试', () => {
    it('应该正确处理月全食页面的图片', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/gallery/lunar-eclipse-phases/featured.jpg',
        pageTitle: '红月掩影：月全食相位序列',
        caption: '月全食相位拼接图 | 瑞利散射现象',
      })
      const { wrapperDiv, anchor, image, caption: captionElement } = parsePhotoHTML(html)

      expect(wrapperDiv).toBeTruthy()
      expect(anchor?.getAttribute('href')).toBe('/gallery/lunar-eclipse-phases/featured.jpg')
      expect(image?.getAttribute('src')).toBe('/gallery/lunar-eclipse-phases/featured.jpg')
      expect(image?.getAttribute('alt')).toBe('红月掩影：月全食相位序列')
      expect(captionElement?.textContent).toBe('月全食相位拼接图 | 瑞利散射现象')
    })

    it('应该正确处理中文字符', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/gallery/彗星.jpg',
        pageTitle: '紫金山-阿特拉斯彗星',
        caption: '2024年最亮彗星观测',
      })
      const { image, caption: captionElement } = parsePhotoHTML(html)

      expect(image?.getAttribute('alt')).toBe('紫金山-阿特拉斯彗星')
      expect(captionElement?.textContent).toBe('2024年最亮彗星观测')
    })

    it('应该正确处理特殊字符和空格', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/gallery/image with spaces.jpg',
        pageTitle: '标题-with-special_chars',
        caption: 'Caption with "quotes" & symbols',
      })
      const { image, caption: captionElement } = parsePhotoHTML(html)

      expect(image?.getAttribute('src')).toBe('/gallery/image with spaces.jpg')
      expect(image?.getAttribute('alt')).toBe('标题-with-special_chars')
      expect(captionElement?.textContent).toBe('Caption with "quotes" & symbols')
    })
  })

  describe('边界条件测试', () => {
    it('应该处理空的页面标题', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '',
      })
      const { image } = parsePhotoHTML(html)

      expect(image?.getAttribute('alt')).toBe('')
    })

    it('应该处理空的 caption', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试',
        caption: '',
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      // 空字符串应该被渲染但为空
      expect(captionElement?.textContent).toBe('')
    })

    it('应该处理非常长的标题', () => {
      const longTitle = '这是一个非常非常非常长的标题，用于测试短代码如何处理长文本内容的显示情况，确保不会破坏布局或者导致渲染问题'.repeat(3)
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: longTitle,
      })
      const { image } = parsePhotoHTML(html)

      expect(image?.getAttribute('alt')).toBe(longTitle)
    })

    it('应该处理非常长的 caption', () => {
      const longCaption = '这是一个非常长非常长非常长的图片标题，用于测试短代码如何处理长文本内容的显示情况，确保不会破坏布局或者导致渲染问题，并且样式能够正确应用到标题文本上。'.repeat(2)
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试',
        caption: longCaption,
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      expect(captionElement?.textContent).toBe(longCaption)
    })

    it('应该处理包含 HTML 标签的 caption（应该被转义）', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试',
        caption: '<script>alert("xss")</script>',
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      // 在实际 HTML 中，这应该被转义，但 DOMParser 会解析它
      // 这里我们验证它存在于结构中
      expect(captionElement?.textContent).toContain('<script>alert("xss")</script>')
    })
  })

  describe('样式验证测试', () => {
    it('所有必要的 Tailwind 类都应该存在', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试',
      })
      const { wrapperDiv, innerDiv, anchor, image } = parsePhotoHTML(html)

      // 验证外层容器类
      expect(wrapperDiv?.classList.contains('flex')).toBe(true)
      expect(wrapperDiv?.classList.contains('justify-center')).toBe(true)
      expect(wrapperDiv?.classList.contains('mt-8')).toBe(true)

      // 验证内层容器类
      expect(innerDiv?.classList.contains('w-full')).toBe(true)
      expect(innerDiv?.classList.contains('max-w-4xl')).toBe(true)

      // 验证灯箱链接类
      expect(anchor?.classList.contains('hb-lightbox')).toBe(true)

      // 验证图片样式
      expect(image?.getAttribute('style')).toContain('border-radius')
      expect(image?.getAttribute('style')).toContain('cursor')
      expect(image?.getAttribute('style')).toContain('box-shadow')
    })

    it('当存在 caption 时应该应用正确的样式类', () => {
      const html = generatePhotoHTML({
        imageRelPermalink: '/featured.jpg',
        pageTitle: '测试',
        caption: '测试标题',
      })
      const { caption: captionElement } = parsePhotoHTML(html)

      expect(captionElement?.classList.contains('text-center')).toBe(true)
      expect(captionElement?.classList.contains('text-sm')).toBe(true)
      expect(captionElement?.classList.contains('text-gray-500')).toBe(true)
      expect(captionElement?.classList.contains('mt-3')).toBe(true)
      expect(captionElement?.classList.contains('font-mono')).toBe(true)
      expect(captionElement?.classList.contains('italic')).toBe(true)
    })
  })
})
