import {motion} from "framer-motion";
import ThemeComponent from "./ThemeComponent.tsx";

const Navbar = () => {

    const navbarElement: string[] = ['About', 'Project', 'Skills', 'Contact'];
    const handleResumeClick = () => {
        const url = `${import.meta.env.VITE_LOCAL_URL}/public/assets/documents/fakeresume.pdf`
        window.open(url, '_blank')
    }

    const sectionAnimation = {
        sectionVariant : {
            hidden: {opacity: 0, y: -100},
            show: {opacity: 1, y: 0}
        },
        sectionTransition : {
            ease: "easeOut", duration: 0.8
        }


    }

    return <motion.section className='flex items-center justify-between fixed w-screen px-[130px] py-[30px] z-50'
                    variants={sectionAnimation.sectionVariant}
                    transition={sectionAnimation.sectionTransition}
                    initial="hidden"
                    animate="show">
        <p className='font-nunito text-secondary-black text-[16px]'>Lucas Rimbault</p>
        <nav className='flex items-center'>
            <ul className='flex items-center gap-[30px] border border-light-grey rounded-[20px] py-3 px-[14px]'>
                {navbarElement.map((el: string, index: number) => (
                    <li key={index}
                        className='font-nunito text-secondary-black text-base hover:text-primary-black hover:scale-110 hover:font-semibold cursor-pointer transition-all'
                    >{el}</li>
                ))}
            </ul>
        </nav>
        <div className='flex gap-[40px] items-center'>
            <button className="flex gap-[10px] items-center" onClick={handleResumeClick}>
                <p>Resume</p>
                {/*<FileDown className="w-[22px] stroke-secondary-black"/>*/}
            </button>
            <ThemeComponent />
        </div>

    </motion.section>
}

export default Navbar