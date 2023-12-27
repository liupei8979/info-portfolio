export const mainSettings = {
  title: "My portfolio",
  description:
    "Hi, my name is Mintae and this is my online resume built using SvelteKit.",
  favicon: "/images/figs-32.png",
  colorScheme: "bg-blue-500",
  textColorScheme: "text-blue-500",
  colorAccent: "bg-blue-700",
  touchIcon: "/images/figs-180.png",
  footer: {
    showFooter: false,
    footerText: "Copyrights by &copy; Figs",
  },

  analytics: "UA-92266803-7",

  disqusShortname: "webjeda-demo",

  formspreeAction: "https://formspree.io/f/mdowwywy",
  math: true,
  numberOfWorksToShow: 2,
  numberOfBlogPostsToShow: 4,
  showBuyButton: true,
};

export const sidebar = {
  name: "Kim Mintae",
  designations: ["Student", "Frontend Developer"],
  image: "/images/profile2.jpeg",
  social: [
    {
      title: "Github",
      link: "https://github.com/liupei8979",
      icon: "fab fa-github-square",
    },
  ],
  sidebarLinks: [
    {
      title: "Download CV",
      link: "/docs/resume.pdf",
      downloadable: true,
    },
    {
      title: "Contact me",
      link: "/contact/",
    },
  ],
};

export const about = {
  description:
    "Hello! I’m Kim Mintae. I'm a Frontend developer living in Seoul.",
  details: {
    age: 24,
    residence: "South Korea",
    availability: "9AM - 5PM PST",
    address: "Seoul, Korea",
  },
};

export const clients = [
  {
    name: "AutoSpeed",
    image: "/images/customers/auto-speed.svg",
    link: "#",
  },
  {
    name: "BeautyBox",
    image: "/images/customers/beauty-box.svg",
    link: "#",
  },
  {
    name: "The Dance Studio",
    image: "/images/customers/the-dance-studio.svg",
    link: "#",
  },
  {
    name: "FastBanana",
    image: "/images/customers/fast-banana.svg",
    link: "#",
  },
];

export const hobbies = [
  {
    hobby: "Reading Novels",
    color: "bg-green-500",
  },
  {
    hobby: "Playing Chess",
    color: "bg-blue-500",
  },
  {
    hobby: "Automating Tasks",
    color: "bg-indigo-500",
  },
  {
    hobby: "Coding Personal Projects",
    color: "bg-gray-500",
  },
  {
    hobby: "Yoga",
    color: "bg-purple-500",
  },
  {
    hobby: "Riding Bike",
    color: "bg-red-500",
  },
];

export const services = [
  {
    title: "Python",
    description: "I teach python on Udemy.",
    icon: "fab fa-python",
  },
  {
    title: "Data Science",
    description: "I work on Big Data and Machine Learning.",
    icon: "fas fa-database",
  },
  {
    title: "Marketing",
    description: "I have marketed several products online.",
    icon: "fas fa-globe-americas",
  },
  {
    title: "Blogging",
    description: "I write blogs on everything.",
    icon: "fas fa-newspaper",
  },
];

export const skills = [
  {
    name: "HTML",
    skillLevel: 90,
    color: "text-pink-400",
  },
  {
    name: "CSS",
    skillLevel: 80,
    color: "text-green-400",
  },
  {
    name: "JavaScript",
    skillLevel: 60,
    color: "text-yellow-400",
  },
  {
    name: "Python",
    skillLevel: 30,
    color: "text-indigo-400",
  },
  {
    name: "c++",
    skillLevel: 20,
    color: "text-blue-400",
  },
  {
    name: "Svelte",
    skillLevel: 20,
    color: "text-red-400",
  },
];

export const testimonials = [
  {
    name: "Savion Lowery",
    social: "@savion.lowery",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    review:
      "The good thing about science is that it's true whether or not you believe in it.",
  },
  {
    name: "Amina Porter",
    social: "@aminaporter",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    review:
      "Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.",
  },
];
