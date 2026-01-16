import styles from './skills.module.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', image: 'img/skillLogos/html.png' },
    { name: 'CSS', image: 'img/skillLogos/css.png' },
    { name: 'Static site generator', image: 'img/skillLogos/docusaur.png' },
    { name: 'Python', image: 'img/skillLogos/python.png' },
    { name: 'Shell scripting', image: 'img/skillLogos/shellScripting.png' },
    { name: 'Yaml', image: 'img/skillLogos/yaml.png' },
    { name: 'Container', image: 'img/skillLogos/docker.png' },
    { name: 'CI/CD with GitHub Actions', image: 'img/skillLogos/GitHubActions.png' },
    { name: 'IT Security', image: 'img/skillLogos/security.png' },
    { name: 'Kali Linux', image: 'img/skillLogos/kaliLinux.png' },
  ];

  return (
    <section className={styles.skillsSection}>

        <div className={styles.skillsContainer}>

            <h2 className={styles.skillsTitle}>My skills</h2>

            <div className={styles.skillCardsContainer}>
              {skills.length === 0 ? (
                <div className={styles.skillCard}>
                  <img className={styles.skillImage} src="img/docusaurus.png" alt="Placeholder skill" />
                  <span>Skills will be added soon</span>
                </div>
              ) : (
                skills.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    <img className={styles.skillImage} src={skill.image} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))
              )}
            </div>

        </div>

    </section>
  );
}

export default Skills;