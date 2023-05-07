/**
 * Simple Card component with text title and text description
 * Params:
 * title: text title,
 * description: text description
 */
import { Service } from '@/types'

export function TextCard({props}: {props: Service}) {
  return (
    <div className="w-[250px] h-[160px] flex flex-row justify-between p-5 text-white">
      <div className="flex flex-col">
        <props.icon size={30} className='my-1 mr-6'/>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg">{props.name}</h3>
        <div className="w-2/3 h-2 bg-[#156766]"></div>
        <p className="text-sm text-gray-400 mt-4">{props.description}</p>
      </div>
    </div>
  )
}