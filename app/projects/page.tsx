
import Project from "../ui/project";
import sharedStyles from "../ui/shared.module.css";

export default function Page() {
  const mlvaText = "used various machine learning techniques to predict types of pedestrian car crashes & compiled a report";
  const wapoText = "created & deployed article curator using a hierarchy model to recommend relevant wapo articles to users";
  const technicaText = "designed app allowing users to create local sustainable projects & collaborate with their community";
  
  const projects: { title: string; text: string; link?: string }[] = [
  { title: 'ml4va data analysis & prediction', text: mlvaText },
  {
    title: 'wapo hackathon -- article curator',
    text: wapoText
  },
  { title: 'technica 2019 mobile app design', text: technicaText},
];
  return (
    <main className={sharedStyles.section}>
      {projects.map((project) => {
        return (
          <Project key={project.title} title={project.title} text={project.text} link={project.link} />
        );
      })}
    </main>
  );
}