interface Props {
  padding?: string
}

const DotsCodeEditor = ({ padding = '6' }: Props) => {
  return (
    <div className={`h-10  w-full  flex gap-4 p-4 pl-${padding}`}>
      <div className="h-4 w-4 bg-red-500 rounded-full"></div>
      <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
    </div>
  )
}

export default DotsCodeEditor
