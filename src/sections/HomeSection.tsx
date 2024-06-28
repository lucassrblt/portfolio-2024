import {Mouse, Linkedin, Github, Dribbble} from 'lucide-react';
import Hand from '../assets/images/hand.svg'
import Lottie from "lottie-react"
import Circle from '../assets/lottie/circle.json'
import variables from "../variables.ts";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const HomeSection = () => {
    const [showLottie, setShowLottie] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowLottie(!showLottie)
        }, 4000)
    }, []);


    return (
        <section className="flex relative flex-col z-50 w-screen px-[130px] gap-[70px] items-center h-screen justify-center">
            <div className="flex flex-col items-center mt-[100px] w-full gap-[60px]">
                <div className="flex flex-col items-center justify-center w-screen">
                    <motion.div className="flex items-center gap-[10px] justify-center" variants={{
                        hidden: {opacity: 0, y: 100},
                        show: {opacity: 1, y: 0}
                    }} transition={{
                        ease: "easeOut", duration: 0.6, delay: 0.4
                    }}
                                initial="hidden"
                                animate="show"
                    >
                        <img src={Hand} alt="Hand" className="z-50"/>
                        <p className="font-nunito text-primary-black text-[68px] text-nowrap w-fit h-fit font-medium z-50 dark:text-secondary-white transition ease duration-[600ms]">Hi,
                            I'm Lucas,</p>
                    </motion.div>
                    <motion.div className="flex w-fit h-fit relative" variants={{
                        hidden: {opacity: 0, y: 100},
                        show: {opacity: 1, y: 0}
                    }} transition={{
                        ease: "easeOut", duration: 0.6, delay: 0.8
                    }}
                                initial="hidden"
                                animate="show">
                        <motion.div className="absolute top-[-60%] left-[-5%] lottie-container" variants={{
                            hidden: {display: "none"},
                            show: {display: 'flex'}
                        }}
                                    transition={{
                                        ease: "easeOut", duration: 0.6, delay: 1.2
                                    }}
                                    initial="hidden"
                                    animate="show"
                        >
                            {showLottie && <Lottie animationData={Circle} className=" w-[460px] z-50"/>}
                        </motion.div>
                        <p className="font-nunito text-primary-black text-[40px] text-nowrap dark:text-secondary-white z-50 transition ease duration-[600ms]">a full-stack
                            developper</p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center w-screen">
                    <Infos />
                </div>
            </div>
            <div className="flex flex-col w-full gap-[60px] items-center justify-between">
                <Socials />
                <KeepScrolling />
            </div>
        </section>
    )
}

export default HomeSection



const KeepScrolling = () => {
    return (
        <motion.div className="flex items-center gap-[10px] absolute bottom-[5%]"
                    variants={{
                        hidden: {opacity: 0, y: 100},
                        show: {opacity: 1, y: 0}
                    }}
                    transition={{
                        ease: "easeOut", duration: 0.6, delay: 2
                    }}
                    initial="hidden"
                    animate="show">
            <Mouse
                className="stroke-secondary-black dark:stroke-secondary-white z-50 transition ease duration-[600ms]"/>
            <p className="font-nunito font-regular text-[16px] dark:text-secondary-white z-50 transition ease duration-[600ms]">Keep
                scrolling</p>
        </motion.div>
    )
}


const Socials = () => {
    return (
        <motion.div className="flex gap-[40px] z-50 items-center justify-center w-full" variants={{
            hidden: {opacity: 0, y: 100},
            show: {opacity: 1, y: 0}
        }}
                    transition={{
                        ease: "easeOut", duration: 0.6, delay: 1.6
                    }}
                    initial="hidden"
                    animate="show">
            <div
                className="flex items-center justify-center p-[10px] rounded-full bg-linkedin-blue cursor-pointer">
                <a href={variables.links.linkedin}  target="_blank">
                    <Linkedin className="stroke-primary-white"/>
                </a>
            </div>
            <div
                className="flex items-center justify-center p-[10px] rounded-full bg-primary-black cursor-pointer dark:bg-secondary-white transition ease duration-[600ms]">
                <a href={variables.links.github}  target="_blank">
                    <Github
                        className="stroke-primary-white dark:stroke-secondary-black transition ease duration-[600ms]"/>
                </a>
            </div>
            <div
                className="flex items-center justify-center p-[10px] rounded-full bg-dribble-pink cursor-pointer dark:bg-secondary-white transition ease duration-[600ms]">
                <a href={variables.links.dribbble} target="_blank">
                    <Dribbble
                        className="stroke-primary-white dark:stroke-secondary-black transition ease duration-[600ms]"/>
                </a>
            </div>
        </motion.div>
    )
}


const Infos = () => {
    return (
        <motion.div className="flex w-fit h-fit flex-col text-center gap-[0px]" variants={{
            hidden: {opacity: 0, y: 100},
            show: {opacity: 1, y: 0}
        }}
                    transition={{
                        ease: "easeOut", duration: 0.6, delay: 1.2
                    }}
                    initial="hidden"
                    animate="show"
        >
            <p className="font-nunito text-primary-black text-[22px] text-nowrap font-light z-[100] dark:text-secondary-white transition ease duration-[600ms]">Passionate
                about internet, i discover web developpement two years ago and started a licence at
                HETIC.</p>
            <p className="font-nunito text-primary-black text-[22px] text-nowrap font-light z-[100] dark:text-secondary-white transition ease duration-[600ms]">
                Today i’m looking for an apprenticeship to gain experience and work for stimulating projects.
            </p>
        </motion.div>
    )
}