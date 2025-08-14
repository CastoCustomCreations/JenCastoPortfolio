// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  imageLink: require("../editable-stuff/JenniferCasto.png"),
  firstName: "Jen",
  middleName: "",
  lastName: "Casto",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CastoCustomCreations",
    },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jencasto/",
    },
    {
      image: "fab fa-youtube",
      url: "https://www.youtube.com/channel/UC3LX40OES7WxoEvR2v5P9Bg",
    },
    {
      image: "fa-brands fa-hackerrank",
      url: "https://www.hackerrank.com/castocustomcrea1?hr_r=1",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/JenniferCasto.png"),
  imageSize: 375,
  message:"● An innovative and detail-oriented Full-Stack Software Engineer who has freelance experience designing, developing, and deploying scalable web and mobile applications. ● Experienced in full-stack development, leveraging modern programming languages such as C#, Java, JavaScript, TypeScript, and Python, along with frameworks like .NET, React.js, Angular, Node.js, and Spring Boot. ● Proficient in API development (RESTful & SOAP), database design (SQL Server, NoSQL, Firebase, MongoDB), and cloud computing (AWS, Azure, GCP)Kent State University graduate with two degrees in Information Technology and experience as a Full Stack Developer and Multimedia Editor. Strongly skilled in programming languages such as Java, Javascript, and C#. Deep understanding of data structures, algorithms, and software design principles. Proficient in Agile methodologies and version control systems.",
  resume: "https://drive.google.com/file/d/14Ca6RViT828vZLRErDaTK9QHeLrwoUCu/view?usp=sharing",

  

};
//      My name is Jen Casto. I graduated Kent State University with two Bachelors of Science in Information Technology with honors in Dec 2022. I'm most passionate about automobiles and robots, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects."

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CastoCustomCreations", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["StoreAdminUI","StoreCustomerUI","StoreAPI","StoreAPITests","JenCastoPortfolio","blackjack-react-app","Minesweeper-Game-in-React","react-tetris"],
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 100 },
    { name: "JavaScript", value: 100 },
    { name: "Java", value: 100},
    { name: "C#", value: 100 },
    { name: "SQL", value: 100 },
    { name: "C/C++", value: 100 },
    { name: "Python", value: 100 },
    { name: "Visual Basic Applications for Microsoft Office", value: 100 },
    { name: "Data Structures", value: 100 },
    { name: "React", value: 100 },
    { name: "Angular", value: 100 },   
    { name: "Vue", value: 100 },
    { name: "Adobe Photoshop", value: 100 },
    { name: "Adobe Premiere", value: 100 },
    { name: "Adobe After Effects", value: 100 },
  ],
  softSkills: [

    { name: "Problem Solving", value: 100 },
    { name: "Creativity", value: 90 },
    { name: "Time-Management", value: 100 },
    { name: "Teamwork", value: 90 },
    { name: "Critical Thinking", value: 95 },
    { name: "Adaptability", value: 85 },
    
    { name: "Active Listening", value: 100 },
    { name: "Accountability", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Active Learner", value: 100 },

  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Lets discuss how I can build your dream application!",
  email: "CastoCustomCreations@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Bachelor of Science in Information Technology',// Here Add Company Name
      role1:'Major # 1: Software Application Development',
      role2:'Major # 2: Internet and Multimedia',
      companylogo: require('../assets/img/Kent_State_seal.png'),
      date: 'Dec 2022',
    },
    {
      role: 'Google Developer',
      role1:'Android Developer Certification',
      companylogo: require('../assets/img/google-developer.png'),
      date: '',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills,  getInTouch, experiences };
