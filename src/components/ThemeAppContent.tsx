import Navbar from "./Navbar.tsx";
import HomeSection from "../sections/HomeSection.tsx";
import StickyCursor from "./stickyCursor.tsx";
import ThemeComponent from "./ThemeComponent.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import LeftGradient from '../assets/images/left-gradient.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import RightGradient from '../assets/images/right-gradient.svg?react';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

const ThemedAppContent = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`relative overflow-x-hidden overflow-y-auto h-auto min-h-screen bg-primary-white ${theme === 'dark' ? 'dark' : ''}`}>
            <Navbar />
            <LeftGradient className='absolute left-[-40%] top-[-5%] z-50'/>
            <RightGradient className='absolute left-[50%] top-[-10%] z-50'/>
            <HomeSection />
            <StickyCursor />
            <ThemeComponent />
        </div>
    );
};

export default ThemedAppContent