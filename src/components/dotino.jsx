import { useState } from "react";
import "./dotino.css"
import { useEffect } from "react";
const Dotino = ({delaySeconds = 1}) => {
    const [currentClassName,setCurrentClassName]=useState('initial')
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(true);
        }, delaySeconds * 1000);

        return () => clearTimeout(timer);
    }, [delaySeconds]);
    return (
        <img 
            src="/images/pepino.png" 
            id="dotino"
            className={`dotino ${visible ? "show" : "hidden"}`}
            />
    )
}
export default Dotino;