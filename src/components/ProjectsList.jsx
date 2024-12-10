import ProjectItem from "./ProjectItem";

const projects = [
  {
    name: "ModernGrains",
    prodLink: "https://moderngrains-rpg.netlify.app",
    description:
      "Minimalist yet elegant full-stack furniture e-commerce web app with integrated checkout payment using stripe.",
    githubLink: "https://github.com/RyneeeJ/Moderngrains-client",
    techUsed: ["React", "Tailwind", "Supabase", "Express"],
    thumbnailPath: "/images/moderngrains.png",
  },
  {
    name: "Ace Review",
    prodLink: "https://acereview-rpg.netlify.app",
    description: "Simple website for a fictional review center company.",
    githubLink: "https://github.com/RyneeeJ/ACE-Review",
    techUsed: ["HTML", "CSS", "Javascript"],
    thumbnailPath: "/images/acereview.png",
  },
  {
    name: "ReactTalks",
    prodLink: "https://reacttalks-rpg.vercel.app",
    description:
      "Fast realtime chat application that leverages supabase realtime and Google OAuth.",
    githubLink: "https://github.com/RyneeeJ/realtime-chat-app-react",
    techUsed: ["React", "Tailwind", "Supabase"],
    thumbnailPath: "/images/reacttalks.png",
  },
];

function ProjectsList() {
  return (
    <ul className="space-y-12">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
