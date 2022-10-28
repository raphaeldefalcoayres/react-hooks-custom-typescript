import { useState } from 'react'
import useDebounce from './useDebounce'

export default function DebounceComponent() {
  const [count, setCount] = useState(10)
  useDebounce({ callback: () => alert(count), delay: 1000, dependencies: [count] })

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}
