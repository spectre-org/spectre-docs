---
title: Meters
description: 
order: 
---

# Meters

<span class="label label-warning">Awaiting Fix</span>

Meters represent the value within the known range.

<div class="vp-raw docs-demo columns">
  <div class="column col-3 col-xs-12">
    <meter class="meter" value="20" min="0" max="100"></meter>
  </div>
  <div class="column col-3 col-xs-12">
    <meter class="meter" value="60" min="0" low="30" optimum="60" high="80" max="100"></meter>
  </div>
  <div class="column col-3 col-xs-12">
    <meter class="meter" value="85" min="0" low="30" high="80" max="100"></meter>
  </div>
  <div class="column col-3 col-xs-12">
    <meter class="meter" value="20" min="0" low="30" optimum="90" high="80" max="100"></meter>
  </div>
</div>

```html
<!-- Meter is green when low < value < high -->
<meter class="meter" value="20" min="0" max="100"></meter>
<meter class="meter" value="60" min="0" max="100" low="30" high="80"></meter>

<!-- Meter is yellow when value < low  or high < value -->
<meter class="meter" value="85" min="0" max="100" low="30" high="80"></meter>

<!-- Meter is red when value < low < high < optimum or optimum < low < high < value -->
<meter class="meter" value="20" optimum="90" min="0" max="100" low="30" high="80"></meter>
```
