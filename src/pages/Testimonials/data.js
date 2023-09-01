export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "Working with this team has been an incredible experience. Their dedication and expertise have greatly contributed to the success of our project.",
    job: "CEO, Company ABC",
    avatar: require("./images1.jpg"),
  },
  {
    id: 2,
    name: "Jane Smith",
    quote:
      "I'm impressed by the level of creativity and innovation this team brings to the table. They always find solutions to complex problems and deliver outstanding results.",
    job: "Marketing Director, Company XYZ",
    avatar: require("./images2.jpg"),
  },
  {
    id: 3,
    name: "Alex Johnson",
    quote:
      "I've had the pleasure of collaborating with this team on multiple projects. Their attention to detail and commitment to quality is unmatched.",
    job: "Product Manager, Startup ABCD",
    avatar: require("./images3.png"),
  },
  {
    id: 4,
    name: "Emily Williams",
    quote:
      "As a designer, I'm particular about aesthetics, and this team exceeded my expectations. Their designs are not only visually appealing but also highly functional.",
    job: "UI/UX Designer, DesignCo",
    avatar: require("./images4.png"),
  },
  {
    id: 5,
    name: "Michael Brown",
    quote:
      "Collaborating with this team has been a game-changer for our development process. Their code is clean, efficient, and well-documented.",
    job: "CTO, Tech Innovators",
    avatar: require("./images5.png"),
  },
  {
    id: 6,
    name: "Sarah Lee",
    quote:
      "I highly recommend this team for their exceptional communication skills. They kept me updated throughout the project, making the entire experience smooth and transparent.",
    job: "Project Manager, Global Solutions",
    avatar: require("./images6.png"),
  }
];


export const SectionHead=({icon,title,className})=>{
    return(
        <div className={`section__head ${className}`}>
            <span>{icon}</span>
            <h1>{title}</h1>

        </div>

    );
}



export const Cards=({className,children})=>{

    return(
        <article className={`cards ${className}`}>
            {children}
        </article>
    );
}
