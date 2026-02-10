import React from "react";

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rachel Singer",
        url: "https://rachelsinger.com",
        jobTitle: "Digital Artisan & Web Developer",
        sameAs: [
            "https://twitter.com/rachelsinger",
            "https://linkedin.com/in/rachelsinger",
            "https://github.com/rachelsinger",
        ],
        description:
            "Rachel Singer is a digital artisan building high-performance, aesthetically pleasing web solutions that drive growth.",
        image: "https://rachelsinger.com/opengraph-image",
        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
