import useAsync from '../useAsync/useAsync'

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
}

type useFetchProps = {
  url: string
  options: any
  dependencies: any
}

export default function useFetch({ url, options = {}, dependencies = [] }: useFetchProps) {
  return useAsync({
    callback: () => {
      return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
        if (res.ok) return res.json()
        return res.json().then((json) => Promise.reject(json))
      })
    },
    dependencies,
  })
}
