---
title: Tiles
description: 
order: 
---

# Tiles

Tiles are repeatable or embeddable information blocks.

## Full size

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <div class="tile">
      <div class="tile-icon">
        <figure class="avatar avatar-lg"><img src="/img/avatar-3.png" alt="Avatar"></figure>
      </div>
      <div class="tile-content">
        <p class="tile-title">The Avengers</p>
        <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
      </div>
      <div class="tile-action">
        <button class="btn btn-primary">Join</button>
        <button class="btn">Contact</button>
      </div>
    </div>
  </div>
  <div class="column col-9 col-sm-12">
    <div class="tile">
      <div class="tile-icon">
        <figure class="avatar avatar-lg"><img src="/img/avatar-2.png" alt="Avatar"></figure>
      </div>
      <div class="tile-content">
        <p class="tile-title">The S.H.I.E.L.D.</p>
        <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
        <p>
          <button class="btn btn-primary btn-sm">Join</button>
          <button class="btn btn-sm">Contact</button>
        </p>
      </div>
    </div>
  </div>
</div>

Add a container with the `tile` class. And add child elements with the `tile-icon`, `tile-content` or/and `tile-action` classes. The `tile-icon` and `tile-action` are optional.

There are `tile-title` and `tile-subtitle` classes for title and subtitle text styles.

```html
<div class="tile">
  <div class="tile-icon">
    <div class="example-tile-icon">
      <i class="icon icon-file centered"></i>
    </div>
  </div>
  <div class="tile-content">
    <p class="tile-title">The Avengers</p>
    <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
  </div>
  <div class="tile-action">
    <button class="btn btn-primary">Join</button>
  </div>
</div>
```

## Compact

There is compact version of Tiles component, which is often used as contact and file info blocks.

Add the `tile-centered` class to the container `tile`. The `tile-icon`, `tile-content` and `tile-action` will be vertically centered.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-md-9 col-xs-12">
    <div class="tile tile-centered">
      <div class="tile-icon">
        <div class="example-tile-icon"><i class="icon icon-mail centered"></i></div>
      </div>
      <div class="tile-content">
        <div class="tile-title">spectre-docs.pdf</div><small class="tile-subtitle text-gray">14MB · Public · 1 Jan, 2017</small>
      </div>
      <div class="tile-action">
        <button class="btn btn-link btn-action"><i class="icon icon-more-vert"></i></button>
      </div>
    </div>
  </div>
</div>

```html
<div class="tile tile-centered">
  <div class="tile-icon">
    <div class="example-tile-icon">
      <i class="icon icon-file centered"></i>
    </div>
  </div>
  <div class="tile-content">
    <div class="tile-title">spectre-docs.pdf</div>
    <small class="tile-subtitle text-gray">14MB · Public · 1 Jan, 2017</small>
  </div>
  <div class="tile-action">
    <button class="btn btn-link">
      <i class="icon icon-more-vert"></i>
    </button>
  </div>
</div>
```
