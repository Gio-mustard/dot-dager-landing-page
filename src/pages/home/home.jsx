import { useState, useEffect } from 'react';
import Dotino from "../../components/dotino";
import SocialMediaLinks from "../../components/socialmedialinks";
import "./style.css"

const UseTypingEffect = (text, delay,sep=1) => {
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTypedText(text.substring(0, index));
            setIndex(index + sep);
        }, delay);

        return () => clearInterval(timer);
    }, [index, text, delay]);

    return typedText;
};

const Home = ({textSite})=>{
    
    const descriptionText = textSite.homepage.description
    
    const typedContentCreator = UseTypingEffect(
        textSite.homepage['simple-description'].split("\n")[0],
        50, 1);
    const typedPickleEnthusiast = UseTypingEffect(textSite.homepage['simple-description'].split("\n")[1], 100, 1);
    return(
        <section id="home-section">
            <Dotino></Dotino>
            <h1>
                <div className="dots">
                    <span className="dot-green first"></span>
                    <span className="dot-green second"></span>
                    <span className="dot-green last"></span>
                </div>
                Dot <br /> Dager
            </h1>
            <h2>
                {typedContentCreator}
                <br />
                {typedPickleEnthusiast}
            </h2>
            <SocialMediaLinks/>
            <p className="description-of-dot-dager">
                {descriptionText}
            </p>
            <div className="media-buttons">
                <img src="/public/images/cat.png" alt="" className="cat"/>
                <button>
                    <span>
                        {
                            textSite.buttons.contanctme
                        }
                    </span>
                    <img src="/public/icons/right row.png" />
                </button>
                <button className="blue">
                    <span>
                        {
                            textSite.buttons['about me']
                        }
                    </span>
                    <img src="/public/icons/right row.png" />
                </button>
            </div>

        </section>
    )
}
export default Home;