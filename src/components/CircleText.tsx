
function CircleText(){
    return (
        <div className="m-0">
            <div id="circle" className="relative w-full pb-[100%] overflow-hidden">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300"
                     xmlSpace="preserve">
    <defs>
        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
                    <circle cx="150" cy="150" r="75" fill="none"/>
                    <g>
                        <use xlinkHref="#circlePath" fill="none"/>
                        <text fill="#000" className="font-nunito font-semibold text-[16px]">
                            <textPath xlinkHref="#circlePath" startOffset="50%">Novembre 2023</textPath>
                        </text>
                        <text fill="#000" className="font-nunito font-semibold text-[16px]">
                            <textPath xlinkHref="#circlePath" startOffset="50%" text-anchor="middle">Novembre 2023</textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default CircleText