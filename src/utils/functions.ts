export const isBrowser = () => {
  return typeof window !== 'undefined'
}

export const tryJSONparse = (obj: any) => {
  try {
    return JSON.parse(obj)
  } catch {
    return obj
  }
}
export const tryJSONStringify = (obj: any) => {
  if (typeof obj === 'string') return obj
  try {
    return JSON.stringify(obj)
  } catch {
    return obj
  }
}

export declare type ResponseContentType = 'JSON' | 'BLOB' | 'FORM-DATA' | 'TEXT' | 'ARRAY-BUFFER' | 'RAW'

export interface FetchInterface extends RequestInit {
  url: string
  body?: any
  method?: string
  onSuccess: (response: any) => void
  onError: (error: any) => void
  stringify?: boolean
  responseContentType?: ResponseContentType
}

export const applicationJSONHeader = { 'Content-Type': 'application/json' }
