import logo from "./images/logo.png"

function UpperMenu(props: any) {

    return (
        <nav
            className=" phone:w-[100%] phone:pr-[20px] phone:pl-[20px] justify-between relative z-[10] w-[109%] tablet:w-[100%] tablet:pr-[30px] tablet:pl-[50px] flex pl-[120px] pr-[120px] items-center h-[60px] "
        >
            <img src={logo} className=" w-[50px] rounded-[50%] " alt="Logo" />

            {/* <button onClick={props.handleClick} className=" tablet:left-[70px] phone:hidden fas fa-heart relative right-[100px] w-[40px] h-[40px] bg-[red] rounded-[10px] text-[1.3rem] "></button> */}

            <div className=" flex gap-[30px] pr-[25px] ">
                <button onClick={props.darkMode} className={`fa-solid ${props.dark ? "fa-sun"  : "fa-moon"} w-[40px] h-[40px] rounded-[50%] text-[25px] ${props.dark ? "bg-white text-[black]" : "bg-black text-[white]"} `}></button>
                <button onClick={props.handleClick} className=" phone:left-0 fas fa-heart relative  w-[40px] h-[40px] bg-[red] rounded-[10px] text-[1.3rem] "></button>
            </div>
        </nav>
    )
}

export default UpperMenu