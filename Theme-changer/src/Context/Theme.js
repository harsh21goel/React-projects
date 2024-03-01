import { createContext,useContext } from "react";

const ThemeContext = createContext({
    themeMode:"Light",
    darktheme:()=>{},
    Lighttheme:()=>{},

})

export const ThemeProvider =  ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext) 
}