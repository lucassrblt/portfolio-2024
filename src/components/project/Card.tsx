import Tag from "./Tag";
import React from "react";
import {ExternalLink, Github} from "lucide-react";

interface CardInterface {
    title: string,
    paragraphs: string[],
    img: string,
    tags: { tag: string, doc: string }[]
    links: {
        repo: string,
        deployment: string
    }

}

const Card: React.FC<CardInterface> = ({title, paragraphs, img, tags, links}) => {
    return (
        <div className="flex flex-row gap-[80px] max-w-[90%] min-h-[320px] z-50 ">
            <div className="max-h-[320px] max-w-[460px] hover:scale-90 transition-all duration-300 ">
                <img src={img}
                     className="flex rounded-[40px] object-cover w-full h-full"/>
            </div>
            <div className="flex flex-col justify-between">
                <div className='flex flex-col w-full gap-[20px]'>
                    <div className="w-fit h-fit">
                        <h1 className="font-nunito font-bold text-[32px] text-primary-black">{title}</h1>
                    </div>
                    <div className='flex flex-col w-full gap-[25px]'>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}
                               className="font-nunito font-normal text-[16px] text-third-black">{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className="flex gap-[16px]">
                        {tags.map((tag, index) => (
                            <Tag tag={tag} key={index}/>
                        ))}
                    </div>
                    <div className="flex gap-[20px]">
                        <a href={links.repo} target="_blank">
                            <Github size={24} className="stroke-secondary-black cursor-pointer"/>
                        </a>
                        <a href={links.deployment} target="_blank">
                            <ExternalLink size={24} className="stroke-secondary-black cursor-pointer"/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;