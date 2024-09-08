---
title: Divider
description: 
order: 
---

# Divider

The Divider is used for separating elements.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <div class="divider"></div>
  </div>
</div> 
<div class="vp-raw docs-demo columns">
  <div class="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus.
    <div class="divider text-center" data-content="OR"></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus.
  </div>
</div> 
<div class="vp-raw docs-demo columns">
  <div class="column">
    <form>
      <div class="form-group">
        <label class="form-label" for="input-example-1">Email</label>
        <input class="form-input" id="input-example-1" type="text" placeholder="Email">
      </div>
      <div class="form-group">
        <label class="form-label" for="input-example-2">Password</label>
        <input class="form-input" id="input-example-2" type="password" placeholder="Password">
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox"><i class="form-icon"></i> Remember me
        </label>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
  <div class="divider-vert" data-content="OR"></div>
  <div class="column">
    <form>
      <div class="form-group">
        <label class="form-label" for="input-example-3">Email</label>
        <input class="form-input" id="input-example-3" type="text" placeholder="Email">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">Sign up</button>
        <button class="btn btn-link btn-block">Learn more</button>
      </div>
    </form>
  </div>
</div>

```html
<!-- divider element -->
<div class="divider"></div>
<!-- divider element with text -->
<div class="divider text-center" data-content="OR"></div>

<!-- vertical divider element with text -->
<div class="columns">
  <div class="column">
    <!-- column content -->
  </div>
  <div class="divider-vert" data-content="OR"></div>
  <div class="column">
    <!-- column content -->
  </div>
</div>
```
