import Church from "../public/church.png";
import Bugbear from "../public/Bugbear.png";

const projects = [
  {
    image: "/church.png",
    projectTitle: "Witch Turn",
    textDescription:
      "\tWitch turn is a D&D initiative management app for GMs, and an ongoing project in my personal time. It uses a room system inspired by Jackbox, and I'm still adding tools to it. All the art is my own work, and it's a fun outlet to be creative.\n\n\n\tThe client side is built on React. The service which manages the rooms and message communication is built on express.js, using the socket.io library to facilitate message passing. The database RESTful API is built on express.js",
    skills: ["Socket.io", "React", "Express.js", "REST API", "Mongodb"],
    link: "https://github.com/ScriptkidHicks/WitchTurnOnline",
  },
  {
    image: "/kettle.png",
    projectTitle: "My Fitness Fiend",
    textDescription:
      "\tMy Fitness Fieend is a project I worked on with some friends during an intermediate software development class. We came together around the idea of something similar to Tamagotchi, but for going to the gym. We wanted to use a Skinner's Box mechanism for a wholesome purpose.\n\n\tWe developed the product as a web app, using mobile first design, so that users could access it easily on their phone at the gym, or on their laptop at home. A few of the features we built into it were JWT login authentication, a RESTful api to serve as a bridge to our python backend, and an automated email system to send generated workouts to users each morning.\n\n\tI can't emphasize how grateful I am to the team I worked with, including Jordan Smith, Thomas Joyce, Nik Cotta, and Ash Chin.",
    skills: ["React", "Flask", "Mongodb", "REST API", '"Mobile First" Design'],
    link: "https://github.com/ScriptkidHicks/My_Fitness_Fiend",
  },
  {
    image: "/Whale.png",
    projectTitle: "Project Freelancer",
    textDescription:
      "\tProject Freelancer was a game that a few freeinds and I built for our 410 game programming class at the U of O. We felt that there weren't enough games out there that involved gameplay which focused on non-combat core mechanics, and were inspired by the recent release of Pokemon Snap. We decided to make a game about being a freelance photographer in space. The game came together around the relaxing experience of wanedering through large sectors of space, beautiful ambiance, and stopping to photograph space whales.\n\n\tWe developed the game in C# using unity. Ash Chin was responsible for the framework of the game, as well as effective compression to meet the demans of the web hosting. She also game up with some great solutions to the difficulties we faced with rendering objects at long distances. Zac Carol handled the creation of some delightful shaders, as well as integrating music and positionally based sounds. I handled the creation of the game's AI, the level design, and the ship's movement.",
    skills: ["Unity", "C#", "AI", "Game Design"],
    link: "https://github.com/ash-chin/project-freelancer",
  },
];

export default projects;
