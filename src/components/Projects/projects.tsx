import React from 'react';
import styles from './projects.module.css';
import { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Baby Tools',
            image: 'img/projectImages/babyShop.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
                { skillname: 'Django', image: 'img/skillLogos/github.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'lorem',
            },
        },
        {
            name: 'Truck Signs API',
            image: 'img/projectLogos/truckSigns.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
                { skillname: 'Docker', image: 'img/skillLogos/docker.png' },
                { skillname: 'PostgreSQL', image: 'img/skillLogos/postgresql.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'lorem',
            },
        },
        {
            name: 'Juice Shop Meister',
            image: 'img/projectLogos/juiceShop.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
                { skillname: 'Docker', image: 'img/skillLogos/docker.png' },
                { skillname: 'PostgreSQL', image: 'img/skillLogos/postgresql.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'lorem',
            },
        }
    ];

    // STATE: aktuell ausgewähltes Projekt
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    // FUNKTION: wird bei Klick auf ein Listenelement aufgerufen
    const handleProjectClick = (index) => {
        setSelectedProject(projects[index]);
    };

    return (
        <section className={styles.projectsSection}>
            <div className={styles.mainContainer}>
                <h2 className={styles.projectsTitle}>My project highlights</h2>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectList}>
                        <ul>
                            {projects.map((project, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleProjectClick(index)}
                                    className={project.name === selectedProject.name ? styles.activeProject : ''}>
                                    {index+1}. {project.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.projectCardsContainer}>
                        <div className={styles.projectCard}>
                            <div className={styles.leftCt}>

                                <h3>{selectedProject.name}</h3>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                />

                            </div>
                            <div className={styles.rightCt}>
                                <div className={styles.skillContainer}>
                                    {selectedProject.skills.map((skill, index) => (
                                        <div className={styles.skillCard} key={index}>
                                            <img src={skill.image} alt={skill.skillname} />
                                            <span>{skill.skillname}</span>
                                        </div>
                                    ))}
                                </div>
                                <span>{selectedProject.description}</span>
                                <div>
                                    <a href={selectedProject.links.documentation} rel="noopener noreferrer">
                                        Documentation
                                    </a>
                                    <a href={selectedProject.links.github} rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;