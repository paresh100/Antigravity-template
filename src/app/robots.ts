import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"], // Protective measures
        },
        sitemap: "https://rachelsinger.com/sitemap.xml",
    };
}
