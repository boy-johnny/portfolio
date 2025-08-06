export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "Mission",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "Availability",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Tech Stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Help you find the best products",
    description: "Projects",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    des: "A modern e-commerce website built with React, Tailwind CSS, and TypeScript.",
    img: "/e-commerce.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/n8n.svg"],
    link: "https://au.kakaduaustralia.com/",
  },
  {
    id: 2,
    title: "Affine",
    des: "Affine is a modern, collaborative workspace that allows you to create, edit, and share documents with your team.",
    img: "/affine.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://affine.pro/",
  },
  {
    id: 3,
    title: "Image AI",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/image-ai.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "Raycast Extension",
    des: "A Raycast extension that allows you pick color from any image, and copy the color code to your clipboard.",
    img: "/raycast.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://github.com/boy-johnny/raycast-extension",
  },
];

export const testimonials = [
  {
    quote:
      "Brion is a great developer who is always willing to help and is very responsive. He is also very knowledgeable and has a great understanding of the latest technologies. I would highly recommend him to anyone looking for a developer.",
    name: "John Doe",
    title: "HR of Kakadu Australia",
    img: "/john-doe.jpg",
  },
  {
    quote:
      "Collaborating with Brion was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brion's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brion is the ideal partner.",
    name: "Michael Tsai",
    title: "Director of Mitochondrial Research",
    img: "/doctor.jpg",
  },
  {
    quote:
      "Brian is a creative and innovative developer who is always willing to help and is very responsive. He is also very knowledgeable and has a great understanding of the latest technologies. I would highly recommend him to anyone looking for a developer.",
    name: "Denny Chen",
    title: "The research assistant in NCKU",
    img: "/denny.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer and Web Designer",
    desc: "Built the Mitochondrial Research website from scratch using React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer & AI automation developer",
    desc: "Developed the user-interface of e-commerce website using React.js, enchancing the efficiency of the website.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-stack Developer & Founder of GOODA",
    desc: "Built a web-based SaaS app for AI optimization of photos.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Frontend Developer",
    desc: "Developed and maintained user-facing features of open-source projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/boy-johnny",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https:/x.com/johnnyboy157951",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/brian-huang-ba3756369/",
  },
];
