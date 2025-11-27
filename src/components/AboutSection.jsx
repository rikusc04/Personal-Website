import { Briefcase, Cloud, Code } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Software Engineer</h3>
                    <p className="text-muted-foreground">
                        I am a senior at NYU studying Computer Science, with minors in 
                        Math and Cybersecurity. Throughout my four years, I've gained
                        hands-on experience in the industry contributing to systems and tools 
                        used by billions of users every day
                    </p>
                    <div className="flex felx-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full Stack</h4>
                                <p className="text-muted-foreground">
                                    Comfortable working across the stack to build systems to turn ideas into production-ready features
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cloud className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Systems & Cloud</h4>
                                <p className="text-muted-foreground">
                                    Experience using Docker, Kubernetes, CI/CD, and cloud to build scalable, maintainable systems
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Industry Experience</h4>
                                <p className="text-muted-foreground">
                                    Contributed to building customer-facing products and internal developer tools at Microsoft
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
}