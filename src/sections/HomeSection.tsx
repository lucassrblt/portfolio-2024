import {Mouse, Linkedin, Github} from 'lucide-react';
import Hand from '../assets/images/hand.svg'
import Lottie from "lottie-react"
import Circle from '../assets/lottie/circle.json'
import variables from "../variables.ts";
import {motion} from "framer-motion";
import {useContext, useEffect, useState} from "react";

const HomeSection = () => {
    const [showLottie, setShowLottie] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowLottie(!showLottie)
        }, 4000)
    }, []);
    return (
        <section className="flex flex-col z-50 w-screen px-[130px] gap-[86px] items-center">
            <div className="flex flex-col items-center mt-[200px] w-full gap-[60px]">
                <div className="flex flex-col items-center justify-center w-screen">
                    <motion.div className="flex items-center gap-[10px] justify-center" variants={{
                        hidden: {opacity: 0, y: 100},
                        show: {opacity: 1, y: 0}
                    }} transition={{
                        ease: "easeOut", duration: 0.6, delay: 0.6
                    }}
                                initial="hidden"
                                animate="show"
                    >
                        <img src={Hand} alt="Hand"/>
                        <p className="font-nunito text-primary-black text-[68px] text-nowrap w-fit h-fit font-medium z-50">Hi,
                            I'm Lucas,</p></motion.div>
                    <motion.div className="flex w-fit h-fit relative" variants={{
                        hidden: {opacity: 0, y: 100},
                        show: {opacity: 1, y: 0}
                    }} transition={{
                        ease: "easeOut", duration: 0.6, delay: 1.2
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
                            {showLottie && <Lottie animationData={Circle} className=" w-[460px]"/>}
                        </motion.div>
                        <p className="font-nunito text-primary-black text-[40px] text-nowrap">a full-stack
                            developper</p></motion.div>
                </div>
                <motion.div className="flex w-fit h-fit" variants={{
                    hidden: {opacity: 0, y: 100},
                    show: {opacity: 1, y: 0}
                }}
                            transition={{
                                ease: "easeOut", duration: 0.6, delay: 1.8
                            }}
                            initial="hidden"
                            animate="show"
                >
                    <p className="font-nunito text-primary-black text-[22px] text-nowrap font-light z-[100]">Passionate
                        about internet, i discover web developpement two years ago and started a licence at
                        HETIC.</p>
                </motion.div>
            </div>

            <motion.div className="flex gap-[40px] z-50 items-center justify-center w-full" variants={{
                hidden: {opacity: 0, y: 100},
                show: {opacity: 1, y: 0}
            }}
                transition={{
                ease: "easeOut", duration: 0.6, delay: 2.4
            }}
                initial="hidden"
                animate="show">
                <div
                    className="flex items-center justify-center p-[8px] rounded-[10px] bg-linkedin-blue cursor-pointer">
                    <a href={variables.links.linkedin}>
                        <Linkedin className="stroke-primary-white"/>
                    </a>
                </div>
                <div className="flex items-center justify-center p-[8px] rounded-full bg-primary-black cursor-pointer">
                    <a href={variables.links.github}>
                        <Github className="stroke-primary-white"/>
                    </a>
                </div>
            </motion.div>
            <motion.div className="flex items-center gap-[10px] absolute bottom-[5%]"
                 variants={{
                hidden: {opacity: 0, y: 100},
                show: {opacity: 1, y: 0}
            }}
                 transition={{
                     ease: "easeOut", duration: 1, delay: 3
                 }}
                 initial="hidden"
                 animate="show">
                <Mouse className="stroke-secondary-black"/>
                <p className="font-nunito font-regular text-[16px]">Keep scrolling</p>
            </motion.div>
        </section>
    )
}

export default HomeSection