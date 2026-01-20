import React from 'react';
import styles from './projects.module.css';
import { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'V-Server Setup',
            image: 'img/projectImages/vServer.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'IT-Security', image: 'img/card-skill-icons/security.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'HTML', image: 'img/card-skill-icons/html.png' },
                { skillname: 'CSS', image: 'img/card-skill-icons/css.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/v-server-setup.git',
            },
        },
        {
            name: 'Baby Tools Shop',
            image: 'img/projectImages/babyShop.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
                { skillname: 'Django', image: 'img/card-skill-icons/django.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/baby-tools-shop.git',
            },
        },
        {
            name: 'Truck Signs API',
            image: 'img/projectImages/truckSigns.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
                { skillname: 'Django', image: 'img/card-skill-icons/django.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/truck_signs_api.git',
            },
        },
        {
            name: 'Juice Shop Meister',
            image: 'img/projectImages/juiceShop.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'IT-Security', image: 'img/card-skill-icons/security.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/owasp_juice_shop.git',
            },
        },
        {
            name: 'Wordpress',
            image: 'img/projectImages/wordpress.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/wordpress_docker.git',
            },
        },
        {
            name: 'Minecraft-Server',
            image: 'img/projectImages/minecraft.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/minecraft-server.git',
            },
        },
        {
            name: 'Conduit Deployment',
            image: 'img/projectImages/conduit.png',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
                { skillname: 'CI/CD', image: 'img/card-skill-icons/cicd.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/conduit-container.git',
            },
        },
        {
            name: 'Docusaurus-Portfolio',
            image: 'img/undraw_docusaurus_tree.svg',
            description: 'A web application to help parents track their baby\'s development and milestones.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
                { skillname: 'CI/CD', image: 'img/card-skill-icons/cicd.png' },
                { skillname: 'HTML', image: 'img/card-skill-icons/html.png' },
                { skillname: 'CSS', image: 'img/card-skill-icons/css.png' },
            ],
            links: {
                documentation: 'https://babytools.docs.example.com',
                github: 'https://github.com/IshakAtes/dso-blog.git',
            },
        },
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