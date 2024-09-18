---
title: Labels
description: 
order: 5
---

# Labels

Labels are formatted text tags for highlighted, informative information.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <span class="label mr-1">default</span>
    <span class="label label-primary mr-1">primary</span>
    <span class="label label-secondary mr-1">secondary</span>
    <span class="label label-success mr-1">success</span>
    <span class="label label-warning mr-1">warning</span>
    <span class="label label-error">error</span>
  </div>
</div>

Add the `label` class to `<span>` or `<small>` elements. You can add another class `label-primary`, `label-secondary`, `label-success`, `label-warning` and `label-error` for colored labels.

```html
<!-- normal labels -->
<span class="label">default label</span>
<span class="label label-primary">primary label</span>
```

## Rounded labels

<div class="vp-raw docs-demo columns">
  <div class="column">
    <span class="label label-rounded mr-1">default</span>
    <span class="label label-rounded label-primary">primary</span>
  </div>
</div>

Add the `label-rounded` class to have rounded labels.

```html
<!-- rounded labels -->
<span class="label label-rounded label-primary">primary label</span>
```

## Smaller labels

<div class="vp-raw docs-demo columns">
  <div class="column">
    <small class="label">small</small>
    <small class="label label-primary label-rounded">small</small>
</div>
</div>

Use the `<small>` tag to create smaller (`font-size: 80%`) labels.

```html
<!-- smaller labels -->
<small class="label label-primary">small label</small>
```

> Note that font-size utilities are planned.
