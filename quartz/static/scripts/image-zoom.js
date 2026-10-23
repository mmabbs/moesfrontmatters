// Click-to-enlarge for images inside a `.zoomable` container.
// Opens the full-size image in a native <dialog>: Escape, the close button,
// or a click outside the image closes it, and focus returns to the image.
// Re-binds on Quartz's "nav" event, which fires after every page change.
function getZoomDialog() {
  let dialog = document.getElementById("image-zoom")
  if (dialog) return dialog

  dialog = document.createElement("dialog")
  dialog.id = "image-zoom"
  dialog.className = "image-zoom"
  dialog.innerHTML = '<button type="button" class="image-zoom-close" aria-label="Close">×</button>'
  document.body.appendChild(dialog)

  dialog.querySelector(".image-zoom-close").addEventListener("click", () => dialog.close())
  // A click on the backdrop lands on the dialog itself, not its children.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close()
  })
  return dialog
}

document.addEventListener("nav", () => {
  const images = document.querySelectorAll(".zoomable img")
  if (images.length === 0) return

  const dialog = getZoomDialog()
  const open = (img) => {
    // Built on open so the closed dialog never holds an image without a src.
    dialog.querySelector(".image-zoom-img")?.remove()
    const big = document.createElement("img")
    big.className = "image-zoom-img"
    big.src = img.currentSrc || img.src
    big.alt = img.alt
    dialog.appendChild(big)
    dialog.setAttribute("aria-label", img.alt || "Enlarged image")
    dialog.showModal()
  }

  for (const img of images) {
    img.tabIndex = 0
    img.setAttribute("role", "button")
    img.setAttribute("aria-label", `Enlarge: ${img.alt}`)

    const onClick = () => open(img)
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        open(img)
      }
    }
    img.addEventListener("click", onClick)
    img.addEventListener("keydown", onKey)
    window.addCleanup?.(() => {
      img.removeEventListener("click", onClick)
      img.removeEventListener("keydown", onKey)
    })
  }
})
