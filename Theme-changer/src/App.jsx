import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode,setThememode]=useState("light")

  const darktheme=()=>{
    setThememode("dark")
  }

  const Lighttheme =()=>{
    setThememode("light")
  }



  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
    
  }, [themeMode])
  


  return (
    <>
    <ThemeProvider value={{ themeMode,darktheme,Lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <dir className="w-ful">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <Themebtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">{/* Card */}
          <Card/>
          </div>
        </dir>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
