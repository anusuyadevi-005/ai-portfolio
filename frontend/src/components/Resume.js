import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Mail, Phone, MapPin } from "lucide-react";

const Resume = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }
        const mailtoLink = `mailto:anusuyapadmavathi2020@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="min-h-screen bg-black pt-32 pb-20 px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Interested in working together? Get in touch or download my resume.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-gray-900/60 border border-gray-800 p-8 rounded-3xl backdrop-blur-md h-full">
                            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                        <Mail className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Email Me</p>
                                        <a href="mailto:anusuyapadmavathi2020@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                                            anusuyapadmavathi2020@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                                        <Phone className="text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                                        <p className="text-white">7550399820</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                                        <MapPin className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Location</p>
                                        <p className="text-white">Kovilpatti, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-800">
                                <p className="text-gray-400 mb-6 text-sm">Download my comprehensive resume for a detailed view of my experience and skills.</p>
                                <a href="/resume.pdf" download="Anusuyadevi_Resume.pdf" className="block w-full">
                                    <button className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden transition-transform active:scale-95">
                                        <div className="absolute inset-0 w-full h-full -translate-x-full bg-white/20 group-hover:animate-[shimmer_1.5s_infinite]" />
                                        <FileText size={20} />
                                        <span>Download Resume</span>
                                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-md">
                            <h3 className="text-2xl font-semibold text-white mb-8">Send me a message</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-6">
                                <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="Project Opportunity"
                                />
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                                <textarea 
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                    placeholder="Hello, I would like to discuss..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
