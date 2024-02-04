import { json2ts } from 'json-ts'
import { useContext, useState } from 'react'
import { ClientContext } from '../context/RequestContext'
import apiClient from '../services/apiClient'

const useApiClient = () => {
  const { configApiCall } = useContext(ClientContext)
  const [response, setResponse] = useState<any>(null)
  const [interfaceParsed, setInterfaceParsed] = useState('')

  const handleSendRequest = async () => {
    try {
      const headersToLog =
        configApiCall.headers.length > 1
          ? configApiCall.headers.slice(0, configApiCall.headers.length - 1)
          : null

      const res = await apiClient({
        ...configApiCall,
        headers: headersToLog!,
      })

      const json = JSON.stringify(res, null, 2)

      const getTypes = json2ts(json)
      setInterfaceParsed(getTypes)
      setResponse(json)
    } catch (error: any) {
      setResponse(error?.response?.data || 'An error occurred')
    }
  }

  return {
    handleSendRequest,
    interfaceParsed,
    response,
  }
}

export default useApiClient
