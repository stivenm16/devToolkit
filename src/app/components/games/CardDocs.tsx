import Link from 'next/link'
import { ButtonT } from '../ui'

interface Props {
  path: string
  text: string
}
const CardDocs = ({ path, text }: Props) => {
  const gameName = path.split('/')[2]
  return (
    <div className="md:mx-10 animate-fade-in-cards my-10 h-2/3 md:h-[34rem] flex flex-col py-5 px-10 bg-indigo-800 shadow-3xl rounded-lg text-white w-full items-center">
      <Link className="my-5" href={path}>
        <ButtonT label={`Try this ${gameName}! `} />
      </Link>

      <p>{text}</p>
    </div>
  )
}

export default CardDocs
