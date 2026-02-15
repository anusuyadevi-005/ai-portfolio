import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiSpringboot, SiCplusplus, SiJavascript, SiExpress } from "react-icons/si";
import { Code2, Layers, Server, Database } from "lucide-react";

const skillCategories = [
    {
        category: "Frontend Development",
        icon: <Layers size={24} className="text-blue-400" />,
        skills: [
            { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500 group-hover:text-orange-400 transition-colors" />, level: 90 },
            { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500 group-hover:text-blue-400 transition-colors" />, level: 85 },
            { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />, level: 80 },
            { name: "React", icon: <FaReact size={50} className="text-blue-400 group-hover:text-blue-300 transition-colors" />, level: 85 },
        ]
    },
    {
        category: "Backend Development",
        icon: <Server size={24} className="text-green-400" />,
        skills: [
            { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500 group-hover:text-green-400 transition-colors" />, level: 80 },
            { name: "Express", icon: <SiExpress size={50} className="text-gray-400 group-hover:text-white transition-colors" />, level: 75 },
            { name: "Spring Boot", icon: <SiSpringboot size={50} className="text-green-600 group-hover:text-green-500 transition-colors" />, level: 70 },
        ]
    },
    {
        category: "Programming Languages",
        icon: <Code2 size={24} className="text-purple-400" />,
        skills: [
            { name: "Python", icon: <FaPython size={50} className="text-blue-400 group-hover:text-blue-300 transition-colors" />, level: 85 },
            { name: "Java", icon: <FaJava size={50} className="text-red-500 group-hover:text-red-400 transition-colors" />, level: 80 },
            { name: "C++", icon: <SiCplusplus size={50} className="text-blue-600 group-hover:text-blue-500 transition-colors" />, level: 75 },
        ]
    },
    {
        category: "Database & Tools",
        icon: <Database size={24} className="text-pink-400" />,
        skills: [
            { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-400 group-hover:text-green-300 transition-colors" />, level: 80 },
            { name: "DBMS", icon: <FaDatabase size={50} className="text-purple-500 group-hover:text-purple-400 transition-colors" />, level: 85 },
            { name: "Git", icon: <FaGitAlt size={50} className="text-orange-600 group-hover:text-orange-500 transition-colors" />, level: 85 },
        ]
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
};

const Skills = () => {
    return (
        <div id="skills" className="min-h-screen py-20 px-6 sm:px-10 bg-black text-white text-center relative overflow-hidden flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 relative z-10"
            >
                My Skills
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-400 mb-16 max-w-2xl mx-auto relative z-10"
            >
                A comprehensive overview of my technical expertise across different domains
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto space-y-12 relative z-10"
            >
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        variants={categoryVariants}
                        className="space-y-6"
                    >
                        {/* Category Header */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-200">{category.category}</h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        rotateY: 5,
                                        rotateX: 5,
                                    }}
                                    className="group relative flex flex-col items-center p-6 bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all cursor-pointer"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 + Math.random(), ease: "easeInOut" }}
                                        className="mb-4 drop-shadow-lg"
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors mb-3">
                                        {skill.name}
                                    </h4>

                                    {/* Proficiency Bar */}
                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        />
                                    </div>
                                    <span className="text-xs text-gray-500 mt-2">{skill.level}%</span>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
