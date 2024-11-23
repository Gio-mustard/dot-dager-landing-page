import { useState,useEffect } from "react";

const UseTypingEffect = (text="", delay,sep=1) => {
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    const [finalText,setFinalText] = useState(text)

    useEffect(() => {
        const timer = setInterval(() => {
            setTypedText(finalText.substring(0, index));
            setIndex(index + sep);
        }, delay);

        return () => clearInterval(timer);
    }, [index, finalText, delay]);
    
    const reset = (newText)=>{
        setTypedText("")
        setFinalText(newText)
        setIndex(0)
    }

    return [typedText,reset];
};

export {UseTypingEffect};