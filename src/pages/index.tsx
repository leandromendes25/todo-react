import { TaskBar, Button, TaskInterface} from '@/components'
import Image from 'next/image'
import iconSun from '/public/images/icons/icon-sun.svg'
import { useContext, useState } from 'react'
import { TaskContext, TaskProvider } from '@/contexts/TaskContex'

export default function Home() {
  const [valueInput,setValueInput] = useState('')
  const {tasks,addTask} = useContext(TaskContext)

  function generateTask(event:KeyboardEvent){
    if(event.key === 'Enter'){
      const taskObj = {
        //função nova dos browsers e retorna um id aleatorio em string
      id: crypto.randomUUID(),
      taskName: valueInput,
      done:false
    }
    addTask(taskObj)
      
    setValueInput('')
    }
  }
  
  return (
    <div className='bg-desk-dark text-Very-Light-Gray bg-Very-Dark-Blue bg-no-repeat bg-top flex justify-center h-[100dvh]'>
    <div className="rounded w-1/3 p-4 z-10">
    <div className="flex justify-between my-11">
    <h1 className='text-5xl'>T O D O</h1>
    <Image className='object-contain' src={iconSun} alt="turn on light mode"/>
  </div>

  <main>
  <label className='bg-Very-Dark-Desaturated-Blue relative flex p-4 mb-5'>
  <input className='bg-Very-Dark-Desaturated-Blue w-full outline-none ml-8' type="text" value={valueInput} onChange={event => setValueInput(event.target.value)} onKeyDown={event => generateTask(event)}  placeholder='Create a new todo...' />
  <input className='relative right-[95%] appearance-none w-6 border rounded-full mr-2 border-Very-Dark-Grayish-Blue'
    type="checkbox"  />
  </label>
  {
     tasks.map(tasks => <TaskBar taskName={tasks.taskName} key={tasks.id} done={tasks.done}/>)
  }
  </main>
  
<footer className='flex gap-8 bg-Very-Dark-Desaturated-Blue p-4 rounded-b-lg justify-between'>
  <span className="text-Dark-Grayish-Blue">{tasks.length} items left</span>
<div className="flex gap-4">
  
{/* <Button onClick={}>All</Button>  */}
{/* <Button onClick={e}>Active</Button>  */}
{/* <Button onClick={e}>Completed</Button>  */}

</div>
<Button onClick={clear}>Clear Completed</Button>
</footer>
<span className='flex justify-center mt-10 text-Very-Dark-Grayish-Blue'>Drag and drop to reorder list</span>
</div>
</div>
    )
}