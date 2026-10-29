// src/components/styles/section-nav.scss
var section_nav_default = ".section-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}";

// src/components/scripts/section-menu.ts
var section_menu_default = `
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
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/SectionNav.tsx
var trimSlashes = (s2) => s2.replace(/^\/+|\/+$/g, "");
var pageKey = (s2) => trimSlashes(s2).replace(/(^|\/)index$/, "");
var SectionNav_default = ((opts) => {
  const links = opts?.links ?? {};
  const SectionNav = ({
    displayClass,
    fileData,
    allFiles
  }) => {
    const slug = pageKey(String(fileData?.slug ?? ""));
    const urlsOf = (f3) => [
      pageKey(String(f3.slug ?? "")),
      ...(f3.aliases ?? []).map(pageKey)
    ];
    const published = new Set((allFiles ?? []).flatMap(urlsOf));
    const isLive = (href) => !href.startsWith("/") || published.has(pageKey(href));
    const ownUrls = fileData ? urlsOf(fileData) : [slug];
    const section = trimSlashes(String(fileData?.frontmatter?.section ?? ""));
    const current = (href) => {
      const target = trimSlashes(href);
      if (ownUrls.includes(target)) return "page";
      if (target && slug.startsWith(`${target}/`)) return "true";
      if (section && target === section) return "true";
      return void 0;
    };
    const items = Object.entries(links).filter(([, href]) => !allFiles || isLive(href)).map(([text, href]) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href, "aria-current": current(href), children: text }) }));
    return /* @__PURE__ */ u2("nav", { class: `section-nav ${displayClass ?? ""}`, "aria-label": "Site", children: [
      /* @__PURE__ */ u2("ul", { class: "section-nav-list", children: items }),
      /* @__PURE__ */ u2(
        "button",
        {
          type: "button",
          class: "section-menu-toggle",
          "aria-label": "Open menu",
          "aria-haspopup": "dialog",
          "aria-expanded": "false",
          "aria-controls": "section-menu",
          children: /* @__PURE__ */ u2("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ u2("path", { d: "M4 7h16M4 12h16M4 17h16" }) })
        }
      ),
      /* @__PURE__ */ u2("dialog", { id: "section-menu", class: "section-menu", "aria-label": "Sections", children: [
        /* @__PURE__ */ u2("button", { type: "button", class: "section-menu-close", "aria-label": "Close menu", children: /* @__PURE__ */ u2("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ u2("path", { d: "M6 6l12 12M18 6L6 18" }) }) }),
        /* @__PURE__ */ u2("ul", { children: items })
      ] })
    ] });
  };
  SectionNav.css = section_nav_default;
  SectionNav.afterDOMLoaded = section_menu_default;
  return SectionNav;
});

export { SectionNav_default as SectionNav };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map