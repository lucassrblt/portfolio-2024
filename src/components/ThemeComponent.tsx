import {Moon} from 'lucide-react'
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";


const ThemeComponent = () => {
    const themeContext = useContext(ThemeContext)
    const {theme, setTheme} = themeContext


    const  handleStyle = () => {
        return theme === 'light' ? 1 : 200
    }

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log('theme', theme)

    }


    return (
        <div className="flex w-fit h-fit">
            <div
                className="flex items-center justify-center p-[8px] border border-light-grey rounded-full fixed left-[60px] top-[90%] bg-very-light-grey z-50" onClick={handleTheme} style={{ backgroundColor: theme === 'light' ? '#EAEAEA' : '#000000', transition: "all 0.6s ease"}}>
                <Moon className="w-[24px] h-[24px] cursor-pointer z-50 fill-sticky-cursor stroke-0" style={{ fill : theme === 'light' ? '#BAAFFF' : '#00FFFF', transition: "all 0.6s ease"}}/>
            </div>
            <div className="fixed w-[40px] h-[40px] left-[60px] top-[90%] bg-primary-black rounded-full" style={{transform: `scale(${handleStyle()})`, transition: "all ease 0.6s" }}></div>
        </div>
    )
}

export default ThemeComponent