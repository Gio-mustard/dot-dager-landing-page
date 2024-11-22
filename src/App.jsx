import { useEffect } from 'react';
import { useState } from 'react';
import Home from "./pages/home/home"
import "./app.css"
import englishSite from "./englishsite.json"
import spanishSite from "./spanishsite.json"

function App() {
  const [site_on_english, setSiteOnEnglish] = useState(true);
  const [textSite, setTextSite] = useState(site_on_english?englishSite:spanishSite);
  useEffect(() => {
    setTextSite(site_on_english?englishSite:spanishSite);
  }, [site_on_english]);

  return (
    <>
      <button onClick={() => setSiteOnEnglish(!site_on_english)} id='btn-change-language'>
        {site_on_english ? 'Switch to Spanish' : 'Switch to English'}
      </button>
      <Home textSite={textSite}/>

    </>
  )
}

export default App
