export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-design",
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt:
      "Exploring the emerging trends that will shape the future of digital experiences, from AI-powered interfaces to immersive 3D environments.",
    content: `The landscape of web design is evolving at an unprecedented pace. As we move further into 2025, several key trends are emerging that will fundamentally change how we create and interact with digital experiences.

## AI-Powered Personalization

Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming how we design user experiences. AI-powered personalization allows websites to adapt in real-time to user preferences, creating unique experiences for each visitor.

## Immersive 3D Environments

WebGL and WebGPU technologies have matured to the point where creating complex 3D environments in the browser is not only possible but practical. We're seeing more brands adopt 3D elements to create memorable, interactive experiences.

## Sustainable Design

With growing awareness of environmental issues, sustainable web design is becoming crucial. This means optimizing for performance, reducing energy consumption, and creating accessible experiences that work on older devices.

## Voice and Gesture Interfaces

As voice assistants and gesture controls become more sophisticated, web interfaces need to adapt. Designing for these interaction models requires a fundamental shift in how we think about user interfaces.

The future of web design is exciting and full of possibilities. By staying informed about these trends and experimenting with new technologies, we can create better experiences for users while pushing the boundaries of what's possible on the web.`,
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MzI2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Alex Morgan",
    date: "2024-12-01",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: "building-design-systems",
    title: "Building Scalable Design Systems",
    excerpt:
      "A comprehensive guide to creating design systems that grow with your product and team.",
    content: `Design systems have become essential for maintaining consistency across digital products. Here's what I've learned from building design systems for various clients.

## Start with Foundations

Before diving into components, establish your foundational elements: color palettes, typography scales, spacing systems, and grid structures. These form the building blocks of everything else.

## Component Thinking

Think in reusable, composable components. Each component should have a single responsibility and be flexible enough to handle various use cases without becoming overly complex.

## Documentation is Key

A design system is only as good as its documentation. Invest time in creating clear, comprehensive documentation that explains not just how to use components, but when and why.

## Governance and Evolution

Design systems need governance to maintain quality while remaining flexible enough to evolve. Establish clear processes for proposing changes and updating components.

Building a design system is an investment that pays dividends in consistency, efficiency, and quality across your digital products.`,
    image:
      "https://images.unsplash.com/photo-1761746395536-00d334eba480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hpbmd8ZW58MXx8fHwxNzY1Mzc4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Alex Morgan",
    date: "2024-11-15",
    category: "Development",
    readTime: "8 min read",
  },
  {
    id: "user-research-methods",
    title:
      "Effective User Research Methods for Modern Products",
    excerpt:
      "Learn how to conduct user research that actually informs design decisions and improves user experience.",
    content: `User research is the foundation of great design. Yet many teams struggle to conduct research that truly informs their decisions. Here's my approach to effective user research.

## Choosing the Right Methods

Different questions require different research methods. Usability testing, interviews, surveys, and analytics each provide unique insights. The key is matching the method to your research goals.

## Recruiting the Right Participants

Your research is only as good as your participants. Take time to recruit people who truly represent your target audience, not just whoever is available.

## Asking Better Questions

Avoid leading questions and confirmation bias. Instead, ask open-ended questions that allow participants to share their authentic experiences and perspectives.

## Turning Insights into Action

Research is worthless if it doesn't inform decisions. Develop systems for synthesizing findings, sharing insights with your team, and tracking how research impacts your product.

Effective user research requires practice, but the payoff in better products and happier users is worth the investment.`,
    image:
      "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTM1NDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Explora las verdades Bíblicas",
    date: "2024-10-20",
    category: "UX Research",
    readTime: "6 min read",
  },
];