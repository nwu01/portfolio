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
    "Senior Full Stack Developer",
    "From designing seamless dynamic user experiences to building robust backend systems, I craft solutions that are both functional and scalable. With a focus on staying ahead of the curve in web technologies, I'm always ready to take on new challenges to turn innovative concepts into reality.",
    "Want to work together?",
    <a href="mailto:nixonwu01@gmail.com">nixonwu01@gmail.com</a>
  ];
  
  export const githubRepos = [
    {
      name: "FlowRM",
      techUsed: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS"],
      description: "A CRM for fitness businesses — manage clients, memberships, and training sessions in one workflow.",
        githubLink: `https://flowrm.app`,
      link: "https://flowrm.app",
    },
    {
      name: "Nature's Best Natural Foods",
      techUsed: ["HTML", "CSS", "JavaScript", "11ty"],
      description: "Explore a wide selection of popular products at discounted prices. Big savings on best sellers. Discounts on supplements, pet health and aromatherapy oils.",
      githubLink: `${githubLink}/Nature-s-Best`,
      link: "https://nature-s-best.vercel.app/",
    },
    {
      name: "Robert McLaughlin Gallery",
      techUsed: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
      description:
        "The RMG Collections. Discover the permanent collection, historical photographs of Oshawa, and the art library. Artworks. Thomas Bouckley Collection. Art Library.",
      link: "https://rmg.minisisinc.com",
    },
    {
      name: "Marpole Web Design",
      techUsed: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Next.js", "MongoDB"],
      description:
        "Small Business. Web Design. Web Development. Websites for entrepreneurs and small businesses.",
      githubLink: `${githubLink}/marpole-web-design`,
      link: `https://marpole-web-design.vercel.app/`,
    },
  ];
  // Work Experience
  export const workExperience = [
    {
      key: 1,
      company: "Pacific Programming & Tech",
      year: "2025 - Present",
      position: "Frontend Developer",
      location: "Vancouver, BC",
      tech: "JS, React, TypeScript, NodeJS, NextJS, Tailwind, C#, HTML, CSS, Git, SQL, Claude AI, Cursor",
      type: "work",
    },
    {
      key: 2,
      company: "Soutron Global",
      year: "2019 - Present",
      position: "Senior Full Stack Developer",
      location: "Vancouver, BC",
      tech: "JS, React, TypeScript, NodeJS, NextJS, Tailwind, C#, HTML, CSS, jQuery, Git, MongoDB",
      type: "work",
    },
    {
      key: 3,
      company: "Royal Canadian Mounted Police",
      year: "Feb 2021 - June 2023",
      position: "Applications Software Developer / Business Analyst",
      location: "Vancouver, BC",
      tech: "C#, HTML, CSS, JS, React, MySQL, Cognos",
      type: "work",
    },
    {
      key: 4,
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
  