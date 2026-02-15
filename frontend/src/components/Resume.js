import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, GraduationCap, Award, Code, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
    const education = [
        {
            degree: "Bachelor of Engineering",
            field: "Computer Science and Engineering",
            institution: "Engineering College",
            year: "2021 - 2025 (Expected)",
            status: "Pre-final Year"
        }
    ];

    const achievements = [
        "Completed 12+ Professional Certifications",
        "Strong foundation in Data Structures and Algorithms",
        "Proficient in Full Stack Development (MERN Stack)",
        "Experience with Spring Boot and Java",
        "Active participant in coding competitions"
    ];

    const skillHighlights = [
        { category: "Frontend", skills: "HTML, CSS, JavaScript, React" },
        { category: "Backend", skills: "Node.js, Express, Spring Boot" },
        { category: "Languages", skills: "Python, Java, C++" },
        { category: "Database", skills: "MongoDB, DBMS" },
        { category: "Tools", skills: "Git, GitHub" }
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl w-full space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/30">
                            <FileText size={48} className="text-blue-400" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        My Resume
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my educational background and achievements
                    </p>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <GraduationCap size={28} className="text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                                        {edu.status}
                                    </span>
                                </div>
                                <p className="text-purple-400 font-medium">{edu.field}</p>
                                <p className="text-gray-400">{edu.institution}</p>
                                <p className="text-gray-500 text-sm">{edu.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Award size={28} className="text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                    </div>

                    <div className="grid gap-4">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors group"
                            >
                                <div className="mt-1 p-1 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                </div>
                                <p className="text-gray-300 group-hover:text-white transition-colors">{achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-pink-500/10 rounded-lg">
                            <Code size={28} className="text-pink-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Skills Summary</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {skillHighlights.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-colors"
                            >
                                <h4 className="text-pink-400 font-semibold mb-2">{skill.category}</h4>
                                <p className="text-gray-400 text-sm">{skill.skills}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Download Button & Back to Home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <button
                        disabled
                        className="flex items-center gap-2 px-8 py-3 bg-gray-800 rounded-full text-gray-500 font-semibold cursor-not-allowed border border-gray-700"
                        title="Resume PDF coming soon"
                    >
                        <Download size={20} />
                        Download PDF (Coming Soon)
                    </button>

                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 border border-gray-700 rounded-full text-white font-semibold transition-all shadow-lg"
                        >
                            <Home size={18} />
                            Back to Home
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
