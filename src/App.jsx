import { useEffect } from 'react';
import { useState } from 'react';
import Home from "./pages/home/home"
import "/public/app.css"
import englishSite from "./englishsite.json"
import spanishSite from "./spanishsite.json"
import AboutMe from './pages/aboutme/aboutme';
import ContactMe from './pages/contactme/contacme';
import { SwitchLanguage } from './components/switch-language';
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.href;
      scrollSuaveYRedirigir(url);
  });
});
function App() {
  const [site_on_english, setSiteOnEnglish] = useState(true);
  const [textSite, setTextSite] = useState(site_on_english?englishSite:spanishSite);
  useEffect(() => {
    setTextSite(site_on_english?englishSite:spanishSite);
  }, [site_on_english]);

  return (
    <>
      <SwitchLanguage 
        id='global-switch-language'
        onChange={(language)=>{
          setSiteOnEnglish(language === 'en')
        }}
        ></SwitchLanguage>
      <Home textSite={textSite}/>
      <AboutMe textSite={textSite}/>
      <div id='extra-information'/>
      <ContactMe textSite={textSite}/>
    </>
  )
}

export default App
