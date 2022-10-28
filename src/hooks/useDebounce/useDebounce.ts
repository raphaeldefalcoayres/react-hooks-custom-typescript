import { useEffect } from 'react'
import useTimeout from '../useTimeout/useTimeout'

type useDebounceProps = {
  callback: () => any
  delay: number
  dependencies: any
}

export default function useDebounce({ callback, delay, dependencies }: useDebounceProps) {
  const { reset, clear } = useTimeout({ callback, delay })
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
