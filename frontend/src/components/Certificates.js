import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Home } from "lucide-react";
import { Link } from "react-router-dom";

const certificates = [
    {
        name: "CPP Training",
        link: "https://drive.google.com/file/d/12V_3clPCU4TT1hjTCYugTrEV4ZQj1YAK/view?usp=drivesdk"
    },
    {
        name: "The Joy of Computing Using Python in NPTEL",
        link: "https://drive.google.com/file/d/1qFOFyTrSX8-Yw3OPoKqMq1C3MPjVBkDU/view?usp=drive_link"
    },
    {
        name: "Technical English For Engineers in NPTEL",
        link: "https://drive.google.com/file/d/14XpiEUEFlGV5_7a-Togye57kjKh7nbER/view?usp=drive_link"
    },
    {
        name: "Network Addressing and Basic Troubleshooting Commands in Cisco Networking Academy",
        link: "https://drive.google.com/file/d/14m_pbGzqIS5R-W0W_DI3nr7F9KYA700C/view?usp=drive_link"
    },
    {
        name: "Introduction to Industry 4.0 in NPTEL",
        link: "https://drive.google.com/file/d/1CKaIjytgSdjVzpbqXdZJO-BcNVbzvFgI/view?usp=drive_link"
    },
    {
        name: "Internet Of Things in NPTEL",
        link: "https://drive.google.com/file/d/15jFvHmw-d1bu3wkYG2xG-QYd_2xcr5Il/view?usp=drive_link"
    },
    {
        name: "Cloud Computing",
        link: "https://drive.google.com/file/d/1YKXI0-5rhe4mOqr77LiV4J0GB5QKnjrp/view?usp=drive_link"
    },
    {
        name: "Privacy and Security in Online Social Media",
        link: "https://drive.google.com/file/d/1YSZMO-dLilW2KGkJ_NEnSr-Svfn6ZS6Q/view?usp=drive_link"
    },
    {
        name: "CodeSoft Internship",
        link: "https://drive.google.com/file/d/1V-ICPo7u_JDSm_j2DPrWBLuO8OQvZE0X/view?usp=drive_link"
    },
    {
        name: "DBMS Part-1",
        link: "https://drive.google.com/file/d/1V2ju7KF5sUV0W3M5cE8SLurHljWfRli2/view?usp=drive_link"
    },
    {
        name: "DBMS Part-2",
        link: "https://drive.google.com/file/d/1V7RK3FbjODZbfw5JOcuWApFkjkOmc0E5/view?usp=drive_link"
    },
    {
        name: "Gen Data Tech",
        link: "https://drive.google.com/file/d/1geptfK8oLM7j2ZsYvs-jkR3PkPrXPjzZ/view?usp=drive_link"
    }
];

const Certificates = () => {
    return (
        <div id="certificates" className="min-h-screen py-20 px-6 sm:px-10 bg-black text-white text-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center gap-4"
            >
                My Certificates
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-2xl rounded-full border border-blue-500/30">
                    {certificates.length}
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-400 mb-16 max-w-2xl mx-auto"
            >
                Professional certifications and achievements across various domains
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
                {certificates.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                        className="flex items-center p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500/50 transition-all group cursor-pointer"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-full mr-6 group-hover:bg-blue-500/20 transition-colors">
                            <Award size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div className="text-left flex-1">
                            <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{cert.name}</h3>
                        </div>
                        <ExternalLink size={20} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                ))}
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
    );
};

export default Certificates;
