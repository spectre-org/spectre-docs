---
title: Bars
description: 
order: 
---

# Bars

Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 `<progress>`, `<meter>` and input range elements.

<ClientOnly>
<div class="vp-raw docs-demo columns">
  <div class="column col-8 col-xs-12">
    <div class="bar bar-sm">
      <div class="bar-item tooltip" data-tooltip="25%" role="progressbar" style="width:25%;"></div>
    </div>
  </div>
  <div class="column col-8 col-xs-12">
    <div class="bar">
      <div class="bar-item tooltip" data-tooltip="50%" role="progressbar" style="width:50%;"></div>
    </div>
  </div>
  <div class="column col-8 col-xs-12">
    <div class="bar">
      <div class="bar-item tooltip" data-tooltip="25%" role="progressbar" style="width:25%;">25%</div>
      <div class="bar-item tooltip" data-tooltip="15%" role="progressbar" style="width:15%;background:#817fe3;">15%</div>
      <div class="bar-item tooltip" data-tooltip="10%" role="progressbar" style="width:10%;background:#aaa9eb;">10%</div>
      <div class="bar-item tooltip" data-tooltip="15%" role="progressbar" style="width:15%;">15%</div>
    </div>
  </div>
</div>
</ClientOnly>

Add a container element with the `bar` class. And add child elements with the `bar-item` class. The width percentage value is needed for every `bar-item`.

There is the `bar-sm` class for thinner Bars. Also, you could use [Tooltips](#tooltips) for any `bar-item`.

```html
<!-- normal bars -->
<div class="bar bar-sm">
  <div class="bar-item" role="progressbar" style="width:25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- multi-bars -->
<div class="bar">
  <div class="bar-item tooltip" data-tooltip="25%" style="width:25%;">25%</div>
  <div class="bar-item" style="width:15%;background:#818bd5;">15%</div>
</div>
```

## Slider bars

<ClientOnly>
<div class="vp-raw docs-demo columns">
  <div class="column col-8 col-xs-12">
    <div class="bar bar-slider">
      <div class="bar-item" role="progressbar" style="width:50%;">
        <button class="bar-slider-btn btn tooltip" data-tooltip="50%" role="slider"></button>
      </div>
    </div>
  </div>
  <div class="column col-8 col-xs-12">
    <div class="bar bar-slider">
      <div class="bar-item" role="progressbar" style="width:15%;">
        <button class="bar-slider-btn btn tooltip" data-tooltip="25%" role="slider"></button>
      </div>
      <div class="bar-item" role="progressbar" style="width:65%;">
        <button class="bar-slider-btn btn tooltip" data-tooltip="65%" role="slider"></button>
      </div>
    </div>
  </div>
</div>
</ClientOnly>

You can add the `bar-slider` class to the Bars container. And add child elements with the `bar-item` class and `bar-slider-btn` inside bar-item. You need to set the `bar-item` width manually to have the slider point.

See the experimental [Slider](../experimentals/sliders.md) component for an interactive version.

If there are two `bar-item` divs in one bar-slider, you will have a range slider.

```html
<!-- normal slider -->
<div class="bar bar-slider">
  <div class="bar-item" role="progressbar" style="width:25%;">
    <button class="bar-slider-btn btn" role="slider"></button>
  </div>
</div>

<!-- range slider -->
<div class="bar bar-slider">
  <div class="bar-item" role="progressbar" style="width:15%;">
    <button class="bar-slider-btn btn" role="slider"></button>
  </div>
  <div class="bar-item" role="progressbar" style="width:65%;">
    <button class="bar-slider-btn btn" role="slider"></button>
  </div>
</div>
```
