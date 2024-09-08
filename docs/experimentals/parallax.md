---
title: Parallax
description: 
order: 
---

# Parallax

<small class="label label-secondary">CSS ONLY</small>

The Parallax acts like Apple TV/tvOS hover parallax effect. It is built in pure CSS.

 
<div class="vp-raw docs-demo columns">
  <div class="column col-sm-12 col-8 col-mx-auto">
    <div class="parallax">
      <div class="parallax-top-left" tabindex="1"></div>
      <div class="parallax-top-right" tabindex="2"></div>
      <div class="parallax-bottom-left" tabindex="3"></div>
      <div class="parallax-bottom-right" tabindex="4"></div>
      <div class="parallax-content">
        <div class="parallax-front">
          <h2>tvOS parallax demo</h2>
        </div>
        <div class="parallax-back"><img class="img-responsive rounded" src="/img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper"></div>
      </div>
    </div>
  </div>
</div>

```html
<div class="parallax">
  <div class="parallax-top-left" tabindex="1"></div>
  <div class="parallax-top-right" tabindex="2"></div>
  <div class="parallax-bottom-left" tabindex="3"></div>
  <div class="parallax-bottom-right" tabindex="4"></div>
  <div class="parallax-content">
    <div class="parallax-front">
      <h2>tvOS parallax demo</h2>
    </div>
    <div class="parallax-back">
      <img src="/img/osx-el-capitan.jpg" class="img-responsive rounded" ...>
    </div>
  </div>
</div>
```
