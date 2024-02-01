export interface Header {
  key: string
  value: string
}

export interface RequestDetails {
  method: string
  url?: string
  headers?: any
  body?: string
}

export interface Option {
  value: string
  label: string
}
