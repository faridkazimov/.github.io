---
layout: page
title: repositories
permalink: /repositories/
nav: true
nav_order: 5
---

<style>
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.repo-card {
  border: 1px solid rgba(120,120,120,0.2);
  border-radius: 14px;
  padding: 1.1rem 1.1rem 1rem 1.1rem;
  background: var(--global-card-bg-color, #fff);
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.repo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
}

.repo-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.55rem;
  line-height: 1.3;
}

.repo-title a {
  text-decoration: none;
}

.repo-desc {
  font-size: 0.95rem;
  line-height: 1.55;
  margin-bottom: 0.9rem;
  color: var(--global-text-color, #222);
  opacity: 0.9;
}

.repo-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.repo-tag {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: rgba(120,120,120,0.12);
}

.repo-link {
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 600;
}
</style>

<div class="repo-grid">
  {% for repo in site.data.repositories.github_repos %}
    <div class="repo-card">
      <div class="repo-title">
        <a href="https://github.com/{{ repo.owner }}/{{ repo.name }}" target="_blank" rel="noopener noreferrer">
          {{ repo.name }}
        </a>
      </div>

   <div class="repo-desc">
        {{ repo.description }}
      </div>

  <div class="repo-meta">
        <span class="repo-tag">{{ repo.category }}</span>
        <a class="repo-link" href="https://github.com/{{ repo.owner }}/{{ repo.name }}" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  {% endfor %}
</div>
