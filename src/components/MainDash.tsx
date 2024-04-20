import { Link } from "react-router-dom"
import me from "../images/me1.jpg"

function MainDash() {
    return (
        <>
            <div
                className=" phone:hidden max-w-[800px] phone:w-[300px] bg-red phone:overflow-y-auto phone:h-[87vh] phone:overflow-x-hidden phone:flex-col tablet:pl-[70px] tablet:flex-col tablet:w-[600px] tablet:items-center flex items-center mt-[20px] justify-between pr-[120px] w-[800px] h-[550px] "
            >
                <div className=" tablet:w-[500px] phone:mt-[10rem] phone:ml-[6rem] phone:w-[300px] tablet:mt-[70px] border-l flex flex-col mb-[10rem] gap-[0.2rem] w-[370px]  ">
                    <h1 className=" tablet:text-[2.5rem] phone:text-[2rem] font-semibold ml-[2rem] text-[1.7rem] ">Jahongir Murtozayev</h1>
                    <h3 className=" font-semibold ml-[2rem] phone:text-[1.4rem] tablet:text-[1.7rem] text-[1.2rem] ">Frontend Developer</h3>
                    <h4 className=" ml-[2rem] text-[1rem] tablet:text-[1.3rem] ">Bu sayt orqali mening tajribam va ilmim haqida bilim olasiz</h4>

                    <div className=" flex gap-[20px] ml-[2rem] mt-[1rem] ">
                        <Link to="/about">
                            <button
                                className=" w-[130px] tablet:w-[170px] tablet:h-[60px] tablet:text-[1.2rem] font-semibold rounded-[10px] bg-[blue] hover:drop-shadow-[0_0_10px_blue] transition h-[45px]  "
                            >Men haqimda</button>
                        </Link>
                        <Link to="/call">
                            <button
                                className="w-[130px] tablet:w-[170px] tablet:h-[60px] tablet:text-[1.2rem] font-semibold hover:drop-shadow-[0_0_10px_red] h-[45px] rounded-[10px] border-[red] text-[red] hover:bg-[red] hover:text-[white] transition border-[2px] "
                            >Bog'lanish</button>
                        </Link>
                    </div>

                </div>
                <img src={me} className=" phone:ml-[10rem] phone:w-[300px] phone:mt-[10rem] w-[250px] rounded-[30px] mb-[2rem] drop-shadow-[0_0_20px_red] animate-bounce " alt="Me" />
            </div>

            <div className=" hidden phone:block phone:border-l phone:overflow-y-auto phone:w-[70vw] phone:h-[87vh] ">
                <br />
                <h1 className=" ml-[20px] text-[1.2rem] font-semibold ">Jahongir Murtozayev</h1>
                <h2 className=" ml-[20px] ">Frontend Developer</h2>
                <p className=" ml-[20px] text-[12px] ">Bu sayt orqali mening tajribam va ilmim haqida bilim olasiz</p>
                <div className=" ml-[20px] flex gap-[20px] mt-[20px] ">
                    <Link to='/about'>
                        <button className=" hover:drop-shadow-[0_0_10px_blue] transition font-semibold rounded-[10px] w-[80px] h-[25px] text-[10px] bg-[blue] ">Men haqida</button>
                    </Link>
                    <Link to='/call'>
                        <button className="w-[80px] h-[25px] hover:bg-[red] hover:text-[white] transition rounded-[10px] text-[10px] text-[red] border-[red] border font-semibold ">Bog'laning</button>
                    </Link>
                </div>
                <img src={me} className=" w-[140px] ml-[20px] rounded-[20px] mt-[20px] animate-pulse " alt="Pic" />
            </div>
        </>
    )
}

export default MainDash