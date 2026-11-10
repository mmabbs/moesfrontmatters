// Plain JavaScript: tsup loads this file as text without transpiling it.
// Turns each encoded address back into a mailto: link: the footer's, and any
// <a data-email="..."> written into page text. The link text stays as
// written, so the address only lives in the href.
function revealEmails() {
  document.querySelectorAll("a[data-email]").forEach((el) => {
    const address = atob(el.getAttribute("data-email") || "").split("").reverse().join("");
    el.setAttribute("href", "mailto:" + address);
  });
}

document.addEventListener("nav", revealEmails);
document.addEventListener("render", revealEmails);
