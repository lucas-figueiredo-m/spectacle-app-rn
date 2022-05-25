declare module 'react-native-config' {
  interface ReactNativeConfigEnv {
    ENV: string
    TMDB_URL: string
    TMDB_TOKEN: string
    TMDB_IMAGE_URI: string
  }

  const config: ReactNativeConfigEnv

  export default config
}
