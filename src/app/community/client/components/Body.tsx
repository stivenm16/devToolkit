import { Button } from '@/app/components'
import { useEffect, useRef } from 'react'
import { JSONEditor, JSONEditorPropsOptional, Mode } from 'vanilla-jsoneditor'
import { useClient } from '../context/RequestContext'

const JSONEditorReact: React.FC<JSONEditorPropsOptional> = (props) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refEditor = useRef<JSONEditor | null>(null)
  const { configApiCall, changeContent } = useClient()

  useEffect(() => {
    refEditor.current = new JSONEditor({
      target: refContainer.current!,
      props: {
        mode: Mode.text,
        mainMenuBar: false,
        statusBar: false,
      },
    })
    return () => {
      if (refEditor.current) {
        refEditor.current.destroy()
        refEditor.current = null
      }
    }
  }, [])

  const updateBody = () => {
    const { text } = refEditor.current?.get() as any
    changeContent({ ...configApiCall, body: text })
  }
  useEffect(() => {
    if (refEditor.current) {
      refEditor.current.updateProps(props)
    }
  }, [props])

  return (
    <div className="relative rounded-2xl overflow-hidden my-5">
      <div ref={refContainer} className="json-editor " />
      <Button
        label="Save"
        customStyles="absolute bottom-2 right-2"
        onClick={updateBody}
      />
    </div>
  )
}

export default JSONEditorReact
