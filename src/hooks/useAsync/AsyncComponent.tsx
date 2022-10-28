import useAsync from './useAsync'

export default function AsyncComponent() {
  const { loading, error, value } = useAsync({
    callback: () => {
      return new Promise((resolve, reject) => {
        const success = false
        setTimeout(() => {
          success ? resolve('Hi') : reject('Error')
        }, 1000)
      })
    },
    dependencies: [],
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}
