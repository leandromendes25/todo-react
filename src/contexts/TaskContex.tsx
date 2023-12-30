import { TaskInterface } from "@/components";
import { Dispatch, SetStateAction, createContext, useState } from "react";

  interface TaskContextProps{
    tasks: TaskInterface[],
    setTasks: Dispatch<SetStateAction<TaskInterface[]>>
    addTask(createTask: TaskInterface): void
  }

 export const TaskContext = createContext({} as TaskContextProps); 
  
  export function TaskProvider({children}:{children: React.ReactNode}){
    const [tasks, setTasks] = useState<TaskInterface[]>([] as TaskInterface[]);
    //caso reclame, passe o mouse em cima, se aparecer undefined ao passar o mouse, acrescente a tipagem na interface 
    //task: TaskInterface | undefined que nem diz no hover, ou acrescente {} as TaskInterface
    //todo estado precisa ser inicializado,  

    function addTask(createTask: TaskInterface){
      setTasks([...tasks,createTask])
    }
    
    function deleteAllTasks(ids: string[]){
      const updatedTask = [...tasks]
    }
    return (
      <TaskContext.Provider value={{
        tasks,setTasks,addTask}}>
        {children}
      </TaskContext.Provider>
    )
  }
  
  