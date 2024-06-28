import {useEffect, useRef} from "react";

interface CircleTextInterface {
    text: string

}

function CircleText({text} : CircleTextInterface) {
    const paragraph = useRef<HTMLParagraphElement>(null)

    const transform = () => {
        if (paragraph.current) {
            paragraph.current.innerHTML = paragraph.current.innerText.split('').map((letter, index) => {
              return `<span style="transform: rotate(${index * 8.3}deg)">${letter}</span>`
            }).join('');
        }
    }

    useEffect(() => {
        transform()
    });
    return (
        <div className="relative w-[124px] h-[124px] rounded-full flex items-center justify-center">
            <div className="w-full h-full absolute" id="text">
                <p ref={paragraph} className='circle-text-p font-nunito font-medium text-[14px]'>{text}</p>
            </div>
        </div>
    )
}

export default CircleText