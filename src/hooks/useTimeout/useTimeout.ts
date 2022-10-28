import { useCallback, useEffect, useRef } from 'react'

type useTimeoutProps = {
  callback: () => any
  delay: number
}

type useTimeoutResponse = {
  reset: () => any
  clear: () => any
}

export default function useTimeout({ callback, delay }: useTimeoutProps): useTimeoutResponse {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<number>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
