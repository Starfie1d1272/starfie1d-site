---
# 首页配置
title: ''
summary: ''
date: 2026-03-20
type: landing

design:
  # 模块间距
  spacing: '6rem'

sections:
  # 1. 个人简介模块
  - block: resume-biography-3
    id: about  # 对应导航栏的 #about
    content:
      username: me_zh # 对应 content/authors/ 下的文件夹名
      text: ''
      # 简历下载按钮
      button:
        text: 📄 下载完整简历 (PDF)
        url: /uploads/Public_CV.pdf
      headings:
        about: '关于我'
        education: '教育背景'
        interests: '研究兴趣'
    design:
      background:
        gradient_mesh:
          enable: true
      # 姓名标题大小: xs, sm, md, lg, xl
      name:
        size: md 
      # 头像设置: small, medium, large, xl, xxl | shape: circle, square, rounded
      avatar:
        size: medium 
        shape: circle 

  # 2. 科研经历模块
  - block: resume-experience
    id: experience  # 对应导航栏的 #experience
    content:
      title: 科研经历
      username: me_zh
    design:
      date_format: '2006年01月'
      is_education_first: false

  # 3. 核心技能模块
  - block: resume-skills
    id: skills  # 对应导航栏的 #skills
    content:
      title: 技能栈 & 核心工具
      username: me_zh
    design:
      columns: '2'

  # 4. 荣誉奖项模块 (注：此 ID 如果菜单未用到可保留或修改)
  - block: resume-awards
    id: awards
    content:
      title: 荣誉奖项
      username: me_zh
    design:
      columns: '2'

  # 5. 摄影/视觉画廊模块
  - block: collection
    id: photography # 对应导航栏的 #photography (Honors & Visuals)
    content:
      title: 视觉作品
      subtitle: '探索行星科学的严谨与星空的浪漫'
      filters:
        folders:
          - gallery
    design:
      view: card
      columns: 2
---