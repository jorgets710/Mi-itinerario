import { useState } from "react";
import "./acordion.css"


export default function Acordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)

        }
        setSelected(i)
    }

    return (
        <div className="wraperr">
            <div className="accordion">
                {info.map((item, i) =>(

                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>

                        <div className={selected === i ? 'content show' : 'content'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const info = [
    {
        question: "question 1",
        answer: "dnsjfbdshfbkldbfiuuqeBFHB SHK SHALorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina "
    },

    {
        question: "question 2",
    answer : "dnjfbdshfbkldbfiuuqeBFHB SHK SHAnnb "
    }
]