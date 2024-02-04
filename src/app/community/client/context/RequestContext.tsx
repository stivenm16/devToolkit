'use client'
import React, { ReactNode, createContext, useState } from 'react'
import { RequestDetails } from '../types/ClientTypes'

const defaultValues = {
  method: 'GET',
  url: '',
  headers: [{ key: '', value: '' }],
  body: '',
}

interface ClientContextProps {
  configApiCall: RequestDetails
  changeContent: (newContent: RequestDetails) => void
}
interface ClientProviderProps {
  children: ReactNode
}

const ClientContext = createContext<ClientContextProps>({
  configApiCall: defaultValues,
  changeContent: () => null,
})

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [configApiCall, setConfigApiCall] =
    useState<RequestDetails>(defaultValues)

  const changeContent = (newContent: RequestDetails) => {
    setConfigApiCall(newContent)
  }

  const contextValues: ClientContextProps = {
    configApiCall,
    changeContent,
  }

  return (
    <ClientContext.Provider value={contextValues}>
      {children}
    </ClientContext.Provider>
  )
}

export { ClientContext, ClientProvider }
