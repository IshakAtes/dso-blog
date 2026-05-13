import React from 'react';
import styles from './projects.module.css';
import { useState } from 'react';
import './../../css/custom.css';

const Projects = () => {
    const projects = [
        {
            name: 'V-Server',
            best: false,
            image: 'img/projectImages/vServer.png',
            description: 'Setup of a personal cloud-based virtual server as a secure and stable foundation for deploying and operating applications. The server was fully configured and intentionally prepared for running containerized applications using Docker.',
            skills: [
                { skillname: 'IT-Security', image: 'img/card-skill-icons/security.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'HTML', image: 'img/card-skill-icons/html.png' },
                { skillname: 'CSS', image: 'img/card-skill-icons/css.png' },
            ],
            links: {
                documentation: 'docs/projects/v-server',
                github: 'https://github.com/IshakAtes/v-server-setup.git',
            },
        },
        {
            name: 'Baby Tools Shop',
            best: false,
            image: 'img/projectImages/babyShop.png',
            description: 'Containerization of a simple e-commerce application for baby products with a Django backend to enable isolated, reproducible, and scalable operation. The project focuses on running and managing the backend components within a containerized environment and understanding the operational benefits of container-based architectures.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker-icon.png' },
                { skillname: 'Django', image: 'img/card-skill-icons/django.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
            ],
            links: {
                documentation: 'docs/projects/baby-tools-shop',
                github: 'https://github.com/IshakAtes/baby-tools-shop.git',
            },
        },
        {
            name: 'Truck Signs API',
            best: false,
            image: 'img/projectImages/truckSigns.png',
            description: 'Containerization of a Django-based REST API with an integrated database to ensure reproducible, isolated, and secure operation. The project focuses on configuring containerized server components, enabling communication between API and database containers, and managing application configuration in a containerized environment.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker-icon.png' },
                { skillname: 'Django', image: 'img/card-skill-icons/django.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
            ],
            links: {
                documentation: 'docs/projects/truck-signs-api',
                github: 'https://github.com/IshakAtes/truck_signs_api.git',
            },
        },
        {
            name: 'Juice Shop Meister',
            best: true,
            image: 'img/projectImages/juiceShop.png',
            description: 'Authorized penetration testing of the intentionally vulnerable OWASP Juice Shop application, focusing on common web vulnerabilities such as cross-site scripting, broken access control, and improper input validation. The project aims to apply offensive security techniques in practice and translate them into concrete defensive measures for securing modern web applications.',
            skills: [
                { skillname: 'IT-Security', image: 'img/card-skill-icons/security.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Python', image: 'img/card-skill-icons/python.png' },
                { skillname: 'Kali-Linux', image: 'img/skillLogos/kaliLinux.png' },
            ],
            links: {
                documentation: 'docs/projects/owasp_juice_shop',
                github: 'https://github.com/IshakAtes/owasp_juice_shop.git',
            },
        },
        {
            name: 'Wordpress',
            best: false,
            image: 'img/projectImages/wordpress.png',
            description: 'Containerization and deployment of a personal WordPress website on a private server, including automated setup of the database and admin account. The project focuses on reproducible, declarative configuration, secure operation, and efficient management of containerized applications.',
            skills: [
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'Docker', image: 'img/card-skill-icons/docker-icon.png' },
            ],
            links: {
                documentation: 'docs/projects/wordpress',
                github: 'https://github.com/IshakAtes/wordpress_docker.git',
            },
        },
        {
            name: 'Minecraft-Server',
            best: true,
            image: 'img/projectImages/minecraft.png',
            description: 'Containerization and deployment of a dedicated Minecraft server on a cloud VM, including persistent storage of game worlds and configurable server settings. The project focuses on reproducible deployment, flexible configuration via environment variables, and monitoring and testing of the running container environment.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker-icon.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'IT-Security', image: 'img/card-skill-icons/security.png' },
                { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
            ],
            links: {
                documentation: 'docs/projects/minecraft-server',
                github: 'https://github.com/IshakAtes/minecraft-server.git',
            },
        },
        {
            name: 'Conduit Deployment',
            best: true,
            image: 'img/projectImages/conduit.png',
            description: 'Containerization and deployment of the full-stack Conduit application (Angular frontend, Django REST backend) on a personal server. The project includes both manual container setup and a fully automated CI/CD workflow using GitHub Actions, which builds, signs, pushes images to the registry, and deploys them automatically on the server. Key focus areas were security, reproducible deployment, and handling of secrets for managing sensitive data.',
            skills: [
                { skillname: 'Docker', image: 'img/card-skill-icons/docker-icon.png' },
                { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
                { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
                { skillname: 'CI/CD', image: 'img/card-skill-icons/cicd.png' },
            ],
            links: {
                documentation: 'docs/projects/conduit-ci-cd',
                github: 'https://github.com/IshakAtes/conduit-container.git',
            },
        },
        // {
        //     name: 'Docusaurus-Portfolio',
        //     best: false,
        //     image: 'img/undraw_docusaurus_tree.svg',
        //     description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     skills: [
        //         { skillname: 'Docker', image: 'img/card-skill-icons/docker.png' },
        //         { skillname: 'Shell-Scripting', image: 'img/card-skill-icons/shell.png' },
        //         { skillname: 'YAML', image: 'img/card-skill-icons/yaml.png' },
        //         { skillname: 'CI/CD', image: 'img/card-skill-icons/cicd.png' },
        //         { skillname: 'HTML', image: 'img/card-skill-icons/html.png' },
        //         { skillname: 'CSS', image: 'img/card-skill-icons/css.png' },
        //     ],
        //     links: {
        //         documentation: 'https://babytools.docs.example.com',
        //         github: 'https://github.com/IshakAtes/dso-blog.git',
        //     },
        // },
    ];

    // STATE: aktuell ausgewähltes Projekt
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    // FUNKTION: wird bei Klick auf ein Listenelement aufgerufen
    const handleProjectClick = (index: number) => {
        setSelectedProject(projects[index]);
    };
    const [showOtherProjects, setShowOtherProjects] = useState(false);

    return (
        <section id="projects-section" className={styles.projectsSection}>
            <div className={`${styles.mainContainer} globalPadding`}>
                <h2 className={styles.projectsTitle}>My project highlights</h2>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectList}>
                        <ul className={styles.projectul}>
                            {projects.map((project, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleProjectClick(index)}
                                    className={`${styles.listElement} ${
                                        project.name === selectedProject.name ? styles.activeProject : ''
                                    }`}>
                                    {index + 1}. {project.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.projectCardsContainer}>
                        <div className={styles.projectCard}>
                            <div className={styles.headerContainer}>
                                <h3 className={styles.name}>{selectedProject.name}</h3>
                                <div className={styles.skillContainer}>
                                    {selectedProject.skills.map((skill, index) => (
                                        <div className={styles.skillCard} key={index}>
                                            <img src={skill.image} alt={skill.skillname} />
                                            <span>{skill.skillname}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.bodyContainer}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                />
                                <div className={styles.contentContainer}>
                                    <span>{selectedProject.description}</span>
                                    <div className={styles.buttonContainer}>
                                        <a href={selectedProject.links.documentation} className={styles.btn2} rel="noopener noreferrer">
                                            Documentation
                                        </a>
                                        <a href={selectedProject.links.github} className={styles.btn3} target='_blank' rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile-View */}
            <div className={`${styles.mobileProjects} globalPadding`}>
                <h2 className={styles.projectsTitle}>My project highlights</h2>

                {/* BEST PROJECTS */}
                <div className={styles.projectsContainer}>
                    {projects
                    .filter(project => project.best === true)
                    .map((project, index) => (
                        <div className={styles.mobileProjectCard} key={index}>
                            <h2>{index + 1}. {project.name}</h2>
                            <div className={styles.skillCardContainer}>
                                {project.skills.map((skill, index) => (
                                    <div className={styles.skillCard} key={index}>
                                        <img src={skill.image} alt={skill.skillname} />
                                        <span>{skill.skillname}</span>
                                    </div>
                                ))}
                            </div>
                            <img src={project.image} alt={project.name} />
                            <span className={styles.description}>{project.description}</span>
                            <div className={styles.buttonContainer}>
                                <a href={project.links.documentation} className={styles.btn2} rel="noopener noreferrer">
                                    Documentation
                                </a>
                                <a href={project.links.github} className={styles.btn3} target='_blank' rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.secondProjectsContainer}>
                    <div className={styles.otherProjects} style={{ display: showOtherProjects ? 'flex' : 'none' }}>
                        {projects
                        .filter(project => project.best === false)
                        .map((project, index) => (
                            <div className={styles.mobileProjectCard} key={index}>
                                <h2>{index + 4}. {project.name}</h2>
                                <div className={styles.skillCardContainer}>
                                    {project.skills.map((skill, index) => (
                                        <div className={styles.skillCard} key={index}>
                                            <img src={skill.image} alt={skill.skillname} />
                                            <span>{skill.skillname}</span>
                                        </div>
                                    ))}
                                </div>
                                <img src={project.image} alt={project.name} />
                                <span className={styles.description}>{project.description}</span>
                                <div className={styles.buttonContainer}>
                                    <a href={project.links.documentation} className={styles.btn2} rel="noopener noreferrer">
                                        Documentation
                                    </a>
                                    <a href={project.links.github} className={styles.btn3} target='_blank' rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.seeMore} onClick={() => setShowOtherProjects(!showOtherProjects)}>
                    <img className={styles.defaultArrow} src="img/arrow.png" alt="arrow" />
                    <img className={styles.hoverArrow} src="img/hoverArrow.png" alt="hover arrow" />
                    <span><u>{showOtherProjects ? 'Close Other Projects' : 'See More Projects'}</u></span>
                </div>
            </div>
        </section>
    );
}

export default Projects;