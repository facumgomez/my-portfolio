import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
          <motion.div 
            className={styles.skillList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {category.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ cursor: "default" }}
              >
                <SkillList src={checkMarkIcon} skill={skill} />
              </motion.div>
            ))}
          </motion.div>
          {index < skillCategories.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default Skills;