import styles from "./skills.module.css";

const Skills = ({ skills }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Skills & Technologies</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Frontend</h3>
          <div className={styles.skillsList}>
            {skills.frontend.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Backend</h3>
          <div className={styles.skillsList}>
            {skills.backend.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Tools & DevOps</h3>
          <div className={styles.skillsList}>
            {skills.tools.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
