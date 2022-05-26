import { AuthConfiguration } from 'react-native-app-auth'
import Config from 'react-native-config'
import axios from 'axios'

export const config: AuthConfiguration = {
  clientId: Config.SPOTIFY_CLIENT_ID, // available on the app page
  clientSecret: Config.SPOTIFY_CLIENT_SECRET, // click "show client secret" to see this
  redirectUrl: 'com.spectacle:/oauth', // the redirect you defined after creating the app
  scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // the scopes you need to access
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token'
  }
}

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1'
})

export default api
