import styles from './projects.module.css';

const Projects = () => {
    const projects = [
        {
            name: 'Baby Tools',
            image: 'img/projectLogos/babyTools.png',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
            ]
        },
        {
            name: 'Truck Signs API',
            image: 'img/projectLogos/truckSigns.png',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
                { skillname: 'Docker', image: 'img/skillLogos/docker.png' },
                { skillname: 'PostgreSQL', image: 'img/skillLogos/postgresql.png' },
            ]
        },
        {
            name: 'Juice Shop Meister',
            image: 'img/projectLogos/juiceShop.png',
            skills: [
                { skillname: 'GitHub', image: 'img/skillLogos/github.png' },
                { skillname: 'Docker', image: 'img/skillLogos/docker.png' },
                { skillname: 'PostgreSQL', image: 'img/skillLogos/postgresql.png' },
            ]
        }
    ];

  return (
    <section className={styles.projectsSection}>
        <div className={styles.mainContainer}>
            <h2 className={styles.projectsTitle}>My project highlights</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.projectList}>
                    {projects.length === 0 ? (
                        <span>Projects will be added soon</span>
                    ) : ( 
                        projects.map((pro, index) => (
                            <ul>
                                <li key={index}>{index+1}. {pro.name}</li>
                            </ul>
                        ))
                    )}
                </div>
                <div className={styles.projectCardsContainer}>
                    <div className={styles.projectCard}>
                        <div className={styles.leftCt}>
                            <h3>Project Name</h3>
                            <img src="#" alt="Project Image" />
                        </div>
                        <div className={styles.rightCt}>
                            <div className={styles.skillContainer}>
                                <div className={styles.skillCard}>
                                    <img src="#" alt="" />
                                    <span>GitHub</span>
                                </div>
                            </div>
                            <span>Project Text</span>
                            <div>
                                <button>Documentation</button>
                                <button>GitHub</button>
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