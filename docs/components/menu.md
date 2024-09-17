---
title: Menu
description: 
order: 
---

# Menu

<small class="label label-secondary">JS Optional</small>

Menus are vertical list of links or buttons for actions and navigation.

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-xs-12">
    <ul class="menu">
      <li class="menu-item">
        <div class="tile tile-centered">
          <div class="tile-icon"><img class="avatar" src="/img/avatar-4.png" alt="Avatar"></div>
          <div class="tile-content">Steve Rogers</div>
        </div>
      </li>
      <li class="divider"></li>
      <li class="menu-item"><a class="active" href="#menus">My profile</a>
        <div class="menu-badge">
          <label class="form-checkbox">
            <input type="checkbox"><i class="form-icon"></i>Public
          </label>
        </div>
      </li>
      <li class="menu-item"><a href="#menus">Settings</a>
        <div class="menu-badge">
          <label class="label label-primary">2</label>
        </div>
      </li>
      <li class="menu-item"><a href="#menus">Logout</a></li>
    </ul>
  </div>
  <div class="column col-4 col-xs-12">
    <ul class="menu">
      <li class="divider" data-content="LINKS"></li>
      <li class="menu-item"><a href="#menus">Slack</a></li>
      <li class="menu-item"><a href="#menus">Hipchat</a></li>
      <li class="menu-item"><a href="#menus">Skype</a></li>
    </ul>
  </div>
  <div class="column col-4 col-xs-12">
    <ul class="menu">
      <li class="menu-item">
        <label class="form-checkbox">
          <input type="checkbox" checked=""><i class="form-icon"></i> form-checkbox
        </label>
      </li>
      <li class="menu-item">
        <label class="form-radio">
          <input type="radio" checked=""><i class="form-icon"></i> form-radio
        </label>
      </li>
      <li class="menu-item">
        <label class="form-switch">
          <input type="checkbox" checked=""><i class="form-icon"></i> form-switch
        </label>
      </li>
    </ul>
  </div>
</div>

Add a container element with the `menu` class. And add child elements with the `menu-item` class. You can separate menu items with a `divider`. Spectre CSS does not include JavaScript code, you will need to implement your JS to interact with the menus.

Menus also have [Form controls](../elements/forms) (checkbox, radio and checkbox) support.

```html
<ul class="menu">
  <!-- menu header text -->
  <li class="divider" data-content="LINKS">
  </li>
  <!-- menu item standard -->
  <li class="menu-item">
    <a href="#">
      <i class="icon icon-link"></i> Slack
    </a>
  </li>
  <!-- menu item with form control -->
  <li class="menu-item">
    <label class="form-checkbox">
      <input type="checkbox">
      <i class="form-icon"></i> form-checkbox
    </label>
  </li>
  <!-- menu divider -->
  <li class="divider"></li>
  <!-- menu item with badge -->
  <li class="menu-item">
    <a href="#">
      <i class="icon icon-link"></i> Settings
    </a>
    <div class="menu-badge">
      <label class="label label-primary">2</label>
    </div>
  </li>

  <li class="menu-item">
    <a href="#">My profile</a>
    <div class="menu-badge">
      <label class="form-checkbox">
        <input type="checkbox">
        <i class="form-icon"></i> Public
      </label>
    </div>
  </li>
</ul>
  
```

## Dropdown menu

The dropdown is a combination of buttons and menus.

<div class="vp-raw docs-demo columns">
  <div class="column col-xs-12">
    <div class="dropdown">
      <div class="btn-group"><a class="btn btn-primary">dropdown button</a><a class="btn btn-primary dropdown-toggle" tabindex="0"><i class="icon icon-caret"></i></a>
        <ul class="menu">
          <li class="menu-item"><a href="#dropdowns">Slack</a></li>
          <li class="menu-item"><a href="#dropdowns">Hipchat</a></li>
          <li class="menu-item"><a href="#dropdowns">Skype</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="column col-xs-12">
    <div class="dropdown"><a class="btn btn-link dropdown-toggle" tabindex="0">dropdown button <i class="icon icon-caret"></i></a>
      <ul class="menu">
        <li class="menu-item"><a href="#dropdowns">Slack</a></li>
        <li class="menu-item"><a href="#dropdowns">Hipchat</a></li>
        <li class="menu-item"><a href="#dropdowns">Skype</a></li>
      </ul>
    </div>
  </div>
</div>

Add a container element with the `dropdown` class. And add a focusable element with the `dropdown-toggle` class for the button and a `menu` component right next to it. You also need to add `tabindex` to make the buttons focusable.

It works by leveraging the `:focus` [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) and the [next-sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator) selector `+` to toggle the `.menu` container.

If the dropdown is close to the right edge of the browser, you can add the `dropdown-right` class to the container to prevent it appearing off screen.

<div class="vp-raw docs-demo columns">
  <div class="column col-xs-12 text-right">
    <div class="dropdown dropdown-right"><a class="btn btn-primary dropdown-toggle" tabindex="0">dropdown button <i class="icon icon-caret"></i></a>
      <ul class="menu text-left">
        <li class="menu-item"><a href="#dropdowns">Slack</a></li>
        <li class="menu-item"><a href="#dropdowns">Hipchat</a></li>
        <li class="menu-item"><a href="#dropdowns">Skype</a></li>
      </ul>
    </div>
  </div>
</div>

In JavaScript, you can toggle `dropdown` container visibility by adding the `active` class.

```html
<!-- basic dropdown button -->
<div class="dropdown">
  <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
    dropdown menu <i class="icon icon-caret"></i>
  </a>
  <!-- menu component -->
  <ul class="menu">
    ...
  </ul>
</div>

<!-- dropdown button group -->
<div class="dropdown">
  <div class="btn-group">
    <a href="#" class="btn">
      dropdown button
    </a>
    <a href="#" class="btn dropdown-toggle" tabindex="0">
      <i class="icon icon-caret"></i>
    </a>

    <!-- menu component -->
    <ul class="menu">
      ...
    </ul>
  </div>
</div>
```
