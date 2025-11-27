import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Languages
    { name: "Python", level: 95, category: "Languages" },
    { name: "JavaScript", level: 90, category: "Languages" },
    { name: "TypeScript", level: 88, category: "Languages" },
    { name: "SQL", level: 85, category: "Languages" },
    { name: "C#", level: 80, category: "Languages" },
    { name: "Java", level: 70, category: "Languages" },
    { name: "C++", level: 65, category: "Languages" },
    { name: "Bash", level: 75, category: "Languages" },
    { name: "HTML", level: 90, category: "Languages" },
    { name: "CSS", level: 85, category: "Languages" },

    // Cloud & DevOps
    { name: "Docker", level: 90, category: "Cloud & DevOps" },
    { name: "Kubernetes", level: 82, category: "Cloud & DevOps" },
    { name: "Azure", level: 78, category: "Cloud & DevOps" },
    { name: "Azure DevOps", level: 80, category: "Cloud & DevOps" },
    { name: "GitHub Actions", level: 85, category: "Cloud & DevOps" },
    { name: "CI/CD", level: 88, category: "Cloud & DevOps" },

    // Backend & Systems
    { name: "Node.js", level: 85, category: "Backend & Systems" },
    { name: "Express.js", level: 82, category: "Backend & Systems" },
    { name: "Flask", level: 80, category: "Backend & Systems" },
    { name: ".NET (C#)", level: 78, category: "Backend & Systems" },
    { name: "REST APIs", level: 90, category: "Backend & Systems" },
    { name: "MCP (Model Context Protocol)", level: 75, category: "Backend & Systems" },

    // Frontend
    { name: "React", level: 88, category: "Frontend" },
    { name: "FAST (Microsoft Web Components)", level: 75, category: "Frontend" },
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },

    // Databases & Tools
    { name: "Microsoft SQL Server", level: 82, category: "Databases & Tools" },
    { name: "MySQL", level: 75, category: "Databases & Tools" },
    { name: "Git", level: 92, category: "Databases & Tools" },
    { name: "Postman", level: 85, category: "Databases & Tools" },
    { name: "Figma", level: 85, category: "Databases & Tools" },
    { name: "Unity", level: 85, category: "Databases & Tools" },
];

const categories = ["all", "Languages", "Cloud & DevOps", "Backend & Systems", "Frontend", "Databases & Tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-center mb-4">
                            <h3 className="font-semibold text-lg">
                                {skills.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}