import React from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, Mail, Linkedin, Home, GraduationCap, Github } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div id="about" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden px-6 pt-20 pb-10">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl w-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center p-1 shadow-lg shadow-purple-500/30">
                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                            <User size={40} className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        About Me
                    </h2>
                    <h3 className="text-xl font-medium text-white mt-2">Anusuyadevi N</h3>

                    <div className="flex items-center justify-center gap-2 mt-2 text-blue-400 font-medium">
                        <GraduationCap size={20} />
                        <span>Engineering Student (Pre final Year)</span>
                    </div>

                    <p className="text-gray-400 mt-6 text-lg max-w-lg mx-auto leading-relaxed">
                        Passionate about <span className="text-purple-400"> Full Stack Development</span>.
                        I love building innovative solutions that solve real-world problems.
                        Check out my work on GitHub! 🚀
                    </p>

                    <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                    <div className="grid gap-6 text-left max-w-lg mx-auto">
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-gray-300 group"
                        >
                            <div className="p-3 bg-gray-800 rounded-full text-blue-400 border border-gray-700 group-hover:border-blue-400 transition-colors">
                                <Phone size={20} />
                            </div>
                            <a href="tel:+917550399820" className="text-lg tracking-wide hover:text-white transition-colors">
                                +91 7550399820
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-gray-300 group"
                        >
                            <div className="p-3 bg-gray-800 rounded-full text-purple-400 border border-gray-700 group-hover:border-purple-400 transition-colors">
                                <MapPin size={20} />
                            </div>
                            <a
                                href="https://maps.app.goo.gl/LgkiLE1BwMBaSorGA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-white transition-colors leading-snug"
                            >
                                2/217, South Street, Ayyaneri, Kovilpatti, Thoothukudi, Tamilnadu
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-gray-300 group"
                        >
                            <div className="p-3 bg-gray-800 rounded-full text-pink-400 border border-gray-700 group-hover:border-pink-400 transition-colors">
                                <Mail size={20} />
                            </div>
                            <a href="mailto:anusuyapadmavathi2020@gmail.com" className="text-lg hover:text-white transition-colors break-all">
                                anusuyapadmavathi2020@gmail.com
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-gray-300 group"
                        >
                            <div className="p-3 bg-gray-800 rounded-full text-blue-500 border border-gray-700 group-hover:border-blue-500 transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <a
                                href="https://www.linkedin.com/in/anusuyadevi-n-b4016628a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BavBKuKENQT2LtW7t9j1rVg%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-white transition-colors"
                            >
                                Anusuyadevi N
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-gray-300 group"
                        >
                            <div className="p-3 bg-gray-800 rounded-full text-white border border-gray-700 group-hover:border-white transition-colors">
                                <Github size={20} />
                            </div>
                            <a
                                href="https://github.com/anusuyadevi-005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-white transition-colors"
                            >
                                anusuyadevi-005
                            </a>
                        </motion.div>
                    </div>

                    <div className="mt-12">
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 mx-auto px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 border border-gray-700 rounded-full text-white font-semibold transition-all shadow-lg"
                            >
                                <Home size={18} />
                                Back to Home
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
