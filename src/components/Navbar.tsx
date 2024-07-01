import {motion} from "framer-motion";
import { ArrowDownToLine } from 'lucide-react';


const Navbar = () => {

    const navbarElement: {text: string, sectionLink: string}[] = [{ text: 'About', sectionLink: '#about_section' },{ text: 'Projects', sectionLink: '#projects_section' },{ text: 'Contact', sectionLink: '#contact_section' }];
    const handleResumeClick = () => {
        const url = `lucasrblt-resume.pdf`
        window.open(url, '_blank')
    }

    const sectionAnimation = {
        sectionVariant : {
            hidden: {opacity: 0, y: -100},
            show: {opacity: 1, y: 0}
        },
        sectionTransition : {
            ease: "easeOut", duration: 0.4
        }
    }

    return <motion.section className='flex absolute items-center justify-between w-screen px-[130px] py-[30px] z-[1000]'
                    variants={sectionAnimation.sectionVariant}
                    transition={sectionAnimation.sectionTransition}
                    initial="hidden"
                    animate="show">
        <p className='font-nunito text-secondary-black text-[16px] dark:text-primary-white transition ease duration-[600ms]'>Lucas Rimbault</p>
        <nav className='flex items-center'>
            <ul className='flex items-center gap-[30px] border border-light-grey rounded-[20px] py-3 px-[14px] dark:border-secondary-white transition ease duration-[600ms]'>
                {navbarElement.map((el: {text: string, sectionLink:string}, index: number) => (
                    <a href={el.sectionLink}>
                        <li key={index}
                            className='font-nunito text-secondary-black text-base hover:text-primary-black hover:scale-110 hover:font-semibold cursor-pointer dark:text-secondary-white dark:hover:text-primary-white transition ease duration-[600ms]'
                        >{el.text}</li>
                    </a>
                ))}
            </ul>
        </nav>
        <div className='flex gap-[40px] items-center hover:text-primary-black dark:hover:text-primary-white'>
            <button
                className="flex gap-[10px] items-center px-[10px] transition ease duration-[600ms] dark:text-secondary-white"
                onClick={handleResumeClick}>
                <p className="">Resume</p>
                <ArrowDownToLine className="stroke-secondary-black w-[20px] dark:stroke-secondary-white transition ease duration-[600ms]"/>
            </button>
        </div>

    </motion.section>
}

export default Navbar