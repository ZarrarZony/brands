<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Accordion',
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
}
</script>

<style  scoped>

</style>
