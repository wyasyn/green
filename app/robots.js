export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://ywalum.com/sitemap.xml",
    };
}
