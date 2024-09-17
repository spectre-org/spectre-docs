---
title: Panels
description: 
order: 
---

# Panels

Panels are flexible view container with auto-expand content section.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="panel">
      <div class="panel-header text-center">
        <figure class="avatar avatar-lg"><img src="/img/avatar-2.png" alt="Avatar"></figure>
        <div class="panel-title h5 mt-10">Bruce Banner</div>
        <div class="panel-subtitle">THE HULK</div>
      </div>
      <nav class="panel-nav">
        <ul class="tab tab-block">
          <li class="tab-item active"><a href="#panels">Profile</a></li>
          <li class="tab-item"><a href="#panels">Files</a></li>
          <li class="tab-item"><a href="#panels">Tasks</a></li>
        </ul>
      </nav>
      <div class="panel-body">
        <div class="tile tile-centered">
          <div class="tile-content">
            <div class="tile-title text-bold">E-mail</div>
            <div class="tile-subtitle">bruce.banner@hulk.com</div>
          </div>
          <div class="tile-action">
            <button class="btn btn-link btn-action btn-lg tooltip tooltip-left" data-tooltip="Edit E-mail"><i class="icon icon-edit"></i></button>
          </div>
        </div>
        <div class="tile tile-centered">
          <div class="tile-content">
            <div class="tile-title text-bold">Skype</div>
            <div class="tile-subtitle">bruce.banner</div>
          </div>
          <div class="tile-action">
            <button class="btn btn-link btn-action btn-lg"><i class="icon icon-edit"></i></button>
          </div>
        </div>
        <div class="tile tile-centered">
          <div class="tile-content">
            <div class="tile-title text-bold">Location</div>
            <div class="tile-subtitle">Dayton, Ohio</div>
          </div>
          <div class="tile-action">
            <button class="btn btn-link btn-action btn-lg"><i class="icon icon-edit"></i></button>
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <button class="btn btn-primary btn-block">Save</button>
      </div>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title h6">Comments</div>
      </div>
      <div class="panel-body">
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar"><img src="/img/avatar-1.png" alt="Avatar"></figure>
          </div>
          <div class="tile-content">
            <p class="tile-title text-bold">Thor Odinson</p>
            <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar"><img src="/img/avatar-2.png" alt="Avatar"></figure>
          </div>
          <div class="tile-content">
            <p class="tile-title text-bold">Bruce Banner</p>
            <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
          </div>
        </div>
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar" data-initial="TS"></figure>
          </div>
          <div class="tile-content">
            <p class="tile-title text-bold">Tony Stark</p>
            <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar"><img src="/img/avatar-4.png" alt="Avatar"></figure>
          </div>
          <div class="tile-content">
            <p class="tile-title text-bold">Steve Rogers</p>
            <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
          </div>
        </div>
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar"><img src="/img/avatar-3.png" alt="Avatar"></figure>
          </div>
          <div class="tile-content">
            <p class="tile-title text-bold">Natasha Romanoff</p>
            <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <div class="input-group">
          <input class="form-input" type="text" placeholder="Hello">
          <button class="btn btn-primary input-group-btn">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>

Add a container element with the `panel` class. And add child elements with the `panel-header`, `panel-nav`, `panel-body` and/or `panel-footer` classes. The `panel-body` can be auto expanded and vertically scrollable.

```html
<div class="panel">
  <div class="panel-header">
    <div class="panel-title">Comments</div>
  </div>
  <div class="panel-nav">
    <!-- navigation components: tabs, breadcrumbs or pagination -->
  </div>
  <div class="panel-body">
    <!-- contents -->
  </div>
  <div class="panel-footer">
    <!-- buttons or inputs -->
  </div>
</div>
```
