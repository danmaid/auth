<template>
  <div id="app">
    <v-container fluid>
      <v-data-table :items="authenticators" :headers="headers">
        <template v-slot:item.value.idToken="{ item }">
          <pre>{{ JSON.stringify(item.value.idToken, null, 2) }}</pre>
        </template>
        <template v-slot:item.component="{ item }">
          <component :is="item.component" v-model="item.value" />
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import Auth0 from './components/Auth0.vue'

export default {
  components: { Auth0 },
  data() {
    return {
      headers: [
        { text: 'id', value: 'value.id' },
        { text: 'isAuthenticated', value: 'value.isAuthenticated' },
        { text: 'idToken', value: 'value.idToken' },
        { text: 'action', value: 'component' }
      ],
      authenticators: [{ component: Auth0, value: {} }]
    }
  }
}
</script>

<style lang="scss">
:root {
  overflow-y: auto;
}
</style>
