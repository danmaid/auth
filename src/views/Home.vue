<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
      <!-- show logout when authenticated -->
      <v-btn v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
    </div>

    <div v-if="$auth.isAuthenticated">
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>
