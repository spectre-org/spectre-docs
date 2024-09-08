---
title: Sliders
description: 
order: 
---

# Sliders

<small class="label label-secondary">JS Optional</small>

The Sliders are for selecting values from ranges.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <input
      ref="slider" class="slider tooltip" type="range" min="0" max="100" value="50"
      @input="event => event.target.setAttribute('data-tooltip', event.target.value)"
    >
  </div>
  <div class="column col-6 col-xs-12">
    <input class="slider" type="range" min="0" max="100" value="50" disabled="">
  </div>
</div>

You can add the class `tooltip` to have tooltip labels, along with a JavaScript handler to update the `data-tooltip` attribute. If no `data-tooltip` is set, the `value` will be used instead.

```html
<!-- slider -->
<input class="slider" type="range" min="0" max="100" value="50">

<!-- slider with tooltip -->
<input class="slider tooltip" 
       type="range" min="0" max="100" value="50" 
       oninput="this.setAttribute('data-tooltip', this.value)"
>
```
