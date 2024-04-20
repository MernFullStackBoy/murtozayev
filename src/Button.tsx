import { Link } from "react-router-dom"

function Button(props: any) {
    return (
        <Link to={props.any}>
            <button
                className="w-[100%] flex tablet:mt-[30px] tablet:p-[20px] items-center gap-[20px] hover:bg-slate-700 focus:bg-slate-900 h-[50px] rounded-r-[10px] text-start pl-[30px] p4-[20px] ">
                <i className={` ${props.icon} tablet:text-[40px] text-[20px] `}></i>
                <span className=" tablet:hidden phone:hidden ">{props.title}</span>
            </button>
        </Link>
    )
}

export default Button