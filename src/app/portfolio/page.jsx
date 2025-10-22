import ProjectCard from "@/components/projectCard/projectCard";
import Skills from "@/components/skills/skills";
import styles from "./portfolio.module.css";
import { getProjects, getSkills } from "@/lib/data";

export const metadata = {
  title: "Portfolio",
  description: "Browse my portfolio of web development projects",
};

const PortfolioPage = async () => {
  const projects = await getProjects();
  const skills = await getSkills();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>My Portfolio</h1>
        <p className={styles.subtitle}>
          A collection of my web development projects showcasing modern technologies
          and best practices
        </p>
      </div>

      <div className={styles.filterSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionDesc}>
          Here are some of my best work across different categories
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Skills skills={skills} />
    </div>
  );
};

export default PortfolioPage;
