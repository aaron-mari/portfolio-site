import Project from './Project'
import countdown from './img/countdown.png'
import flashapp from './img/flashapp.png'
import pokepass from './img/pokepass.png'
import portfolio from './img/portolio-site.avif'

let projects = [
    {'title': 'New Year Countdown', 'image': countdown, "Description": "A simple new year countdown written in React.", "link": "https://nycountdown-am.netlify.app/"},
    {'title': 'Flash Viewer', 'image': flashapp, 'Description': 'A web app written in flask that hosts .swf files.', "link": "https://github.com/aaron-mari/flash-flask-app"},
    {'title': 'PokePassword', 'image': pokepass, 'Description': 'Diceware style passwords using pokemon names.', "link": "https://pkmpass.netlify.app/"},  
    {'title': 'Portfolio App', 'image': portfolio, 'Description': 'Project portfolio written in TypeScript using React, Sass and Vite (this website)', 'link':"https://github.com/aaron-mari/porfolio-site"}
]


const Projects = () => {

    return (
        <div id="projects" className="section">
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map(
                    project=>(
                        <Project title={project.title} image={project.image} description={project.Description} link={project.link}/>
                ))}
            </div>
        </div>
    )
}


export default Projects