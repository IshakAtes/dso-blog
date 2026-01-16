import styles from './projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
        <div className={styles.mainContainer}>
            <h2 className={styles.projectsTitle}>My project highlights</h2>
            <div className={styles.projectsContainer}>
                <div>
                    <ul>
                        <li>1. Baby Tools</li>
                        <li>2. Truck Signs API</li>
                        <li>3. Juice Shop Meister</li>
                    </ul>
                    <div>
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