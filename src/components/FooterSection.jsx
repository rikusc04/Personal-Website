import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-border bg-secondary/30">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-muted-foreground">&copy; {new Date().getFullYear()} RikuSantaCruz.co</p>
                    <p className="text-muted-foreground text-sm">All Rights Reserved</p>
                </div>
                
                <a href="#hero" className="inline-flex p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" aria-label="Back to top">
                    <ArrowUp className="h-5 w-5" />
                </a>
            </div>
        </footer>
    )
}