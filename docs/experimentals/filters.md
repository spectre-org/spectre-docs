---
title: Filters
description: 
order: 
---

# Filters

Filters are CSS only content filters.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="filter">
      <input class="filter-tag" id="tag-0" type="radio" name="filter-radio" hidden="" checked="">
      <input class="filter-tag" id="tag-1" type="radio" name="filter-radio" hidden="">
      <input class="filter-tag" id="tag-2" type="radio" name="filter-radio" hidden="">
      <input class="filter-tag" id="tag-3" type="radio" name="filter-radio" hidden="">
      <input class="filter-tag" id="tag-4" type="radio" name="filter-radio" hidden="">
      <div class="filter-nav">
        <label class="chip" for="tag-0">All</label>
        <label class="chip" for="tag-1">Action</label>
        <label class="chip" for="tag-2">Roleplaying</label>
        <label class="chip" for="tag-3">Shooter</label>
        <label class="chip" for="tag-4">Sports</label>
      </div>
      <div class="filter-body columns">
        <div class="column col-4 filter-item" data-tag="tag-2">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Fallout 4</div>
              <div class="card-subtitle text-gray">Roleplaying</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-3">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Halo 5</div>
              <div class="card-subtitle text-gray">Shooter</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-1">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Quantum Break</div>
              <div class="card-subtitle text-gray">Action</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-4">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Forza Horizon 3</div>
              <div class="card-subtitle text-gray">Sports</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-2">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Final Fantasy XV</div>
              <div class="card-subtitle text-gray">Roleplaying</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-4">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">NBA 2K17</div>
              <div class="card-subtitle text-gray">Sports</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-3">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Battlefield 1</div>
              <div class="card-subtitle text-gray">Shooter</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-1">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">GTA V</div>
              <div class="card-subtitle text-gray">Action</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-4">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">FIFA 17</div>
              <div class="card-subtitle text-gray">Sports</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-3">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Overwatch</div>
              <div class="card-subtitle text-gray">Shooter</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-3">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Titanfall 2</div>
              <div class="card-subtitle text-gray">Shooter</div>
            </div>
          </div>
        </div>
        <div class="column col-4 filter-item" data-tag="tag-3">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-bold">Gears of Wars 4</div>
              <div class="card-subtitle text-gray">Shooter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

Filters use `tag-1` to `tag-8` to flag different tags.`tag-0` is reserved for clearing filter (or showing all). You can overwrite `$filter-number` in `_filters.scss` to have more filters.

It works by leveraging the `:checked` [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) and the [subsequent-sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) selector `~` to hide elements which do not match the combination.

```html
<div class="filter">
  <input type="radio" id="tag-0" class="filter-tag" name="filter-radio" hidden checked>
  <input type="radio" id="tag-1" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="tag-2" class="filter-tag" name="filter-radio" hidden>

  <div class="filter-nav">
    <label class="chip" for="tag-0">All</label>
    <label class="chip" for="tag-1">Action</label>
    <label class="chip" for="tag-2">Roleplaying</label>
  </div>

  <div class="filter-body">
    <div class="filter-item card" data-tag="tag-1">
      <!-- Filter item content -->
    </div>
    <div class="filter-item card" data-tag="tag-2">
      <!-- Filter item content -->
    </div>
    <!-- Filter items -->
  </div>
</div>
```
