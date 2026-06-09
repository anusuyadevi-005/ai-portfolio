import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Layout } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: <Layout className="text-blue-400" size={28} />,
            skills: ["HTML", "CSS", "JavaScript", "React"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Backend Development",
            icon: <Server className="text-purple-400" size={28} />,
            skills: ["Node.js", "Django"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Database Architecture",
            icon: <Database className="text-emerald-400" size={28} />,
            skills: ["MySQL", "MongoDB"],
            color: "from-emerald-400 to-teal-500"
        },
        {
            title: "Core Languages",
            icon: <Code className="text-amber-400" size={28} />,
            skills: ["C", "C++", "Java"],
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "Tools & Deployment",
            icon: <Globe className="text-indigo-400" size={28} />,
            skills: ["Git", "GitHub", "Docker"],
            color: "from-indigo-400 to-blue-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="min-h-screen bg-black pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Technical Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        A comprehensive overview of the tools, languages, and technologies I use to build scalable, modern applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gray-800/80 rounded-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50 hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Decorative glow */}
                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
