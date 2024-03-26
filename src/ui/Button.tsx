import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    to?:string
    type:string,
    onClickHandler?: (e:any) => void 
}

interface Styles   {
    [index:string]: string,

}

const Button = ({ children,type, disabled, to, onClickHandler}: ButtonProps) => {
    const base = `rounded-full bg-yellow-500 inline-block
                        font-semibold uppercase tracking-wide
                        text-stone-800 transition-colors duration-300
                        hover:bg-yellow-400 focus:bg-yellow-400
                        focus:outline-none focus:ring focus:ring-yellow-400
                        focus:ring-offset-2 disabled:cursor-not-allowed
                        `;

    const styles:Styles= {
        primary: base + " text-sm px-4 py-3 md:px-6 md:py-4",
        small: base + " px-4 py-1 md:px-4 md:py-2 text-xs",
        round: base + " text-sm px-3 py-1 md:px-3.5 md:py-1.5 text-sm",
        secondary:`rounded-full text-sm inline-block border-2 border-stone-200
                    font-semibold uppercase tracking-wide
                    text-stone-400 transition-colors duration-300
                    hover:bg-stone-300 focus:bg-stone-300
                    hover:text-stone-800 focus:text-stone-800
                    focus:outline-none focus:ring focus:ring-stone-200
                    focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4`
    }

    if(to){
        return <Link to={to} className={styles[type]}>{children} </Link>
    }

    if(onClickHandler){
        return <button disabled={disabled} className={styles[type]} onClick={onClickHandler}> {children}</button>
    }
    return <button disabled={disabled} className={styles[type]}>{children}</button>
}

export default Button;