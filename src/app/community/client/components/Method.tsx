import { CustomSelect } from '@/app/components/'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/RequestContext'
import { apiMethods } from '../utils'

const Method = () => {
  const { configApiCall, changeContent } = useContext(ClientContext)
  const [selectedMethod, setSelectedMethod] = useState(apiMethods[0])
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target
    changeContent({ ...configApiCall, url: value })
  }
  useEffect(() => {
    changeContent({ ...configApiCall, method: selectedMethod.value })
  }, [selectedMethod])
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Client</h2>
      <div className="mb-4 flex">
        <div>
          <label className="block text-sm font-medium">Method</label>
          <CustomSelect
            options={apiMethods}
            selectedOption={selectedMethod}
            onChange={setSelectedMethod}
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
    </>
  )
}

export default Method
