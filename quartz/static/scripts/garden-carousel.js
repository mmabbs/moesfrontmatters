document.addEventListener("nav", async () => {
  const container = document.getElementById("garden-carousel")
  if (!container) return

  const data = Object.entries(await fetchData)
  const gardenPosts = data
    .filter(([slug]) => slug.startsWith("digital-garden/") || slug.startsWith("Digital-Garden/"))
    .filter(([slug]) => !slug.endsWith("/index") && !slug.endsWith("/"))
    .filter(([_, page]) => page.title && page.date)
    .map(([slug, page]) => ({
      slug,
      title: page.title,
      date: new Date(page.date),
      description: page.description || "",
      tags: page.tags || [],
    }))
    .sort((a, b) => b.date - a.date)
    .slice(0, 10)

  if (gardenPosts.length === 0) {
    container.style.display = "none"
    return
  }

  const formatDate = (d) => {
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const truncate = (str, len) => {
    if (!str || str.length <= len) return str
    return str.substring(0, len).replace(/\s+\S*$/, "") + "..."
  }

  const cards = gardenPosts
    .map(
      (post) => `
    <a href="/${post.slug}" class="carousel-card" data-no-popover="true">
      <div class="carousel-card-image">
        <img src="/static/icon.png" alt="" aria-hidden="true" />
      </div>
      <div class="carousel-card-body">
        <p class="carousel-card-date">${formatDate(post.date)}</p>
        <h3 class="carousel-card-title">${post.title}</h3>
        <p class="carousel-card-excerpt">${truncate(post.description, 120)}</p>
        <div class="carousel-card-tags">
          ${post.tags.map((t) => `<span class="carousel-tag">#${t}</span>`).join("")}
        </div>
      </div>
    </a>`,
    )
    .join("")

  const showArrows = gardenPosts.length > 1

  container.innerHTML = `
    ${showArrows ? `<button class="carousel-arrow carousel-prev" aria-label="Previous">&lsaquo;</button>` : ""}
    <div class="carousel-track">${cards}</div>
    ${showArrows ? `<button class="carousel-arrow carousel-next" aria-label="Next">&rsaquo;</button>` : ""}
  `

  if (showArrows) {
    const track = container.querySelector(".carousel-track")
    const prev = container.querySelector(".carousel-prev")
    const next = container.querySelector(".carousel-next")

    const scrollByCard = (direction) => {
      const card = track.querySelector(".carousel-card")
      if (!card) return
      const gap = parseInt(getComputedStyle(track).gap) || 16
      const scrollAmount = (card.offsetWidth + gap) * direction
      track.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }

    prev.addEventListener("click", () => scrollByCard(-1))
    next.addEventListener("click", () => scrollByCard(1))

    const updateArrows = () => {
      prev.disabled = track.scrollLeft <= 0
      next.disabled = track.scrollLeft + track.offsetWidth >= track.scrollWidth - 1
    }

    track.addEventListener("scroll", updateArrows)
    updateArrows()
  }
})
