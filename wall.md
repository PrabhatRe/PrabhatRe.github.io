---
layout: default
title: The Wall
permalink: /wall/
---

# THE WALL
A passing thought, a line from today, a small truth.

<div id="feed"></div>

<script>
async function loadQuotes() {
  const feed = document.getElementById("feed");

  try {
    // prevent GitHub Pages CDN caching
    const res = await fetch("/quotes.json?ts=" + Date.now());
    const data = await res.json();

    if (!data || data.length === 0) {
      feed.innerHTML = "<p>Nothing here yet. Be the first to leave a line.</p>";
      return;
    }

    feed.innerHTML = "";

    data.forEach(q => {
      feed.innerHTML += `
      <a href="/quote/?id=${q.number}">
        <article class="quote-card">
          <p class="quote-text">${q.bodyText}</p>
          <div class="quote-meta">
            <img src="${q.author.avatarUrl}">
            <span>@${q.author.login}</span>
          </div>
        </article>
      </a>`;
    });

  } catch (err) {
    feed.innerHTML = "<p>Unable to load quotes.</p>";
    console.error(err);
  }
}

loadQuotes();
</script>