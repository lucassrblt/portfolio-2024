import Navbar from "./Navbar.tsx";
import HomeSection from "../sections/HomeSection.tsx";
import StickyCursor from "./stickyCursor.tsx";
import ThemeComponent from "./ThemeComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";

const ThemedAppContent = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`relative overflow-x-hidden overflow-y-auto h-auto min-h-screen bg-primary-white ${theme === 'dark' ? 'dark' : ''} flex flex-col gap-[150px]`}>
            <Navbar />
            <HomeSection />
            <ProjectSection />
            <StickyCursor />
            <ThemeComponent />
        </div>
    );
};

export default ThemedAppContent