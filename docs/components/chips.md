---
title: Chips
description: 
order: 
---

# Chips

Chips are complex entities in small blocks.

<ClientOnly>
<div class="vp-raw docs-demo columns">
  <div class="column col-12"><span class="chip">Crime</span><span class="chip">Drama</span><span class="chip">Biography<a class="btn btn-clear" href="#" aria-label="Close" role="button"></a></span><span class="chip">Mystery<a class="btn btn-clear" href="#" aria-label="Close" role="button"></a></span></div>
  <div class="column col-12">
    <div class="chip">
      <figure class="avatar avatar-sm" data-initial="TS" style="background-color: #5755d9;"></figure> Tony Stark
    </div>
    <div class="chip">
      <img class="avatar avatar-sm" src="/img/avatar-1.png" alt="Thor Odinson"> Thor Odinson
    </div>
    <div class="chip">
      <img class="avatar avatar-sm" src="/img/avatar-4.png" alt="Steve Rogers">
      Steve Rogers
      <a class="btn btn-clear" href="#" aria-label="Close"></a>
    </div>
  </div>
</div>
</ClientOnly>

Add a container element with the `chip` class. And add child text element, buttons or avatars with the `avatar` class.

```html
<!-- basic chip -->
<span class="chip">Crime</span>

<!-- chip with close button -->
<span class="chip">
  Biography
  <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
</span>

<!-- chip with avatar and close button -->
<div class="chip">
  <img src="/img/avatar-1.png" class="avatar avatar-sm">
  Yan Zhu
  <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
</div>
```

