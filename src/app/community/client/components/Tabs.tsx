import { useState } from 'react'
import JSONEditorReact from './Body'
import Headers from './Headers'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<'Headers' | 'Body'>('Headers')

  const handleTabClick = (tab: 'Headers' | 'Body') => {
    setActiveTab(tab)
  }
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium">Tab</label>
        <div className="flex">
          <button
            className={`${
              activeTab === 'Headers' ? 'bg-indigo-800' : 'bg-indigo-700'
            } p-2 rounded-l-md border-l-2 border-t-2 border-b-2 border-indigo-700`}
            onClick={() => handleTabClick('Headers')}
          >
            Headers
          </button>
          <button
            className={`${
              activeTab === 'Body' ? 'bg-indigo-800' : 'bg-indigo-700'
            } p-2 rounded-r-md border-l-2 border-t-2 border-b-2 border-indigo-700`}
            onClick={() => handleTabClick('Body')}
          >
            Body
          </button>
        </div>
      </div>
      <div className="w-full">
        {activeTab === 'Headers' ? (
          <>
            <label>Headers</label>
            <Headers />
          </>
        ) : (
          <JSONEditorReact />
        )}
      </div>
    </>
  )
}

export default Tabs
