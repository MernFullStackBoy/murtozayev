import { useState } from "react"
import LeftMenu from "./LeftMenu"
import Modal from "./Modal"
import UpperMenu from "./UpperMenu"
import RouteComponent from "./components/RouteComponent"

function App() {

  const [show, setShow] = useState<boolean>(false)

  return (
    <div
      className=" after:top-0 max-w-[1100px] w-[100%] mx-auto rounded-[10px] h-[100vh] bg-cyan-900 bg-back bg-cover after:backdrop-blur-[50px] after:w-[100%] after:max-w-[1100px] after:h-[100vh] after:absolute after:mx-auto after:rounded-[10px] after:backdrop-brightness-[0.2] "
    >
      <UpperMenu handleClick={() => setShow(true)} />
      <div className=" flex gap-[30px] ">
        <LeftMenu />
        <RouteComponent />
        {show && <Modal hide={() => setShow(false)} />}
      </div>
    </div>
  )
}

export default App