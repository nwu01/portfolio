import {
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    ExpressOriginal,
    ReactOriginal,
    NextjsOriginal,
    TailwindcssOriginal,
    BootstrapPlain,
    NodejsOriginal,
    MongodbPlain,
    MysqlOriginalWordmark,
    PostgresqlOriginal,
    CsharpOriginal
  } from "devicons-react";
  
  // Constants
  const githubLink = "https://github.com/nwu01";
  
  // Profile Description
  export const profileDescription = [
    "Full Stack Developer",
    "From designing seamless dynamic user experiences to building robust backend systems, I craft solutions that are both functional and scalable. With a focus on staying ahead of the curve in web technologies, I'm always ready to take on new challenges to turn innovative concepts into reality.",
    "Let's work together!"
  ];
  
  export const githubRepos = [
    {
      name: "Portfolio",
      techUsed: ["Next.js", "TailwindCSS"],
      description: "Uncover deeper insights into my journey and capabilities.",
      githubLink: `${githubLink}/Portfolio`,
      liveURL: "https://portfolio-vert-one-79.vercel.app/",
    },
    {
      name: "Emoji-TicTacToe",
      techUsed: ["React", "TailwindCSS"],
      description:
        "Emoji TicTacToe adds a fun twist to the classic game with colorful emojis, offering single and local multiplayer modes, responsive design, and captivating animations.",
      githubLink: `${githubLink}/Emoji-TicTacToe`,
      liveURL: "https://emoji-tic-tac-toe.vercel.app/",
    },
    {
      name: "NYX",
      techUsed: ["HTML", "CSS", "JavaScript"],
      description:
        "NYX is a sleek Website Blocker that empowers users to block distracting websites for set durations, promoting productivity and focus.",
      githubLink: `${githubLink}/nyx`,
      liveURL: `${githubLink}/nyx`,
    },
  ];
  
  export const workExperience = [
    {
      key: 1,
      company: "MINISIS Inc.",
      year: "2019 - Present",
      position: "Full Stack Developer",
      location: "Vancouver, BC",
      tech: "JS, React, TypeScript, NodeJS, NextJS, Tailwind, C#, HTML, CSS, jQuery, Git",
      type: "work",
    },
    {
      key: 2,
      company: "Royal Canadian Mounted Police",
      year: "Feb 2021 - June 2023",
      position: "Applications Software Developer / Business Analyst",
      location: "Vancouver, BC",
      tech: "C#, HTML, CSS, JS, React, MySQL, Cognos",
      type: "work",
    },
    {
      key: 3,
      company: "Angel Glass Corporation",
      year: "Nov 2018 - June 2019",
      position: "Software Developer",
      location: "Vancouver, BC",
      tech: "PHP, JS, HTML, CSS",
      type: "work",
    },
  ];
  
  const iconSize = 15;
  const iconClass = "mx-auto";
  
  export const skills = [
    {
      key: 2,
      name: "JavaScript",
      type: "language",
      icon: JavascriptOriginal ? (
        <JavascriptOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 3,
      name: "HTML",
      type: "language",
      icon: Html5Original ? (
        <Html5Original className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 4,
      name: "CSS",
      type: "language",
      icon: Css3Original ? (
        <Css3Original className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 5,
      name: "React",
      type: "framework",
      icon: ReactOriginal ? (
        <ReactOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 6,
      name: "Next.js",
      type: "framework",
      icon: NextjsOriginal ? (
        <NextjsOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 7,
      name: "TailwindCSS",
      type: "framework",
      icon: TailwindcssOriginal ? (
        <TailwindcssOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 8,
      name: "Bootstrap",
      type: "framework",
      icon: BootstrapPlain ? (
        <BootstrapPlain className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 9,
      name: "Node.JS",
      type: "framework",
      icon: NodejsOriginal ? (
        <NodejsOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 10,
      name: "MongoDB",
      type: "database",
      icon: MongodbPlain ? (
        <MongodbPlain className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 11,
      name: "C#",
      type: "language",
      icon: CsharpOriginal ? <CsharpOriginal className={iconClass} size={iconSize} /> : null,
    },
    {
      key: 12,
      name: "Express",
      type: "framework",
      icon: ExpressOriginal ? (
        <ExpressOriginal className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 13,
      name: "MySQL",
      type: "database",
      icon: MysqlOriginalWordmark ? (
        <MysqlOriginalWordmark className={iconClass} size={iconSize} />
      ) : null,
    },
    {
      key: 14,
      name: "PostgreSQL",
      type: "database",
      icon: PostgresqlOriginal ? (
        <PostgresqlOriginal className={iconClass} size={iconSize} />
      ) : null,
    }
  ];
  
  const appsData = [
    {
      id: 1,
      name: "Recycle Bin",
      icon: "/images/recyclebin.png",
      action: "recycle",
      size: "w-14 h-14",
    },
    {
      id: 2,
      name: "About Me",
      icon: "/images/profile_pic_round.jpg",
      action: "explorer",
      size: "w-14 h-14",
    },
    {
      id: 3,
      name: "Google Chrome",
      icon: "/images/chrome.png",
      action: "browser",
      size: "w-18 h-18",
    },

    {
      id: 4,
      name: "Microsoft Edge",
      icon: "/images/edge.png",
      action: "browser",
      size: "w-11 h-11",
    },
    {
      id: 5,
      name: "Calculator",
      icon: "/images/calculator.png",
      action: "calculator",
      size: "w-11 h-11",
    },
    {
      id: 6,
      name: "Spotify",
      icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
      action: "app",
      subAction: "spotify",
      size: "w-10 h-10",
    },
  ];
  
  // Export default data
  export default appsData;
  
  // Social Media Links
  export const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/mishanpoudel/",
    github: githubLink,
  };
  