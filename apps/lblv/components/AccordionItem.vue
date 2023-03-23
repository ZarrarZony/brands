<template>
  <li class="border-t border-dotted border-gray-86 first:border-none">
    <div
      class="relative py-2.5 text-gray-80 text-sm font-semibold cursor-pointer"
      :class="accordionVariant"
      @click="open(title)"
    >
      <outline-check-circle-icon v-if='!visible' class='w-4 absolute top-0 h-full' :class='iconVariant'/>
      <outline-plus-circle-icon v-if='visible' class='w-4 absolute top-0 h-full rotate-45' :class='iconVariant'/>
      {{title}}
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        v-show="visible"
      >
        <!-- This slot will handle all the content that is passed to the accordion -->
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </li>
</template>

<script>
const variants = {
  gray: 'pl-9 bg-gray-94',
  transparent: 'pl-5'
}
const iconVariants = {
  gray: 'left-3.5',
  transparent: 'left-0'
}
export default {
  name: 'AccordionItem',
  inject: ["Accordion"],
  props: {
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'transparent',
    },
  },
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    },
    accordionVariant() {
      return variants[this.variant]
    },
    iconVariant() {
      return iconVariants[this.variant]
    }
  },
  created() {
    this.index = this.Accordion.count++;
  },
  methods: {
    open(item) {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
