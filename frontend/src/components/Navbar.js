import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Certificates", path: "/certificates" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const linkVariants = {
        hover: { scale: 1.1, color: "#60a5fa" },
        tap: { scale: 0.95 },
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
                style={{ scaleX: scrollYProgress }}
            />

            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`fixed top-0 left-0 w-full z-50 bg-gray-900/10 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/20 bg-gray-900/30" : ""
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Anusuyadevi N
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {links.map((link) => (
                            <Link key={link.name} to={link.path} className="relative group">
                                <motion.span
                                    variants={linkVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className={`text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? "text-blue-400"
                                        : "text-gray-300 group-hover:text-blue-400"
                                        }`}
                                >
                                    {link.name}
                                </motion.span>
                                {/* Underline Animation */}
                                <span className={`absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? "w-full" : ""}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-gray-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                        >
                            <div className="flex flex-col items-center gap-6 py-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-medium transition-colors ${location.pathname === link.path
                                            ? "text-blue-400"
                                            : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
