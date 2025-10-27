
import Project from "../ui/project";
import sharedStyles from "../ui/shared.module.css";

export default function Page() {

  const calAiText = "Developed Calendar AI in Outlook, an LLM-based Copilot agent automating calendar management";
  const teamRobText = "Developed + shipped TeamROB in Microsoft Places, a workplace tool helping teams to coordinate + manage their calendars";
  const assistiveChatText = "Built an assistive chat feature on microsoft365.com allowing users to turn their prompts into actionable commands";
  const taggingText = "Worked on a hackathon team to develop a prototype tagging functionality on microsoft365.com"
  const wapoYoutubeText = "Coded + deployed a YouTube Live chat integration, allowing article updates to immediately sync with live video chats, expanding audience reach";
  const wapoHackathonText = "Created & deployed article curator using a hierarchy model to recommend relevant WaPo articles to users";
  const mlvaText = "Used various machine learning techniques to predict types of pedestrian car crashes & compiled a report";
  const technicaText = "Designed app allowing users to create local sustainable projects & collaborate with their community";
  
  const msftProjects: { title: string; text: string; link?: string }[] = [
  { title: 'Calendar AI in Outlook', text: calAiText },
  { title: 'TeamROB in Microsoft Places', text: teamRobText },
  { title: 'Assistive chat', text: assistiveChatText },
  { title: 'Document tagging prototype', text: taggingText },
];

  const wapoProjects: { title: string; text: string; link?: string }[] = [
  {
    title: 'WaPo YouTube integration',
    text: wapoYoutubeText
  },
  {
    title: 'WaPo hackathon -- article curator',
    text: wapoHackathonText
  },
];

  const otherProjects: { title: string; text: string; link?: string }[] = [
  { title: 'ML4VA data analysis & prediction', text: mlvaText, link: 'https://github.com/aisha-singh/ML4VA-2019' },
  { title: 'Technica 2019 mobile app design', text: technicaText, link: 'https://github.com/tyrakrehbiel/Technica2019'},
];
  return (
    <main className={sharedStyles.section}>
      <p>At Microsoft</p>
      {msftProjects.map((project) => {
        return (
          <Project key={project.title} title={project.title} text={project.text} link={project.link} />
        );
      })}
      <p>At The Washington Post</p>
      {wapoProjects.map((project) => {
        return (
          <Project key={project.title} title={project.title} text={project.text} link={project.link} />
        );
      })}
      <p>Other projects</p>
      {otherProjects.map((project) => {
        return (
          <Project key={project.title} title={project.title} text={project.text} link={project.link} />
        );
      })}
    </main>
  );
}