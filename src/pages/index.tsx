import { TaskBar } from "@/components";
import Image from "next/image";
import iconMoon from "public/images/icons/icon-moon.svg";
import iconSun from "public/images/icons/icon-sun.svg";
import { KeyboardEvent, useContext, useState } from "react";
import { TaskContext, TaskProvider } from "@/contexts/TaskContex";

export default function Home() {
  const [valueInput, setValueInput] = useState("");
  const { tasks, addTask } = useContext(TaskContext);
  const [theme, setTheme] = useState(true);
  function toogleTheme() {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  }

  function generateTask(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const taskObj = {
        id: crypto.randomUUID(),
        taskName: valueInput,
        done: false,
      };
      if (valueInput.length > 0) {
        addTask(taskObj);
        setValueInput("");
      }
    }
  }
  function clearTaskCompleted() {
    let newArray = [...tasks];
    console.log(newArray);
    let newMap = newArray.filter((e) => e.done == true);
    console.log(newMap);
  }

  return (
    <div className=" text-Very-Light-Gray dark:bg-Very-Dark bg-mob-light dark:bg-mob-dark md:bg-desk-light md:dark:bg-desk-dark bg-no-repeat  bg-top flex justify-center h-[100dvh]">
      <div className="rounded w-11/12 md:w-1/3 p-4 z-10">
        <div className="flex justify-between my-7 md:my-11">
          <h1 className="text-3xl font-bold md:text-5xl">T O D O</h1>
          <Image
            onClick={toogleTheme}
            className="object-contain cursor-pointer"
            src={theme ? iconMoon : iconSun}
            alt="turn on light mode"
          />
        </div>

        <main>
          <form onSubmit={(event) => event?.preventDefault()}>
            <label className="dark:bg-Very-Dark-Desaturated-Blue rounded-md shadow-lg bg-Very-Light-Gray text-Very-Dark-Grayish-Blue dark:text-Light-Grayish-Blue relative before:h-6 before:w-6 before:rounded-full before:absolute before:border before:dark:border-Very-Dark-Grayish-Blue flex p-4 mb-5">
              <input
                className="dark:bg-Very-Dark-Desaturated-Blue bg-text-Very-Dark-Grayish-Blue w-full outline-none ml-8 "
                type="text"
                value={valueInput}
                onChange={(event) => setValueInput(event.target.value)}
                onKeyDown={(event) => generateTask(event)}
                placeholder="Create a new todo..."
              />
            </label>
          </form>
          {tasks.map((tasks) => (
            <TaskBar
              taskName={tasks.taskName}
              key={tasks.id}
              done={tasks.done}
            />
          ))}
        </main>

        <footer>
          <div className="flex justify-between bg-Very-Light-Gray shadow-lg dark:bg-Very-Dark-Desaturated-Blue p-4 rounded-b-lg">
            <span className="text-Dark-Grayish-Blue">
              {tasks.length} items left
            </span>
            <div className="flex gap-4">
              <button
                className="text-Dark-Grayish-Blue hover:text-bright-blue hidden md:block"
                type="button"
              >
                All
              </button>
              <button
                className="text-Dark-Grayish-Blue hover:text-bright-blue hidden md:block"
                type="button"
              >
                Active
              </button>
              <button
                onClick={clearTaskCompleted}
                className="text-Dark-Grayish-Blue hover:text-bright-blue hidden md:block"
                type="button"
              >
                Completed
              </button>
            </div>
            <button
              className="text-Dark-Grayish-Blue hover:text-bright-blue "
              type="button"
            >
              Clear Completed
            </button>
          </div>
          <div className="bg-Very-Light-Gray font-semibold rounded-lg  shadow-lg md:hidden flex gap-6 justify-center mt-6 p-4 dark:bg-Very-Dark-Desaturated-Blue">
            <button
              className="text-Dark-Grayish-Blue hover:text-bright-blue "
              type="button"
            >
              All
            </button>
            <button
              className="text-Dark-Grayish-Blue hover:text-bright-blue "
              type="button"
            >
              Active
            </button>
            <button
              onClick={clearTaskCompleted}
              className="text-Dark-Grayish-Blue hover:text-bright-blue "
              type="button"
            >
              Completed
            </button>
          </div>
          <p className="flex justify-center mt-10 text-Very-Dark-Grayish-Blue font-medium">
            Drag and drop to reorder list
          </p>
        </footer>
      </div>
    </div>
  );
}
