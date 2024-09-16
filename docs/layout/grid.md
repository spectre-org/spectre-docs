---
title: Flexbox grid
description: 
order: 2
---

# Flexbox grid

Layout includes flexbox based responsive grid system with 12 columns.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primar docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primar docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primar docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primar docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-primary text-secondary docs-block"></div>
  </div>
  <div class="column">
    <div class="bg-secondary text-primar docs-block"></div>
  </div>
</div> 
<div class="vp-raw docs-demo">
  <div class="columns">
    <div class="column col-12">
      <div class="bg-gray docs-block">col-12 (100%)</div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-9">
      <div class="bg-gray docs-block">col-9 (75%)</div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-6">
      <div class="bg-gray docs-block">col-6 (50%)</div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-3">
      <div class="bg-gray docs-block">col-3 (25%)</div>
    </div>
  </div>
</div>

```html
<!-- flexbox grid example -->
<div class="container">
  <div class="columns">
    <div class="column col-6">col-6</div>
    <div class="column col-3">col-3</div>
    <div class="column col-2">col-2</div>
    <div class="column col-1">col-1</div>
  </div>
</div>
```

Add the `columns` class to a container with the `container` class. And add any element you want with the `column` class inside the container. These columns will take up the space equally. You can specify the width of each column by adding class `col-<1-12>`.

## Gapless grid

And you can add the `col-gapless` class to the `columns` to have gapless columns.

<div class="vp-raw docs-demo columns col-gapless">
  <div class="column col-6">
    <div class="bg-gray docs-block">col-6 (gapless)</div>
  </div>
  <div class="column col-6">
    <div class="bg-secondary text-primary docs-block">col-6 (gapless)</div>
  </div>
</div>

```html
<!-- gapless columns -->
<div class="columns col-gapless">
  <div class="column col-6">col-6</div>
  <div class="column col-6">col-6</div>
</div>
```

By default, Spectre grid has multi-line flexbox enabled. You can add the `col-oneline` class to `columns` to make all its child columns positioned in the same single row.

<div class="vp-raw docs-demo columns col-oneline">
  <div class="column col-8">
    <div class="bg-gray docs-block">col-8</div>
  </div>
  <div class="column col-8">
    <div class="bg-gray docs-block">col-8</div>
  </div>
</div>

```html
<!-- one line columns -->
<div class="columns col-oneline">
  <div class="column col-8">col-8</div>
  <div class="column col-8">col-8</div>
</div>
```

## Grid nesting

To nest grids, add the new `columns` and `column` structure within an existing column.

<div class="vp-raw docs-demo columns">
  <div class="column col-6">
    <div class="bg-gray docs-block">col-6</div>
    <div class="columns">
      <div class="column col-6">
        <div class="bg-secondary text-primary docs-block">col-6</div>
      </div>
      <div class="column col-6">
        <div class="bg-secondary text-primary docs-block">col-6</div>
      </div>
    </div>
  </div>
  <div class="column col-6">
    <div class="bg-gray docs-block">col-6</div>
  </div>
</div>

```html
<!-- grid nesting example -->
<div class="container">
  <div class="columns">
    <div class="column col-6">col-6
      <div class="columns">
        <div class="column col-6">col-6</div>
        <div class="column col-6">col-6</div>
      </div>
    </div>
    <div class="column col-6">col-6</div>
  </div>
</div>
```

## Column offset

 The Flexbox grid provides margin auto utilities to set offset. There are `col-mx-auto`, `col-ml-auto` and `col-mr-auto` to set margins between columns without using empty columns.

<div class="vp-raw docs-demo">
  <div class="columns text-center">
    <div class="column col-2">
      <div class="bg-gray docs-block">col-2</div>
    </div>
    <div class="column col-4 col-mx-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-mx-auto</div>
    </div>
  </div>
  <div class="columns text-center">
    <div class="column col-2">
      <div class="bg-gray docs-block">col-2</div>
    </div>
    <div class="column col-4 col-ml-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-ml-auto</div>
    </div>
  </div>
  <div class="columns text-center">
    <div class="column col-4 col-ml-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-ml-auto</div>
    </div>
    <div class="column col-2">
      <div class="bg-gray docs-block">col-2</div>
    </div>
  </div>
  <div class="columns text-center">
    <div class="column col-4 col-mx-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-mx-auto</div>
    </div>
    <div class="column col-2">
      <div class="bg-gray docs-block">col-2</div>
    </div>
  </div>
  <div class="columns text-center">
    <div class="column col-4 col-mr-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-mr-auto</div>
    </div>
    <div class="column col-2">
      <div class="bg-gray docs-block">col-2</div>
    </div>
  </div>
  <div class="columns text-center">
    <div class="column col-4 col-mx-auto">
      <div class="bg-secondary text-primary docs-block">col-4 col-mx-auto</div>
    </div>
  </div>
</div>

```html
<!-- grid offset example -->
<div class="container">
  <div class="columns">
    <div class="column col-4 col-mr-auto">col-4 col-mr-auto</div>
    <div class="column col-2">col-2</div>
  </div>
</div>
```

## Auto width columns

You can add the `col-auto` class to the `column` to have auto width columns. There are `col-xl-auto`, `col-lg-auto`, `col-md-auto`, `col-sm-auto` and `col-xs-auto` to set auto width in different viewport sizes.

<div class="vp-raw docs-demo">
  <div class="columns">
    <div class="column col-auto">
      <div class="bg-secondary text-primary docs-block">col-auto</div>
    </div>
    <div class="column">
      <div class="bg-gray docs-block">col</div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-lg-auto col-6">
      <div class="bg-secondary text-primary docs-block">col-lg-auto</div>
    </div>
    <div class="column">
      <div class="bg-gray docs-block">col</div>
    </div>
  </div>
</div>

```html
<!-- auto width column example -->
<div class="container">
  <div class="columns">
    <div class="column col-auto">col-auto</div>
    <div class="column">col</div>
  </div>
</div>

<div class="container">
  <div class="columns">
    <div class="column col-lg-auto col-6">col-lg-auto</div>
    <div class="column">col</div>
  </div>
</div>
```
