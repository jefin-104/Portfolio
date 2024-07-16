import styles from "./ProjectsStyles.module.css";
import moneyminder from "../../assets/moneyminder.png";
import snapgram from "../../assets/snapgram.png";
import maintenance from "../../assets/maintenance.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={moneyminder}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Money Minder"
          p="Finance Tracker"
        />
        <ProjectCard
          src={snapgram}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Snapgram"
          p="Social Media App"
        />
        <ProjectCard
          src={maintenance}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Predictive Maintenance"
          p="Maintenance App"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Portfolio"
          p="Basic Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
