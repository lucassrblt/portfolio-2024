import React from 'react'

interface TagInterface {
    tag: { tag: string, doc: string }

}

const Tag: React.FC<TagInterface> = ({tag}) => {
    return (
        <a target="_blank" href={tag.doc}>

            <div
                className="flex items-center justify-center py-[8px] px-[16px] rounded-[16px] border-[1px] border-primary-black w-fit z-50 cursor-pointer">
                <span className="font-nunito font-medium text-primary-black text-[14px]">{tag.tag}</span>
            </div>
        </a>

    )
}

export default Tag