---
title: JavaScript
description: 
order: 4
---

# JavaScript

Spectre.css is primarily a CSS framework, which means most of its features and interactivity **do not** require JavaScript. This is one of its strengths; it provides a lot of functionality through CSS trickery alone.

Its interactive effects are simulated primarily using CSS pseudo-classes and selectors, for example:

- [Checkboxes](../elements/forms.md) – the `:checked` and `:before` pseudo-classes is used to style the checkbox element
- [Accordions](../components/accordions.md) – the `:checked` and `~` sibling-selector is used to show and hide the accordion elements
- [Modals](../components/modals.md) – the `:target` pseudo-class and location `#hash` is used to display the specific modal element 
- [Carousels](../experimentals/carousels.md) – the `:checked` and `~` sibling-selector is used to show the specific slide element
- [Parallax](../experimentals/parallax.md) – the `:hover` and `~` sibling-selector is used to tilt the image container 

However, there are some cases where JavaScript can or _must_ be used to enhance functionality:

- toggling **classes** – such as adding an `active` class to show or hide a specific [modal](../components/modals.md) element
- toggling **related classes** – such as showing [tab](../components/tabs.md) _content_ in response to a tab **item** click
- changing **attributes** – such as setting a `data-tooltip` attribute to surface the control's current **value**
- updating **elements** – such as fetching and previewing elements to be shown in an [autocomplete](../experimentals/autocomplete.md)

Essentially, Spectre CSS is a CSS-_first_ framework where:

- CSS can be used if simplicity or a low-tech solution is preferred
- JavaScript can be used where it would be more flexible or pragmatic 

To indicate this, note that left-hand menu items will be marked with:

- <small class="label label-secondary">JS</small> – where JavaScript is optional  
- <small class="label label-primary">JS</small> – where JavaScript is required  

## SPA Compatibility

In order to achieve some of its CSS-only manipulation of the page, Spectre CSS relies on using the location `#hash` along with the `:target` pseudo-selector to display or hide elements.

Note that certain frameworks' routing solutions may intercept hash-based routing and either prevent Spectre CSS from working the way it should, or just behave unexpectedly. In those situations, you should lean on the explicit classes, such as adding an `active` class to modal containers, rather than the combination of location `#hash` and `:target` pseudo-selector combination.

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
