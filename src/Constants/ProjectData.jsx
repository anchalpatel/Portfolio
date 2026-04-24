export const projects = [
  {
    name: "StudyNotion",
    description: [
      "Developed a full-stack learning platform featuring specialized interfaces for Admins, Instructors, and Students.",
      "Created functionality for course creation, enrollment workflows, and a quiz system to track student progress.",
      "Managed application state using Redux Toolkit to ensure a smooth user experience across the dashboard and checkout.",
    ],
    technologies: ["React" , "Node.Js", "Mongodb", "Javascript", "Express.js", "JWT Auth", "Redux"],
    github: "https://github.com/anchalpatel/StudyNotion",
    live: "https://study-notion-black.vercel.app/",
  },
  {
    name: "Expense Tracker",
    description: [
      "Designed a web application for tracking personal and group expenses with automated split-calculation logic.",
      "Applied mutex locks in the backend to handle simultaneous updates, ensuring data consistency during group transactions.",
      "ntegrated input validation to sanitize user data and prevent common errors during expense logging and group creation.",
    ],
    technologies: ["React" , "Node.Js", "Mongodb", "Javascript", "Express.js", "JWT Auth", "Redux"],
    github: "https://github.com/anchalpatel/expense_tracker",
    live: "https://expense-trackerfrontend-anchalpatels-projects.vercel.app/",
  },
  {
    name: "Automated Retail Data Pipeline",
    description: [
      "Developed a RESTful API for tracking personal expenses with category filters.",
      "Integrated JWT authentication and refresh token rotation for secure sessions.",
      "Wrote integration tests using xUnit achieving 90% code coverage.",
    ],
    technologies: ["Python", "PostgreSql", "PostgreSql"],
    github: null,
    live: null,
  },
];