import Image from "next/image";
import styles from "./project.module.css";
import { getProject, getProjects } from "@/lib/data";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);

  return {
    title: project?.title || "Project",
    description: project?.description || "Project details",
  };
}

const ProjectDetailPage = async ({ params }) => {
  const { slug } = params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project not found</h1>
        <Link href="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/portfolio" className={styles.backLink}>
        ← Back to Portfolio
      </Link>

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            {project.featured && (
              <span className={styles.featured}>Featured</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>About This Project</h2>
          <p className={styles.body}>{project.body}</p>

          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.technologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtnPrimary}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Project Info</h3>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Category:</span>
              <span className={styles.infoValue}>{project.category}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Technologies:</span>
              <span className={styles.infoValue}>
                {project.technologies.length} technologies
              </span>
            </div>
            {project.featured && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status:</span>
                <span className={styles.infoValue}>Featured Project</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
