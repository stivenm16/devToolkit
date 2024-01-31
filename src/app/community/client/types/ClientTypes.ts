export interface Header {
  key: string
  value: string
}

export interface RequestType {
  method: string
  url?: string
  headers?: any
  body?: string
}
