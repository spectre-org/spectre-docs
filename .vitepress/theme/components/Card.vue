<template>
  <div class="column col-6 col-xs-12">
    <div class="card">
      <div class="card-header">
        <div class="card-title h5">{{ title }}</div>
      </div>
      <div class="card-body">{{ desc }}</div>
      <div class="card-footer"><a class="btn btn-primary" :href="path">View</a></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    }
  }
})
</script>
