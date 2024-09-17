---
title: Steps
description: 
order: 
---

# Steps

<small class="label label-secondary">JS Optional</small>

Steps are progress indicators of a sequence of task steps.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <ul class="step">
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 1 Tooltip"></a></li>
      <li class="step-item active"><a class="tooltip" href="#steps" data-tooltip="Step 2 Tooltip"></a></li>
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 3 Tooltip"></a></li>
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 4 Tooltip"></a></li>
    </ul>
  </div>
  <div class="column col-12">
    <ul class="step">
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 1 Tooltip">Step 1</a></li>
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 2 Tooltip">Step 2</a></li>
      <li class="step-item active"><a class="tooltip" href="#steps" data-tooltip="Step 3 Tooltip">Step 3</a></li>
      <li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 4 Tooltip">Step 4</a></li>
    </ul>
  </div>
</div>

Add a container element with the `step` class. And add child elements with the `step-item` class.

The `step-item` with the `active` class will be highlighted and indicate the current state of progress.

Use JavaScript to change this dynamically.

```html
<ul class="step">
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
  </li>
  <li class="step-item active">
    <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
  </li>
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
  </li>
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
  </li>
</ul>
```
