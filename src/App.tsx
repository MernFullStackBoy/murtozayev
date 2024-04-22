import { useEffect, useState } from "react"
import LeftMenu from "./LeftMenu"
import Modal from "./Modal"
import UpperMenu from "./UpperMenu"
import RouteComponent from "./components/RouteComponent"

function App() {

  const [show, setShow] = useState<boolean>(false)

  const [dark, setDark] = useState<boolean>(false)


  return (
    <div
      className={` phone:max-w-[500px] transition-all phone:w-[100%] after:top-0 max-w-[1100px] w-[100%] mx-auto rounded-[10px] h-[100vh] ${dark ? "bg-cyan-900 bg-back" : "bg-white"} bg-cover after:backdrop-blur-[50px] after:backdrop-brightness-50 after:w-[100%] after:max-w-[1100px] after:h-[100vh] after:absolute after:mx-auto after:rounded-[10px] `}
    >
      <UpperMenu dark={dark} darkMode={() => setDark(prev => !prev)} handleClick={() => setShow(true)} />
      <div className=" flex gap-[30px] ">
        <LeftMenu />
        <RouteComponent />
        {show && <Modal hide={() => setShow(false)} />}
      </div>
    </div>
  )
}

export default App