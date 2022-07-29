
import Image from 'next/image'

const Stack = (props) => {
  return (
    <div className='mt-8 w-full'>
      <div className='flex justify-center'>
        <h2 className='m-auto text-white font-semibold text-xl opacity-80'>{props.type}</h2>
      </div>
        <div className='grid grid-cols-2 gap-y-4 mt-8 w-11/12 m-auto'>
        {props.technos.map(techno => (
          <div className='my-3 align-middle m-auto' key={techno.id}>
          <Image src={techno.icon} alt={`${techno.name} icône`} width="64px" height="64px" loading='lazy'  />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Stack