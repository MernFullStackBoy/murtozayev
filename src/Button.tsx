import { NavLink } from "react-router-dom"

type PropLeftMenu = {
    linkTo: string
    icon: string
    title: string
}

function Button(props: PropLeftMenu) {
    return (
        <NavLink className="link" to={props.linkTo}>
            <button
                className="w-[100%] flex tablet:mt-[30px] tablet:p-[20px] items-center gap-[20px] hover:bg-[blueviolet] h-[50px] rounded-r-[10px] text-start pl-[30px] p4-[20px] ">
                <i className={` ${props.icon} tablet:text-[40px] text-[20px] `}></i>
                <span className=" tablet:hidden phone:hidden ">{props.title}</span>
            </button>
        </NavLink>
    )
}

export default Button