import Navbar from "./components/Navbar.tsx";

import LeftGradient from './assets/images/left-gradient.svg?react'
import RightGradient from './assets/images/right-gradient.svg?react'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import HomeSection from "./sections/HomeSection.tsx";
// import {useScroll, useTransform, motion} from "framer-motion";
// import {useEffect} from "react";

// const ScrollFadeComponent = ({children}) => {
//     const { scrollY, scrollYProgress } = useScroll()
//     const opacity = useTransform(scrollY, [0, 100], [1, 0])
//
//     useEffect(() => {
//         console.log('test')
//     }, [scrollYProgress]);
//     return (
//         <motion.div
//             style={{
//                 opacity,
//             }}
//         >
//             {children}
//         </motion.div>
//     );
// };

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
