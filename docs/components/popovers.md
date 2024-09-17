---
title: Popovers
description: 
order: 
---

# Popovers

Popovers are small overlay content containers.

<div class="vp-raw docs-demo columns">
  <div class="column col-3 col-sm-6">
    <div class="popover"><a class="btn btn-primary" href="#popovers">top popover</a>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Apple</div>
            <div class="card-subtitle text-gray">Software and hardware</div>
          </div>
          <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div class="card-footer">
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="column col-3 col-sm-6">
    <div class="popover popover-right"><a class="btn btn-primary" href="#popovers">right popover</a>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Apple</div>
            <div class="card-subtitle text-gray">Software and hardware</div>
          </div>
          <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div class="card-footer">
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="column col-3 col-sm-6">
    <div class="popover popover-bottom"><a class="btn btn-primary" href="#popovers">bottom popover</a>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Apple</div>
            <div class="card-subtitle text-gray">Software and hardware</div>
          </div>
          <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div class="card-footer">
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="column col-3 col-sm-6">
    <div class="popover popover-left"><a class="btn btn-primary" href="#popovers">left popover</a>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">Apple</div>
            <div class="card-subtitle text-gray">Software and hardware</div>
          </div>
          <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div>
          <div class="card-footer">
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

Wrap an element by a container with the `popover` class. And add a container with the `popover-container` next to the element. You can use [Cards](#cards) component inside the `popover-container`.

Also, you can add the `popover-right`, `popover-bottom` or `popover-left` class to define the position. By default, the popovers appear above the element.

```html
<div class="popover popover-right">
  <button class="btn btn-primary">right popover</button>
  <div class="popover-container">
    <div class="card">
      <div class="card-header">
        ...
      </div>
      <div class="card-body">
        ...
      </div>
      <div class="card-footer">
        ...
      </div>
    </div>
  </div>
</div>
```
