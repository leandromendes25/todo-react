import { TaskInterface } from "@/components";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TaskContextProps {
  tasks: TaskInterface[];
  setTasks: Dispatch<SetStateAction<TaskInterface[]>>;
  addTask(createTask: TaskInterface): void;
}

export const TaskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TaskInterface[]>([] as TaskInterface[]);
  //task: TaskInterface | undefined que nem diz no hover, ou acrescente {} as TaskInterface

  function addTask(createTask: TaskInterface) {
    setTasks([...tasks, createTask]);
  }

  function deleteAllTasks(ids: string[]) {}
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
