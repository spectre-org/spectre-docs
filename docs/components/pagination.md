---
title: Pagination
description: 
order: 
---

# Pagination

## Multiple pages

Pagination enables easily navigating paged content.

<div class="vp-raw docs-demo columns">
  <div class="column col-xs-12">
    <ul class="pagination">
      <li class="page-item"><a href="#pagination">Prev</a></li>
      <li class="page-item"><a href="#pagination">1</a></li>
      <li class="page-item"><span>...</span></li>
      <li class="page-item"><a href="#pagination">4</a></li>
      <li class="page-item active"><a href="#pagination">5</a></li>
      <li class="page-item"><a href="#pagination">6</a></li>
      <li class="page-item"><span>...</span></li>
      <li class="page-item"><a href="#pagination">9</a></li>
      <li class="page-item"><a href="#pagination">Next</a></li>
    </ul>
  </div>
  <div class="column col-xs-12">
    <ul class="pagination">
      <li class="page-item disabled"><a href="#pagination" tabindex="-1">Prev</a></li>
      <li class="page-item active"><a href="#pagination">1</a></li>
      <li class="page-item"><a href="#pagination">2</a></li>
      <li class="page-item"><a href="#pagination">3</a></li>
      <li class="page-item"><span>...</span></li>
      <li class="page-item"><a href="#pagination">9</a></li>
      <li class="page-item"><a href="#pagination">Next</a></li>
    </ul>
  </div>
</div>

Add a container element with the `pagination` class. And add child elements with the `page-item` class. The `page-item` with the `active` class will be highlighted. You can add the `disabled` class to the `page-item` to have unclickable page links.

```html
<ul class="pagination">
  <li class="page-item disabled">
    <a href="#" tabindex="-1">Previous</a>
  </li>
  <li class="page-item active">
    <a href="#">1</a>
  </li>
  <li class="page-item">
    <a href="#">2</a>
  </li>
  <li class="page-item">
    <a href="#">3</a>
  </li>
  <li class="page-item">
    <span>...</span>
  </li>
  <li class="page-item">
    <a href="#">12</a>
  </li>
  <li class="page-item">
    <a href="#">Next</a>
  </li>
</ul>
```

## Previous and Next

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <ul class="pagination">
      <li class="page-item page-prev"><a href="#pagination">
          <div class="page-item-subtitle">Previous</div>
          <div class="page-item-title h5">Getting started</div></a></li>
      <li class="page-item page-next"><a href="#pagination">
          <div class="page-item-subtitle">Next</div>
          <div class="page-item-title h5">Layout</div></a></li>
    </ul>
  </div>
</div>

You could use previous and next pagination to navigate. 

```html
<ul class="pagination">
  <li class="page-item page-prev">
    <a href="#">
      <div class="page-item-subtitle">Previous</div>
      <div class="page-item-title h5">Getting started</div>
    </a>
  </li>
  <li class="page-item page-next">
    <a href="#">
      <div class="page-item-subtitle">Next</div>
      <div class="page-item-title h5">Layout</div>
    </a>
  </li>
</ul>
```
