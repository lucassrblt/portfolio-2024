import {Moon, Sun} from 'lucide-react'
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";


const ThemeComponent = () => {
    const themeContext = useContext(ThemeContext)
    const {theme} = themeContext

    const handleDisplay = (iconTheme: string): string => {
        return theme === iconTheme ? 'flex' : 'none'
    }

    return (
        <div className="relative flex items-center justify-center p-[8px] border border-secondary-black rounded-full">
            <Moon className="w-[24px] h-[24px] cursor-pointer z-50" style={{display: handleDisplay('dark')}}/>
            <Sun className="w-[24px] h-[24px] cursor-pointer z-50" style={{display: handleDisplay('light')}}/>
            <div className="w-full h-full bg-primary-yellow absolute top-full"></div>
        </div>
    )
}

export default ThemeComponent