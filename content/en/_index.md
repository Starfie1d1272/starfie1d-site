---
# Homepage Configuration (English Version)
title: ''
summary: ''
date: 2026-03-20
type: landing

design:
  # Section spacing
  spacing: '6rem'

sections:
  # 1. Biography Block
  - block: resume-biography-3
    id: about  # Matches #about in menus.yaml
    content:
      username: me # 👈 Fixed to 'me'
      text: ''
      button:
        text: 📄 Download Full CV (PDF)
        url: uploads/CV_English.pdf
      headings:
        about: 'About Me'
        education: 'Education'
        interests: 'Research Interests'
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  # 2. Research Experience Block
  - block: resume-experience
    id: experience  # Matches #experience in menus.yaml
    content:
      title: Experience
      username: me # 👈 Fixed to 'me'
    design:
      date_format: 'Jan 2006'
      is_education_first: false

  # 3. Technical Skills Block
  - block: resume-skills
    id: skills  # Matches #skills in menus.yaml
    content:
      title: Technical Skills
      username: me # 👈 Fixed to 'me'
    design:
      columns: '2'

  # 4. Awards Block
  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: me # 👈 Fixed to 'me'
    design:
      columns: '2'

  # 5. Photography & Gallery Block
  - block: collection
    id: photography # Matches #photography (Awards & Gallery) in menus.yaml
    content:
      title: Gallery # 👈 按照你的要求改为 Awards & Gallery
      subtitle: 'Exploring the rigor of planetary science and the beauty of the cosmos'
      filters:
        folders:
          - gallery
    design:
      view: card
      columns: 2
---