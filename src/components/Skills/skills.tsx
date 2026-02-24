import styles from './skills.module.css';
import './../../css/custom.css';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      image: 'img/skillLogos/html.png',
      content: [
        'User-friendly navigation menus',
        'Responsive web design',
        'Contact forms and login pages',
        'Transitions, animations and hover effects'
      ]
    },
    {
      name: 'CSS',
      image: 'img/skillLogos/css.png',
      content: [
        'User-friendly navigation menus',
        'Responsive web design',
        'Contact forms and login pages',
        'Transitions, animations and hover effects'
      ]
    },
    {
      name: 'Static site generator',
      image: 'img/skillLogos/docusaur.png',
      content: [
        'Static site generation with Docusaurus'
      ]
    },
    { name: 'Python',
      image: 'img/skillLogos/python.png',
      content: [
        'Automation and scripting with Python'
      ]
    },
    {
      name: 'Shell scripting',
      image: 'img/skillLogos/shellScripting.png',
      content: [
        'System administration and automation with shell scripts'
      ]
    },
    {
      name: 'Yaml',
      image: 'img/skillLogos/yaml.png',
      content: [
        'Configuration management with Yaml files'
      ]
    },
    {
      name: 'Container',
      image: 'img/skillLogos/docker.png',
      content: [
      'Containerization and deployment with Docker'
      ]
    },
    {
      name: 'CI/CD with GitHub Actions',
      image: 'img/skillLogos/GitHubActions.png',
      content: [
        'Continuous integration and deployment with GitHub Actions'
      ]
    },
    {
      name: 'IT Security',
      image: 'img/skillLogos/security.png',
      content: [
        'Security best practices and vulnerability management'
      ]
    },
    {
      name: 'Linux',
      image: 'img/card-skill-icons/linuxLogo.png',
      content: [
        'Linux system administration and troubleshooting'
      ]
    },
  ];

  return (
    <section id="skills-section" className={`${styles.skillsSection} globalPadding`}>

        <div className={styles.skillsContainer}>

            <h2 className={styles.skillsTitle}>My skills</h2>

            <div className={styles.skillCardsContainer}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    {/* Vorderseite */}
                    <div className={styles.skillFront}>
                      <img className={styles.skillImage} src={skill.image} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>

                    {/* Rückseite mit Liste */}
                    <div className={styles.skillBack}>
                      <ul className={styles.skillList}>
                        <span className={styles.skillListTitle}>How I used this skills</span>
                        {skill.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>

        </div>

    </section>
  );
}

export default Skills;