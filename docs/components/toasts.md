---
title: Toasts
description: 
order: 
---

# Toasts

Toasts are used to show alert or information to users.

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <div class="toast">
      <button class="btn btn-clear float-right"></button>
      <h6>Toast Title</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="column col-9 col-sm-12">
    <div class="toast toast-primary">
      <button class="btn btn-clear float-right"></button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

Add a container element with the `toast` class. You can add any text within the container, and even icons. You may also add a close button with the `btn-clear` class if you need.

```html
<div class="toast">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
```

<div class="vp-raw docs-demo columns">
  <div class="column col-sm-12">
    <div class="toast toast-success">
      <button class="btn btn-clear float-right"></button>
      <p>Toast success</p>
    </div>
  </div>
  <div class="column col-sm-12">
    <div class="toast toast-warning">
      <button class="btn btn-clear float-right"></button>
      <p>Toast warning</p>
    </div>
  </div>
  <div class="column col-sm-12">
    <div class="toast toast-error">
      <button class="btn btn-clear float-right"></button>
      <p>Toast error</p>
    </div>
  </div>
</div>

And you can add the `toast-primary`, `toast-success`, `toast-warning` or `toast-error` class for additional toast colors.

```html
<div class="toast toast-primary">
  <button class="btn btn-clear float-right"></button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
```
