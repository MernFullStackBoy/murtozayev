import { Route, Routes } from "react-router-dom"
import MainDash from "./MainDash"
import AboutMe from "./AboutMe"
import Tools from "./Tools"
import Resume from "./Resume"
import Projects from "./Projects"
import Call from "./Call"

function RouteComponent() {
    return (
        <div className="relative z-[10]">
            <Routes>
                <Route path="/" element={<MainDash />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Tools />} />
                <Route path="/call" element={<Call />} />
            </Routes>
        </div>
    )
}

export default RouteComponent