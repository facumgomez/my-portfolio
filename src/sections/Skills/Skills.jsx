import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skillCategories = [
    ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    ["Node.js", "Express.js", "MongoDB", "Sass"],
    ["Bootstrap", "Tailwind CSS", "Git", "Firebase", "Socket.IO"],
    ["Mongoose", "Mocha", "Postman", "jQuery"]
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      {skillCategories.map((category, index) => (
        <React.Fragment key={index}>
          <div className={styles.skillList}>
            {category.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
            
          </div>
          <hr />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Skills;