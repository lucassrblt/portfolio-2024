import aus from "../assets/images/aus.png"
import runner from "../assets/images/runner.png"
import sltc from "../assets/images/sltc.png"
import hbo from "../assets/images/hbo.png"

export const projects = [
    {
        title : "Runner Clippy's Adventure",
        paragraphs : [
            "Runner Clippy's Adventure is a runner-type game created as part of a school project. It's a 2D game in which you can jump over obstacles, create your own levels and use them.",
            "In this project, I was involved in creating the graphical interface, managing DOM elements and keyboard events."
        ],
        img : runner,
        tags: [
            {
                tag : "Javascript",
                doc : "https://developer.mozilla.org/fr/docs/Web/JavaScript"
            },
            {
                tag : "CSS",
                doc : "https://developer.mozilla.org/fr/docs/Web/CSS"
            }
        ],
        links : {
            repo : "https://github.com/lucassrblt/Runner-Clippy-s-Adventures",
            deployment : "https://runner-clippy-s-adventures.vercel.app/"
        }
    },
    {
        title : "HBO Max Clone",
        paragraphs : [
            "HBO Max Clone is a front-end single page projects developped on my own to train css and vue skills. The idea come from avocadogrowth coding challenge a plateform wich relase daily front-end challenge to practice your skills. and improve them",
            "During this project, I got my first taste of VueJs the technology I used during my apprenticeship and I was able to use the TMDB api to fetch the various information.",
        ],
        img : hbo,
        tags: [
            {
                tag : "VueJs",
                doc : "https://vuejs.org/"
            },
            {
                tag : "SCSS",
                doc : "https://sass-lang.com/documentation/"
            },
            {
                tag : "TMDB API",
                doc : "https://developer.themoviedb.org/reference/intro/getting-started"
            }
        ],
        links : {
            repo : "https://github.com/lucassrblt/Coding-Challenge",
            deployment : "https://coding-challenge-opal.vercel.app/"
        }
    },
    {
        title : "Adopte un stagiaire",
        paragraphs : [
            "Runner Clippy's Adventure is a game that I made with my friends. It is a 2D side-scrolling platformer game where you play as Clippy, the Microsoft Office Assistant, who is on a quest to save his friends from the evil paperclip factory.",
            "I was responsible for implementing the game's mechanics, such as the player's movement, jumping, and collision detection. I also worked on the game's level design and helped with the game's art assets.",
        ],
        img : aus,
        tags: [
            {
                tag : "ReactJS",
                doc : "https://react.dev/"
            },
            {
                tag : "ExpressJS",
                doc : "https://expressjs.com/fr/"
            },
            {
                tag : "Typescript",
                doc : "https://www.typescriptlang.org/docs/"
            },
            {
                tag : "SCSS",
                doc : "https://sass-lang.com/documentation/"
            },
            {
                tag : "PostgreSQL",
                doc : "https://www.postgresql.org/docs/current/"
            }
        ],
        links : {
            repo : "https://github.com/HETIC-WEB2-Hackathon-2024/rouge-aus",
            deployment : ""
        }
    },
    {
        title : "SLTC Website",
        paragraphs : [
            "Runner Clippy's Adventure is a game that I made with my friends. It is a 2D side-scrolling platformer game where you play as Clippy, the Microsoft Office Assistant, who is on a quest to save his friends from the evil paperclip factory.",
            "I was responsible for implementing the game's mechanics, such as the player's movement, jumping, and collision detection. I also worked on the game's level design and helped with the game's art assets.",
        ],
        img : sltc,
        tags : [
            {
                tag : "NextJS",
                doc : "https://nextjs.org/docs"
            },
            {
                tag : "Typescript",
                doc : "https://www.typescriptlang.org/docs/"
            },
            {
                tag : "SCSS",
                doc : "https://sass-lang.com/documentation/"
            }
        ],
        links : {
            repo : "https://github.com/stadelavalloistennisclub/siteweb",
            deployment : "https://siteweb-eight.vercel.app/"
        }
    }
]