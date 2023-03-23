<template>
  <div class='w-full'>
    <table class='w-full'>
      <thead>
      <tr class='border-b-2 border-gray-86'>
        <th
          v-for='item in tableHead'
          :key='item'
          class='p-2 text-center text-lg'
        >
          <h4 v-html='item'/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for='row in tableBody'
        :key='row.join("")'
        class='border-t border-gray-86 hover:bg-gray-10'
      >
        <td
          v-for='item in row'
          :key='item'
          class='p-2 text-gray-33 text-center first:text-left first:font-semibold'
        >
          {{checkContent(item)}}
          <solid-check-icon v-if='item === "ok"' class='inline-block w-6 text-green-700'/>
          <outline-plus-icon v-if='item === "remove"' class='inline-block w-6 rotate-45 text-red-600'/>
          <Button
            v-if='item === "button"'
            link
            to='/login'
            :label='$t("signUp")'
            variant='primary'
            class='m-1 max-h-9'
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AccountTypesTable',
  computed: {
    tableHead() {
      return this.getTranslationValue('thead')
    },
    tableBody() {
      return this.getTranslationValue('tbody')
    },
  },
  methods: {
    checkContent(item) {
      if (item !== 'ok' && item !== 'remove' && item !== 'button') {
        return item
      }
    },
    getTranslationValue(key) {
      const { path } = this.$route
      let area = path.split('/');
      let route = path.split('/');

      if(area.length === 4) {
        area = area.splice(2,2).join('/')
        route = route.splice(2,1).join('.')
      } else {
        area = area.splice(1, 2).join('/')
        route = route.splice(1,1).join('.')
      }

      return this.$i18n.t(`${route}.table./${area}.${key}`)
    },
  },
}
</script>

<style scoped>

</style>
