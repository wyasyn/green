export default function sitemap() {
    return [
        {
            url: "https://ywalum.com",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://ywalum.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://ywalum.com/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://ywalum.com/blog",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://ywalum.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
