import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Anusuya's AI Assistant 🤖 Ask me about her skills, projects, education, certificates, or how to contact her!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [quickReplies, setQuickReplies] = useState([
        "What are your skills?",
        "Tell me about your projects",
        "How can I contact you?"
    ]);
    const messagesEndRef = useRef(null);

    // Comprehensive Knowledge Base
    const knowledgeBase = {
        personal: {
            name: "Anusuyadevi N",
            status: "Pre-final Year Computer Science Engineering Student",
            graduation: "2025 (Expected)",
            interests: "Full Stack Development, AI/ML, Problem Solving"
        },
        skills: {
            frontend: ["HTML", "CSS", "JavaScript", "React"],
            backend: ["Node.js", "Express", "Spring Boot"],
            languages: ["Python", "Java", "C++"],
            database: ["MongoDB", "DBMS"],
            tools: ["Git", "GitHub"],
            proficiency: {
                "HTML": 90, "CSS": 85, "JavaScript": 80, "React": 85,
                "Node.js": 80, "Express": 80, "Spring Boot": 75,
                "Python": 85, "Java": 80, "C++": 70,
                "MongoDB": 75, "Git": 85
            }
        },
        projects: [
            {
                name: "Virtual Internship Platform",
                description: "Web platform for virtual internship management and tracking",
                tech: ["HTML", "JavaScript", "CSS"]
            },
            {
                name: "MWT Portfolio Project",
                description: "Modern Web Technologies portfolio showcasing full-stack development",
                tech: ["React", "JavaScript", "CSS", "HTML"]
            },
            {
                name: "NoSQL Database Project",
                description: "Full-stack application with NoSQL database integration using React and Vite",
                tech: ["React", "Vite", "JavaScript", "NoSQL", "CSS"]
            }
        ],
        education: {
            degree: "Bachelor of Engineering",
            field: "Computer Science and Engineering",
            institution: "Engineering College",
            year: "2021 - 2025 (Expected)",
            status: "Pre-final Year"
        },
        certificates: {
            count: 12,
            areas: ["Full Stack Development", "Data Structures", "Algorithms", "Web Development", "Database Management"]
        },
        achievements: [
            "Completed 12+ Professional Certifications",
            "Strong foundation in Data Structures and Algorithms",
            "Proficient in Full Stack Development (MERN Stack)",
            "Experience with Spring Boot and Java",
            "Active participant in coding competitions"
        ],
        contact: {
            email: "2312005@nec.edu.in",
            availability: "Open to hackathon opportunities, internships, and collaborations"
        }
    };

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    // Intelligent Response Generator
    const generateResponse = (userInput) => {
        const input = userInput.toLowerCase().trim();

        // Greetings
        if (/^(hi|hello|hey|hola|greetings|good morning|good afternoon|good evening)/.test(input)) {
            const greetings = [
                "Hello! 👋 How can I help you learn more about Anusuya?",
                "Hi there! 😊 What would you like to know?",
                "Hey! I'm here to answer your questions about Anusuya's skills and experience!",
                "Greetings! Ask me anything about Anusuya's portfolio!"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }

        // Help/What can you do
        if (input.includes("help") || input.includes("what can you") || input.includes("how to use")) {
            return "I can answer questions about:\n\n• Skills & Technologies 💻\n• Projects & Work 🚀\n• Education 🎓\n• Certificates 📜\n• Contact Information 📧\n• Experience & Achievements 🏆\n\nJust ask me anything!";
        }

        // Skills - General
        if ((input.includes("skill") || input.includes("tech") || input.includes("know") || input.includes("language")) && !input.includes("best")) {
            const allSkills = [
                ...knowledgeBase.skills.frontend,
                ...knowledgeBase.skills.backend,
                ...knowledgeBase.skills.languages,
                ...knowledgeBase.skills.database,
                ...knowledgeBase.skills.tools
            ];
            return `Anusuya is skilled in:\n\n🎨 Frontend: ${knowledgeBase.skills.frontend.join(", ")}\n⚙️ Backend: ${knowledgeBase.skills.backend.join(", ")}\n💻 Languages: ${knowledgeBase.skills.languages.join(", ")}\n🗄️ Database: ${knowledgeBase.skills.database.join(", ")}\n🛠️ Tools: ${knowledgeBase.skills.tools.join(", ")}`;
        }

        // Best/Strongest Skills
        if ((input.includes("best") || input.includes("strong") || input.includes("expert")) && (input.includes("skill") || input.includes("tech"))) {
            return "Anusuya's strongest skills are:\n\n⭐ HTML (90%)\n⭐ React (85%)\n⭐ Python (85%)\n⭐ Git (85%)\n⭐ CSS (85%)\n\nShe's particularly proficient in Full Stack Development using the MERN stack!";
        }

        // Specific Technologies
        if (input.includes("react") || input.includes("frontend")) {
            return `Yes! Anusuya is proficient in React ⚛️ (85% proficiency). She also knows ${knowledgeBase.skills.frontend.join(", ")}. Check out her portfolio website built with React!`;
        }

        if (input.includes("node") || input.includes("backend") || input.includes("express")) {
            return `Anusuya has strong backend skills! She works with:\n\n• Node.js & Express (80%)\n• Spring Boot (75%)\n\nShe's built several full-stack applications using these technologies.`;
        }

        if (input.includes("python") || input.includes("java") || input.includes("c++")) {
            return `Programming Languages:\n\n🐍 Python (85%) - Used for AI/ML projects\n☕ Java (80%) - Spring Boot development\n⚡ C++ (70%) - DSA and competitive programming`;
        }

        if (input.includes("database") || input.includes("mongo")) {
            return `Database expertise:\n\n• MongoDB (75%) - NoSQL database\n• DBMS fundamentals\n\nShe's used MongoDB extensively in MERN stack projects!`;
        }

        // Projects - General
        if (input.includes("project") || input.includes("work") || input.includes("built") || input.includes("portfolio")) {
            const projectList = knowledgeBase.projects.map((p, i) =>
                `${i + 1}. ${p.name}\n   ${p.description}\n   Tech: ${p.tech.join(", ")}`
            ).join("\n\n");
            return `Here are some of Anusuya's key projects:\n\n${projectList}\n\nVisit the Projects section to see more details!`;
        }

        // Specific Projects
        if (input.includes("traffic") || input.includes("ai project") || input.includes("machine learning")) {
            return "🚗 AI Traffic Predictor:\nA machine learning model that predicts traffic patterns using Python and TensorFlow. This project demonstrates expertise in AI/ML and data analysis!";
        }

        if (input.includes("neural") || input.includes("visualiz")) {
            return "🧠 Neural Network Visualizer:\nAn interactive tool to visualize how neural networks work, built with React and D3.js. Great for understanding deep learning concepts!";
        }

        // Education
        if (input.includes("education") || input.includes("degree") || input.includes("college") || input.includes("university") || input.includes("study")) {
            return `🎓 Education:\n\n${knowledgeBase.education.degree} in ${knowledgeBase.education.field}\n${knowledgeBase.education.institution}\n${knowledgeBase.education.year}\n\nCurrently in ${knowledgeBase.education.status}!`;
        }

        // Certificates
        if (input.includes("certificate") || input.includes("certification") || input.includes("course")) {
            return `📜 Certifications:\n\nAnusuya has completed ${knowledgeBase.certificates.count}+ professional certifications in:\n\n• ${knowledgeBase.certificates.areas.join("\n• ")}\n\nCheck the Certificates page for the complete list!`;
        }

        // Experience & Achievements
        if (input.includes("experience") || input.includes("achievement") || input.includes("accomplish")) {
            return `🏆 Key Achievements:\n\n• ${knowledgeBase.achievements.join("\n• ")}\n\nShe's actively building her portfolio with real-world projects!`;
        }

        // Contact Information
        if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("hire") || input.includes("recruit")) {
            return `📧 Contact Information:\n\nEmail: ${knowledgeBase.contact.email}\n\n${knowledgeBase.contact.availability}\n\nFeel free to reach out for collaborations or opportunities!`;
        }

        // Availability
        if (input.includes("available") || input.includes("looking for") || input.includes("job") || input.includes("internship") || input.includes("hackathon")) {
            return `Anusuya is currently ${knowledgeBase.education.status} and is:\n\n✅ Open to hackathon opportunities\n✅ Looking for internships\n✅ Available for collaborations\n✅ Interested in full-stack development roles\n\nContact: ${knowledgeBase.contact.email}`;
        }

        // About/Who
        if (input.includes("who") || input.includes("about") || (input.includes("tell") && input.includes("me"))) {
            return `${knowledgeBase.personal.name} is a ${knowledgeBase.personal.status} passionate about ${knowledgeBase.personal.interests}.\n\nShe has:\n• ${knowledgeBase.certificates.count}+ certifications\n• ${knowledgeBase.projects.length}+ major projects\n• Strong MERN stack expertise\n• Active in competitive programming\n\nExpected graduation: ${knowledgeBase.personal.graduation}`;
        }

        // GitHub/LinkedIn
        if (input.includes("github") || input.includes("linkedin") || input.includes("social")) {
            return "You can find Anusuya on:\n\n• GitHub - Check out her code repositories\n• LinkedIn - Professional profile\n• Email: 2312005@nec.edu.in\n\nLinks are available in the About section!";
        }

        // Thank you
        if (input.includes("thank") || input.includes("thanks")) {
            return "You're welcome! 😊 Feel free to ask anything else!";
        }

        // Bye
        if (input.includes("bye") || input.includes("goodbye") || input.includes("see you")) {
            return "Goodbye! 👋 Feel free to come back anytime if you have more questions!";
        }

        // Default fallback with suggestions
        return "I'm not sure about that specific question, but I can help you with:\n\n• Skills & Technologies 💻\n• Projects & Work 🚀\n• Education & Certificates 🎓\n• Contact Information 📧\n\nTry asking something like 'What are your skills?' or 'Tell me about your projects!'";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = generateResponse(input);
            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
            setIsTyping(false);

            // Update quick replies based on context
            updateQuickReplies(input);
        }, 800 + Math.random() * 400); // Random delay between 800-1200ms
    };

    const updateQuickReplies = (lastInput) => {
        const input = lastInput.toLowerCase();

        if (input.includes("skill")) {
            setQuickReplies(["Tell me about your projects", "What's your education?", "How can I contact you?"]);
        } else if (input.includes("project")) {
            setQuickReplies(["What are your skills?", "Show me certificates", "Are you available for hire?"]);
        } else if (input.includes("contact") || input.includes("hire")) {
            setQuickReplies(["What are your best skills?", "Tell me about your experience", "Show me your projects"]);
        } else {
            setQuickReplies(["What are your skills?", "Tell me about your projects", "How can I contact you?"]);
        }
    };

    const handleQuickReply = (reply) => {
        setInput(reply);
        setTimeout(() => handleSend(), 100);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 bg-gray-900 border border-gray-700 w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Sparkles size={20} className="text-yellow-300" />
                                <h3 className="text-white font-bold">AI Assistant</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-800">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-line ${msg.sender === "user"
                                        ? "bg-blue-600 text-white ml-auto"
                                        : "bg-gray-700 text-gray-200 mr-auto"
                                        }`}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-1 bg-gray-700 w-16 p-3 rounded-xl"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                    />
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        {!isTyping && (
                            <div className="px-3 py-2 bg-gray-900 border-t border-gray-700 flex gap-2 overflow-x-auto">
                                {quickReplies.map((reply, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickReply(reply)}
                                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded-full whitespace-nowrap transition-colors border border-gray-600"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 bg-gray-900 border-t border-gray-700 flex gap-2">
                            <input
                                type="text"
                                placeholder="Ask me anything..."
                                className="flex-1 bg-gray-800 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
                                disabled={!input.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
