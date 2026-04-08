---
layout: page
title: repositories
permalink: /repositories/
nav: true
nav_order: 5
---

## GitHub

{% for repo in site.data.repositories.github_repos %}
- [{{ repo }}](https://github.com/{{ repo }})
{% endfor %}
