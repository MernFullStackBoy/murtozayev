import Button from "./Button"

function LeftMenu() {
    return (
        <div className=" tablet:w-[100px] phone:w-[70px] flex flex-col max-w-[270px] w-[100%] rounded-r-[20px] relative z-[10] h-[87.3vh] top-[20px] bg-[#21212237] ">
            <Button linkTo="/" icon="fa-solid fa-table-list" title="Asosiy oyna" />
            <Button linkTo="/about" icon="fa-solid fa-question" title="Men haqimda" />
            <Button linkTo="/resume" icon="fa-solid fa-file" title="Rezyume" />
            <Button linkTo="/skills" icon="fa-solid fa-tools" title="Texnologiyalar" />
            <Button linkTo="/projects" icon="fa-solid fa-diagram-project" title="Loyihalar" />
            <Button linkTo="/call" icon="fa-solid fa-phone" title="Bog'lanish" />
        </div>
    )
}

export default LeftMenu