/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import { ReactComponent as woice } from './logo';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Awais",
  title: "Hi all, I'm Awais",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gQB4PpgpeNiIkq8Uo6uAWei3ANHTaigZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrmuhammadawais",
  linkedin: "https://www.linkedin.com/in/muhammad-awais-7566b4233/",
  gmail: "myselfmuhammadawais@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/share/1GHURLcnaF/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
 title: "What I do",
subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
skills: [
  emoji(
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
  ),
  emoji(
    "⚡ Integration of third-party services such as Stripe for payments and MongoDB for database management"
  ),
  emoji(
    "⚡ Backend development using Node.js & Express to build scalable and secure APIs"
  )
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
    skillName: "Next.js",
    fontAwesomeClassname: "fas fa-code" // placeholder since fa-nextjs doesn't exist
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SZABIST institute of Science and Technology in Islamabad",
      // logo: require("./assets/images/szabist.png"),
      subHeader: "Bachelor's of Science in Computer Science",
      duration: "September 2019 - May 2023",
   
    },
  
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Rev9 Solutions",
      companylogo: require("./assets/images/rev9.png"),
      date: "August 2023 – August 2025",
      desc: `I have 2 years of hands-on experience as a MERN Stack Developer, building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
I specialize in developing responsive and scalable frontends using React with Hooks, Context API, and Redux for efficient state management. On the backend, I’ve built secure RESTful APIs using Express and Node.js, and worked with MongoDB for data modeling and aggregation. My experience also includes authentication using JWT, integrating third-party APIs, deploying applications on cloud platforms (like Vercel and Render), and managing version control with Git.`,
      descBullets: [
        "Developed and deployed scalable MERN stack applications",
        "Implemented JWT-based authentication and third-party API integrations"
      ]
    },
  {
  role: "Front-End Developer Intern",
  company: "Rev9 Solutions",
  companylogo: require("./assets/images/rev9.png"),
  date: "June 2023 – August 2023",
  desc: `As a Front-End Developer Intern at Rev9 Solutions, I gained practical experience building responsive web interfaces using React.js and Tailwind CSS. 
I worked closely with the development team to implement reusable UI components, fix bugs, and improve overall performance. During the internship, I also contributed to enhancing user experience by optimizing layouts for various screen sizes and integrating RESTful APIs to display dynamic data.

Additionally, I collaborated in agile sprints, participated in daily standups, and used tools like Git and GitHub for version control. I also conducted browser compatibility testing and assisted in refining front-end logic for better maintainability. This experience solidified my foundation in frontend development and prepared me for full-stack roles.`,
}
,

    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Organizations and startups where I collaborated in creating impactful tech projects",
  projects: [
    {
      image: require("./assets/images/onTime.png"),
      projectName: "OnTime Logistics",
      projectDesc: "OnTime Logistics is a logistics company that provides reliable delivery services using Royal Mail and DPD.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ontimelogistic.co.uk/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/woice.png"),
      projectName: "Woice.ai",
      projectDesc: "Woice.ai is a platform that helps businesses automate their personalized software development process.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://woice.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/vyafac.png"),
      projectName: "VYAFAC",
      projectDesc: "Vyafac is a platform that enables fast and secure transactions using cutting-edge technology. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://staging.vyafac.com/register"
        }
      ]
    },
    {
      image: require("./assets/images/bitverge.png"),
      projectName: "BitVerge",
      projectDesc: "Biterge is an innovative IT service provider specializing in web, mobile app development, and digital marketing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bitverge.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Rev9 Appreciation Certificate",
      subtitle:
        "Acknowledged by Rev9 Solutions for dedication, innovation, and impactful results.",
      image: require("./assets/images/rev9.png"),
      imageAlt: "rev9 Solutions Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qirepcQdzSINUefD9xB9s5CsBEtKNR9H/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Developer Student Club",
      subtitle:
        "Member of the GDSC community focused on learning Google technologies and developer skills.",
      image: require("./assets/images/gdsc.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1LIFCOehIS39I1MoTA7TvZ44P0eeFXopI/view?usp=sharing"
        }
      ]
    },

    {
      title: "Freelancing Certification from Digiskills",
      subtitle: "Completed a professional course offered by DigiSkills Pakistan to enhance technical and freelance skillsets",
      image: require("./assets/images/digiskills.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qipuQ-2j4h81d5cMOaXw3n_S9ykP9D1v/view?usp=sharing"
        }
      ]
    }
  ],
  display: true 
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3400162247",
  email_address: "myselfmuhammadawais@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
