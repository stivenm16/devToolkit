interface Props {
  size?: number
}
const Spinner = ({ size }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full h-${!size ? '12' : size} w-${
          !size ? '12' : size
        } border-t-4 border-indigo-700`}
      ></div>
    </div>
  )
}

export default Spinner
