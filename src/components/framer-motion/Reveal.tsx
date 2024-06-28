"use client";
import {motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef} from "react";

interface RevealInterface {
    children? : any,
    width? : any,
    className? : string,
    hidden? : any,
    visible? : any,
    transition? : any
}

const Reveal: React.FC<RevealInterface> = ({ children = null, hidden, visible, transition}) => {
    const elementRef = useRef(null)
    const isInView = useInView(elementRef, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) mainControls.start('visible')
    }, [isInView])

    return (
        <div ref={elementRef}>
            <motion.div  variants={{
                hidden: hidden,
                visible: visible,
            }} initial="hidden" animate={mainControls} transition={transition}>
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal