---
title: Carousels
description: 
order: 
---

# Carousels

Carousels are slideshows for cycling images. It is built in pure CSS.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="carousel">
      <input class="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked="">
      <input class="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden="">
      <input class="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden="">
      <input class="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden="">
      <div class="carousel-container">
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="/img/osx-yosemite.jpg" alt="macOS Yosemite Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="/img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="/img/osx-el-capitan.jpg" alt="macOS El Capitan Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="/img/osx-el-capitan-2.jpg" alt="macOS El Capitan Wallpaper">
        </figure>
      </div>
      <div class="carousel-nav">
        <label class="nav-item text-hide c-hand" for="slide-1">1</label>
        <label class="nav-item text-hide c-hand" for="slide-2">2</label>
        <label class="nav-item text-hide c-hand" for="slide-3">3</label>
        <label class="nav-item text-hide c-hand" for="slide-4">4</label>
      </div>
    </div>
  </div>
</div>

It works by leveraging the `:checked` [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) and the [subsequent-sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) selector `~` to hide elements which do not match the combination.

The default image number of Carousels is `8`. You can add more images by changing the variable `$carousel-number` in `_carousels.scss` and re-compiling the CSS.

```html
<div class="carousel">
  <!-- carousel locator -->
  <input class="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked="">
  <input class="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden="">
  <input class="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden="">
  <input class="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden="">
  
  <!-- carousel container -->
  <div class="carousel-container">
    <!-- carousel item -->
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="/img/osx-yosemite.jpg" alt="macOS Yosemite Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="/img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="/img/osx-el-capitan.jpg" alt="macOS El Capitan Wallpaper">
    </figure>
    <figure class="carousel-item">
      <label class="item-prev btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-left"></i></label>
      <label class="item-next btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-right"></i></label>
      <img class="img-responsive rounded" src="/img/osx-el-capitan-2.jpg" alt="macOS El Capitan Wallpaper">
    </figure>
  </div>
  <!-- carousel navigation -->
  <div class="carousel-nav">
    <label class="nav-item text-hide c-hand" for="slide-1">1</label>
    <label class="nav-item text-hide c-hand" for="slide-2">2</label>
    <label class="nav-item text-hide c-hand" for="slide-3">3</label>
    <label class="nav-item text-hide c-hand" for="slide-4">4</label>
  </div>
</div>
```
