import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        "id": 1,
        "title": "Airline Ticketing System",
        "description": "A CRUD application that allows for the booking, cancelling, and enrolling of new customers/airline staff",
        "image": "/projects/airline_ticketing_system.png",
        "githubUrl": "https://github.com/rikusc04/Airline-Ticketing-System"
    },
    {
        "id": 2,
        "title": "Repy Defensive Security Monitor",
        "description": "A custom Repy security layer implementing a restricted file API with validation, sandboxed file operations, and automatic cleanup logic",
        "image": "/projects/security_icon.png",
        "githubUrl": "https://github.com/rikusc04/Repy-Defensive-Security-Monitor"
    },
    {
        "id": 3,
        "title": "E20 Processor Simulator",
        "description": "A complete C++ simulator for the E20 architecture, supporting instruction execution, memory operations, and program state visualization",
        "image": "/projects/cpu.png",
        "githubUrl": "https://github.com/rikusc04/E20-Processor-Simulator"
    },
    {
        "id": 4,
        "title": "Tic Tac Toe",
        "description": "Features an unbeatable AI opponent capable of making optimal decisions using the minimax algorithm",
        "image": "/projects/tic_tac_toe.png",
        "githubUrl": "https://github.com/rikusc04/Tic-Tac-Toe"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured Projects
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Below, you will find a collection of my projects. Click on any project to view the source code on GitHub.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 flex flex-col">
                            <div className="h-48 overflow-hidden bg-muted flex-shrink-0">
                                <img src={project.image} alt={`Screenshot of ${project.title} project`} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex items-center pt-2 mt-auto">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300" aria-label={`View ${project.title} on GitHub`} >
                                        <Github className="w-5 h-5" />
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/rikusc04" target="_blank">
                        Check out my GitHub! <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}