import { TaskInterface } from "@/components";
import { Dispatch, SetStateAction, createContext, useState } from "react";

  interface TaskContextProps{
    setTask: Dispatch<SetStateAction<TaskInterface>>
  }

 export const TaskContext = createContext({} as TaskContextProps); 
  
  export function TaskProvider({children}:{children: React.ReactNode}){
    const [task, setTask] = useState<TaskInterface>();
    return (
      <TaskContext.Provider value={{setTask}}>
        {children}
      </TaskContext.Provider>
    )
  }
  
  