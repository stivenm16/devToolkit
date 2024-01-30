'use client'
import { Button, CustomSelect } from '@/app/components/ui'
import React, { ChangeEvent, useState } from 'react'
import Headers from './components/Headers'

interface RequestDetails {
  method: string
  url: string
  headers: Record<string, string>
  body: string
}

interface Option {
  value: string
  label: string
}

const Client: React.FC = () => {
  const [requestDetails, setRequestDetails] = useState<RequestDetails>({
    method: 'GET',
    url: '',
    headers: {},
    body: '',
  })

  const [response, setResponse] = useState<any>(null) // Replace 'any' with the expected response type

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setRequestDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
  }

  const handleHeaderChange = (key: string, value: string) => {
    setRequestDetails((prevDetails) => ({
      ...prevDetails,
      headers: { ...prevDetails.headers, [key]: value },
    }))
  }
  const handleSendRequest = async () => {
    try {
      //   const res = await axios({
      //     method: requestDetails.method,
      //     url: requestDetails.url,
      //     headers: requestDetails.headers,
      //     data: requestDetails.body,
      //   })
      const res = { data: 'Response data' }

      setResponse(res)
    } catch (error: any) {
      setResponse(error.response?.data || 'An error occurred')
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

      {/* <div className="mb-4">
        <label className="block text-sm font-medium">Headers</label>
        <textarea
          name="headers"
          value={JSON.stringify(requestDetails.headers, null, 2)}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-indigo-700 text-white"
        />
      </div> */}
      <label>Headers</label>
      <Headers />
      {/* <div className="mb-4">
        <label className="block text-sm font-medium">Headers</label>
        <div className="flex flex-col space-y-2"></div>
      </div> */}
      <Button onClick={handleSendRequest}>Send Request</Button>

      {response !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Response:</h3>
          <pre className="p-2 bg-gray-200 rounded-md text-black">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default Client
