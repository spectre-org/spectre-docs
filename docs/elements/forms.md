---
title: Forms
description: 
order: 2
---

# Forms

<small class="label label-secondary">JS Optional</small>

Forms provide the most common control styles used in forms, including input, textarea, select, checkbox, radio and switch.

## Form controls

### Input

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-label" for="input-example-1">Name</label>
      <input class="form-input" id="input-example-1" type="text" placeholder="Name">
    </div>
    <div class="form-group">
      <label class="form-label" for="input-example-2">Email</label>
      <input class="form-input" id="input-example-2" type="email" placeholder="Email">
    </div>
  </div>
</div>

```html
<!-- form input control -->
<div class="form-group">
  <label class="form-label" for="input-example-1">Name</label>
  <input class="form-input" type="text" id="input-example-1" placeholder="Name">
</div>
```

#### Input types

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <form class="form-horizontal" action="#forms">
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-8">Email</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-8" type="email" placeholder="Email" value="spectre@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-9">URL</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-9" type="url" placeholder="URL" value="https://github.com/spectre-org/spectre-css">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-10">Search</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-10" type="search" placeholder="Search">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-11">Tel</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-11" type="tel" placeholder="Tel" value="1-(888)-888-8888">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-12">Password</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-12" type="password" placeholder="Password" value="123456789">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-13">Number</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-13" type="number" placeholder="00" value="66">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-14">Date</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-14" type="date" value="2016-12-31">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-15">Color</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-15" type="color" value="#5755d9">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-16">File</label>
        </div>
        <div class="col-9">
          <input class="form-input" id="input-example-16" type="file">
        </div>
      </div>
    </form>
  </div>
</div>

### Textarea

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-label" for="input-example-3">Message</label>
      <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
    </div>
  </div>
</div>

```html
<!-- form textarea control -->
<div class="form-group">
  <label class="form-label" for="input-example-3">Message</label>
  <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
</div>
```

### Select

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <select class="form-select">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
    <div class="form-group">
      <select class="form-select" multiple="">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
</div>

```html
<!-- form select control -->
<div class="form-group">
  <select class="form-select">
    <option>Choose an option</option>
    <option>Slack</option>
    <option>Skype</option>
    <option>Hipchat</option>
  </select>
</div>
```

### Radio

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <form>
      <div class="form-group">
        <label class="form-label">Gender</label>
        <label class="form-radio">
          <input type="radio" name="gender" checked=""><i class="form-icon"></i> Male
        </label>
        <label class="form-radio">
          <input type="radio" name="gender"><i class="form-icon"></i> Female
        </label>
      </div>
    </form>
  </div>
</div>

```html
<!-- form radio control -->
<div class="form-group">
  <label class="form-label">Gender</label>
  <label class="form-radio">
    <input type="radio" name="gender" checked>
    <i class="form-icon"></i> Male
  </label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <i class="form-icon"></i> Female
  </label>
</div>
```

### Switch

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox"><i class="form-icon"></i> Send me emails with news and tips
      </label>
    </div>
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox" checked=""><i class="form-icon"></i> Send me emails with news and tips
      </label>
    </div>
  </div>
</div>

```html
<!-- form switch control -->
<div class="form-group">
  <label class="form-switch">
    <input type="checkbox">
    <i class="form-icon"></i> Send me emails with news and tips
  </label>
</div>
```

### Checkbox
 
<div class="vp-raw docs-demo columns" id="checkbox-example">
  <div class="column col-6 col-xs-12">
    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox"><i class="form-icon"></i> Remember me
      </label>
    </div>
    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" checked><i class="form-icon"></i> Remember me
      </label>
    </div>
  </div>
</div>

```html
<!-- form checkbox control -->
<div class="form-group">
  <label class="form-checkbox">
    <input type="checkbox">
    <i class="form-icon"></i> Remember me
  </label>
</div>
```

You can change checkbox to indeterminate state by setting the `indeterminate` property of checkbox inputs to `true` via JavaScript:

```js
$('#checkbox-example input').indeterminate = true
```


### Icons

Spectre Forms components has [Spectre Icons](icons) support.

