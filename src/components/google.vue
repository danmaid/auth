<template>
  <div>
    <v-btn v-if="!isAuthenticated" @click="login">Log in</v-btn>
    <v-btn v-if="isAuthenticated" @click="logout">Log out</v-btn>
  </div>
</template>

<script>
import { clientId } from '@/../config/google.json'

export default {
  data() {
    return {
      auth2: null,
      isAuthenticated: false,
      authResponse: null,
      user: null,
      idToken: null
    }
  },
  computed: {
    model() {
      return {
        id: 'google',
        isAuthenticated: this.isAuthenticated,
        idToken: this.idToken
      }
    }
  },
  watch: {
    model(v) {
      this.$emit('input', v)
    }
  },
  async mounted() {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'google-signin-client_id')
    meta.setAttribute(
      'content',
      '316279479359-iootvac9v6c9vevqpj0378sgaq1lrfdv.apps.googleusercontent.com'
    )
    document.head.appendChild(meta)
    await this.$loadScript('https://apis.google.com/js/platform.js')
    const gapi = window.gapi
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: clientId
      })
      this.auth2.isSignedIn.listen(state => {
        this.isAuthenticated = state
      })
      this.auth2.currentUser.listen(user => {
        this.user = user
        this.authResponse = user.getAuthResponse()
        if (this.authResponse.id_token) {
          const payload = this.authResponse.id_token
            .split('.')[1]
            .replace(/-/g, '+')
            .replace(/_/g, '/')
          this.idToken = JSON.parse(decodeURIComponent(escape(atob(payload))))
        } else {
          this.idToken = {}
        }
      })
      this.auth2.attachClickHandler('signin-button', {}, this.onSignIn)
    })
  },
  methods: {
    login() {
      this.auth2.signIn()
    },
    logout() {
      this.auth2.signOut()
    }
  }
}
</script>

<style>
</style>
