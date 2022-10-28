import copy from 'copy-to-clipboard'
import { useState } from 'react'

export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState<boolean>()

  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}
