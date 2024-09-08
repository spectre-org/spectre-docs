---
title: 360-Degree Viewer
description: 
order: 1
---

# 360-Degree Viewer

<small class="label label-secondary">CSS ONLY</small>

360-Degree Viewer is an interactive product photo viewer. It is built in pure CSS.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="viewer-360">
      <input class="viewer-slider slider" type="range" min="1" max="36" value="1" oninput="this.setAttribute('value', this.value);">
      <figure class="viewer-image" style="background-image:url('https://i.loli.net/2018/11/25/5bfa45b4b3f27.jpg');padding-bottom:37.5%;width:100%;"></figure>
    </div>
  </div>
</div>

Photo credits: [Microsoft Surface Pro 6](https://microsoft.msafflnk.net/c/1272791/433017/7593?u=https://www.microsoft.com/en-us/p/surface-pro-6/8zcnc665slq5)

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="viewer-360">
      <input class="viewer-slider slider" type="range" min="1" max="36" value="1" oninput="this.setAttribute('value', this.value);">
      <figure class="viewer-image" style="background-image:url('https://i.loli.net/2018/11/26/5bfc0ab4a5a4f.jpg');padding-bottom:37.5%;width:100%;"></figure>
    </div>
  </div>
</div>

Photo credits: [Microsoft Xbox One X](https://microsoft.msafflnk.net/c/1272791/433017/7593?u=https://www.microsoft.com/en-us/p/surface-studio-2/8SBJXM0M58T4)

You will need to use your own product image sprite (all angle of photos in one image) and set the attribute `max` to the image numbers to use this component.

```html
<div class="viewer-360">
  <input class="viewer-slider slider" type="range" min="1" max="36" value="1" oninput="this.setAttribute('value', this.value);">
  <figure class="viewer-image" style="background-image:url('...');"></figure>
</div>
```

The default image numbers in CSS are `36`. You can copy the mixin and add more numbers in `_viewer-360.scss` and re-compiling the CSS.

```scss
@include viewer-slider-size(36);
@include viewer-slider-size(30);
```

<!-- @see https://github.com/spectre-org/spectre-docs/issues/17 -->
