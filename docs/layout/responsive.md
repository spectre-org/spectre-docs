---
title: Responsive
description: 
order: 1
---

# Responsive

Spectre provides a neat responsive layout grid system and responsive visibility utilities.

 
<div class="docs-demo columns">
  <div class="column col-10 col-lg-8 col-md-6 col-sm-4">
    <div class="bg-gray docs-block">
      <div class="text-primary">col-10</div>
      <div class="text-dark hide-lg">col-lg-8</div>
      <div class="text-primary show-lg">col-lg-8</div>
      <div class="text-dark hide-md">col-md-6</div>
      <div class="text-primary show-md">col-md-6</div>
      <div class="text-dark hide-sm">col-sm-4</div>
      <div class="text-primary show-sm">col-sm-4</div>
    </div>
  </div>
  <div class="column col-2 col-lg-4 col-md-6 col-sm-8">
    <div class="bg-gray docs-block">
      <div class="text-primary">col-2</div>
      <div class="text-dark hide-lg">col-lg-4</div>
      <div class="text-primary show-lg">col-lg-4</div>
      <div class="text-dark hide-md">col-md-6</div>
      <div class="text-primary show-md">col-md-6</div>
      <div class="text-dark hide-sm">col-sm-8</div>
      <div class="text-primary show-sm">col-sm-8</div>
    </div>
  </div>
</div>

There are `col-xs-<1-12>`, `col-sm-<1-12>`, `col-md-<1-12>`, `col-lg-<1-12>` and `col-xl-<1-12>` available for flexible grid across mobile, tablet and desktop viewport usage.

* `col-xs-<1-12>` apply to window width smaller than or equal to **480px**.
* `col-sm-<1-12>` apply to window width smaller than or equal to **600px**.
* `col-md-<1-12>` apply to window width smaller than or equal to **840px**.
* `col-lg-<1-12>` apply to window width smaller than or equal to **960px**.
* `col-xl-<1-12>` apply to window width smaller than or equal to **1280px**.
* `col-<1-12>` apply to all window width, including the width wider than **1280px**.

```html
<div class="container">
  <div class="columns">
    <div class="column col-xs-6">col-xs-6</div>
    <div class="column col-xs-3">col-xs-3</div>
    <div class="column col-xs-3">col-xs-3</div>
  </div>
</div>

```

## Responsive container

 The responsive layout also provides fixed-width containers. Use `grid-xs`(480px), `grid-sm`(600px), `grid-md`(840px), `grid-lg`(960px) or `grid-xl`(1280px) to the container for a fixed-width container with the specific max-width.

```html
<!-- 100% width container with max-width set to grid-lg (960px) -->
<div class="container grid-lg">
  <div class="columns">
    ...
  </div>
</div>
```

## Responsive visibility

The responsive visibility utilities help show and hide elements on specific viewport sizes.

 
<div class="docs-demo columns">
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
          <td class="text-left">hide-xs</td>
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
          <td class="text-left">hide-sm</td>
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
          <td class="text-left">hide-md</td>
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
          <td class="text-left">hide-lg</td>
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
          <td class="text-left">hide-xl</td>
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

For hiding elements on specific viewport sizes, there are classes `hide-xs`, `hide-sm`, `hide-md`, `hide-lg` and `hide-xl` available.

* `hide-xs` hides elements when the window width is smaller than or equal to **480px**.
* `hide-sm` hides elements when the window width is smaller than or equal to **600px**.
* `hide-md` hides elements when the window width is smaller than or equal to **840px**.
* `hide-lg` hides elements when the window width is smaller than or equal to **960px**.
* `hide-xl` hides elements when the window width is smaller than or equal to **1280px**.
 
<div class="docs-demo columns">
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
          <td class="text-left">show-xs</td>
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
          <td class="text-left">show-sm</td>
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
          <td class="text-left">show-md</td>
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
          <td class="text-left">show-lg</td>
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
          <td class="text-left">show-xl</td>
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

For showing elements on specific viewport sizes, there are classes `show-xs`, `show-sm`, `show-md`, `show-lg` and `show-xl` available.

* `show-xs` shows elements when the window width is smaller than or equal to **480px**.
* `show-sm` shows elements when the window width is smaller than or equal to **600px**.
* `show-md` shows elements when the window width is smaller than or equal to **840px**.
* `show-lg` shows elements when the window width is smaller than or equal to **960px**.
* `show-xl` shows elements when the window width is smaller than or equal to **1280px**.

## Responsive Resizer

 Spectre also has a responsive web test tool Responsive Resizer. You can clone the [GitHub Repo](https://github.com/picturepan2/responsive-resizer) to use it locally or use it online.

[Responsive Resizer](https://picturepan2.github.io/responsive-resizer/)