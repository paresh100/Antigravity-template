"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
}

const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-80",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};

export default function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
