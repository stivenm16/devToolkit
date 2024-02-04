import { METHOD, Option } from '../types/ClientTypes'

export const tabOptions: Option[] = [
  { value: 'Response', label: 'Response' },
  { value: 'TS', label: 'TS' },
]

export const apiMethods: Option[] = [
  { value: METHOD.GET, label: METHOD.GET },
  { value: METHOD.POST, label: METHOD.POST },
  { value: METHOD.DELETE, label: METHOD.DELETE },
]
