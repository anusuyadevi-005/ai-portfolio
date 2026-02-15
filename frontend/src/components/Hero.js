import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiMongodb } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Mail, ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white relative overflow-hidden">
            {/* Background Glow & Blobs */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80"></div>
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

            {/* Particle Effect - CSS-based */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Floating Background Icons */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-32 left-32 text-gray-700/50"
            >
                <FaPython size={80} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute bottom-32 right-32 text-gray-700/50"
            >
                <SiCplusplus size={80} />
            </motion.div>
            <motion.div
                animate={{ x: [0, 20, 0], rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 text-gray-700/50"
            >
                <FaReact size={60} />
            </motion.div>
            <motion.div
                animate={{ x: [0, -20, 0], rotate: [0, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/4 text-gray-700/50"
            >
                <SiTensorflow size={60} />
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/3 text-gray-700/50"
            >
                <FaNodeJs size={70} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/3 text-gray-700/50"
            >
                <SiMongodb size={65} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 px-4"
            >
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg relative"
                >
                    Hi, I'm Anusuyadevi N
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                </motion.h1>
                <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
                    I am a{" "}
                    <span className="text-blue-400 font-semibold relative inline-block">
                        <Typewriter
                            words={["Full Stack Developer", "AI Enthusiast", "Problem Solver", "Innovator"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </span>
                </h2>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex gap-6 justify-center mb-10"
                >
                    <motion.a
                        href="https://github.com/anusuyadevi-005"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-400 transition-colors"
                    >
                        <FaGithub size={24} className="text-gray-300 hover:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/anusuyadevi-n-b4016628a"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-400 transition-colors"
                    >
                        <FaLinkedin size={24} className="text-gray-300 hover:text-blue-400 transition-colors" />
                    </motion.a>
                    <motion.a
                        href="mailto:anusuyapadmavathi2020@gmail.com"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-400 transition-colors"
                    >
                        <Mail size={24} className="text-gray-300 hover:text-purple-400 transition-colors" />
                    </motion.a>
                </motion.div>

                {/* Navigation Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-bold text-white shadow-xl shadow-blue-500/30 transition-all relative overflow-hidden group"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                >
                    <span className="text-gray-400 text-sm font-light">Scroll Down</span>
                    <ChevronDown size={24} className="text-blue-400" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
