---
title: Responsive
description: 
order: 1
---

# Responsive

Spectre provides a neat responsive layout grid system and responsive visibility utilities.

## Modifiers

The following class name modifiers can be applied to some class names:

- `xs` - **480px**
- `sm` - **600px**
- `md` - **840px**
- `lg` - **960px**
- `xl` - **1280px**

On this page, the classes which will be affected by these modifiers are:

- `col-<size>-<1-12>` - columns
- `grid-<size>` - containers
- `hide-<size>` - hide below
- `show-<size>` - show below

## Demo

The following markup combines columns and showing/hiding for different breakpoints.

Resize the window to see:

<div class="vp-raw docs-demo columns">
  <div class="column col-8 col-lg-8 col-md-6 col-sm-4">
    <div class="bg-gray docs-block">
      <div class="text-primary">col-10 <small>(show)</small></div>
      <div class="hide-lg text-dark">col-lg-8 <small>(hide)</small></div>
      <div class="show-lg text-primary">col-lg-8 <small>(show)</small></div>
      <div class="hide-md text-dark">col-md-6 <small>(hide)</small></div>
      <div class="show-md text-primary">col-md-6 <small>(show)</small></div>
      <div class="hide-sm text-dark">col-sm-4 <small>(hide)</small></div>
      <div class="show-sm text-primary">col-sm-4 <small>(show)</small></div>
    </div>
  </div>
  <div class="column col-4 col-lg-4 col-md-6 col-sm-8">
    <div class="bg-gray docs-block">
      <div class="text-primary">col-2 <small>(show)</small></div>
      <div class="hide-lg text-dark">col-lg-4 <small>(hide)</small></div>
      <div class="show-lg text-primary">col-lg-4 <small>(show)</small></div>
      <div class="hide-md text-dark">col-md-6 <small>(hide)</small></div>
      <div class="show-md text-primary">col-md-6 <small>(show)</small></div>
      <div class="hide-sm text-dark">col-sm-8 <small>(hide)</small></div>
      <div class="show-sm text-primary">col-sm-8 <small>(show)</small></div>
    </div>
  </div>
</div>


Spectre also has a responsive testing tool which you can [use online](https://picturepan2.github.io/responsive-resizer/) or locally by cloning the [repo](https://github.com/picturepan2/responsive-resizer).

## Columns

The `column` and `col-*-*` classes create responsive columns for various breakpoints:

```html
<div class="container">
  <div class="columns">
    <div class="column col-xs-6">col-xs-6</div>
    <div class="column col-xs-3">col-xs-3</div>
    <div class="column col-xs-3">col-xs-3</div>
  </div>
</div>
```

The base classes apply to columns for **any** window width:

- `col-<1-12>` all windows

The following 5 variants apply to columns when the window width is **less than or equal to**:

- `col-xs-<1-12>` - **480px**
- `col-sm-<1-12>` - **600px**
- `col-md-<1-12>` - **840px**
- `col-lg-<1-12>` - **960px**
- `col-xl-<1-12>` - **1280px**

## Container

The responsive layout also provides fixed-width containers:

```html
<!-- 100% width container with max-width set to grid-lg (960px) -->
<div class="container grid-lg">
  <div class="columns">
    ...
  </div>
</div>
```

Add the following classes to the `.container` for a fixed-width container limited to **specific max-widths**:

- `grid-xs` - **480px**
- `grid-sm` - **600px**
- `grid-md` - **840px**
- `grid-lg` - **960px**
- `grid-xl` - **1280px**

## Visibility

The responsive visibility utilities help show and hide elements on specific viewport sizes.

### Hiding content

Resize the window to see the table headings <span class="text-bold text-primary">turn on</span> as the window gets narrower:

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <table class="docs-table table table-striped text-center">
      <thead>
        <tr>
          <th></th>
          <th>size-xs</th>
          <th>size-sm</th>
          <th>size-md</th>
          <th>size-lg</th>
          <th>size-xl</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-xs">hide-xs</span>
            <span class="show-xs text-bold text-primary">hide-xs</span>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-sm">hide-sm</span>
            <span class="show-sm text-bold text-primary">hide-sm</span>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-md">hide-md</span>
            <span class="show-md text-bold text-primary">hide-md</span>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-lg">hide-lg</span>
            <span class="show-lg text-bold text-primary">hide-lg</span>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-xl">hide-xl</span>
            <span class="show-xl text-bold text-primary">hide-xl</span>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

The following 5 variants **hide** elements when the window width is **less than or equal to**:

* `hide-xs` - **480px**
* `hide-sm` - **600px**
* `hide-md` - **840px**
* `hide-lg` - **960px**
* `hide-xl` - **1280px**
 

### Showing content

Resize the window to see the table headings <span class="text-bold text-primary">turn on</span> as the window gets wider:

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <table class="docs-table table table-striped text-center">
      <thead>
        <tr>
          <th></th>
          <th>size-xs</th>
          <th>size-sm</th>
          <th>size-md</th>
          <th>size-lg</th>
          <th>size-xl</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-xs text-bold text-primary">show-xs</span>
            <span class="show-xs">show-xs</span>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-sm text-bold text-primary">show-sm</span>
            <span class="show-sm">show-sm</span>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-md text-bold text-primary">show-md</span>
            <span class="show-md">show-md</span>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-lg text-bold text-primary">show-lg</span>
            <span class="show-lg">show-lg</span>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-secondary docs-dot"></div>
          </td>
        </tr>
        <tr>
          <td class="text-left no-wrap">
            <span class="hide-xl text-bold text-primary">show-xl</span>
            <span class="show-xl">show-xl</span>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
          <td>
            <div class="bg-primary docs-dot"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

The following 5 variants **show** elements when the window width is **less than or equal to**:

* `show-xs` - **480px**
* `show-sm` - **600px**
* `show-md` - **840px**
* `show-lg` - **960px**
* `show-xl` - **1280px**
