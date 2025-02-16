import ajayImage from "../assets/Ajay.png"
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  twitterHandle?: string;
  structuredData?: object;
}

const defaultSEO: SEOProps = {
  title: "Ajay Yadav | Home",
  description: `Welcome to My Portfolio!
Hi, I’m Ajay, a Software Developer with a passion for create best software solutions. With 3 years of experience, I specialize in Angular, React, creating impactful, user-friendly, high-performance solutions.

🚀 What I Do
Frontend Development: React, Angular, etc.]
Backend Development: Node.js, etc.
Other Key Skills: Databases, APIs, etc.

📂 Explore My Work
Check out my projects showcasing web apps, software solutions, etc. that solve real-world problems.

📞 Let’s Connect!
I’m always open to exciting opportunities and collaborations. Feel free to reach out via email:yajay04112000@gmail.com.
`,
  keywords: "Angular, React, Node, Express",
  url: "https://portfolio-yajay04112000.vercel.app/",
  image: ajayImage,
  twitterHandle: "@default",
  structuredData:{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Example Website",
    "url": "https://portfolio-yajay04112000.vercel.app/",
    "author": {
      "@type": "Person",
      "name": "Ajay yadav"
    }
  }
};

/**
 * Generates structured data JSON-LD
 */
const generateStructuredData = (data: object) => {
  return JSON.stringify(data);
};

export const SEOService = {
  getMetaTags: (props: SEOProps) => {
    const meta = { ...defaultSEO, ...props };

    return [
      { name: "description", content: meta.description },
      { name: "keywords", content: meta.keywords },
      { name: "author", content: "Ajay Yadav" },

      // Open Graph (Facebook)
      { property: "og:type", content: "website" },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: meta.url },
      { property: "og:image", content: meta.image },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
      { name: "twitter:image", content: meta.image },
      { name: "twitter:creator", content: meta.twitterHandle },
    ];
  },

  getStructuredDataScript: (structuredData?: object) => {
    return structuredData ? generateStructuredData(structuredData) : null;
  },
};
