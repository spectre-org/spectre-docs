---
title: Timelines
description: 
order: 
---

# Timelines

The Timelines are ordered sequences of activities.

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <div class="timeline">
      <div class="timeline-item" id="timeline-example-1">
        <div class="timeline-left"><a class="timeline-icon tooltip" href="#timeline-example-1" data-tooltip="March 2016"></a></div>
        <div class="timeline-content">
          <div class="tile">
            <div class="tile-content">
              <p class="tile-subtitle">March 2016</p>
              <p class="tile-title">Initial commit</p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline-item" id="timeline-example-2">
        <div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-2" data-tooltip="February 2017"><i class="icon icon-check"></i></a></div>
        <div class="timeline-content">
          <div class="tile">
            <div class="tile-content">
              <p class="tile-subtitle">February 2017</p>
              <p class="tile-title">New Documents experience</p>
              <p class="tile-title"><a href="components.html#bars">Bars</a>: represent the progress of a task</p>
              <p class="tile-title"><a href="components.html#steps">Steps</a>: progress indicators of a sequence of task steps</p>
              <p class="tile-title"><a href="components.html#tiles">Tiles</a>: repeatable or embeddable information blocks</p>
            </div>
            <div class="tile-action">
              <button class="btn">View</button>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline-item" id="timeline-example-3">
        <div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-3" data-tooltip="March 2017"><i class="icon icon-check"></i></a></div>
        <div class="timeline-content">
          <div class="tile">
            <div class="tile-content">
              <p class="tile-subtitle">March 2017</p>
              <p class="tile-title"><a href="elements.html#icons">Icons</a>: single-element, responsive and pure CSS icons</p>
              <p class="tile-title"><a href="components.html#popovers">Popovers</a>: small overlay content containers</p>
              <p class="tile-title"><a href="index.html#calendars">Calendars</a>: date or date range picker and events display</p>
              <p class="tile-title"><a href="index.html#carousels">Carousels</a>: slideshows for cycling images</p>
            </div>
            <div class="tile-action">
              <button class="btn">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

The `timeline-item` `id` and `timeline-icon` `href` work together to make the timeline navigable.

```html
<div class="timeline">
  <div class="timeline-item" id="timeline-example-1">
    <div class="timeline-left">
      <a class="timeline-icon" href="#timeline-example-1"></a>
    </div>
    <div class="timeline-content">
      <!-- tiles structure -->
    </div>
  </div>

  <div class="timeline-item" id="timeline-example-2">
    <div class="timeline-left">
      <a class="timeline-icon icon-lg" href="#timeline-example-2">
        <i class="icon icon-check"></i>
      </a>
    </div>
    <div class="timeline-content">
      <!-- tiles structure -->
    </div>
  </div>
  ...
</div>
```
