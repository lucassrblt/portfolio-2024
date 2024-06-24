const Navbar = () => {

    const navbarElement: string[] = ['About', 'Project', 'Skills', 'Contact'];
    return <section className='flex items-center justify-between'>
        <div><p className='font-nunito text-secondary-black text-[16px]'>Lucas Rimbault</p></div>
        <nav className='flex items-center'>
            <ul className='flex items-center gap-[30px] border border-light-grey rounded-[20px] py-3 px-[14px]'>
                {navbarElement.map((el: string, index: number) => (
                    <li key={index} className='font-nunito text-secondary-black text-base hover:text-primary-black hover:scale-110 hover:font-semibold cursor-pointer transition-all'>{el}</li>
                ))}
            </ul>
        </nav>
        <div>
            <div>
                <button>Resume</button>
            </div>
            <div>

            </div>
        </div>

    </section>
}

export default Navbar