import { useRef } from 'react'
import useSize from './useSize'

export default function SizeComponent() {
  const ref = useRef<any>()
  const size = useSize(ref)

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </>
  )
}
