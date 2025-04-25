import Image from "next/image";
import check from "/public/images/icons/icon-check.svg";
import cross from "/public/images/icons/icon-cross.svg";

import { useState } from "react";

export interface TaskInterface {
  id?: string;
  taskName: string;
  done: boolean;
}

export function TaskBar({ taskName, done }: TaskInterface) {
  const [isChecked, setIsChecked] = useState(done);

  function toogleDone() {
    setIsChecked(!isChecked);
  }
  function deleteTask() {}
  return (
    <label
      className={`dark:bg-Very-Dark-Desaturated-Blue shadow-lg last-of-type:shadow-none first-of-type:rounded-tl-md first-of-type:rounded-tr-md bg-Very-Light-Gray  relative flex p-4 border-b-[1px] dark:border-Very-Dark-Grayish-Blue-darker border-Light-Grayish-Blue   ${
        isChecked
          ? "line-through text-Light-Grayish-Blue dark:text-Very-Dark-Grayish-Blue-dark"
          : "dark:text-Light-Grayish-Blue text-Very-Dark-Grayish-Blue"
      }`}
    >
      <input
        onChange={(event) => event.target}
        onClick={toogleDone}
        className="peer group appearance-none w-6 h-6 border rounded-full mr-2 border-text-Very-Dark-Grayish-Blue dark:border-Very-Dark-Grayish-Blue-dark bg-gradient-to-br checked:from-Check-Background checked:to-check-Background-2"
        type="checkbox"
        checked={isChecked}
      />
      {taskName}
      <Image
        className="peer-checked:block absolute top-6 left-[1.4rem] hidden"
        src={check}
        alt="confirm action button"
      />
      <button onClick={deleteTask} className="ml-auto md:hidden" type="button">
        <Image
          className="object-contain"
          src={cross}
          alt="delete action button"
        />
      </button>
    </label>
  );
}
