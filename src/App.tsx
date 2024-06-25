import Navbar from "./components/Navbar.tsx";

import LeftGradient from './assets/images/left-gradient.svg?react'
import RightGradient from './assets/images/right-gradient.svg?react'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import HomeSection from "./sections/HomeSection.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className='relative overflow-x-hidden overflow-y-auto
        h-auto min-h-screen bg-primary-white dark:bg-primary-black'>
                <Navbar/>
                <LeftGradient className='absolute left-[-40%] top-[-5%]'/>
                <RightGradient className='absolute left-[50%] top-[-10%]'/>
                <HomeSection/>

            </div>
        </ThemeProvider>

    )
}

export default App
