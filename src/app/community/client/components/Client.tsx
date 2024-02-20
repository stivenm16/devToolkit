'use client'
import { Button, CodeSnippet, CustomSelect } from '@/app/components/'
import React from 'react'
import useApiClient from '../hooks/useApiClient'
import { tabOptions } from '../utils'
import Method from './Method'
import Tabs from './Tabs'

const Client: React.FC = () => {
  const { handleSendRequest, response, interfaceParsed } = useApiClient()
  const [selectTab, setSelectTab] = React.useState(tabOptions[0])

  return (
    <div className="  bg-indigo-900 text-white p-12 w-5/6 ml-auto mt-10 rounded-tl-[5rem] shadow-2xl">
      <Method />
      <Tabs />

      <Button onClick={handleSendRequest}>Send Request</Button>
      <div className="mt-4 bg-indigo-800 p-5 min-h-64 rounded-md flex gap-5">
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
                <CodeSnippet codeSnippet={response} />
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
