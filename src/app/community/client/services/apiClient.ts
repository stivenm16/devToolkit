import { RequestDetails } from '../types/ClientTypes'

const apiClient = async (requestDetails: RequestDetails) => {
  try {
    const response = await fetch('/api/testApi', {
      method: requestDetails.method,
      body: requestDetails.body,
    })
    const data = response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default apiClient
