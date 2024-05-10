import { ToolsType, tools } from "./data/tools"

function Tools() {
    return (
        <div className=" phone:w-[70vw] max-w-[800px] w-[100vw] phone:h-[87vh] justify-between tablet:w-[100%] tablet:h-[87vh] overflow-auto h-[540px] pr-[120px] mt-[30px] flex flex-wrap gap-[40px] ">
            {tools.map((item: ToolsType, index: number) => {
                return (
                    <div key={index} className=" phone:w-[140px] phone:h-[200px] w-[190px] tablet:w-[240px] tablet:h-[330px] hover:scale-[1.1] transition relative left-[40px] top-6 rounded-[20px] bg-[#181717] h-[270px] ">
                        <img className=" w-[190px] phone:w-[140px] phone:h-[140px] tablet:w-[240px] rounded-[20px] " src={item.src} alt="" />
                        <h1 className=" phone:text-[15px] text-center text-[23px] tablet:text-[30px] font-semibold mt-[20px] ">{item.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Tools