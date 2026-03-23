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
        'Transitions, animations and hover effects',
      ]
    },
    {
      name: 'CSS',
      image: 'img/skillLogos/css.png',
      content: [
        'User-friendly navigation menus',
        'Responsive web design',
        'Contact forms and login pages',
        'Transitions, animations and hover effects',
      ]
    },
    {
      name: 'Static site generator',
      image: 'img/skillLogos/docusaur.png',
      content: [
        'Static site generation with Docusaurus',
        'search functionality',
        'static website and customization',
        'tags, categories, and RSS feeds',
      ]
    },
    { name: 'Python',
      image: 'img/skillLogos/python.png',
      content: [
        'Build APIs',
        'spam filtering, recommendation systems',
        'automate software testing',
        'using libraries like Tkinter, PyQt, or Kivy',
      ]
    },
    {
      name: 'Shell scripting',
      image: 'img/skillLogos/shellScripting.png',
      content: [
        'System administration and automation with shell scripts',
        'Adding new users and setting their permissions.',
        'Performing calculations or running statistical analysis on data.',
        'Conditional statements, loops, functions',
      ]
    },
    {
      name: 'Yaml',
      image: 'img/skillLogos/yaml.png',
      content: [
        'Configuration management with Yaml files',
        'A Kubernetes deployment',
        'Store settings like database connections',
        'Environment-specific variables',
        'Complex data structures represent lists and maps',
      ]
    },
    {
      name: 'Container',
      image: 'img/skillLogos/docker.png',
      content: [
      'Containerization and deployment with Docker',
      'CI/CD pipelines',
      'automate building, testing, deploying applications.',
      'build microservices-based applications',
      ]
    },
    {
      name: 'CI/CD with GitHub Actions',
      image: 'img/skillLogos/GitHubActions.png',
      content: [
        'Automated builds and tests',
        'Pre-built actions for common tasks',
        'Push, pull request, or schedule triggers',
        'Automated deployments',
      ]
    },
    {
      name: 'IT Security',
      image: 'img/skillLogos/security.png',
      content: [
        'Security best practices and vulnerability management',
        'Simulate attacks and identify vulnerabilities',
        'Login security',
        'Implement authentication and authorization mechanisms',
      ]
    },
    {
      name: 'Linux',
      image: 'img/card-skill-icons/linuxLogo.png',
      content: [
        'Linux system administration and troubleshooting',
        'Command-line proficiency',
        'Shell scripting for automation',
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

                    <div className={styles.skillFront}>
                      <img className={styles.skillImage} src={skill.image} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>

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