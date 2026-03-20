---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-03-20
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    id: about  # 对应导航栏的 #about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 📄 下载完整简历 (PDF)
        url: uploads/CV_DuXinyu.pdf
      headings:
        about: '关于我'
        education: '教育背景'
        interests: '研究兴趣'
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded

  # ==========================================
  # 2. 科研经历 (Experience)
  # ==========================================
  - block: resume-experience
    id: experience  # 对应导航栏的 #experience
    content:
      title: 科研经历
      username: me
    design:
      # 时间格式改为符合中文习惯或标准学术格式
      date_format: '2006年01月'
      # 是否先显示教育经历（我们已经在简介块显示了教育，这里选 false）
      is_education_first: false

  # ==========================================
  # 3. 核心技能 (Skills)
  # ==========================================
  - block: resume-skills
    id: skills  # 对应导航栏的 #skills
    content:
      title: 技能栈 & 核心工具
      username: me
    design:
      # 采用两列布局，显得更紧凑
      columns: '2'

  # ==========================================
  # 4. 荣誉奖项与摄影 (Awards)
  # ==========================================
  - block: resume-awards
    id: awards  # 对应导航栏的 #awards
    content:
      title: 荣誉奖项与视觉作品
      username: me
    design:
      columns: '2'

# ==========================================
  # 5. 摄影作品画廊 (Photography Gallery)
  # ==========================================
  - block: collection
    id: photography
    content:
      title: 视觉作品 (Photography & Visualization)
      subtitle: '探索行星科学的严谨与星空的浪漫'
      filters:
        folders:
          - gallery  # 我们待会去创建这个文件夹
    design:
      # 关键：使用 gallery 视图，能像相册一样排列
      view: card
      columns: 2      # 设置为 2 列或 3 列显示
  
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publications
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: ''
  #     filters:
  #       folders:
  #         - publications
  #       exclude_featured: false
  #   design:
  #     view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - events
  #   design:
  #     view: card
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: blog
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 10
  #     # Filter on criteria
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]  
---
