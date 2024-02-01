'use client'
import { Button, CodeSnippet, CustomSelect } from '@/app/components/ui'
import { json2ts } from 'json-ts'
import React, { ChangeEvent, useState } from 'react'
import apiClient from '../services/apiClient'
import { Option, RequestDetails } from '../types/ClientTypes'
import Headers from './Headers'

const Client: React.FC = () => {
  const [requestDetails, setRequestDetails] = useState<RequestDetails>({
    method: 'GET',
    url: '',
    headers: [{ key: '', value: '' }],
    body: '',
  })

  const [response, setResponse] = useState<any>(null)
  const [interfaceParsed, setInterfaceParsed] = useState('')
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setRequestDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
  }

  const handleHeaderChange = (headers: Headers[]) => {
    setRequestDetails((prevDetails: any) => ({
      ...prevDetails,
      headers: headers,
    }))
  }
  const handleSendRequest = async () => {
    try {
      const headersToLog =
        requestDetails.headers.length > 1
          ? requestDetails.headers.slice(0, requestDetails.headers.length - 1)
          : null
      const res = await apiClient({ ...requestDetails, headers: headersToLog! })

      const getTypes = json2ts(JSON.stringify(res))

      setInterfaceParsed(getTypes)
      setResponse(res)
    } catch (error: any) {
      setResponse(error?.response?.data || 'An error occurred')
    }
  }

  const options: Option[] = [
    { value: 'GET', label: 'GET' },
    { value: 'POST', label: 'POST' },
    { value: 'DELETE', label: 'DELETE' },
  ]
  const [selectedOption, setSelectedOption] = React.useState(options[0])

  return (
    <div className="  bg-indigo-900 text-white p-12 w-5/6 ml-auto mt-10 rounded-tl-[5rem] shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Client</h2>
      <div className="mb-4 flex">
        <div>
          <label className="block text-sm font-medium">Method</label>
          <CustomSelect
            options={options}
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium">URL</label>
          <input
            type="text"
            name="url"
            placeholder="https://api.example.com"
            value={requestDetails.url}
            onChange={handleInputChange}
            className="h-9 p-2 border-indigo-900 rounded-md w-full bg-indigo-700 text-white"
          />
        </div>
      </div>
      <label>Headers</label>
      <Headers
        headers={requestDetails.headers!}
        setHeaders={handleHeaderChange}
      />
      <Button onClick={handleSendRequest}>Send Request</Button>

      {response !== null && (
        <div className="mt-4 bg-indigo-500 p-5 rounded-md flex gap-5">
          <div className="flex flex-col  flex-wrap">
            <h3 className="text-lg font-semibold mb-2">Response:</h3>

            <CodeSnippet
              codeSnippet={JSON.stringify(response, null, 2)}
              wCodeSnippet={550}
            />
          </div>
          <div className="flex flex-col relative">
            <h3 className="text-lg font-semibold mb-2">Response:</h3>

            <CodeSnippet codeSnippet={interfaceParsed} wCodeSnippet={500} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Client
