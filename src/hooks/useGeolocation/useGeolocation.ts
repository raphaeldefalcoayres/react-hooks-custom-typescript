import { useEffect, useState } from 'react'

type useGeolocationResponse = {
  loading: boolean
  error: any
  data: any
}

export default function useGeolocation({ options }: { options?: any }): useGeolocationResponse {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)
  const [data, setData] = useState({})

  useEffect(() => {
    const successHandler = (e) => {
      setLoading(false)
      setError(null)
      setData(e.coords)
    }
    const errorHandler = (e) => {
      setError(e)
      setLoading(false)
    }
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options)
    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options)
    return () => navigator.geolocation.clearWatch(id)
  }, [options])

  return { loading, error, data }
}