Add a wrapper with the `has-icon-left`/`has-icon-right` class to `<input>` element. And add the icon with `form-icon` class next to the `<input>`.

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-xs-12">
    <div class="has-icon-left">
      <input class="form-input input-sm" type="text" placeholder="Name"><i class="form-icon icon icon-arrow-right"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-left tooltip" data-tooltip="Lorem ipsum dolor sit amet">
      <input class="form-input" type="text" placeholder="Name"><i class="form-icon icon icon-arrow-right"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-left">
      <input class="form-input input-lg" type="text" placeholder="Name"><i class="form-icon icon icon-arrow-right"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input input-sm" type="text" placeholder="Name"><i class="form-icon icon icon-check"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input" type="text" placeholder="Name"><i class="form-icon icon icon-check"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input input-lg" type="text" placeholder="Name"><i class="form-icon icon icon-check"></i>
    </div>
  </div>
</div>

```html
<!-- form input with Spectre icon -->
<div class="has-icon-left">
  <input type="text" class="form-input" placeholder="...">
  <i class="form-icon icon icon-check"></i>
</div>
```

You can use the `loading` class for loading or posting state.

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input input-sm" type="text" placeholder="Name"><i class="form-icon loading"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input" type="text" placeholder="Name"><i class="form-icon loading"></i>
    </div>
  </div>
  <div class="column col-4 col-xs-12">
    <div class="has-icon-right">
      <input class="form-input input-lg" type="text" placeholder="Name"><i class="form-icon loading"></i>
    </div>
  </div>
</div>

```html
<!-- form input with loading icon -->
<div class="has-icon-right">
  <input type="text" class="form-input" placeholder="...">
  <i class="form-icon loading"></i>
</div>
```

## Layout

### Inline forms
 
<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <form>
      <div class="form-group">
        <label class="form-radio form-inline">
          <input type="radio" name="gender" checked=""><i class="form-icon"></i> Male
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="gender"><i class="form-icon"></i> Female
        </label>
      </div>
      <div class="form-group">
        <label class="form-checkbox form-inline">
          <input type="checkbox"><i class="form-icon"></i> Checkbox 1
        </label>
        <label class="form-checkbox form-inline">
          <input type="checkbox" checked=""><i class="form-icon"></i> Checkbox 2
        </label>
      </div>
    </form>
  </div>
</div>

You can add the `form-inline` class to the form components to make them inline in one row.

```html
<div class="form-group">
  <label class="form-radio form-inline">
    <input type="radio" name="gender" checked=""><i class="form-icon"></i> Male
  </label>
  <label class="form-radio form-inline">
    <input type="radio" name="gender"><i class="form-icon"></i> Female
  </label>
</div>

<div class="form-group">
  <label class="form-checkbox form-inline">
    <input type="checkbox"><i class="form-icon"></i> Checkbox 1
  </label>
  <label class="form-checkbox form-inline">
    <input type="checkbox" checked=""><i class="form-icon"></i> Checkbox 2
  </label>
</div>
```

### Horizontal forms

If you want to have a horizontal form, add the `form-horizontal` class to the `<form>` container. And add the `col-<1-12>` and `col-xs/sm/lg/xl-<1-12>` class to the child elements for responsive form row layout.

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <form class="form-horizontal" action="#forms">
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-4">Name</label>
        </div>
        <div class="col-9 col-sm-12">
          <input class="form-input" id="input-example-4" type="text" placeholder="Name">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-5">Email</label>
        </div>
        <div class="col-9 col-sm-12">
          <input class="form-input" id="input-example-5" type="email" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label">Gender</label>
        </div>
        <div class="col-9 col-sm-12">
          <label class="form-radio">
            <input type="radio" name="gender"><i class="form-icon"></i> Male
          </label>
          <label class="form-radio">
            <input type="radio" name="gender" checked=""><i class="form-icon"></i> Female
          </label>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label">Source</label>
        </div>
        <div class="col-9 col-sm-12">
          <select class="form-select" multiple="">
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-9 col-sm-12 col-ml-auto">
          <label class="form-switch">
            <input type="checkbox"><i class="form-icon"></i> Send me emails with news and tips
          </label>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-example-6">Message</label>
        </div>
        <div class="col-9 col-sm-12">
          <textarea class="form-input" id="input-example-6" placeholder="Textarea" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-9 col-sm-12 col-ml-auto">
          <label class="form-checkbox">
            <input type="checkbox"><i class="form-icon"></i> Remember me
          </label>
        </div>
      </div>
    </form>
  </div>
</div>

```html
<form class="form-horizontal">
  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="input-example-1">Name</label>
    </div>
    <div class="col-9 col-sm-12">
      <input class="form-input" type="text" id="input-example-1" placeholder="Name">
    </div>
  </div>
  <!-- form structure -->
</form>
```


