import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Emerging Trends in the UK Construction Market",
    paragraph:
      "Explore the latest trends shaping the UK construction industry, from sustainable building practices to innovative construction technologies.",
    image: "/images/blog/blog.png",
    author: {
      name: "John Harper",
      image: "/images/blog/author-01.png",
      designation: "Construction Analyst",
    },
    tags: ["trends", "sustainability"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "How to Streamline Your Construction Projects with Technology",
    paragraph:
      "Learn how integrating advanced technologies like AI and machine learning can streamline your construction projects and increase efficiency.",
    image: "/images/blog/blog2.png",
    author: {
      name: "Emily Turner",
      image: "/images/blog/author-02.png",
      designation: "Tech Consultant",
    },
    tags: ["technology", "efficiency"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Best Practices for Bidding in Construction",
    paragraph:
      "Discover strategies to improve your bidding process, from understanding market rates to crafting winning proposals that stand out.",
    image: "/images/blog/blog3.png",
    author: {
      name: "Marcus Lee",
      image: "/images/blog/author-03.png",
      designation: "Procurement Specialist",
    },
    tags: ["bidding", "best practices"],
    publishDate: "2025",
  },
];

export default blogData;
