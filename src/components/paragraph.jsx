import { useEffect, useState } from "react"
import "./paragraph.css"
const Paragraph = ({children,id,className})=>{
    const [is_on_transition,set_is_in_transition] = useState(false);
    const [current_text,set_current_text] = useState(children);
    const transition_time = 300;
    useEffect(()=>{
        set_is_in_transition(true)

        setTimeout(()=>{
            set_current_text(children)
            set_is_in_transition(false)
        },transition_time)
    },[children])
    
    return(
        <div className={`p-container ${
            is_on_transition?"in-transition":null
        } `}
        style={{
            transition:`opacity .${transition_time}s ease-out`
        }}
        >

        <p id={id} className={className}>
            {current_text}
        </p>
        </div>
    )
}
export {Paragraph}