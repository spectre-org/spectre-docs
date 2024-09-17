---
title: Tooltips
description: 
order: 
---

# Tooltips

Tooltips provide context information labels that appear on hover and focus.

<div class="vp-raw docs-demo columns text-center">
  <div class="column col-xs-12">
    <button class="btn btn-primary tooltip" data-tooltip="Top Tooltip Text">top tooltip</button>
  </div>
  <div class="column col-xs-12">
    <button class="btn btn-primary tooltip tooltip-right" data-tooltip="Right Tooltip Text">right tooltip</button>
  </div>
  <div class="column col-xs-12">
    <button class="btn btn-primary tooltip tooltip-bottom" data-tooltip="Bottom Tooltip Text">bottom tooltip</button>
  </div>
  <div class="column col-xs-12">
    <button class="btn btn-primary tooltip tooltip-left" data-tooltip="Left Tooltip Text
Multiline">left tooltip</button>
  </div>
</div>

Add the `tooltip` class and the `data-tooltip` attribute, which contains the tooltip content, to non self closing elements.

And add the `tooltip-right`, `tooltip-bottom` or `tooltip-left` class to define the position of a tooltip. By default, the tooltip appears above the element.

```html
<button class="btn tooltip" data-tooltip="Lorem ipsum dolor sit amet">top tooltip</button>
<button class="btn tooltip tooltip-right" data-tooltip="Lorem ipsum dolor sit amet">right tooltip</button>
```

## Multiline tooltips

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn btn-primary tooltip" data-tooltip="First Line Tooltip Text 
Second Line Tooltip Text 
Third Line Tooltip Text">multiline tooltip</button>
  </div>
</div>

Add the `\n` string between any text for multiline tooltips.

```html
<button class="btn tooltip" data-tooltip="First Line Tooltip Text \n Second Line Tooltip Text">multiline tooltip</button>
```
