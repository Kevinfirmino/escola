<template>
  <font-awesome-icon :icon="icon" :class="className" />
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Icon',
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
