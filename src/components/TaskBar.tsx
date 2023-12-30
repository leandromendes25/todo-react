import Image from 'next/image'
import check from '/public/images/icons/icon-check.svg'
import { ChangeEvent, useState } from 'react'

export interface TaskInterface{
  id?: string,
  taskName: string,
  done: boolean
} 

export function TaskBar({taskName,done}:TaskInterface){
    const [isChecked, setIsChecked] = useState(done)  
      
    function toogleDone(){
        setIsChecked(!isChecked)
    }
    return(
    <label className={`bg-Very-Dark-Desaturated-Blue relative flex p-4 border-b-[1px] border-Very-Dark-Grayish-Blue ${isChecked ? 'line-through text-Very-Dark-Grayish-Blue': ''}`}>
    <input onChange={event => event.target} onClick={toogleDone } 
    className='peer group appearance-none w-6 border rounded-full mr-2 border-Very-Dark-Grayish-Blue bg-gradient-to-br checked:from-Check-Background checked:to-check-Background-2'
    type="checkbox" checked={isChecked} />
    {taskName}
    <Image className='peer-checked:block absolute top-6 left-[1.4rem] hidden' src={check} alt="confirm button "/>
  </label>
    )
}