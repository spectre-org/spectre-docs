---
title: Navbar
description: 
order: 3
---

# Navbar

Navbar is a layout container that appears in the header of apps and websites.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <div class="navbar">
      <div class="navbar-section">
        <a class="navbar-brand text-bold mr-2" href="#navbar">Spectre</a>
        <a class="btn btn-link" href="#navbar">Docs</a>
        <a class="btn btn-link" href="https://github.com/spectre-org/spectre-css">GitHub</a>
      </div>
      <div class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input" type="text" placeholder="search">
          <button class="btn btn-primary input-group-btn">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>

The navbar component can include logo brand, nav links and buttons, search box or any combination of those elements. Each section with the `navbar-section` class will be evenly distributed in the container.

```html
<header class="navbar">
  <section class="navbar-section">
    <a href="..." class="navbar-brand mr-2">Spectre CSS</a>
    <a href="..." class="btn btn-link">Docs</a>
    <a href="..." class="btn btn-link">GitHub</a>
  </section>
  <section class="navbar-section">
    <div class="input-group input-inline">
      <input class="form-input" type="text" placeholder="search">
      <button class="btn btn-primary input-group-btn">Search</button>
    </div>
  </section>
</header>
```

You can use `navbar-center` class to have a centered section.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="navbar">
      <div class="navbar-section"><a class="btn btn-link" href="#navbar">Docs</a><a class="btn btn-link" href="#navbar">Examples</a></div>
      <div class="navbar-center"><img src="/img/spectre-logo.svg" alt="Spectre CSS"></div>
      <div class="navbar-section"><a class="btn btn-link" href="https://twitter.com/spectrecss">Twitter</a><a class="btn btn-link" href="https://github.com/spectre-org/spectre-css">GitHub</a></div>
    </div>
  </div>
</div>

```html
<header class="navbar">
  <section class="navbar-section">
    <a href="#" class="btn btn-link">Docs</a>
    <a href="#" class="btn btn-link">Examples</a>
  </section>
  <section class="navbar-center">
    <!-- centered logo or brand -->
  </section>
  <section class="navbar-section">
    <a href="#" class="btn btn-link">Twitter</a>
    <a href="#" class="btn btn-link">GitHub</a>
  </section>
</header>
```
