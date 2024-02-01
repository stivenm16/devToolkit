import { RequestDetails } from '../types/ClientTypes'

const apiClient = async (requestDetails: RequestDetails) => {
  let requestOptions: RequestDetails = {
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

  try {
    const response = await fetch(requestDetails.url!, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default apiClient
