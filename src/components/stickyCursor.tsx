import {motion, useMotionValue, useSpring} from "framer-motion";
import {useEffect} from "react";

const StickyCursor = () => {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const cursorSize = 20
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const smoothOptions = { damping: 20, stiffness : 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
        }
    });

    return (
        <motion.div className="w-[20px] h-[20px] fixed border-2 border-sticky-cursor rounded-full" style={{ left: smoothMouse.x, top: smoothMouse.y}}>
        </motion.div>
    )
}

export default StickyCursor