import { MouseEventHandler } from "react"
import logo from "./images/logo.png"

type PropsUpperMenu = {
    darkMode: MouseEventHandler<HTMLButtonElement>
    dark: boolean
    handleClick: MouseEventHandler<HTMLButtonElement>
}

function UpperMenu(props: PropsUpperMenu) {

    return (
        <nav
            className=" phone:w-[100%] phone:pr-[20px] phone:pl-[20px] justify-between relative z-[10] w-[109%] tablet:w-[100%] tablet:pr-[30px] tablet:pl-[50px] flex pl-[120px] pr-[120px] items-center h-[60px] "
        >
            <img src={logo} className=" w-[50px] rounded-[50%] " alt="Logo" />

            <div className=" flex gap-[30px] pr-[25px] ">
                <button onClick={props.darkMode} className={`fa-solid ${props.dark ? "fa-sun" : "fa-moon"} w-[40px] h-[40px] rounded-[50%] text-[25px] ${props.dark ? "bg-white text-[black]" : "bg-black text-[white]"} `}></button>
                <button onClick={props.handleClick} className=" phone:left-0 fas fa-heart relative  w-[40px] h-[40px] bg-[red] rounded-[10px] text-[1.3rem] "></button>
            </div>
        </nav>
    )
}

export default UpperMenu