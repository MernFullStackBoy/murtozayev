function Modal(props: any) {

    let value: any = localStorage.getItem("items")

    let items = JSON.parse(value)

    return (
        <div className=" pl-[90px] pr-[40px] max-w-[1100px] gap-[40px] w-[100vw] justify-evenly overflow-y-auto h-[100vh] flex flex-wrap top-0 bg-[rgba(0_0_0.2)] bg-opacity-[0.9] z-20 absolute ">
            <button onClick={props.hide} className=" fas fa-xmark absolute left-0 text-[30px] ml-[20px] mt-[20px] "></button>
            {items && items.map((item: any, i: number) => {
                return (
                    <div key={i} className=" w-[220px] mt-[70px] rounded-[20px] bg-slate-900 h-[400px] ">
                        <img src={item.src} className=" w-[220px] rounded-[20px] h-[220px] " alt="Images" />
                        <h1 className=" text-center font-semibold text-[23px] mt-[20px] ">{item.title}</h1>
                        <h3 className=" text-center font-semibold mt-[10px] ">{item.desc}</h3>
                        <div className=" flex justify-center mt-[10px] gap-[20px] ">
                            <button className=" w-[100px] h-[30px] shadow-[0_5px_2px_1px_darkblue] transition active:shadow-[none] bg-[blue] active:translate-y-[5px] font-semibold rounded-[10px] " onClick={() => window.location.assign(item.link)}>Kiramiz</button>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => localStorage.clear()} className=" text-[red] fas fa-trash absolute left-0 mt-[80px] ml-[20px] text-[30px] "></button>
        </div>
    )
}

export default Modal