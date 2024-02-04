import { METHOD, RequestDetails } from '../types/ClientTypes'

const apiClient = async (requestDetails: RequestDetails) => {
  try {
    const response = await fetch('/api/Client', {
      method: METHOD.POST,
      body: JSON.stringify(requestDetails),
    })
    const data = response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default apiClient
