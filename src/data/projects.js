// - Screenshots ko public/projects/ me rakho, aur yaha path "/projects/naam.png" likho
//   (public ka naam path me NAHI aata, aur case-sensitive hai: Netlify pe "A.png" != "a.png")
//
export const projects = [
  {
    id: 1,
    title: "SchedViz",
    description: "Turns textbook OS scheduling algorithms into interactive, visual simulations.",
    tech: ["React", "Tailwind CSS", "C++", "MongoDB"],
    image: "/images/projects/schedviz.png",
    live: "https://sched-viz.vercel.app/",
    github: "https://github.com/abhinavcreates/SchedViz",
  },
  {
    id: 2,
    title: "Coffee with abhi",
    description: "A simple coffee ordering website , featuring coffee selection and a cart that displays the total price.",
    tech: ["React", "Node.js"],
    image: "/images/projects/coffee.jpg",
    live: "https://coffeewithabhi.netlify.app",
    github: "https://github.com/abhinavcreates/coffeewithabhi",
  },
  {
    id: 3,
    title: "manan-bakery",
    description: "A simple bakery website showcasing a variety of cakes and bakery products with their details and prices.",
    tech: ["React", "Tailwind CSS"],
    image: "/images/projects/bakery.jpg",
    live: "https://manan-bakery.netlify.app/",
    github: "https://github.com/abhinavcreates/manan-bakery",
  },
  {
    id: 4,
    title: "Deliverit",
    description: "A food delivery service website, featuring food ordering, catering, bulk orders, and a contact section.",
    tech: ["HTML", "CSS"],
    image: "/images/projects/deliverit.jpg",
    live: "https://deliverit-services.netlify.app/",
    github: "https://github.com/abhinavcreates/Deliverit",
  },
];