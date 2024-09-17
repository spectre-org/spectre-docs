---
title: Buttons
description: 
order: 3
---

# Buttons

Buttons include simple button styles for actions in different types and sizes.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn">default button</button>
    <button class="btn btn-primary">primary button</button>
    <button class="btn btn-link">link button</button>
  </div>
</div>

Add the `btn` class to `<a>`, `<input>` or `<button>` elements for a default button. There are classes `btn-primary` and `btn-link` for predefined primary and link buttons.

```html
<button class="btn">default button</button>
<button class="btn btn-primary">primary button</button>
<button class="btn btn-link">link button</button>
```

## Colors

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn btn-success">success button</button>
    <button class="btn btn-error">error button</button>
  </div>
</div>

Add the `btn-success` or `btn-error` class for success (green) or error (red) button color. If you need more button colors, please use [button mixins](../get-started/customisation#buttons) to create your own button color variants.

```html
<button class="btn btn-success">success button</button>
<button class="btn btn-error">error button</button>
```

## Sizes

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn btn-primary btn-lg">large <i class="icon icon-arrow-down"></i></button>
    <button class="btn btn-primary btn-lg">large button</button>
  </div>
  <div class="column col-12">
    <button class="btn btn-primary">normal <i class="icon icon-arrow-down"></i></button>
    <button class="btn btn-primary">normal button</button>
  </div>
  <div class="column col-12">
    <button class="btn btn-primary btn-sm">small <i class="icon icon-arrow-down"></i></button>
    <button class="btn btn-primary btn-sm">small button</button>
  </div>
</div>

Add the `btn-sm` or `btn-lg` class for small or large button size. Also, you can add the `btn-block` class for a full-width button.

```html
<button class="btn btn-lg">large button</button>
<button class="btn btn-sm">small button</button>

<button class="btn btn-block">block button</button>

<button class="btn btn-primary btn-lg"><i class="icon icon-arrow-left"></i> large</button>
<button class="btn btn-primary"><i class="icon icon-arrow-left"></i> normal</button>
<button class="btn btn-primary btn-sm"><i class="icon icon-arrow-left"></i> small</button>
```

Please note that you could use the `btn-action` class for a square button, or add another `s-circle` class for a round button, which is often used as a Float Action Button (FAB).

<div class="vp-raw docs-demo columns">
  <div class="column col-xs-12">
    <button class="btn btn-action btn-primary btn-lg"><i class="icon icon-menu"></i></button>
    <button class="btn btn-action btn-primary"><i class="icon icon-menu"></i></button>
    <button class="btn btn-action btn-primary btn-sm"><i class="icon icon-menu"></i></button>
  </div>
  <div class="column col-xs-12">
    <button class="btn btn-action btn-primary btn-lg s-circle"><i class="icon icon-arrow-up"></i></button>
    <button class="btn btn-action btn-primary s-circle"><i class="icon icon-arrow-up"></i></button>
    <button class="btn btn-action btn-primary btn-sm s-circle"><i class="icon icon-arrow-up"></i></button>
  </div>
</div>

```html
<button class="btn btn-action"><i class="icon icon-arrow-left"></i></button>
<button class="btn btn-action s-circle"><i class="icon icon-arrow-left"></i></button>
```

## States

Add the `active` class for active button state style.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn active">default active</button>
    <button class="btn btn-primary active">primary active</button>
    <button class="btn btn-link active">link active</button>
  </div>
</div>

Add the `disabled` class or the `disabled` attribute for disabled button state style.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn disabled" tabindex="-1">default disabled</button>
    <button class="btn btn-primary" disabled="" tabindex="-1">primary disabled</button>
    <button class="btn btn-link" disabled="" tabindex="-1">link disabled</button>
  </div>
</div>

```html
<!-- buttons with disabled state -->
<button class="btn disabled" tabindex="-1">disabled button</button>
<button class="btn" disabled tabindex="-1">disabled button</button>
```

A button with the `loading` class can show loading indicator.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <button class="btn loading">default button</button>
    <button class="btn btn-primary loading">primary button</button>
    <button class="btn btn-link loading">link button</button>
  </div>
</div>

```html
<!-- buttons with loading state -->
<button class="btn loading">button</button>
<button class="btn btn-primary loading">primary button</button>
```

## Groups

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-md-12">
    <div class="btn-group">
      <button class="btn">first button</button>
      <button class="btn">second button</button>
      <button class="btn">third button</button>
    </div>
  </div>
  <div class="column col-6 col-md-12">
    <div class="btn-group btn-group-block">
      <button class="btn btn-primary">first button</button>
      <button class="btn btn-primary">second button</button>
      <button class="btn btn-primary">third button</button>
    </div>
  </div>
  <div class="column col-6 col-md-12">
    <div class="btn-group">
      <button class="btn btn-sm active">first button</button>
      <button class="btn btn-sm">second button</button>
      <button class="btn btn-sm">third button</button>
    </div>
  </div>
  <div class="column col-6 col-md-12">
    <div class="btn-group btn-group-block">
      <button class="btn btn-primary btn-sm active">first button</button>
      <button class="btn btn-primary btn-sm">second button</button>
      <button class="btn btn-primary btn-sm">third button</button>
    </div>
  </div>
</div>

If you want to use buttons as a group, add the `btn-group` class to the container. You can add the `btn-group-block` class for a full-width button group.

```html
<div class="btn-group btn-group-block">
  <button class="btn">first button</button>
  <button class="btn">second button</button>
  <button class="btn">third button</button>
</div>
```
