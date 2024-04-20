import logo from "../images/logo.png"

function Call() {
    return (
        <div className=" phone:h-[87] phone:overflow-auto ">
            <form className=" phone:w-[70vw] tablet:w-[600px] max-w-[700px] w-[100vw] backdrop-blur-[100px] bg-[rgba(0_0_0.4)] bg-opacity-[0.5] border h-[370px] mt-[30px] rounded-[20px] relative p-[20px] z-20 ">
                <input
                    className=" w-[100%] phone:h-[50px] phone:text-[15px] h-[70px] rounded-[20px] pl-[30px] font-semibold text-[30px] "
                    type="text"
                    placeholder="Enter your name"
                />
                <textarea
                    className=" w-[100%] h-[180px] font-semibold rounded-[20px] p-[20px] mt-[20px] "
                    placeholder="Send me message"
                ></textarea>
                <button className=" w-[200px] phone:w-[130px] phone:h-[40px] phone:mt-[20px] phone:rounded-[10px] h-[50px] bg-slate-700 rounded-[20px] font-semibold transition focus:bg-slate-900 text-[18px] hover:bg-slate-900 ">Submit</button>
            </form>
            <div className=" max-w-[700px] phone:border-none phone:w-[100%] phone:flex-col tablet:w-[600px] tablet:h-[340px] tablet:flex-col gap-[80px] p-[10px] flex items-center w-[100vw] h-[130px] mt-[20px] rounded-[20px] border ">
                <img className=" w-[50px] rounded-[50%] phone:w-[100px] phone:mt-[20px] tablet:mt-[30px] tablet:w-[100px] " src={logo} alt="" />
                <div className=" phone:flex-col w-[100%] phone:h-[400px] phone:gap-[20px] phone:items-center flex p-[10px] justify-between h-[100px] rounded-[20px] border ">
                    <div className=" border w-[150px] rounded-[20px] p-[10px] flex flex-col items-center ">
                        <h1 className=" font-semibold ">Phone numbers</h1>
                        <p className=" text-[12px] font-semibold ">+998959014741</p>
                        <p className=" text-[12px] font-semibold ">+998978725808</p>
                    </div>
                    <div className=" border w-[220px] rounded-[20px] p-[10px] flex flex-col items-center ">
                        <h1>Email accounts</h1>
                        <p className=" text-[12px] font-semibold ">jahongirmurtozayev777@gmail.com</p>
                        <p className=" text-[12px] font-semibold ">murtozayevjahongir9@gmail.com</p>
                    </div>
                    <div className=" border w-[150px] rounded-[20px] p-[10px] flex flex-col items-center ">
                        <h1>Telegram account</h1>
                        <a className=" text-[13px] font-semibold " href="https://t.me/THE_ALIEN_MODE">Click me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Call