<template>
  <div class="auth0">
    <div v-if="!loading">
      <!-- show login when not authenticated -->
      <v-row>
        <v-col>
          <v-btn v-if="!isAuthenticated" @click="loginWithPopup">Log in with Popup</v-btn>
        </v-col>
        <v-col>
          <v-btn v-if="!isAuthenticated" @click="loginWithRedirect">Log in with Redirect</v-btn>
        </v-col>
      </v-row>
      <!-- show logout when authenticated -->
      <v-btn v-if="isAuthenticated" @click="logout">Log out</v-btn>
    </div>

    <!-- <div v-if="isAuthenticated">
      <img :src="user.picture" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
    <div>
      <pre>{{ JSON.stringify(idToken, null, 2) }}</pre>
    </div>-->
  </div>
</template>

<script>
import createAuth0Client from '@auth0/auth0-spa-js'
import { domain, clientId } from '@/../config/auth0.json'

export default {
  data() {
    return {
      loading: true,
      isAuthenticated: false,
      user: {},
      auth0Client: null,
      popupOpen: false,
      error: null,
      idToken: null
    }
  },
  computed: {
    model() {
      const { __raw, ...idToken } = this.idToken
        ? this.idToken
        : { __raw: null }
      return {
        id: 'auth0',
        isAuthenticated: this.isAuthenticated,
        user: this.user,
        idToken: idToken
      }
    }
  },
  watch: {
    model(v) {
      this.$emit('input', v)
    }
  },
  methods: {
    /** Authenticates the user using a popup window */
    async loginWithPopup(o) {
      this.popupOpen = true

      try {
        await this.auth0Client.loginWithPopup(o)
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      } finally {
        this.popupOpen = false
      }

      this.user = await this.auth0Client.getUser()
      this.idToken = await this.auth0Client.getIdTokenClaims()
      this.isAuthenticated = true
    },
    /** Handles the callback when logging in using a redirect */
    async handleRedirectCallback() {
      this.loading = true
      try {
        await this.auth0Client.handleRedirectCallback()
        this.user = await this.auth0Client.getUser()
        this.idToken = await this.auth0Client.getIdTokenClaims()
        this.isAuthenticated = true
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    },
    /** Authenticates the user using the redirect method */
    loginWithRedirect(o) {
      return this.auth0Client.loginWithRedirect(o)
    },
    /** Returns all the claims present in the ID token */
    getIdTokenClaims(o) {
      return this.auth0Client.getIdTokenClaims(o)
    },
    /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
    getTokenSilently(o) {
      return this.auth0Client.getTokenSilently(o)
    },
    /** Gets the access token using a popup window */

    getTokenWithPopup(o) {
      return this.auth0Client.getTokenWithPopup(o)
    },
    /** Logs the user out and removes their session on the authorization server */
    logout() {
      return this.auth0Client.logout({ clientId, returnTo: window.location.href })
    }
  },
  /** Use this lifecycle method to instantiate the SDK client */
  async created() {
    // Create a new instance of the SDK client using members of the given options object
    this.auth0Client = await createAuth0Client({
      domain: domain,
      client_id: clientId,
      redirect_uri: window.location.href
    })

    try {
      // If the user is returning to the app after authentication..
      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        // // handle the redirect and retrieve tokens
        // const { appState } = await this.auth0Client.handleRedirectCallback()
        await this.auth0Client.handleRedirectCallback()

        // // Notify subscribers that the redirect callback has happened, passing the appState
        // // (useful for retrieving any pre-authentication state)
        // onRedirectCallback(appState)
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )
      }
    } catch (e) {
      this.error = e
    } finally {
      // Initialize our internal authentication state
      this.isAuthenticated = await this.auth0Client.isAuthenticated()
      this.user = await this.auth0Client.getUser()
      this.idToken = await this.auth0Client.getIdTokenClaims()
      this.loading = false
    }
  }
}
</script>

<style>
</style>
