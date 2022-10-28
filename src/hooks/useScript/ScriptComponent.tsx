import useScript from './useScript'

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    $: any
  }
}

export default function ScriptComponent() {
  const { loading, error } = useScript('https://code.jquery.com/jquery-3.6.0.min.js')

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  return <div>{window.$(window).width()}</div>
}
