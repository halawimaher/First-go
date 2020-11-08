import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectCard.css';
function Projects() {
    return (
        <div className="projects" id="Projects">
            <h1>My Projects</h1>
            <div className="projects--container">
                <div className="projects--wrapper">
                    <ul className="projects--items">
                        <ProjectCard 
                        src="images/img-1.webp"
                        text="Weather App"
                        label="Live Demo"
                        path="/project1"
                        />
                        <ProjectCard 
                        src="images/img-2.jpg"
                        text="To-Do App"
                        label="Live Demo"
                        path="/project2"
                        />
                    </ul>
                    <ul className="projects--items">
                        <ProjectCard 
                        src="images/img-3.webp"
                        text="Nike e-Commerce"
                        label="Live Demo"
                        path="/project3"
                        />
                        <ProjectCard 
                        src="images/img-4.webp"
                        text="Papa John's Pizza"
                        label="Live Demo"
                        path="/project4"
                        />
                        <ProjectCard 
                        src="images/img-5.webp"
                        text="Photography in Play"
                        label="Live Demo"
                        path="/project5"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
