---
title: Avatars
description: 
order: 
---

# Avatars

Avatars are user profile pictures. 

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <figure class="avatar avatar-xl mr-2"><img src="/img/avatar-1.png" alt="Avatar XL"></figure>
    <figure class="avatar avatar-lg mr-2"><img src="/img/avatar-2.png" alt="Avatar LG"></figure>
    <figure class="avatar mr-2"><img src="/img/avatar-3.png" alt="Avatar"></figure>
    <figure class="avatar avatar-sm mr-2"><img src="/img/avatar-4.png" alt="Avatar SM"></figure>
    <figure class="avatar avatar-xs mr-2"><img src="/img/avatar-5.png" alt="Avatar XS"></figure>
  </div>
  <div class="column col-6 col-xs-12">
    <figure class="avatar avatar-xl mr-2" data-initial="YZ"></figure>
    <figure class="avatar avatar-lg mr-2" data-initial="YZ"></figure>
    <figure class="avatar mr-2" data-initial="YZ"></figure>
    <figure class="avatar avatar-sm mr-2" data-initial="YZ"></figure>
    <figure class="avatar avatar-xs mr-2" data-initial="YZ"></figure>
  </div>
</div>

Add the `avatar` class to `<img>` element. There are 4 additional sizes available:

- `avatar-xl` (64px)
- `avatar-lg` (48px)
- `avatar-sm` (24px)
- `avatar-xs` (16px)

By default, the avatar size is 32px.

For users who don't have profile pictures, you may use their initials for avatars. Add the `avatar` class and avatar size class to `<div>` element. The `data-initial` attribute is the name appear inside the avatar.

```html
<!-- Basic avatar examples -->
<figure class="avatar avatar-xl">
  <img src="/img/avatar-1.png" alt="...">
</figure>

<figure class="avatar avatar-xl" data-initial="YZ" style="background-color: #5755d9;"></figure>

<!-- Show initals when avatar image is unavailable or not fully loaded -->
<figure class="avatar avatar-xl" data-initial="YZ" style="background-color: #5755d9;">
  <img src="/img/avatar-1.png" alt="...">
</figure>
```

## Icons

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <figure class="avatar avatar-xl mr-2"><img src="/img/avatar-1.png" alt="Avatar"><img class="avatar-icon" src="/img/avatar-2.png" alt="Avatar"></figure>
    <figure class="avatar avatar-lg mr-2"><img src="/img/avatar-2.png" alt="Avatar"><img class="avatar-icon" src="/img/avatar-3.png" alt="Avatar"></figure>
    <figure class="avatar mr-2"><img src="/img/avatar-3.png" alt="Avatar"><img class="avatar-icon" src="/img/avatar-4.png" alt="Avatar"></figure>
    <figure class="avatar avatar-sm mr-2"><img src="/img/avatar-4.png" alt="Avatar"><img class="avatar-icon" src="/img/avatar-5.png" alt="Avatar"></figure>
    <figure class="avatar avatar-xs"><img src="/img/avatar-5.png" alt="Avatar"><img class="avatar-icon" src="/img/avatar-1.png" alt="Avatar"></figure>
  </div>
</div>

```html
<figure class="avatar avatar-xl">
  <img src="/img/avatar-1.png" alt="...">
  <img src="/img/avatar-5.png" class="avatar-icon" alt="...">
</figure>
```

## Presence

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <figure class="avatar avatar-xl mr-2" data-initial="YZ"><i class="avatar-presence online"></i></figure>
    <figure class="avatar avatar-lg mr-2" data-initial="YZ"><i class="avatar-presence busy"></i></figure>
    <figure class="avatar mr-2" data-initial="YZ"><i class="avatar-presence away"></i></figure>
    <figure class="avatar avatar-sm mr-2" data-initial="YZ"><i class="avatar-presence offline"></i></figure>
    <figure class="avatar avatar-xs mr-2" data-initial="YZ"><i class="avatar-presence online"></i></figure>
  </div>
</div>

Avatars support presence indicators. You can add an `<i>` element with the `avatar-presence` class, and add `online`, `busy` or `away` class for different status colors. The default is gray which means offline.

```html
<figure class="avatar avatar-xl">
  <img src="/img/avatar-1.png" alt="...">
  <i class="avatar-presence online"></i>
</figure>
```
