import { useState } from "react"
import logo from "./images/logo.png"

function UpperMenu(props: any) {
    const [hide, setHide] = useState<boolean>(true)

    return (
        <nav
            className=" phone:w-[100%] phone:pr-[20px] phone:pl-[20px] justify-between relative z-[10] w-[109%] tablet:w-[100%] tablet:pr-[30px] tablet:pl-[50px] flex pl-[120px] pr-[120px] items-center h-[60px] "
        >
            <img src={logo} className=" w-[50px] rounded-[50%] " alt="Logo" />

            <button onClick={props.handleClick} className=" tablet:left-[70px] phone:hidden fas fa-heart relative left-[200px] w-[40px] h-[40px] bg-[red] rounded-[10px] text-[1.3rem] "></button>

            <div className=" phone:flex gap-[30px] hidden pr-[25px] ">
                <button onClick={props.handleClick} className=" tablet:left-[70px] phone:left-0 fas fa-heart relative left-[200px] w-[40px] h-[40px] bg-[red] rounded-[10px] text-[1.3rem] "></button>
                <button onClick={() => setHide(false)} className=" fa-solid fa-magnifying-glass text-[25px] "></button>
            </div>

            <form className={`phone:${hide && "hidden"} phone:absolute phone:right-0 `}>
                <input
                    className=" max-w-[300px] pr-[20px] w-[300px] h-[40px] rounded-[10px] outline-none pl-[20px] "
                    type="text"
                    placeholder="Nimadir qidiring"
                />
                <button className=" fa-solid fa-magnifying-glass relative right-[40px] w-[40px] h-[40px] "></button>
                <button type="button" onClick={() => setHide(true)} className=" fas fa-xmark hidden phone:block top-0 absolute right-0 text-[30px] "></button>
            </form>
        </nav>
    )
}

export default UpperMenu