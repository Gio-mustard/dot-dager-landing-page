import { useEffect, useState } from "react";
import "./switchLanguage.css"
const languages = [
    'es','en'
];

const SwitchLanguage = ({onChange,id})=>{
    /*
    onChange revice a string with the language code : spanish or english
    */
   const [currentLanguage, setCurrentLanguage] = useState('en');
   useEffect(() => {
     const tabs = document.querySelectorAll('.tab');
     tabs.forEach(tab => {
       tab.classList.remove('selected');
     });
     const selectedTab = document.querySelector(`.tab:nth-child(${languages.indexOf(currentLanguage) + 1})`);
     selectedTab.classList.add('selected');
     
   }, [currentLanguage]);

   const handleLanguageChange = (lang) => {
     setCurrentLanguage(lang);
   };

   return (
     <div className="switch-language" id={id}>
       {languages.map((lang, index) => (
         <span key={index} className={`tab ${lang === currentLanguage ? 'selected' : ''}`} onClick={() =>{
             handleLanguageChange(lang)
             typeof onChange === 'function' && onChange(lang)
             }}>
           {lang}
         </span>
       ))}
     </div>
   )

}
export {SwitchLanguage}