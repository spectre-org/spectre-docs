---
title: Autocomplete
description:
order: 
---

# Autocomplete

<small class="label label-secondary">JS Required</small>

Autocomplete form component provides suggestions while you type. It is often used for tags and contacts input.

<ClientOnly>
<div class="vp-raw docs-demo columns" style="margin-bottom: 110px">
  <div class="column col-9 col-xs-12">
    <div class="form-group">
      <div class="form-autocomplete">
        <div class="form-autocomplete-input form-input"><span class="chip">Bruce Banner</span>
          <div class="chip"><img class="avatar avatar-sm" src="/img/avatar-1.png" alt="Avatar">Thor Odinson</div>
          <div class="chip"><img class="avatar avatar-sm" src="/img/avatar-4.png" alt="Avatar">Steve Rogers</div>
          <div class="chip">
            <figure class="avatar avatar-sm" data-initial="TS" style="background-color: #5755d9;"></figure>Tony Stark
          </div><span class="chip active">Natasha Romanoff</span>
          <input class="form-input" type="text" placeholder="">
        </div>
      </div>
    </div>
  </div>
  <div class="column col-9 col-xs-12">
    <div class="form-group">
      <div class="form-autocomplete">
        <div class="form-autocomplete-input form-input is-focused"><span class="chip">Bruce Banner<a class="btn btn-clear" href="#" aria-label="Close" role="button"></a></span><span class="chip"><img class="avatar avatar-sm" src="/img/avatar-1.png" alt="Thor Odinson">Thor Odinson<a class="btn btn-clear" href="#" aria-label="Close" role="button"></a></span>
          <div class="has-icon-left">
            <input class="form-input" type="text" placeholder="" value="S"><i class="form-icon loading"></i>
          </div>
        </div>
        <ul class="menu">
          <li class="menu-item"><a href="#autocomplete">
            <div class="tile tile-centered">
              <div class="tile-icon"><img class="avatar avatar-sm" src="/img/avatar-4.png" alt="Steve Rogers"></div>
              <div class="tile-content">
                <mark>S</mark>teve Roger
                <mark>s</mark>
              </div>
            </div></a></li>
          <li class="menu-item"><a href="#autocomplete">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <figure class="avatar avatar-sm" data-initial="TS" style="background-color: #5755d9;"></figure>
              </div>
              <div class="tile-content">Tony
                <mark>S</mark>tark
              </div>
            </div></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</ClientOnly>

Add a container element with the `form-autocomplete` class. There are 2 parts of it, one is `form-autocomplete-input`,
another is `menu` component. You may add the `is-focused` class to `form-autocomplete-input` to make it appear as focus
state.

Spectre CSS does NOT include JavaScript code, you will need to implement your JS to interact with the autocomplete. The
autocomplete HTML structure is exampled below.


<ClientOnly>
<div class="vp-raw docs-demo columns" data-allow-mismatch>
  <div class="column col-9 col-xs-12">
    <div class="form-group">
      <div class="form-autocomplete autocomplete-oneline">
        <div class="form-autocomplete-input form-input"><span class="chip">Bruce Banner</span>
          <div class="chip"><img class="avatar avatar-sm" src="/img/avatar-1.png" alt="Avatar">Thor Odinson</div>
          <div class="chip"><img class="avatar avatar-sm" src="/img/avatar-4.png" alt="Avatar">Steve Rogers</div>
          <div class="chip">
            <figure class="avatar avatar-sm" data-initial="TS" style="background-color: #5755d9;"></figure>Tony Stark
          </div><span class="chip active">Natasha Romanoff</span>
          <input class="form-input" type="text" placeholder="">
        </div>
      </div>
    </div>
  </div>
</div>
</ClientOnly>

```html

<div class="form-autocomplete">
  <!-- autocomplete input container -->
  <div class="form-autocomplete-input form-input">

    <!-- autocomplete chips -->
    <div class="chip">
      <img src="/img/avatar-1.png" class="avatar avatar-sm" alt="Thor Odinson">
      Thor Odinson
      <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
    </div>

    <!-- autocomplete real input box -->
    <input class="form-input" type="text" placeholder="typing here">
  </div>

  <!-- autocomplete suggestion list -->
  <ul class="menu">
    <!-- menu list items -->
    <li class="menu-item">
      <a href="#">
        <div class="tile tile-centered">
          <div class="tile-icon">
            ...
          </div>
          <div class="tile-content">
            ...
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
```