### Groups

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <div class="input-group">
      <input class="form-input input-sm" type="text" placeholder="username">
      <select class="form-select select-sm">
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group"><span class="input-group-addon addon-sm">slack.com/</span>
      <input class="form-input input-sm" type="text" placeholder="site name">
      <button class="btn btn-primary input-group-btn btn-sm">Submit</button>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group">
      <input class="form-input" type="text" placeholder="username">
      <select class="form-select">
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group"><span class="input-group-addon">slack.com/</span>
      <input class="form-input" type="text" placeholder="site name">
      <button class="btn btn-primary input-group-btn">Submit</button>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group">
      <label class="form-switch">
        <input type="checkbox"><i class="form-icon"></i>
      </label>
      <input class="form-input" type="text" placeholder="name">
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group">
      <label class="form-checkbox">
        <input type="checkbox"><i class="form-icon"></i>
      </label>
      <input class="form-input" type="text" placeholder="name">
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group">
      <input class="form-input input-lg" type="text" placeholder="username">
      <select class="form-select select-lg">
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
  </div>
  <div class="column col-6 col-xs-12">
    <div class="input-group"><span class="input-group-addon addon-lg">slack.com/</span>
      <input class="form-input input-lg" type="text" placeholder="site name">
      <button class="btn btn-primary input-group-btn btn-lg">Submit</button>
    </div>
  </div>
</div>

If you want to attach text and button along with an input, add the `input-group` class to the input container. And add the `input-group-addon` class to the text element and `input-group-btn` to the button element.

```html
<!-- normal input group -->
<div class="input-group">
  <span class="input-group-addon">...</span>
  <input type="text" class="form-input" placeholder="...">
</div>

<!-- large input group -->
<div class="input-group">
  <span class="input-group-addon addon-lg">...</span>
  <input type="text" class="form-input input-lg" placeholder="...">
</div>

<!-- normal input group with button -->
<div class="input-group">
  <span class="input-group-addon">...</span>
  <input type="text" class="form-input" placeholder="...">
  <button class="btn btn-primary input-group-btn">Submit</button>
</div>
```

### Sizes

For smaller or larger input and select controls, you could add the `input-sm`/`input-lg`, `select-sm`/`select-lg` and `label-sm`/`label-lg` classes to the elements.

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-xs-12">
    <label class="form-label label-sm">Label</label>
  </div>
  <div class="column col-4 col-xs-12">
    <input class="form-input input-sm" type="text" placeholder="Name">
  </div>
  <div class="column col-4 col-xs-12">
    <select class="form-select select-sm">
      <option>Choose an option</option>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </select>
  </div>
  <div class="column col-4 col-xs-12">
    <label class="form-label label-lg">Label</label>
  </div>
  <div class="column col-4 col-xs-12">
    <input class="form-input input-lg" type="text" placeholder="Name">
  </div>
  <div class="column col-4 col-xs-12">
    <select class="form-select select-lg">
      <option>Choose an option</option>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </select>
  </div>
</div>

You can add the `input-sm`/`input-lg` classes to the input-checkbox, input-radio and input-switch to have different sizes.

## Styles

### Validation styles

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <fieldset>
      <legend>Input</legend>
      <div class="form-group">
        <label class="form-label" for="input-example-17">Name</label>
        <input class="form-input is-success" id="input-example-17" type="text" placeholder="Name">
        <p class="form-input-hint">The name is valid.</p>
      </div>
      <div class="form-group has-error">
        <label class="form-label" for="input-example-18">Password</label>
        <input class="form-input" id="input-example-18" type="password" placeholder="Password">
        <p class="form-input-hint">Passwords must have at least 8 characters.</p>
      </div>
    </fieldset>
    <fieldset>
      <legend>Select</legend>
      <div class="form-group">
        <select class="form-select is-error">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
        <p class="form-input-hint">The option is invalid.</p>
      </div>
      <div class="form-group has-success">
        <select class="form-select">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
        <p class="form-input-hint">The option is available.</p>
      </div>
    </fieldset>
    <fieldset>
      <legend>Checkbox, Radio and Switch (Error state only)</legend>
      <div class="form-group">
        <label class="form-checkbox is-error">
          <input type="checkbox" checked=""><i class="form-icon"></i> I'm not a robot.
        </label>
      </div>
      <div class="form-group has-error">
        <label class="form-radio">
          <input type="radio" name="gender" checked=""><i class="form-icon"></i> Male
        </label>
        <label class="form-radio">
          <input type="radio" name="gender"><i class="form-icon"></i> Female
        </label>
      </div>
      <div class="form-group">
        <label class="form-switch is-error">
          <input type="checkbox" checked=""><i class="form-icon"></i> Send me emails with news and tips
        </label>
      </div>
    </fieldset>
  </div>
