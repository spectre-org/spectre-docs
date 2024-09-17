---
title: Off-canvas
description: 
order: 
---

# Off-canvas

<small class="label label-secondary">JS Optional</small>

The Off-canvas is a navigation layout that the sidebar can slide in and out of the viewport.

By default, the off-canvas menu is collapsed whenever the window width is. But you can add the `off-canvas-sidebar-show` class to the `off-canvas` to make the sidebar expanded when the window width is larger than or equal to **960px**.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <div class="off-canvas off-canvas-sidebar-show"><a class="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-demo"><i class="icon icon-menu"></i></a>
      <div class="off-canvas-sidebar flex-centered" id="sidebar-demo"><span>Sidebar</span></div><a class="off-canvas-overlay" href="#close"></a>
      <div class="off-canvas-content">
        <div class="content">
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
          <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
        </div>
      </div>
    </div>
  </div>
</div>

The CSS-only version works by leveraging the CSS pseudo-property [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) which works in conjunction with the location hash; clicking on a link with `href` `#sidebar` changes the URL and displays the HTML element with the `id` `sidebar`. To close, you can change the location hash to something like `#close` or just `#`.

In JavaScript you can open the sidebar by adding the class `active` to `off-canvas-sidebar`, and removing it to close it.

```html
<div class="off-canvas">
  <!-- off-screen toggle button -->
  <a class="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
    <i class="icon icon-menu"></i>
  </a>

  <div id="sidebar-id" class="off-canvas-sidebar">
    <!-- off-screen sidebar -->
  </div>

  <a class="off-canvas-overlay" href="#close"></a>

  <div class="off-canvas-content">
    <!-- off-screen content -->
  </div>
</div>
```
