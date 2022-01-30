import react from 'react'
import profile from './img/profile.png'

const About = () => {
    return (
        <div className="section about-container" id="about">
            <h1>About</h1>
            <img src={profile} />
            <p>My name is Aaron, and I like to work with code.</p>
            <p>I am a full-stack web developer that works with with a variety of technologies, mainly MERN (MongoDB, Express, React & Node.js).</p>
            <h3>Skills</h3>
            <div className="skills-container">
                <div className="skill-list">
                <h4>Web Technologies</h4>
                <ul>
                    <li>Flask</li>
                    <li>React</li>
                </ul>
                </div>
                <div className="skill-list">
                <h4>Programming Languages</h4>
                <ul>
                    <li>C/C++</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>JavaScript (ES6)</li>
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>Visual Basic.NET</li>
                </ul>
                </div>
                <div className='skill-list'>
                <h4>Databases</h4>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>SQLite</li>
                </ul>
                </div>
                <div className='skill-list'>
                <h4>Other Skills</h4>
                <ul>
                    <li>Photoshop</li>
                </ul>
                </div>
            
            </div>
            
        </div>
    )
}


export default About