import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import Config from 'react-native-config'

const api = (): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: Config.TMDB_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Config.TMDB_TOKEN}`
    }
  })

  const onInterceptorSuccess = async (res: AxiosResponse<any>) => {
    return res
  }

  const onInterceptorFailed = (err: any) => {
    const error: AxiosError<TMDBError> = err as AxiosError<TMDBError>

    const apiError: TMDBError = {
      status_code: error.response?.data.status_code || null,
      status_message: error.response?.data.status_message || 'Um erro inesperado ocorreu'
    }

    return Promise.reject(apiError)
  }

  instance.interceptors.response.use(onInterceptorSuccess, onInterceptorFailed)

  return instance
}

export type TMDBError = {
  status_code: number | null
  status_message: string
}

export default api()
