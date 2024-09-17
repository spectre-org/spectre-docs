---
title: Empty states
description: 
order: 
---

# Empty states

Empty states/blank slates are commonly used as placeholders for first time use, empty data and error screens.

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
      <p class="empty-title h5">You have no new messages</p>
      <p class="empty-subtitle">Click the button to start a conversation</p>
      <div class="empty-action">
        <button class="btn btn-primary">Send a message</button>
      </div>
    </div>
  </div>
  <div class="column col-12">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
      <p class="empty-title h5">You've successfully signed up</p>
      <p class="empty-subtitle">Click the button to invite your friends</p>
      <div class="empty-action">
        <button class="btn btn-primary">Invite your friends</button>
      </div>
      <div class="empty-action">
        <button class="btn btn-link">Skip</button>
      </div>
    </div>
  </div>
  <div class="column col-12">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p class="empty-title h5">You are not following anyone</p>
      <p class="empty-subtitle">Start to meet new friends</p>
      <div class="empty-action input-group input-inline">
        <input class="form-input" type="text" placeholder="">
        <button class="btn btn-primary input-group-btn">Search</button>
      </div>
    </div>
  </div>
</div>

An empty state component can include icons, messages (title and subtitle messages) and action buttons or any combination of those elements. Add `empty-icon`, `empty-title`, `empty-subtitle` or `empty-action` to the elements. HTML structure is exampled below.

```html
<div class="empty">
  <div class="empty-icon">
    <i class="icon icon-people"></i>
  </div>
  <p class="empty-title h5">You have no new messages</p>
  <p class="empty-subtitle">Click the button to start a conversation.</p>
  <div class="empty-action">
    <button class="btn btn-primary">Send a message</button>
  </div>
</div>
```