</div>

To use form validation styles, you can either add `is-success` or `is-error` class to the controls or add `has-success` or `has-error` class to parent elements. Use the `form-input-hint` class to provide form validation success and error messages.

```html
<form>
  <!-- form validation class: has-success -->
  <div class="form-group has-success">
    <label class="form-label" for="input-example-1">Name</label>
    <input class="form-input" type="text" id="input-example-1" placeholder="...">
    <p class="form-input-hint">The name is invalid.</p>
  </div>

  <!-- form validation class: is-success -->
  <div class="form-group">
    <label class="form-label" for="input-example-1">Name</label>
    <input class="form-input is-success" type="text" id="input-example-1" placeholder="...">
    <p class="form-input-hint">The name is invalid.</p>
  </div>

  <!-- form validation example for checkbox, radio and switch -->
  <div class="form-group">
    <label class="form-checkbox is-error">
      <input type="checkbox">
      <i class="form-icon"></i> Remember me
    </label>
  </div>
</form>
```

<div class="vp-raw docs-demo columns">
  <div class="column col-9 col-sm-12">
    <div class="form-group">
      <label class="form-label" for="input-example-21">Email</label>
      <input class="form-input" id="input-example-21" type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,14}$">
    </div>
    <div class="form-group">
      <label class="form-label" for="input-example-22">Password</label>
      <input class="form-input" id="input-example-22" type="password" placeholder="Password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$">
    </div>
  </div>
</div>

You can use input `pattern` attribute to validate the value as well.

```html
<!-- pattern validation example for Email -->
<input class="form-input" type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$">

<!-- pattern validation example for password (8 or more characters that are of at least one number, and one uppercase and lowercase letter) -->
<input class="form-input" type="password" placeholder="Password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$">
```

### Disabled styles

Add the `disabled` attribute to the element or `<fieldset>` for a disabled form components style.

<div class="vp-raw docs-demo columns">
  <div class="column col-6 col-xs-12">
    <form action="#forms">
      <fieldset disabled="">
        <div class="form-group">
          <label class="form-label" for="input-example-19">Name</label>
          <input class="form-input" id="input-example-19" type="text" placeholder="Name">
        </div>
        <div class="form-group">
          <label class="form-label">Gender</label>
          <label class="form-radio">
            <input type="radio" name="gender" disabled=""><i class="form-icon"></i> Male
          </label>
          <label class="form-radio">
            <input type="radio" name="gender" disabled=""><i class="form-icon"></i> Female
          </label>
        </div>
        <div class="form-group">
          <select class="form-select" disabled="">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox" disabled=""><i class="form-icon"></i> Send me emails with news and tips
          </label>
        </div>
        <div class="form-group">
          <label class="form-label" for="input-example-20">Message</label>
          <textarea class="form-input" id="input-example-20" placeholder="Textarea" rows="3" disabled=""></textarea>
        </div>
        <div class="form-group">
          <label class="form-checkbox">
            <input type="checkbox" disabled=""><i class="form-icon"></i> Remember me
          </label>
        </div>
      </fieldset>
    </form>
  </div>
</div>

```html
<form action="#forms">
  <fieldset disabled>
    <div class="form-group">
      <label class="form-label" for="input-example-19">Name</label>
      <input class="form-input" type="text" id="input-example-19" placeholder="Name">
    </div>
    <div class="form-group">
      <label class="form-label">Gender</label>
      <label class="form-radio">
        <input type="radio" name="gender" disabled>
        <i class="form-icon"></i> Male
      </label>
      <label class="form-radio">
        <input type="radio" name="gender" disabled>
        <i class="form-icon"></i> Female
      </label>
    </div>
    <div class="form-group">
      <select class="form-select" disabled>
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox" disabled>
        <i class="form-icon"></i> Send me emails with news and tips
      </label>
    </div>
    <div class="form-group">
      <label class="form-label" for="input-example-20">Message</label>
      <textarea class="form-input" id="input-example-20" placeholder="Textarea" rows="3" disabled></textarea>
    </div>
    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" disabled>
        <i class="form-icon"></i> Remember me
      </label>
    </div>
  </fieldset>
```

<!-- @see https://github.com/spectre-org/spectre-docs/issues/17 -->
