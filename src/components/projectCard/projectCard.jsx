import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.img}
        />
        <div className={styles.overlay}>
          <span className={styles.category}>{project.category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.tech}>+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className={styles.links}>
          <Link className={styles.link} href={`/portfolio/${project.slug}`}>
            View Details
          </Link>
          {project.demo && (
            <a
              className={styles.linkSecondary}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
