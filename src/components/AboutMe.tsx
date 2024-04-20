import me from "../images/me2.jpg"

function AboutMe() {
    return (
        <>
            <div className=" phone:hidden tablet:flex-col flex justify-between pr-[120px] tablet:w-[100%] tablet:mt-[50px] items-center max-w-[800px] h-[550px] w-[800px] relative z-[10] ">
                <img src={me} className=" w-[240px] drop-shadow-[0_0_20px_red] rounded-[20px] mb-[4rem] animate-pulse " alt="Me2" />

                <div className=" relative left-[50px] w-[400px] h-[400px] ">
                    <div className=" flex items-center justify-between ">
                        <div className=" w-[100px] h-[3px] bg-white "></div>
                        <h1 className=" text-[25px] font-semibold uppercase ">Men haqimda</h1>
                        <div className=" w-[100px] h-[3px] bg-white "></div>
                    </div>
                    <br />

                    <p className=" font-semibold ">
                        Assalomu Alaykum hammaga. Mening ismim Jahongir. 2005 - yil 1 - noyabrda Toshkent viloyati Bo'ka tumani Qora Quduq MFY da tug'ilganman. Xozirda dasturlash va Ingliz tili bilan shug'ullanaman. Dasturlashning Frontend yo'nalishida o'qiganman va xozirda qo'shimcha texnologiyalarni o'rganishda davom etmoqdaman. Qanday darajada ekanimni bilish uchun mening loyihalarim bilan tanishib chiqing va agar darajam va ish faoliyatim yoqsa men bilan bog'laning. Shu yergacha o'qigan bo'lsanggiz sizga kattakon raxmat. Endi keling loyihalarimni ko'rib chiqamiz !!!!!
                    </p>

                </div>

            </div>
            <div className=" hidden phone:block phone:w-[70vw] phone:overflow-y-auto phone:h-[87vh] ">
                <br />
                <h1 className=" text-center text-[24px] uppercase font-semibold ">Men haqimda</h1>
                <br />
                <p className=" text-[12px] font-semibold ">
                    Assalomu Alaykum hammaga. Mening ismim Jahongir. 2005 - yil 1 - noyabrda Toshkent viloyati Bo'ka tumani Qora Quduq MFY da tug'ilganman. Xozirda dasturlash va Ingliz tili bilan shug'ullanaman. Dasturlashning Frontend yo'nalishida o'qiganman va xozirda qo'shimcha texnologiyalarni o'rganishda davom etmoqdaman. Qanday darajada ekanimni bilish uchun mening loyihalarim bilan tanishib chiqing va agar darajam va ish faoliyatim yoqsa men bilan bog'laning. Shu yergacha o'qigan bo'lsanggiz sizga kattakon raxmat. Endi keling loyihalarimni ko'rib chiqamiz !!!!!
                </p>
                <img src={me} className=" w-[200px] rounded-[20px] mt-[70px] animate-pulse " alt="Me" />
            </div>
        </>
    )
}

export default AboutMe