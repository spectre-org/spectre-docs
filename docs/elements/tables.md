---
title: Tables
description: 
order: 4
---

# Tables

Tables include default styles for tables and data sets.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Add the `table` class to any `<table>` element. The class will add padding, border and emphasized table header.

```html
<table class="table">
  <thead>
    <tr>
      <th>name</th>
      <th>genre</th>
      <th>release date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
  </tbody>
</table>
```

## Striped tables

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Use the `table-striped` class to `<table>` to add zebra striped style. For hoverable table rows, you can add the `table-hover` class to enable hover style.

Use the `active` class to make `<tr>` element highlighted.

```html
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>name</th>
      <th>genre</th>
      <th>release date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
  </tbody>
</table>
```

## Scrollable tables

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <table class="table table-scroll">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Duration</th>
          <th>Genre</th>
          <th>Release date</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>R</td>
          <td>2h 22min</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>Frank Darabont</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>R</td>
          <td>2h 55min</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
          <td>Francis Ford Coppola</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>R</td>
          <td>3h 15min</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
          <td>Steven Spielberg</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>R</td>
          <td>2h 7min</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
          <td>David Fincher</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Add the `table-scroll` class to `<table>` to have a horizontally scrollable table.

```html
<table class="table table-scroll">
  ...
</table>
```
