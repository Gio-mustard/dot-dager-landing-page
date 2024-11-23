import { useEffect, useState } from "react"
import "./style.css"
import { UseTypingEffect } from "../../hooks/typingEffect";
import { Paragraph } from "../../components/paragraph";
const CardPanel = ({icon,title,currentCover,selected=false,onClick})=>{
    return(
        <div className={`card-panel ${selected?"selected":null}`}
        onClick={onClick}
        >
            <img src={currentCover} className="backgorundAboutMe" />
            <div className="icon">
                <img src={icon}/>
            </div>
            <span>
                {title}
            </span>
        </div>
    )
}



const AboutMe = ({textSite})=>{
    const [currentCardIndex,setCurrentCardIndex] = useState(0)
    const [cards,setCards] = useState(textSite.aboutme.categories)
    const [currentCard,setCurrentCard] = useState(cards[0])
    const [subTitle,setSubTitle] = UseTypingEffect(cards[0].title,50,1);
    const [subContent,setSubContent] = useState(cards[0].content);
    const handleClickCard = (index)=>{
        setCurrentCardIndex(index)
        setCurrentCard(cards[index])
        setSubTitle(cards[index].title)
        setSubContent(cards[index].content)
    }
    useEffect(()=>{
        setCards(textSite.aboutme.categories)
        setCurrentCard(textSite.aboutme.categories[currentCardIndex])
        setSubTitle(textSite.aboutme.categories[currentCardIndex].title)
        setSubContent(textSite.aboutme.categories[currentCardIndex].content)
    },[textSite])
    return(
        <section id="aboutMe">
            <img src={currentCard.icon} className="backgorundAboutMe" />
            <img src={currentCard.icon} id="imgAboutMe" />
            <div id="aboutMe-information">
                <h2 id="aboutMe-title" >{textSite.aboutme.title}</h2>
                <div id="information-container">
                    <div id="control-panel">
                        <h3>Mis intereses</h3>
                        <CardPanel
                            selected={currentCardIndex == 0}
                            onClick={()=>handleClickCard(0)}
                            currentCover={currentCard.icon}
                            icon="/icons/jinjan.png"
                            title={cards[0].title}
                        />
                        <hr />
                        <CardPanel
                            selected={currentCardIndex == 1}
                            onClick={()=>handleClickCard(1)}
                            currentCover={currentCard.icon}
                            icon={"/icons/code.png"}
                            title={cards[1].title}
                        ></CardPanel>
                        <hr />
                        <CardPanel
                            selected={currentCardIndex == 2}
                            onClick={()=>handleClickCard(2)}
                            currentCover={currentCard.icon} 
                            icon={"/icons/cat.png"}
                            title={cards[2].title}
                        >

                        </CardPanel>
                        <hr />
                        <CardPanel
                            selected={currentCardIndex == 3}
                            onClick={()=>handleClickCard(3)}
                            currentCover={currentCard.icon} 
                            icon={"/icons/guitar.png"}
                            title={cards[3].title}
                        >

                        </CardPanel>
                    </div>
                    <div id="content">
                        <h3 id="content-title">
                            <b>
                                
                                {textSite.aboutme.subtitle} 
                                </b>
                            <span>
                            {subTitle}
                            </span>
                            </h3>
                        <hr />
                        <Paragraph id="content-paragraph">
                            {subContent}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe