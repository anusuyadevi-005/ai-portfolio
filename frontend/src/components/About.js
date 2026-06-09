import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Code2, BrainCircuit } from "lucide-react";

const About = () => {
    const education = [
        {
            degree: "Bachelor Of Computer science Engineering",
            institution: "National Engineering College, Kovilpatti",
            score: "CGPA: 7.90 (upto 5th Semester)",
            year: "2023 - 2027",
            icon: <GraduationCap size={24} className="text-blue-400" />
        },
        {
            degree: "HSC in Computer Science",
            institution: "Lakshmi Srinivasa Vidhyalaya Matric Hr.Sec School, Kovilpatti",
            score: "Percentage: 84%",
            year: "2022 - 2023",
            icon: <BookOpen size={24} className="text-purple-400" />
        },
        {
            degree: "SSLC",
            institution: "Lakshmi Srinivasa Vidhyalaya Matric Hr.Sec School, Kovilpatti",
            score: "Pass",
            year: "2020 - 2021",
            icon: <BrainCircuit size={24} className="text-pink-400" />
        }
    ];

    return (
        <section className="min-h-screen bg-black pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block mb-4">
                        Discover My Journey
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass p-8 rounded-2xl relative group hover:border-blue-500/50 transition-colors duration-500">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                            <div className="relative">
                                <Code2 size={40} className="text-blue-400 mb-6" />
                                <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                                    I am Anusuyadevi N, a Computer Science Engineering student with hands-on experience in full-stack and backend development.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed font-light">
                                    I am seeking an opportunity to solve real-world problems by building efficient, secure, and scalable software solutions while continuously enhancing my technical expertise.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                                        <p className="font-medium text-white">Kovilpatti, TN</p>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Languages</p>
                                        <p className="font-medium text-white">English, Tamil</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                        <div className="space-y-12">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative pl-24 group"
                                >
                                    <div className="absolute left-4 top-0 w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                        <div className="scale-75">{item.icon}</div>
                                    </div>

                                    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:bg-gray-800/50 transition-colors relative overflow-hidden group-hover:border-purple-500/30">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                                        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                                        <p className="text-gray-400 text-sm mb-3">{item.institution}</p>
                                        {item.score && (
                                            <p className="text-blue-400 text-sm font-medium mb-2">{item.score}</p>
                                        )}
                                        <p className="text-gray-500 text-xs font-mono">{item.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
