---
title: Badges
description: 
order: 
---

# Badges

Badges are often used as unread number indicators.

<div class="vp-raw docs-demo columns">
  <div class="column col-3 col-xs-6"><span class="badge" data-badge="">Notifications</span></div>
  <div class="column col-3 col-xs-6"><span class="badge" data-badge="8">Notifications</span></div>
  <div class="column col-3 col-xs-6"><span class="badge" data-badge="88">Notifications</span></div>
  <div class="column col-3 col-xs-6"><span class="badge" data-badge="888">Notifications</span></div>
</div>

Add the `badge` class to non self closing elements. And add the `data-badge` attribute to define the content of a badge. The badge will appear in the top-right direction of the element.

If there is no `data-badge` or the attribute is not specified, the badge will appear as a dot.

<div class="vp-raw docs-demo columns">
  <div class="column col-sm-12">
    <button class="btn badge" data-badge="">Button</button>
    <button class="btn badge" data-badge="8">Button</button>
  </div>
  <div class="column col-sm-12">
    <button class="btn btn-primary badge" data-badge="">Button</button>
    <button class="btn btn-primary badge" data-badge="8">Button</button>
  </div>
  <div class="column col-sm-12">
    <figure class="avatar avatar-xl badge" data-badge="8" data-initial="YZ"><img src="/img/avatar-1.png" alt="YZ"></figure>
    <figure class="avatar avatar-lg badge" data-badge="8" data-initial="YZ"><img src="/img/avatar-2.png" alt="YZ"></figure>
    <figure class="avatar badge" data-badge="8" data-initial="YZ"><img src="/img/avatar-3.png" alt="YZ"></figure>
  </div>
</div>

Badges support `button` and `avatars` elements as well.

```html
<!-- text + dot -->
<span class="badge">
  Notifications
</span>

<!-- text + number -->
<span class="badge" data-badge="8">
  Notifications
</span>

<!-- button + number -->
<button class="btn badge" data-badge="8">
  Button
</button>

<!-- image figure + number -->
<figure class="avatar badge" data-badge="8" data-initial="YZ">
  <img src="/img/avatar-3.png" alt="YZ">
</figure>
```
