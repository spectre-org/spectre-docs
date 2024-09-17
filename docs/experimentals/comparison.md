---
title: Comparison sliders
description: 
order: 
---

# Comparison sliders

Comparison Sliders are sliders for comparing two images. It is built in pure CSS.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="comparison-slider">
      <figure class="comparison-before"><img class="rounded" src="/img/macos-sierra-2.jpg" alt="macOS Sierra Wallpaper">
        <div class="comparison-label">Before</div>
      </figure>
      <figure class="comparison-after"><img class="filter-grayscale rounded" src="/img/macos-sierra-2.jpg" alt="macOS Sierra Wallpaper">
        <div class="comparison-label">After</div>
        <textarea class="comparison-resizer" readonly=""></textarea>
      </figure>
    </div>
  </div>
</div>

```html
<div class="comparison-slider">
  <figure class="comparison-before">
    <!-- image (before) -->
    <div class="comparison-label">Before</div>
  </figure>

  <figure class="comparison-after">
    <!-- image (after) -->
    <div class="comparison-label">After</div>
    <textarea class="comparison-resizer" readonly></textarea>
  </figure>
</div>
```
