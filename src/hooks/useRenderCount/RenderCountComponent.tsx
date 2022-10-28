import useToggle from '../useToggle/useToggle'
import useRenderCount from './useRenderCount'

export default function RenderCountComponent() {
  const [boolean, toggle] = useToggle(false)

  const renderCount = useRenderCount()

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}
