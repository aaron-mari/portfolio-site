import React from 'react'
import Project from './Project'
import countdown from './img/countdown.png'
import flashapp from './img/flashapp.png'

let projects = [
    {'title': 'New Year Countdown', 'image': countdown, "Description": "A simple new year countdown written in React.", "link": "https://nycountdown-am.netlify.app/"},
    {'title': 'Flash Viewer', 'image': flashapp, 'Description': 'A web app written in flask that hosts .swf files.', "link": "https://github.com/aaron-mari/flash-flask-app"}
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