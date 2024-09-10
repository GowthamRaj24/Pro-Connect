import Nav from "@/components/Nav";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiSession } from "react-icons/si";

const mentors = [
  {
    name: "John Doe",
    title: "Software Engineer @Oracle | 5 years experience",
    image: "https://picsum.photos/200/300",
    skills: ["Web development", "Data Science", "Machine Learning"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ratings: "10 Ratings",
    sessions: "100+ Alumni sessions",
    offers: ["Resume Review", "Mock Interviews", "Career Guidance", "Job Referrals"],
  },
  {
    name: "Jane Smith",
    title: "Data Scientist @Google | 7 years experience",
    image: "https://picsum.photos/200/301",
    skills: ["Data Science", "AI", "Big Data"],
    description: "Experienced data scientist with a passion for AI.",
    ratings: "20 Ratings",
    sessions: "200+ Alumni sessions",
    offers: ["Mock Interviews", "Career Guidance", "AI Research Advice"],
  },
  {
    name: "Michael Lee",
    title: "Machine Learning Engineer @Tesla | 3 years experience",
    image: "https://picsum.photos/200/302",
    skills: ["Machine Learning", "Deep Learning", "Robotics"],
    description: "Specialist in building ML models for autonomous systems.",
    ratings: "15 Ratings",
    sessions: "150+ Alumni sessions",
    offers: ["Job Referrals", "Resume Review", "Mock Interviews"],
  },
  {
    name: "Emily Davis",
    title: "Frontend Developer @Facebook | 4 years experience",
    image: "https://picsum.photos/200/303",
    skills: ["Web Development", "React", "UI/UX"],
    description: "Frontend expert with a focus on performance and design.",
    ratings: "18 Ratings",
    sessions: "170+ Alumni sessions",
    offers: ["UI/UX Design Review", "Mock Interviews", "Career Guidance"],
  },
  {
    name: "David Johnson",
    title: "Backend Engineer @Amazon | 6 years experience",
    image: "https://picsum.photos/200/304",
    skills: ["Backend Development", "Cloud Computing", "DevOps"],
    description: "Building scalable backend systems for high traffic apps.",
    ratings: "12 Ratings",
    sessions: "130+ Alumni sessions",
    offers: ["Backend Architecture Review", "Mock Interviews", "Job Referrals"],
  },
  {
    name: "Sophia Brown",
    title: "Full Stack Developer @Netflix | 5 years experience",
    image: "https://picsum.photos/200/305",
    skills: ["Full Stack Development", "JavaScript", "Node.js"],
    description: "Full stack developer with experience in modern web apps.",
    ratings: "25 Ratings",
    sessions: "220+ Alumni sessions",
    offers: ["Full Stack Consultation", "Resume Review", "Career Guidance"],
  },
];

const MentorCard = ({ mentor }) => {
  return (
    <div
      className="w-full h-60 rounded-md bg-white grid grid-cols-12 my-3"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="col-start-1 col-end-9">
        <div className="flex flex-row gap-2 items-center">
          <Image
            alt="i"
            src={mentor.image}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-full w-16 h-16 m-4"
          />
          <div>
            <p>{mentor.name}</p>
            <p>{mentor.title}</p>
          </div>
        </div>
        <div className="mx-3">
          {mentor.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 rounded-lg px-3 p-2 m-1">
              {skill}
            </span>
          ))}
        </div>
        <div className="mx-3 p-3">
          <p>{mentor.description}</p>
        </div>
        <div className="mx-3 px-3 flex flex-row items-center gap-5">
          <div className="flex flex-row">
            <CiStar size={20} />
            <p>{mentor.ratings}</p>
          </div>
          <div className="flex flex-row">
            <SiSession size={20} />
            <p>{mentor.sessions}</p>
          </div>
        </div>
      </div>
      <div className="col-start-9 col-end-13 p-4">
        <p className="font-sans font-medium text-lg">What this mentor offers?</p>
        <div>
          {mentor.offers.map((offer, index) => (
            <p key={index}>{index + 1}. {offer}</p>
          ))}
        </div>
        <button
          style={{
            backgroundColor: "black",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
          className="w-full text-white h-10 my-3"
        >
          Book a session
        </button>
      </div>
    </div>
  );
};

const MentorShip = () => {
  return (
    <>
      <Nav />
      <div className="w-256 mx-auto">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-1 h-10 bg-black rounded-lg"></div>
          <h1 className="text-xl"> Mentors</h1>
        </div>
        <div className="my-3">
          <div className="">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorShip;
