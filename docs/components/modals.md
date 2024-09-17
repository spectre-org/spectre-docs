---
title: Modals
description: 
order: 
---

# Modals

<small class="label label-secondary">JS Optional</small>

Modals are flexible dialog prompts.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <a class="btn btn-primary" @click.prevent="$refs.modal1.classList.add('active')">Open Modal</a>
    <div class="modal" ref="modal1">
      <a class="modal-overlay" aria-label="Close" @click.prevent="$refs.modal1.classList.remove('active')"></a>
      <div class="modal-container">
        <div class="modal-header">
          <a class="btn btn-clear float-right" aria-label="Close" @click.prevent="$refs.modal1.classList.remove('active')"></a>
          <div class="modal-title h5">Modal title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            <p>This is the content inside the modal.</p>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
            <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
            <h4>Cupcake ipsum</h4>
            <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
            <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
            <h4>Candy ipsum</h4>
            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
            <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary">Share</button>
          <a class="btn btn-link" @click.prevent="$refs.modal1.classList.remove('active')">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>

Add a container element with the `modal` class. And add a real container `modal-container` and overlay `modal-overlay` inside it. You can add child elements with the `modal-header`, `modal-body` and `modal-footer` \- any or all of them.


```html
<!-- button trigger -->
<a class="btn btn-primary" href="#modal-1">Open Modal</a>

<!-- modal container -->
<div class="modal" id="modal-1">
  <a href="#close" class="modal-overlay" aria-label="Close"></a>
  <div class="modal-container">
    <div class="modal-header">
      <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
      <div class="modal-title h5">Modal title</div>
    </div>
    <div class="modal-body">
      <div class="content">
        <!-- content here -->
      </div>
    </div>
    <div class="modal-footer">
      ...
    </div>
  </div>
</div>
```

The CSS-only version works by leveraging the CSS pseudo-property [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) which works in conjunction with the location hash; clicking on a link with `href` `#modal-1` changes the URL and displays the HTML element with the `id` `modal-1`. To close, you can change the location hash to something like `#close` or just `#`.

In JavaScript, you can toggle `modal` container visibility by adding the `active` class.

## Sizes

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <a class="btn btn-primary" @click.prevent="$refs.modal2.classList.add('active')">Open small size Modal</a>
    <div class="modal modal-sm" ref="modal2">
      <a class="modal-overlay" aria-label="Close" @click.prevent="$refs.modal2.classList.remove('active')"></a>
      <div class="modal-container">
        <div class="modal-header"><a class="btn btn-clear float-right" aria-label="Close" @click.prevent="$refs.modal2.classList.remove('active')"></a>
          <div class="modal-title h5">Modal title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            <form>
              <div class="form-group">
                <label class="form-label" for="input-example-7">Name</label>
                <input class="form-input" id="input-example-7" type="text" placeholder="Name">
              </div>
              <div class="form-group">
                <label class="form-label">Gender</label>
                <label class="form-radio">
                  <input type="radio" name="gender"><i class="form-icon"></i> Male
                </label>
                <label class="form-radio">
                  <input type="radio" name="gender" checked=""><i class="form-icon"></i> Female
                </label>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary">Submit</button>
          <a class="btn btn-link" aria-label="Close" @click.prevent="$refs.modal2.classList.remove('active')">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>

Use the `modal-sm` class for a smaller modal dialog. The container max width is `320px`.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <a class="btn btn-primary" @click.prevent="$refs.modal3.classList.add('active')">Open large size Modal</a>
    <div class="modal modal-lg" id="example-modal-3" ref="modal3">
      <a class="modal-overlay" aria-label="Close" @click.prevent="$refs.modal3.classList.remove('active')"></a>
      <div class="modal-container">
        <div class="modal-header"><a class="btn btn-clear float-right" aria-label="Close" @click.prevent="$refs.modal3.classList.remove('active')"></a>
          <div class="modal-title h5">Modal title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            <p>This is the content inside the modal.</p>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
            <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
            <h4>Cupcake ipsum</h4>
            <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
            <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
            <h4>Candy ipsum</h4>
            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
            <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary">Share</button>
          <a class="btn btn-link" @click.prevent="$refs.modal3.classList.remove('active')">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>

Use the `modal-lg` class for a full size modal. The container max width is `960px`.

```html
<div class="modal modal-sm">
  <a href="#close" class="modal-overlay" aria-label="Close"></a>
  <div class="modal-container">
    <!-- modal structure here -->
  </div>
</div>
```
