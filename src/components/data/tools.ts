/* Main imports */

/* Main imports end */

/*Tools Images */
import html from "../../images/html1.jpg"
import css from "../../images/css.png"
import js from "../../images/js.png"
import ts from "../../images/ts.png"
import react from "../../images/react.png"
import redux from "../../images/redux.png"
import tailwind from "../../images/tailwind.png"
import zustand from "../../images/zustand.png"
import rest from "../../images/rest.png"
import call from "../../images/call.png"
/*Tools Images End */

/* Projects Images */
import todo from "../../images/todo.png"
import calc from "../../images/calc.png"
import login from "../../images/login.png"
import weather from "../../images/weather.png"
import ai from "../../images/ai.png"
import quiz from "../../images/quiz.png"
import shop from "../../images/shop.png"
import toe from "../../images/toe.png"
/* Projects Images end */

type Tools = {
    title: string,
    src: string,
}

export const tools: Tools[] = [
    { title: "HTML", src: html },
    { title: "CSS", src: css },
    { title: "JavaScript", src: js },
    { title: "TypeScript", src: ts },
    { title: "React JS and TS", src: react },
    { title: "Redux Toolkit", src: redux },
    { title: "Tailwind CSS", src: tailwind },
    { title: "Zustand", src: zustand },
    { title: "Rest API", src: rest },
]

interface Projects {
    id: number;
    title: string;
    src: string;
    favourite: boolean;
    desc: string;
    link: string;
}

export const projects: Projects[] = [
    {
        id: 1,
        title: "Todo with API",
        src: todo,
        desc: "Bu loyiha API va Redux Toolkit orqali yaratilgan",
        favourite: false,
        link: "https://redux-todo-list-weld-nine.vercel.app"
    },
    {
        id: 2,
        title: "Calculator",
        src: calc,
        desc: "Bu loyiha React JS da yaratilgan",
        favourite: false,
        link: "https://calculator-app-one-kappa.vercel.app"
    },
    {
        id: 3,
        title: "Register APP",
        src: login,
        desc: "Bu loyiha Firebase va React JS orqali yaratilgan",
        favourite: false,
        link: "https://sign-and-login-app.vercel.app"
    },
    {
        id: 4,
        title: "Weather APP",
        src: weather,
        desc: "Bu loyiha API va React TS orqali yaratilgan",
        favourite: false,
        link: "https://typescript-weather-ebon.vercel.app"
    },
    {
        id: 5,
        title: "Zip Zap AI",
        src: ai,
        desc: "Bu loyiha React JS orqali yaratilgan",
        favourite: false,
        link: "https://zipzap-ai.vercel.app"
    },
    {
        id: 6,
        title: "Quiz Game",
        src: quiz,
        desc: "Bu loyiha React JS orqali yaratilgan",
        favourite: false,
        link: "https://quiz-app-ruby-one.vercel.app"
    },
    {
        id: 7,
        title: "Online Market",
        src: shop,
        desc: "Bu loyiha React JS va React-Use-Cart orqali yaratilgan",
        favourite: false,
        link: "https://online-market-alpha.vercel.app"
    },
    {
        id: 8,
        title: "Tic Tac Toe",
        src: toe,
        desc: "Bu loyiha React JS orqali yaratilgan",
        favourite: false,
        link: "https://tic-tac-toe-game-mu-one.vercel.app"
    },
    {
        id: 9,
        title: "Video Call App",
        src: call,
        desc: "Bu loyiha React JS orqali yaratilgan",
        favourite: false,
        link: "https://murtozayev-videocall.vercel.app"
    },
]

localStorage.setItem("projects", JSON.stringify(projects))