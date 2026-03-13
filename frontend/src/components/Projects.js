import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Folder, Trash2, Edit } from "lucide-react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState("All");
    const [adminMode, setAdminMode] = useState(false);
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: ""
    });
    const [alertMessage, setAlertMessage] = useState("");

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:5000/api/projects");
            setProjects(res.data);
        } catch (err) {
            console.error(err);
            setAlertMessage("Failed to load projects.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/api/projects")
            .then(res => {
                setProjects(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const uniqueTechs = Array.from(new Set(projects.flatMap(p => p.techStack || []))).sort();
    const filteredProjects = projects.filter(project => {
        const matchQuery = query.trim().length === 0 ||
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.description.toLowerCase().includes(query.toLowerCase()) ||
            (project.techStack || []).some(t => t.toLowerCase().includes(query.toLowerCase()));

        const matchTech = selectedTech === "All" || (project.techStack || []).includes(selectedTech);

        return matchQuery && matchTech;
    });

    // Loading Skeleton Component
    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full bg-gray-900 rounded-xl p-6 space-y-4">
                        <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
                        <div className="h-20 bg-gray-800 rounded animate-pulse"></div>
                        <div className="flex gap-2">
                            <div className="h-6 w-16 bg-gray-800 rounded-full animate-pulse"></div>
                            <div className="h-6 w-20 bg-gray-800 rounded-full animate-pulse"></div>
                            <div className="h-6 w-16 bg-gray-800 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <div className="h-8 w-20 bg-gray-800 rounded animate-pulse"></div>
                            <div className="h-8 w-24 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    // Empty State Component
    const EmptyState = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
        >
            <div className="inline-block p-6 bg-gray-800/50 rounded-full mb-6">
                <Folder size={64} className="text-gray-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No Projects Found</h3>
            <p className="text-gray-500">Check back soon for exciting projects!</p>
        </motion.div>
    );

    return (
        <div id="projects" className="min-h-screen py-20 px-6 sm:px-10 bg-black text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Featured Projects
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
            >
                Explore my latest work and innovative solutions
            </motion.p>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 px-4">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search projects by title, description or tech..."
                    className="w-full md:w-1/2 px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                    className="w-full md:w-1/4 px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="All">All Tech</option>
                    {uniqueTechs.map((tech) => (
                        <option key={tech} value={tech}>{tech}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <LoadingSkeleton />
            ) : projects.length === 0 ? (
                <EmptyState />
            ) : filteredProjects.length === 0 ? (
                <motion.div className="text-center py-20">
                    <h3 className="text-xl font-semibold text-gray-300">No projects match your search/filter.</h3>
                    <p className="text-gray-500">Try a different keyword or technology.</p>
                </motion.div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project._id || index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                        >
                            <div className="h-full bg-gray-900 rounded-xl p-6 relative overflow-hidden">
                                {/* Background Icon */}
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Code2 size={120} />
                                </div>

                                {/* Project Content */}
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                                            {project.title}
                                        </h3>
                                        <motion.div
                                            whileHover={{ rotate: 15, scale: 1.1 }}
                                            className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors"
                                        >
                                            <Code2 size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                        </motion.div>
                                    </div>

                                    <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-blue-300 group-hover:border-blue-500/30 group-hover:bg-gray-800 transition-all cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 mt-auto">
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, x: 2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={18} /> Code
                                        </motion.a>
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, x: 2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-xl transition-all duration-500 pointer-events-none" />
                            </div>

                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Projects;
