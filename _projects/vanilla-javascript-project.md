---
title: "Vanilla JavaScript Projects"
excerpt: "Learning front end."
header:
  teaser: assets/images/javascript.png
sidebar:
  - title: "Role"
    image: assets/images/software-developer-copy.jpg
    image_alt: "logo"
    text: "Designer, Full-Stack Developer"
  - title: "Responsibilities"
    text: "Designed and Developed"
---

These are my mini vanilla Javascript projects.

{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% include documents-collection.html collection="frontend" sort_by=page.sort_by sort_order=page.sort_order type=entries_layout %}
</div>

