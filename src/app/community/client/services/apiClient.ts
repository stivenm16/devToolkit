import { RequestType } from '../types/ClientTypes'

const apiClient = (requestDetails: RequestType) => {
  let requestOptions: RequestType = {
    method: requestDetails.method,
    headers: {},
  }
  if (requestDetails.headers?.length > 0) {
    const customHeaders = new Headers()
    requestDetails.headers!.forEach((header: any) => {
      customHeaders.append(header.key, header.value)
    })
    // customHeaders.append('Content-Type', 'application/json')
    requestOptions = {
      ...requestOptions,
      headers: customHeaders,
    }
  }

  return fetch(requestDetails.url!, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export default apiClient
