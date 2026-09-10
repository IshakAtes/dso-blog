import { useState, useRef } from 'react';
import type { TouchEvent } from 'react';
import styles from './skills.module.css';
import './../../css/custom.css';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
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
        'search functionality',
        'static website and customization',
        'tags, categories, and RSS feeds',
        'translation',
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
        'A Kubernetes deployment',
        'Store settings like database connections',
        'Environment-specific variables',
        'Complex data structures represent lists and maps',
        'Configuration management with Yaml files',
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

  // Skills in 3er Gruppen aufteilen
  const groupedSkills = [];
  for (let i = 0; i < skills.length; i += 3) {
    groupedSkills.push(skills.slice(i, i + 3));
  }

  return (
    <section id="skills-section" className={styles.skillsSection}>
      
      {/* Desktop Version */}
      <div className={`${styles.skillsContainer} globalPadding`}>
        <h2 className={styles.skillsTitle}>My skills</h2>
        <div className={styles.skillCardsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillFront}>
                <img
                  className={styles.skillImage}
                  src={skill.image}
                  alt={skill.name}
                />
                <span>{skill.name}</span>
              </div>

              <div className={styles.skillBack}>
                <ul className={styles.skillList}>
                  <span className={styles.skillListTitle}>
                    How I used this skills
                  </span>
                  {skill.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className={`${styles.mobileSkillsContainer} globalPadding`}>
        <h2 className={styles.skillsTitle}>My skills</h2>

        <div
          className={styles.carousel}
          onPointerDown={(e) => {
            startX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            const diff = startX.current - e.clientX;

            if (diff > 30 && currentIndex < groupedSkills.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            }

            if (diff < -30 && currentIndex > 0) {
              setCurrentIndex((prev) => prev - 1);
            }
          }}
        >
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentIndex * 103}%)`,
            }}
          >
            {groupedSkills.map((group, groupIndex) => (
              <div key={groupIndex} className={styles.slide}>
                {group.map((skill, index) => (
                  <div key={index} className={styles.mobileSkillCard}>
                    <div className={styles.skillsMobileContainer}>
                      <img
                        className={styles.skillMobileImage}
                        src={skill.image}
                        alt={skill.name}
                      />
                      <span>
                        {skill.name === 'Static site generator'
                          ? 'Static site'
                          : skill.name === 'CI/CD with GitHub Actions'
                          ? 'CI/CD'
                          : skill.name}
                      </span>
                    </div>

                    <ul className={styles.mobileSkillList}>
                      {skill.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {groupedSkills.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;