---
title: Customisation
description: 
order: 4
---

# Customisation

Spectre CSS is designed with consistent design language, and is supported by a [core list](https://github.com/spectre-org/spectre-css/blob/main/src/_variables.scss) of SCSS variables:

[Colors](#colors):

- primary and secondary
- grays
- borders
- background
- controls
- formatting

[Units](../layout/responsive.md#responsive-visibility):

- breakpoints
- layout spacing
- border radius
- control sizes
- control-padding
- control icon size
- control width
- z-index

[Fonts](../elements/typography.md):

- base
- mono
- fallback
- asian
- size

All variables include the `!default` flag, allowing you to [override](build.md#user-variables) as needed.

## Colors

<div class="vp-raw docs-demo">
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#5755d9;color:#fff;">
        <div class="color-title">#5755d9</div>
        <div class="color-subtitle">Primary</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#f1f1fc;color:#5755d9;">
        <div class="color-title">#f1f1fc</div>
        <div class="color-subtitle">Secondary</div>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#32b643;color:#fff;">
        <div class="color-title">#32b643</div>
        <div class="color-subtitle">Success</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#ffb700;color:#fff;">
        <div class="color-title">#ffb700</div>
        <div class="color-subtitle">Warning</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#e85600;color:#fff;">
        <div class="color-title">#e85600</div>
        <div class="color-subtitle">Error</div>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#303742;color:#fff;">
        <div class="color-title">#303742</div>
        <div class="color-subtitle">Dark</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#66758c;color:#fff;">
        <div class="color-title">#66758c</div>
        <div class="color-subtitle">Gray dark</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#bcc3ce;color:#fff;">
        <div class="color-title">#bcc3ce</div>
        <div class="color-subtitle">Gray</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#f7f8f9;color:#66758c;">
        <div class="color-title">#f7f8f9</div>
        <div class="color-subtitle">Gray light</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#fff;color:#bcc3ce;">
        <div class="color-title">#fff</div>
        <div class="color-subtitle">Light</div>
      </div>
    </div>
  </div>
</div>


## Sizes

The default REM (root em) size in Spectre CSS is `20px`.

Please note in the Chinese/Japanese/Korean version, Chrome uses 12px as default minimum font size. That is why Spectre sets rem default html font size to `20px`, which is relatively easy to calculate.

Spectre uses `4px` as the unit size. Sizes of components are based on the unit size.

## Button mixins

There are 2 button variant mixins in `_mixins.scss` to generate different color variants.

```scss
@mixin button-variant($color: $primary-color)
@mixin button-outline-variant($color: $primary-color)
```

```scss
// filled button with the success color
.btn-success {
  @include button-variant($success-color);
}

// outlined button with the success color
.btn-outline-success {
  @include button-outline-variant($success-color);
}
```
