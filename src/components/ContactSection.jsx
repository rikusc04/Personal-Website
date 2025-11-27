import { Mail, Linkedin } from "lucide-react"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In Touch
                </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you would like to collaborate on a project with me, please feel free to reach out! I'm always open to new opportunities to learn and grow!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                    <span className="font-medium">Email: </span>
                    <a 
                        href="mailto:rikusantacruz@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        rikusantacruz@gmail.com
                    </a>
                    </div>
                </div>
            
                <div className="flex items-center space-x-3">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <div>
                        <span className="font-medium">LinkedIn: </span>
                        <a href="https://www.linkedin.com/in/rikusantacruz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            https://www.linkedin.com/in/rikusantacruz/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}