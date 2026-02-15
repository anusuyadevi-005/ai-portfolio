console.log("Loading .env...");
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded" : "Not Loaded");

const mongoose = require("mongoose");
const Project = require("./models/project");


const projects = [
    {
        title: "Virtual Internship Platform",
        description: "A comprehensive web platform for virtual internship management and tracking, built with HTML and JavaScript for seamless user experience.",
        techStack: ["HTML", "JavaScript", "CSS"],
        githubLink: "https://github.com/anusuyadevi-005/virtualinternship",
        liveLink: "https://github.com/anusuyadevi-005/virtualinternship"
    },
    {
        title: "MWT Portfolio Project",
        description: "Modern Web Technologies portfolio project showcasing full-stack development skills with React and responsive design principles.",
        techStack: ["React", "JavaScript", "CSS", "HTML"],
        githubLink: "https://github.com/anusuyadevi-005/mwt-project",
        liveLink: "https://github.com/anusuyadevi-005/mwt-project"
    },
    {
        title: "NoSQL Database Project",
        description: "Full-stack application demonstrating NoSQL database integration with React and Vite, featuring modern build tools and efficient data management.",
        techStack: ["React", "Vite", "JavaScript", "NoSQL", "CSS"],
        githubLink: "https://github.com/anusuyadevi-005/nosqlproject",
        liveLink: "https://github.com/anusuyadevi-005/nosqlproject"
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB Connected for Seeding ✅");
        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log("Projects Seeded Successfully 🚀");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log("Seeding Error ❌", err);
        mongoose.connection.close();
    });
