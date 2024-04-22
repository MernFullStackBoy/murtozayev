import { useState } from "react"
import { projects } from "./data/tools"

function Projects() {

    const [fav, setFav] = useState<object[]>([])

    const handleClick = (id: number, prop: boolean) => {
        projects && projects.filter((item: any) => {
            if (item.id === id) {
                item.favourite = !prop

                if (item.favourite) {
                    setFav([...fav, { ...item }])
                } else {
                    setFav([])
                }
            }
        })

        return localStorage.setItem("items", JSON.stringify(fav))
    }

    return (
        <div className=" tablet:w-[100%] phone:w-[70vw] phone:h-[87vh] tablet:h-[87vh] max-w-[800px] w-[100vw] flex flex-wrap justify-between overflow-y-scroll mt-[20px] gap-[30px] h-[550px] ">
            {projects.map((item) => {
                return (
                    <div key={item.id} className={`w-[220px] tablet:w-[290px] ${item.favourite ? "bg-yellow-500" : "bg-slate-900"} tablet:h-[520px] rounded-[20px] h-[400px]`}>
                        <img src={item.src} className=" w-[220px] tablet:h-[290px] tablet:w-[290px] rounded-[20px] h-[220px] " alt="Images" />
                        <h1 className=" text-center font-semibold text-[23px] tablet:text-[30px] mt-[20px] ">{item.title}</h1>
                        <h3 className=" text-center font-semibold tablet:text-[20px] mt-[10px] ">{item.desc}</h3>
                        <div className=" flex justify-center mt-[10px] tablet:mt-[20px] gap-[20px] ">
                            <button onClick={() => handleClick(item.id, item.favourite)} className=" tablet:w-[50px] tablet:h-[50px] tablet:text-[25px] tablet:rounded-[20px] w-[30px] h-[30px] bg-[red] rounded-[5px] fas fa-heart "></button>
                            <button className=" w-[100px] tablet:w-[140px] tablet:h-[50px] tablet:text-[20px] h-[30px] shadow-[0_5px_2px_1px_darkblue] transition active:shadow-[none] bg-[blue] active:translate-y-[5px] font-semibold rounded-[10px] " onClick={() => window.location.assign(item.link)}>Kiramiz</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects