---
title: Tabs
description: 
order: 
---

# Tabs

<small class="label label-secondary">JS Required</small>

Tabs enable quick switch between different views.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-sm-12">
    <ul class="tab">
      <li class="tab-item active"><a href="#tabs">Music</a></li>
      <li class="tab-item"><a href="#tabs">Playlists</a></li>
      <li class="tab-item"><a href="#tabs">Radio</a></li>
      <li class="tab-item"><a href="#tabs">Store</a></li>
    </ul>
  </div>
  <div class="column col-6 col-sm-12">
    <ul class="tab tab-block">
      <li class="tab-item active"><a href="#tabs">Music</a></li>
      <li class="tab-item"><a href="#tabs">Playlists</a></li>
      <li class="tab-item"><a href="#tabs">Radio</a></li>
    </ul>
  </div>
</div>

Add a container element with the `tab` class. And add child elements with the `tab-item` class. You can add the `tab-block` class for a full-width tab. The `tab-item` or its child `<a>` with the `active` class will be highlighted.

```html
<ul class="tab tab-block">
  <li class="tab-item active">
    <a href="#">Music</a>
  </li>
  <li class="tab-item">
    <a href="#" class="active">Playlists</a>
  </li>
  <li class="tab-item">
    <a href="#">Radio</a>
  </li>
  <li class="tab-item">
    <a href="#">Connect</a>
  </li>
</ul>
```

For tabs to show alternative toggle content on click, you will need to use JavaScript.

<div class="vp-raw docs-demo columns">
  <div class="column col-sm-12">
    <ul class="tab">
      <li class="tab-item active"><a class="badge" href="#tabs" data-badge="999">Music</a></li>
      <li class="tab-item"><a href="#tabs">Playlists</a></li>
      <li class="tab-item"><a href="#tabs">Radio</a></li>
    </ul>
  </div>
  <div class="column col-sm-12">
    <ul class="tab tab-block">
      <li class="tab-item active"><a class="badge" href="#tabs" data-badge="9">Music</a></li>
      <li class="tab-item"><a class="badge" href="#tabs" data-badge="99">Playlists</a></li>
      <li class="tab-item"><a href="#tabs">Radio</a></li>
    </ul>
  </div>
</div>

If you need `badges` on tabs, you can add badge class to the element within `tab-item`.

```html
<ul class="tab tab-block">
  <li class="tab-item active">
    <a href="#" class="badge" data-badge="9">
      Music
    </a>
  </li>
</ul>
```

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <ul class="tab">
      <li class="tab-item active"><a href="#tab-1">Music<span class="btn btn-clear"></span></a></li>
      <li class="tab-item"><a href="#tab-2">Playlists</a></li>
      <li class="tab-item"><a href="#tab-3">Radio</a></li>
      <li class="tab-item"><a href="#tab-4">Store</a></li>
      <li class="tab-item tab-action">
        <div class="input-group input-inline">
          <input class="form-input input-sm" type="text">
          <button class="btn btn-primary btn-sm input-group-btn">Search</button>
        </div>
      </li>
    </ul>
  </div>
</div>

You could add a search box or buttons inside a tab. Add the `tab-action` class to the `tab-item`.

```html
<ul class="tab">
  <li class="tab-item active">
    <a href="#">
      Music
    </a>
  </li>
  <li class="tab-item tab-action">
    <div class="input-group input-inline">
      <input class="form-input input-sm" type="text">
      <button class="btn btn-primary btn-sm input-group-btn">Search</button>
    </div>
  </li>
</ul>
```
