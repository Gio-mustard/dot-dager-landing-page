import { useState, useEffect } from 'react';
import Dotino from "../../components/dotino";
import SocialMediaLinks from "../../components/socialmedialinks";
import "./style.css"
import {UseTypingEffect} from "../../hooks/typingEffect"
import { Paragraph } from '../../components/paragraph';


const Home = ({textSite})=>{
    
    const descriptionText = textSite.homepage.description
    const [typedContentCreator,setContentCreator] = UseTypingEffect(
        textSite.homepage['simple-description'].split("\n")[0],
        50, 1);
    const [typedProgrammer,setProgrammer] = UseTypingEffect(textSite.homepage['simple-description'].split("\n")[1], 100, 1);
    const [typedPickleEnthusiast,setPickleEnthusiast] = UseTypingEffect(textSite.homepage['simple-description'].split("\n")[2], 100, 1);
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
    
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
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
            <h2 style={{textAlign:'right'}}>
                {typedContentCreator}
                <br />
                {typedProgrammer}
                <br />
                {typedPickleEnthusiast}
            </h2>
            <SocialMediaLinks/>
            <Paragraph className="description-of-dot-dager">
                {descriptionText}
            </Paragraph>
            
            <div className="media-buttons">
                <img src="/images/cat.png" alt="" className="cat"/>
                <a  className="button" href='#contact-me' onClick={(e)=>handleSmoothScroll(e,"contact-me")}>
                    <span>
                        {
                            textSite.buttons.contanctme
                        }
                    </span>
                    <img src="/icons/right row.png" />
                </a>
                
                    <a href="#aboutMe" className="button blue" onClick={(e)=>handleSmoothScroll(e,"aboutMe")}>
                        <span>
                            {
                                textSite.buttons['about me']
                            }
                        </span>
                        <img src="/icons/right row.png" />
                    </a>
                
            </div>

        </section>
    )
}
export default Home;