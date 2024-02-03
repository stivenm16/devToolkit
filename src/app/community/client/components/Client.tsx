'use client'
import { Button, CodeSnippet, CustomSelect } from '@/app/components/ui'
import { json2ts } from 'json-ts'
import React, { ChangeEvent, useContext, useState } from 'react'
import { ClientContext } from '../context/RequestContext'
import apiClient from '../services/apiClient'
import { Option } from '../types/ClientTypes'
import Tabs from './configTabs/Tabs'

const tabOptions: Option[] = [
  { value: 'Response', label: 'Response' },
  { value: 'TS', label: 'TS' },
]

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

const Client: React.FC = () => {
  const options: Option[] = [
    { value: METHOD.GET, label: METHOD.GET },
    { value: METHOD.POST, label: METHOD.POST },
    { value: METHOD.DELETE, label: METHOD.DELETE },
  ]
  const { configApiCall, changeContent } = useContext(ClientContext)

  const [selectedOption, setSelectedOption] = React.useState(options[0])
  const [selectTab, setSelectTab] = React.useState(tabOptions[0])
  const [response, setResponse] = useState<any>(null)
  const [interfaceParsed, setInterfaceParsed] = useState('')
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target
    changeContent({ ...configApiCall, url: value })
  }

  const handleSendRequest = async () => {
    try {
      const headersToLog =
        configApiCall.headers.length > 1
          ? configApiCall.headers.slice(0, configApiCall.headers.length - 1)
          : null

      const res = await apiClient({
        ...configApiCall,
        headers: headersToLog!,
        method: selectedOption.value,
      })

      const json = JSON.stringify(res, null, 2)

      const getTypes = json2ts(json)
      setInterfaceParsed(getTypes)
      setResponse(json)
    } catch (error: any) {
      setResponse(error?.response?.data || 'An error occurred')
    }
  }

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
            value={configApiCall.url}
            onChange={handleInputChange}
            className="h-9 p-2 border-indigo-900 rounded-md w-full bg-indigo-700 text-white"
          />
        </div>
      </div>

      <Tabs />

      <Button onClick={handleSendRequest}>Send Request</Button>
      <div className="mt-4 bg-indigo-800 p-5 min-h-96 rounded-md flex gap-5">
        <CustomSelect
          options={tabOptions}
          onChange={setSelectTab}
          selectedOption={selectTab}
          customStyles="w-24"
        />
        {response !== null && (
          <>
            <div className="flex flex-col w-full flex-wrap mx-auto">
              {selectTab.value === 'Response' ? (
                <CodeSnippet
                  codeSnippet={JSON.stringify(JSON.parse(response), null, 2)}
                />
              ) : (
                <CodeSnippet codeSnippet={interfaceParsed} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Client
