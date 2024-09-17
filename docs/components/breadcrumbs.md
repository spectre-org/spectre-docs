---
title: Breadcrumbs
description: 
order: 
---

# Breadcrumbs

Breadcrumbs are used as navigational hierarchies to indicate current location.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Home">Home</a></li>
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Settings">Settings</a></li>
    </ul>
  </div>
  <div class="column col-12">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Home">Home</a></li>
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Settings">Settings</a></li>
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Change avatar">Change avatar</a></li>
    </ul>
  </div>
  <div class="column col-12">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Home">Home</a></li>
      <li class="breadcrumb-item"><a class="tooltip" href="#breadcrumbs" data-tooltip="Settings">Settings</a></li>
      <li class="breadcrumb-item">Search result: <a class="tooltip" href="#breadcrumbs" data-tooltip="Search result: Spectre">Spectre</a></li>
    </ul>
  </div>
</div>

Add a container element with the `breadcrumb` class. And add child elements with the `breadcrumb-item` class.

```html
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item">
    <a href="#">Settings</a>
  </li>
  <li class="breadcrumb-item">
    <a href="#">Change avatar</a>
  </li>
</ul>
```
