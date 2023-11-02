import { ButtonHTMLAttributes } from "react";
//Sempre quando formos usar uma tag html, extende-la, é sempre mainHtml... e HTMLMain....
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children: string
}

export function Button({children,...rest}:ButtonProps){
     
return (
    <button {...rest} className="text-Dark-Grayish-Blue hover:text-bright-blue">{children}</button>
    )
}