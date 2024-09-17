---
title: Nav
description: 
order: 
---

# Nav

<small class="label label-secondary">JS Optional</small>

Nav components show a vertical list of links.
 
<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <ul class="nav">
      <li class="nav-item"><a href="#nav">Elements</a></li>
      <li class="nav-item active"><a href="#nav">Layout</a>
        <ul class="nav">
          <li class="nav-item"><a href="#nav">Flexbox grid</a></li>
          <li class="nav-item"><a href="#nav">Responsive</a></li>
          <li class="nav-item active"><a href="#nav">Navbar</a></li>
          <li class="nav-item"><a href="#nav">Empty states</a></li>
        </ul>
      </li>
      <li class="nav-item"><a href="#nav">Components</a></li>
      <li class="nav-item"><a href="#nav">Utilities</a></li>
    </ul>
  </div>
</div>

Add a container element with the `nav` class. And add child elements with the `nav-item` class. The `nav-item` with the `active` class will be highlighted.

```html
<ul class="nav">
  <li class="nav-item">
    <a href="#">Elements</a>
  </li>
  <li class="nav-item active">
    <a href="#">Layout</a>
    <ul class="nav">
      <li class="nav-item">
        <a href="#">Flexbox grid</a>
      </li>
      <li class="nav-item">
        <a href="#">Responsive</a>
      </li>
      <li class="nav-item">
        <a href="#">Navbar</a>
      </li>
      <li class="nav-item">
        <a href="#">Empty states</a>
      </li>
    </ul>
  </li>
  <li class="nav-item">
    <a href="#">Components</a>
  </li>
  <li class="nav-item">
    <a href="#">Utilities</a>
  </li>
</ul>
```
