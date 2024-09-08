---
title: Sliders
description: 
order: 
---

# Sliders

The Sliders are for selecting values from ranges.

You can add the class `tooltip` to have tooltip labels. If no `data-tooltip` is set, the `value` will be used instead.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <input class="slider tooltip" type="range" min="0" max="100" value="50" oninput="this.setAttribute('value', this.value);">
  </div>
  <div class="column col-6 col-xs-12">
    <input class="slider" type="range" min="0" max="100" value="50" disabled="">
  </div>
</div>

```html
<!-- Sliders -->
<input class="slider" type="range" min="0" max="100" value="50">

<!-- Sliders with tooltips -->
<input class="slider tooltip" type="range" min="0" max="100" value="50" oninput="this.setAttribute('value', this.value);">
```

<!-- @see https://github.com/spectre-org/spectre-docs/issues/17 -->
