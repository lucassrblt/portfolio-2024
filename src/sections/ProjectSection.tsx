import {projects} from "../variables/projects.ts";
import Card from "../components/project/Card.tsx";
import CircleText from "../components/CircleText.tsx";

const ProjectSection = () => {
    return (
    <section className="flex flex-col gap-[100px] w-screen px-[130px]" id="projects_section">
        <div className="flex flex-col gap-[10px] w-full items-center justify-center z-50">
            <div className="flex w-fit h-fit"><p className="font-nunito font-semibold text-primary-purple text-[40px]">Some Projects</p></div>
            <div className="flex flex-col w-fit h-fit text-center">
                <p className="font-nunito font-semibold text-primary-black text-[32px]">A mix of <span className="relative z-50">personnal<span className="absolute bg-light-orange h-[8px] w-full top-[65%] left-0 z-1"></span></span>
                </p>
                <p className="font-nunito font-semibold text-primary-black text-[32px]">and <span className="relative">collaboratives<span className="absolute bg-light-green h-[8px] w-full top-[65%] left-0 z-1"></span></span> project
                <span></span>
                </p>
            </div>
        </div>
        <ProjectsWrapper/>
    </section>
  );
}

export default ProjectSection


const ProjectsWrapper = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-[150px]">
            {projects.map((project, index) => (
                <Card key={index} title={project.title} paragraphs={project.paragraphs} img={project.img} tags={project.tags} links={project.links} date={project.date}/>
            ))}
        </div>
    )
}