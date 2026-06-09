import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Virtual Internship Management System",
            category: "Backend",
            description: "Developed a platform to manage virtual internships using Java and Spring Boot. Implemented role-based login, tracking, and report submission with MySQL persistence.",
            tech: ["Java", "Spring Boot", "MySQL"],
            github: "https://github.com/anusuyadevi-005/virtualinternship",
            live: "#",
            featured: true,
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Tamil Nadu Tours - MERN",
            category: "Full Stack",
            description: "Web-based Journey Management System automating travel planning, packages, and bookings with role-based access for Admins and Customers.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/anusuyadevi-005/mwt-project",
            live: "#",
            featured: true,
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "Smart Mushroom Management System",
            category: "Full Stack",
            description: "End-to-end automated mushroom cultivation platform. Features a strict 21-day batch lifecycle, real-time harvest-to-stock integration, and an automated waste-to-value pipeline using Socket.IO for live inventory updates.",
            tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
            github: "https://github.com/anusuyadevi-005/SmartMushroom",
            live: "#",
            featured: true,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Academic Chatbot",
            category: "AI/ML",
            description: "An AI-powered conversational agent designed to assist with academic queries. Utilizes NLP and machine learning techniques to provide intelligent, context-aware responses.",
            tech: ["Python", "NLP", "Machine Learning"],
            github: "https://github.com/anusuyadevi-005/academicchatbot",
            live: "#",
            featured: true,
            color: "from-pink-500 to-rose-500"
        }
    ];

    const filters = ["All", "Full Stack", "Backend", "AI/ML"];

    const filteredProjects = projects.filter(project => filter === "All" || project.category === filter);

    return (
        <section className="min-h-screen bg-black pt-32 pb-20 px-6 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                            Featured Creations
                        </h2>
                        <p className="text-gray-400 text-lg">Showcasing innovation through code.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 bg-gray-900/50 p-2 rounded-2xl backdrop-blur-sm border border-gray-800"
                    >
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                                    filter === f 
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="group relative bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all"
                            >
                                {/* Abstract Project Image Placeholder */}
                                <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                                    <div className="absolute top-4 left-4 p-3 bg-black/30 backdrop-blur-md rounded-xl">
                                        <Code className="text-white" size={24} />
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-full border border-yellow-500/30 backdrop-blur-md">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono px-2 py-1 bg-gray-800 text-blue-300 rounded-md border border-gray-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium text-sm border border-gray-700"
                                        >
                                            <Github size={16} /> Source Code
                                        </a>
                                        {project.live !== "#" && (
                                            <a 
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors font-medium text-sm shadow-lg shadow-blue-500/20"
                                            >
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
