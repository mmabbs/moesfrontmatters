// Phone section menu: the toggle opens the <dialog> as a modal, which gives
// Esc to close, a focus trap, and focus back on the toggle when it closes.
// Quartz swaps pages without a reload, so this re-binds on every "nav".
// Shipped as a string: Quartz runs it in the browser after each page loads.
export default `
document.addEventListener("nav", () => {
  const toggle = document.querySelector(".section-menu-toggle")
  const menu = document.querySelector(".section-menu")
  if (!toggle || !menu) return

  const close = () => menu.close()
  const open = () => {
    menu.showModal()
    toggle.setAttribute("aria-expanded", "true")
  }
  const onClose = () => toggle.setAttribute("aria-expanded", "false")
  // The toggle only shows on phones; close the menu if the screen widens.
  const wide = window.matchMedia("(min-width: 801px)")
  const onWiden = () => {
    if (wide.matches && menu.open) close()
  }

  const closeButton = menu.querySelector(".section-menu-close")
  const links = menu.querySelectorAll("a")

  toggle.addEventListener("click", open)
  menu.addEventListener("close", onClose)
  closeButton?.addEventListener("click", close)
  links.forEach((a) => a.addEventListener("click", close))
  wide.addEventListener("change", onWiden)

  window.addCleanup(() => {
    toggle.removeEventListener("click", open)
    menu.removeEventListener("close", onClose)
    closeButton?.removeEventListener("click", close)
    links.forEach((a) => a.removeEventListener("click", close))
    wide.removeEventListener("change", onWiden)
  })
})
`;
