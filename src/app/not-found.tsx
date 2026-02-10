import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            </div>

            <div className="z-10 text-center px-4">
                <h1 className="text-9xl font-bold mb-4 font-serif text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-8">
                    Lost in Space
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-12">
                    The page you are looking for has drifted away into the digital void.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors duration-300"
                >
                    <MoveLeft className="w-4 h-4" /> Return to Orbit
                </Link>
            </div>
        </div>
    );
}
