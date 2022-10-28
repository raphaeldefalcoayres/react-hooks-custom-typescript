import { useCallback, useEffect, useState } from 'react'

type useLocalStorageProps = {
  key: string
  defaultValue?: any
}

type useStorageProps = {
  key: string
  defaultValue?: any
  storageObject: any
}

export function useLocalStorage({ key, defaultValue }: useLocalStorageProps) {
  return useStorage({ key, defaultValue, storageObject: window.sessionStorage })
}

export function useSessionStorage({ key, defaultValue }: useLocalStorageProps) {
  return useStorage({ key, defaultValue, storageObject: window.sessionStorage })
}

function useStorage({ key, defaultValue, storageObject }: useStorageProps) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === 'function') {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}
