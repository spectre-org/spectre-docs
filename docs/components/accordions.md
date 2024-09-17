---
title: Accordions
description: 
order: 
---
# Accordions

<small class="label label-secondary">JS Optional</small>

Accordions are used to toggle sections of content.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-md-12">
    <div class="accordion">
      <input id="accordion-1" type="radio" name="accordion-radio" hidden="" checked="">
      <label class="accordion-header c-hand" for="accordion-1"><i class="icon icon-arrow-right mr-1"></i>Elements</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Element 1</a></li>
          <li class="menu-item"><a href="#accordions">Element 2</a></li>
        </ul>
      </div>
    </div>
    <div class="accordion">
      <input id="accordion-2" type="radio" name="accordion-radio" hidden="">
      <label class="accordion-header c-hand" for="accordion-2"><i class="icon icon-arrow-right mr-1"></i>Layout</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Layout 1</a></li>
          <li class="menu-item"><a href="#accordions">Layout 2</a></li>
        </ul>
      </div>
    </div>
    <div class="accordion">
      <input id="accordion-3" type="radio" name="accordion-radio" hidden="">
      <label class="accordion-header c-hand" for="accordion-3"><i class="icon icon-arrow-right mr-1"></i>Components</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Component 1</a></li>
          <li class="menu-item"><a href="#accordions">Component 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="column col-6 col-md-12">
    <div class="accordion">
      <input id="accordion-4" type="checkbox" name="accordion-checkbox" hidden="" checked="">
      <label class="accordion-header c-hand" for="accordion-4">Elements</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Element 1</a></li>
          <li class="menu-item"><a href="#accordions">Element 2</a></li>
        </ul>
      </div>
    </div>
    <div class="accordion">
      <input id="accordion-5" type="checkbox" name="accordion-checkbox" hidden="">
      <label class="accordion-header c-hand" for="accordion-5">Layout</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Layout 1</a></li>
          <li class="menu-item"><a href="#accordions">Layout 2</a></li>
        </ul>
      </div>
    </div>
    <div class="accordion">
      <input id="accordion-6" type="checkbox" name="accordion-checkbox" hidden="">
      <label class="accordion-header c-hand" for="accordion-6">Components</label>
      <div class="accordion-body">
        <ul class="menu menu-nav">
          <li class="menu-item"><a href="#accordions">Component 1</a></li>
          <li class="menu-item"><a href="#accordions">Component 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


It works by leveraging the `:checked` [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) and the [subsequent-sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) selector `~` to hide elements which do not match the combination.

```html
<!-- standard Accordions example -->
<div class="accordion">
  <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden>
  <label class="accordion-header" for="accordion-1">
    <i class="icon icon-arrow-right mr-1"></i>
    Title
  </label>
  <div class="accordion-body">
    <!-- Accordions content -->
  </div>
</div>

<!-- mutually exclusive Accordions example (with same input names) -->
<div class="accordion">
  <input type="radio" id="accordion-1" name="accordion-radio" hidden>
  <label class="accordion-header" for="accordion-1">
    Title
  </label>
  <div class="accordion-body">
    <!-- Accordions content -->
  </div>
</div>
```

Alternatively, you can use `details` and `summary` instead of `input` radio or checkbox trick. Add the `open` attribute to `details` to expand it.

```html
<!-- details and summary Accordions example -->
<details class="accordion" open>
  <summary class="accordion-header">
    <i class="icon icon-arrow-right mr-1"></i>
    Title
  </summary>
  <div class="accordion-body">
    <!-- Accordions content -->
  </div>
</details>
```
