export interface Header {
  key: string
  value: string
}

export interface RequestDetails {
  method?: string
  url?: string
  headers?: any
  body?: any
  mode?: any
}

export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}
