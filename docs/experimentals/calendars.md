---
title: Calendars
description: 
order: 
---

# Calendars

<small class="label label-secondary">JS Optional</small>

### Picker

Calendars are designed for date or date range picker and events display.

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-md-12">
    <div class="calendar">
      <div class="calendar-nav navbar">
        <button class="btn btn-action btn-link btn-lg"><i class="icon icon-arrow-left"></i></button>
        <div class="navbar-primary">March 2017</div>
        <button class="btn btn-action btn-link btn-lg"><i class="icon icon-arrow-right"></i></button>
      </div>
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-date">Sun</div>
          <div class="calendar-date">Mon</div>
          <div class="calendar-date">Tue</div>
          <div class="calendar-date">Wed</div>
          <div class="calendar-date">Thu</div>
          <div class="calendar-date">Fri</div>
          <div class="calendar-date">Sat</div>
        </div>
        <div class="calendar-body">
          <div class="calendar-date prev-month">
            <button class="date-item">26</button>
          </div>
          <div class="calendar-date prev-month">
            <button class="date-item">27</button>
          </div>
          <div class="calendar-date prev-month">
            <button class="date-item">28</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">1</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">2</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">3</button>
          </div>
          <div class="calendar-date tooltip" data-tooltip="Today">
            <button class="date-item date-today">4</button>
          </div>
          <div class="calendar-date tooltip" data-tooltip="Not available">
            <button class="date-item" disabled="">5</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">6</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">7</button>
          </div>
          <div class="calendar-date tooltip" data-tooltip="You have appointments">
            <button class="date-item badge">8</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">9</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">10</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">11</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">12</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">13</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">14</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">15</button>
          </div>
          <div class="calendar-date calendar-range range-start">
            <button class="date-item">16</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">17</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">18</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">19</button>
          </div>
          <div class="calendar-date calendar-range range-end">
            <button class="date-item">20</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">21</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">22</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">23</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">24</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">25</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">26</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">27</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">28</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">29</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">30</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">31</button>
          </div>
          <div class="calendar-date next-month">
            <button class="date-item">1</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="calendar">
  <!-- calendar navbar -->
  <div class="calendar-nav navbar">
    <button class="btn btn-action btn-link btn-lg">
      <i class="icon icon-arrow-left"></i>
    </button>
    <div class="navbar-primary">March 2017</div>
    <button class="btn btn-action btn-link btn-lg">
      <i class="icon icon-arrow-right"></i>
    </button>
  </div>

  <div class="calendar-container">
    <div class="calendar-header">
      <div class="calendar-date">Sun</div>
      <div class="calendar-date">Mon</div>
      <div class="calendar-date">Tue</div>
      <div class="calendar-date">Wed</div>
      <div class="calendar-date">Thu</div>
      <div class="calendar-date">Fri</div>
      <div class="calendar-date">Sat</div>
    </div>

    <div class="calendar-body">
      <!-- calendar previous month -->
      <div class="calendar-date prev-month">
        <button class="date-item">26</button>
      </div>
      ...
      <div class="calendar-date prev-month">
        <button class="date-item">28</button>
      </div>

      <!-- calendar current month -->
      <div class="calendar-date">
        <button class="date-item">1</button>
      </div>
      <div class="calendar-date">
        <button class="date-item">2</button>
      </div>
      <div class="calendar-date">
        <button class="date-item">3</button>
      </div>
      <!-- calendar date: today -->
      <div class="calendar-date">
        <button class="date-item date-today">4</button>
      </div>
      <!-- calendar date: tooltip -->
      <div class="calendar-date tooltip" data-tooltip="You have appointments">
        <button class="date-item">5</button>
      </div>
      <!-- calendar date: not available -->
      <div class="calendar-date tooltip" data-tooltip="Not available">
        <button class="date-item" disabled="">6</button>
      </div>

      <!-- calendar range -->
      <div class="calendar-date calendar-range range-start">
        <button class="date-item">7</button>
      </div>
      <div class="calendar-date calendar-range">
        <button class="date-item">8</button>
      </div>
      <div class="calendar-date calendar-range range-end">
        <button class="date-item">9</button>
      </div>
      ...
      <div class="calendar-date">
        <button class="date-item">31</button>
      </div>

      <!-- calendar next month -->
      <div class="calendar-date next-month">
        <button class="date-item">1</button>
      </div>
    </div>
  </div>
</div>
```

## Full size

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="calendar calendar-lg">
      <div class="calendar-nav navbar">
        <button class="btn btn-action btn-link btn-lg"><i class="icon icon-arrow-left"></i></button>
        <div class="navbar-primary">March 2017</div>
        <button class="btn btn-action btn-link btn-lg"><i class="icon icon-arrow-right"></i></button>
      </div>
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-date">Sun</div>
          <div class="calendar-date">Mon</div>
          <div class="calendar-date">Tue</div>
          <div class="calendar-date">Wed</div>
          <div class="calendar-date">Thu</div>
          <div class="calendar-date">Fri</div>
          <div class="calendar-date">Sat</div>
        </div>
        <div class="calendar-body">
          <div class="calendar-date prev-month">
            <button class="date-item">26</button>
          </div>
          <div class="calendar-date prev-month">
            <button class="date-item">27</button>
            <div class="calendar-events"><a class="calendar-event bg-error text-light" href="#calendars">Zhonghe Festival</a></div>
          </div>
          <div class="calendar-date prev-month">
            <button class="date-item">28</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">1</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">2</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">3</button>
          </div>
          <div class="calendar-date tooltip" data-tooltip="Today">
            <button class="date-item date-today">4</button>
          </div>
          <div class="calendar-date">
            <button class="date-item" disabled="">5</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">6</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">7</button>
          </div>
          <div class="calendar-date tooltip" data-tooltip="You have appointments">
            <button class="date-item badge">8</button>
            <div class="calendar-events"><a class="calendar-event bg-primary text-light" href="#calendars">Product launch event</a><a class="calendar-event bg-error text-light" href="#calendars">International Women's Day</a></div>
          </div>
          <div class="calendar-date">
            <button class="date-item">9</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">10</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">11</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">12</button>
            <div class="calendar-events"><a class="calendar-event bg-error text-light" href="#calendars">Arbor Day</a></div>
          </div>
          <div class="calendar-date">
            <button class="date-item">13</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">14</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">15</button>
          </div>
          <div class="calendar-date calendar-range range-start">
            <button class="date-item">16</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">17</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">18</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">19</button>
          </div>
          <div class="calendar-date calendar-range range-end">
            <button class="date-item">20</button>
            <div class="calendar-events"><a class="calendar-event bg-success text-light" href="#calendars">Spring Equinox</a></div>
          </div>
          <div class="calendar-date">
            <button class="date-item">21</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">22</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">23</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">24</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">25</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">26</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">27</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">28</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">29</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">30</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">31</button>
          </div>
          <div class="calendar-date next-month disabled">
            <button class="date-item">1</button>
            <div class="calendar-events"><a class="calendar-event bg-error text-light" href="#calendars">April Fools' Day</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="calendar calendar-lg">
  <!-- calendar navbar structure -->

  <div class="calendar-container">
    <!-- calendar header structure -->

    <div class="calendar-body">
      <!-- calendar date with events -->
      <div class="calendar-date">
        <button class="date-item active">20</button>
        <div class="calendar-events">
          <a class="calendar-event bg-success text-light" href="#calendars">Spring Equinox</a>
        </div>
      </div>
    </div>
  </div>
</div>
```
