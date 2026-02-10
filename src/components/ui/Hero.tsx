"use client";

import { motion, Variants } from "framer-motion";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // [Designer Directive] Staggering
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
            },
        },
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl px-6 text-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="block">Crafting Digital</span>
                    <span className="text-gradient">Experiences</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                    Rachel Singer is a digital artisan building high-performance, aesthetically pleasing web solutions that drive growth.
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4 justify-center">
                    <Button variant="primary">
                        View Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="glass bg-transparent">
                        Contact Me
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
