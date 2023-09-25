---
title: Off-canvas
description: 
order: 
---

# Off-canvas

CSS ONLY

The Off-canvas is a navigation layout that the sidebar can slide in and out of the viewport. It is built in pure CSS.

 By default, the off-canvas menu is collapsed whenever the window width is. But you can add the `off-canvas-sidebar-show` class to the `off-canvas` to make the sidebar expanded when the window width is larger than or equal to **960px**.

 
<div class="docs-demo columns">
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

You can open the sidebar by adding the class `active` to `off-canvas-sidebar`. And remove the `active` to close it.

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