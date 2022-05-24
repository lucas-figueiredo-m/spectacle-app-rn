import axios, { AxiosInstance } from 'axios'
import Config from 'react-native-config'

const api = (): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: Config.TMDB_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // const onInterceptorSuccess = async (res: AxiosResponse<any>) => {
  //   return res
  // }

  // const onInterceptorFailed = (err: any) => {
  //   const error: AxiosError<string> = err as AxiosError<string>

  //   const apiError: ApiError = {
  //     type: error.isAxiosError ? 'AXIOS' : 'OFFLINE',
  //     code: error.response?.status || null,
  //     message: error.response?.data.error_description || 'Um erro inesperado ocorreu'
  //   }

  //   return Promise.reject(apiError)
  // }

  instance.defaults.headers.common.Authorization = `Bearer ${Config.TMDB_TOKEN}`

  // instance.interceptors.response.use(onInterceptorSuccess, onInterceptorFailed)

  return instance
}

export type ApiError = {
  type: 'OFFLINE' | 'AXIOS'
  code: number | null
  message: string
}

export default api()
