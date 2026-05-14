## 📋 PRE-EDIT CHECKLIST

**Adherence to these rules is mandatory, ALWAYS check this file and follow these rules.**

---

## 🧭 Guiding Principles

1. **Simplicity First**: Use a minimal, frontend-only stack (Vanilla JS, Modern CSS, HTML). Avoid unnecessary complexity, libraries, or build tools.
2. **Security & Privacy by Design**: A strict Content Security Policy (CSP) and a "no tracking" policy are non-negotiable.
3. **Modern & Future-Facing**: Code is written for browsers from 2023 and beyond. Use modern APIs and do not support legacy browsers.
4. **Accessibility as a Requirement**: All work must meet WCAG 2.1 AA standards; aim for AAA where possible.

---

## ⚠️ Prohibited Practices

* ❌ **No Cookies or Tracking**: Do not use `document.cookie` or any form of user tracking/analytics. Use `localStorage` or `sessionStorage` for client-side state only.
* ❌ **No Inline Scripts or Styles**: All JavaScript and CSS must be in external files. This is enforced by our CSP.
* ❌ **No Legacy Code**: Do not use `var`, jQuery, or write code for Internet Explorer compatibility.
* ❌ **No Unsafe DOM Manipulation**: Avoid `innerHTML`. Use `textContent` for text and `createElement` for creating elements.

---

## 🔄 Version Control & Commit Workflow

This project uses a manual versioning process. It is your responsibility to keep it accurate.

**Manual Workflow:**

1. **Code**: Make your changes following all guidelines.
2. **Test**: Thoroughly test your changes in-browser. Check for console errors and verify all functionality. Ensure shortcuts remain intact.
3. **Update `versions.json`**:

   * Increment the version number (`MAJOR.MINOR.PATCH`) for each file you changed.
   * Update the `timestamp` to the current Unix timestamp.
   * Schema example:

```json
{
  "nav": "1.0.X",
  "main": "1.0.X",
  "page-init": "1.0.X",
  "style": "1.0.X",
  "html": "1.0.X",
  "pages": {
    "home": "1.0.X",
    "about": "1.0.X",
    "credits": "1.0.X"
  },
  "timestamp": 1736448000
}
```

4. **Update `CHANGELOG.md`**:

   * Add a new entry under the current date.
   * Use SemVer headings and clear sections `Added`, `Changed`, `Fixed`.

```
## [1.2.3] - 2025-09-11
### Added
- video.js: keyboard shortcut “K” for pause

### Changed
- style.css: increased spacing scale

### Fixed
- nav.js: mobile overlap on iOS
```

5. **Commit**: Write a short, descriptive commit message (e.g., `fix(nav): correct mobile layout overlap`).

**Pre-commit checklist:**

* Browser tested, no console errors.
* Shortcuts intact.
* `versions.json` bumped correctly.
* `CHANGELOG.md` updated.

---

## 📐 Code Standards

### JavaScript (ES2020+)
* ALWAYS use external script files. No inline scripts.
* **Strict Mode**: Every file MUST begin with `'use strict';`.
* **Modules**: Use ES Modules (`import`/`export`) exclusively.
* **Structure**: Each module MUST export an `init()` and a corresponding `teardown()` function.
* **Immutability**: Configuration objects MUST be frozen with `Object.freeze()`.
* **Error Handling**: All `async` operations MUST be wrapped in `try/catch`. A global error handler for `window.onunhandledrejection` MUST be implemented.

**Ultra-Min Template (Mandatory at top of every JS file):**

```javascript
'use strict';

/* ES2020+ TEMPLATE
   Purpose: [short description]
   Sections: META • CONFIG • DOM/STATE • HELPERS • HANDLERS • WIRE-UP • INIT
*/

const CFG = Object.freeze({
  // constants
});

let S = {}; // state

// helpers

// handlers

export function init() {
  // wire-up
  return teardown;
}

export function teardown() {
  // cleanup
}
```

### CSS
* ALWAYS use external stylesheets. No inline styles.
* **Modern CSS**: Use custom properties for theming and configuration.
* **Layout**: Use CSS Grid and Flexbox. Container Queries for component responsiveness.
* **Units**: `rem` for typography/spacing. `svh`/`svw` for viewport units.
* **Colors**: Use **oklch()** as the preferred format. Provide sRGB hex fallback with `@supports`.
* **Dark Mode**: `prefers-color-scheme` support is mandatory.
* **Naming**: Use a consistent naming scheme like BEM.

### HTML

* **Semantic HTML5**: Use correct, semantic tags (`<main>`, `<nav>`, `<article>`, etc.).
* **Accessibility**: Use ARIA attributes where necessary.
* **Media**: Use responsive images (`<picture>`, `srcset`, `sizes`) and always apply `loading="lazy"`. Optimize with `WebP` and `AVIF`.

### Documentation

* Use JSDoc for all functions and modules. Include `@param`, `@returns`, and `@throws` where applicable.

---

## 🔒 Security

* **Content Security Policy (CSP)**: Enforce strict `default-src 'self'`.
* **HTTP Headers**: Ensure server provides security headers, especially `X-Content-Type-Options: nosniff` and restrictive `Permissions-Policy`.
* **Asset Origin**: All assets must be same-origin. If external assets are used, they must include Subresource Integrity (SRI) hashes.