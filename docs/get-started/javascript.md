---
title: JavaScript
description: 
order: 5
---

# JavaScript

Spectre CSS is primarily a CSS framework, which means most of its features and interactivity **do not** require JavaScript. This is one of its strengths; it provides solid interactivity through CSS trickery alone.

This interactivity is simulated using a combination of CSS pseudo-classes and selectors, for example:

- [Checkboxes](../elements/forms.md) – the `:checked` and `:before` pseudo-classes style the checkbox element
- [Accordions](../components/accordions.md) – the `:checked` and `~` sibling-selector show and hide the accordion elements
- [Modals](../components/modals.md) – the `:target` pseudo-class and location `#hash` display the specific modal element 
- [Carousels](../experimentals/carousels.md) – the `:checked` and `~` sibling-selector show the specific slide element
- [Parallax](../experimentals/parallax.md) – the `:hover` and `~` sibling-selector tilt the image container 

However, there are cases where JavaScript can or _must_ be used to enhance functionality:

- toggling **classes** – such as adding an `active` class to show or hide a specific [modal](../components/modals.md) element
- toggling **elements** – such as showing [tab](../components/tabs.md) _content_ in response to a tab **item** click
- modifying **attributes** – such as setting a `data-tooltip` attribute to show a slider's current value
- updating **elements** – such as interacting with elements in an [autocomplete](../experimentals/autocomplete.md) component

Essentially, Spectre CSS is a CSS-_first_ framework where:

- CSS can be used for the vast majority of use-cases and interaction
- JavaScript can be used where it might be more flexible or pragmatic 

To clarify JavaScript usage, main menu items will be tagged with:

- <small class="label label-primary">JS</small> – where JavaScript is required
- <small class="label label-secondary">JS</small> – where JavaScript is optional
- no tag – for CSS-only

## SPA Compatibility

For some of its CSS-only element toggling (for example [Modal](../components/modals.md) and [Off-Canvas](../experimentals/off-canvas.md)) Spectre CSS leverages the `id` and `:target` pseudo-selector in combination with location `#hash` changes.

Whilst this works great for non-JavaScript pages, it can be problematic with JavaScript frameworks' routing mechanisms, and either prevent Spectre CSS from working the way it should, or result in unpredictable routing behaviour. 

When using these components in JavaScript frameworks, you should prefer toggling visibility using the `active` class, and can remove the `id` and `href` links from the components.

For example, rather than a CSS-only solution:

```html
<!-- button trigger -->
<a class="btn btn-primary" href="#modal-1">Open Modal</a>

<!-- modal container -->
<div class="modal" id="modal-1">
  <a href="#close" class="modal-overlay" aria-label="Close"></a>
  <div class="modal-container">
  ...
```

Use JavaScript explicitly to add or remove classes:

```html
<!-- button trigger -->
<a class="btn btn-primary"
   onclick="document.getElementById('modal-1').classList.add('active')">Open Modal</a>

<!-- modal container -->
<div class="modal" id="modal-1">
  <a class="modal-overlay" aria-label="Close"
     onclick="document.getElementById('modal-1').classList.remove('active')"></a>
  <div class="modal-container">
    ...
```

See Spectre's own [Modal docs](https://github.com/spectre-org/spectre-docs/blob/main/docs/components/modals.md?plain=1#L15-L20) for an example using Vue's `ref` and `@click` handlers.
