import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

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
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ cursor: "default" }}
              >
                <SkillList src={checkMarkIcon} skill={skill} />
              </motion.div>
            ))}
          </div>
          <hr />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Skills;