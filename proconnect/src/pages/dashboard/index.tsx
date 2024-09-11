import Image from "next/image";
import { LuUsers } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import { useSession } from "next-auth/react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const initiatives = [
  {
    id: "a1inti1234",
    title: "College Infrastructure Improvement",
    image: "https://etimg.etb2bimg.com/photo/90431140.cms",
    short_description: "Improving the facilities and resources of local colleges.",
    long_description:
      "This initiative aims to upgrade the infrastructure of local colleges by providing better classrooms, laboratories, and other facilities. Donations will be used to improve the learning environment for students, focusing on underfunded institutions.This initiative organizes regular blood donation camps in collaboration with local hospitals. The goal is to ensure a consistent supply of blood for patients in need, especially during emergencies. Volunteers and donors are encouraged to participate and help save lives.",
    keywords: ["infrastructure", "education", "college", "classroom", "learning resources"],
    users_donated: [
      { id: 101, amount: 100 },
      { id: 203, amount: 200 },
      { id: 304, amount: 300 },
    ]
  },
  {
    id: "a2inti1234",
    title: "Laptops for Students Initiative",
    image: "https://www.cpccfoundation.org/files/52227ADD-E576-48F7-B264-95C27973EA24--ED11E1AE-FDC0-4242-8E5A-2FA844B3BC04/opp-scholars-chromebook-distro-1-1.jpg?nc=07242019100952",
    short_description: "Providing laptops to underprivileged students.",
    long_description:
      "This initiative is focused on bridging the digital divide by donating laptops to students in need. By ensuring that every student has access to technology, we aim to support their education and give them the tools they need to succeed in today's digital world.This initiative organizes regular blood donation camps in collaboration with local hospitals. The goal is to ensure a consistent supply of blood for patients in need, especially during emergencies. Volunteers and donors are encouraged to participate and help save lives.",
    keywords: ["laptops", "students", "education", "technology", "digital divide"],
    users_donated: [
      { id: 112, amount: 120 },
      { id: 223, amount: 230 },
      { id: 334, amount: 340 },
      { id: 445, amount: 450 },
    ]
  },
  {
    id: "a3inti1234",
    title: "Health Kits Donation",
    image: "https://unitedwaynca.org/wp-content/uploads/2021/12/DSC_5069-scaled.jpg",
    short_description: "Donating essential health kits to communities in need.",
    long_description:
      "This initiative provides essential health kits, including masks, sanitizers, and first-aid supplies, to vulnerable communities. It aims to support public health efforts and ensure that people have the necessary resources to stay safe and healthy.This initiative organizes regular blood donation camps in collaboration with local hospitals. The goal is to ensure a consistent supply of blood for patients in need, especially during emergencies. Volunteers and donors are encouraged to participate and help save lives.",
    keywords: ["health kits", "donation", "public health", "community", "sanitization"],
    users_donated: [
      { id: 123, amount: 130 },
      { id: 234, amount: 240 },
      { id: 345, amount: 350 },
      { id: 456, amount: 460 },
    ]
  },
  {
    id: "a4inti1234",
    title: "Blood Donation Camps",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail-732x549.jpg",
    short_description: "Organizing blood donation camps for hospitals.",
    long_description:
      "This initiative organizes regular blood donation camps in collaboration with local hospitals. The goal is to ensure a consistent supply of blood for patients in need, especially during emergencies. Volunteers and donors are encouraged to participate and help save lives.This initiative organizes regular blood donation camps in collaboration with local hospitals. The goal is to ensure a consistent supply of blood for patients in need, especially during emergencies. Volunteers and donors are encouraged to participate and help save lives.",
    keywords: ["blood donation", "health", "emergency", "volunteers", "hospitals"],
    users_donated: [
      { id: 135, amount: 140 },
      { id: 246, amount: 250 },
      { id: 357, amount: 360 },
      { id: 468, amount: 470 }
    ]
  }
];

const EventContribute = ({item}:any) => {
  const router=useRouter();
  return (
 <>
    <div
      className="overflow-x-hidden p-3 rounded-md flex flex-row gap-3 items-center"
      style={{
        border: "1px solid lightgrey",
        width: "600px",
      }}
    >
      <div style={{
        width:"400px",
        height:"180px",
        overflow:'hidden',
        borderRadius:'10px'
      }}>
        <Image
          src={item?.image}
          alt="Event"
          width={500}
          height={500}
          className="rounded-md w-120 col-start-1 col-end-6 "
        />
      </div>
      <div>
        <div className="flex flex-row gap-3">
          <div className="w-1 h-10 bg-black rounded-lg"></div>
          <h1 className="text-lg">
            {item?.title}
          </h1>
        </div>
        <div className="mt-2">
          <p className="font-sans text-base">
            <span className="font-semibold">Initiative : </span>
            {item?.short_description}
          </p>
          <p className="font-sans text-base text-right px-2">By John Doe</p>
        </div>
        <div className="w-full mt-4">
          <button
            className=" text-white font-sans font-normal py-2 px-4 rounded-md w-full text-base"
            style={{
              background: "#1c2326",
            }}
            onClick={()=>{
              router.push(`/initiatives/${item?.id}`)
            }}
          >
            Contribute
          </button>
        </div>
      </div>
    </div></>
  );
};
const EventSnapShotComp = () => {
  const router = useRouter();
  return (
    <div
      className="overflow-x-hidden p-3 rounded-md"
      style={{
        border: "1px solid lightgrey",
        width: "270px",
      }}
    >
      <Image
        src={
          "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_27f2ff8b-e8c9-4220-9529-d5b464be8342.webp"
        }
        alt="Event"
        width={500}
        height={500}
        className="rounded-md w-96 col-start-1 col-end-6 "
      />
      <div className="flex flex-row gap-3">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-lg">
          Artificial Intelligence and Machine Learning Webinar
        </h1>
      </div>
      <div className="mt-5">
        <p className="flex flex-row gap-1 items-center my-2">
          <MdOutlineDateRange size={20} /> 12th August 2021
        </p>
        <p className="flex flex-row gap-1 items-center my-2">
          <IoMdTime size={20} /> 10:00AM
        </p>
        <p className="flex flex-row gap-1 items-center my-2">
          <CiLocationOn size={20} /> Online
        </p>
      </div>
      <div className="w-full">
        <button
          className=" text-white font-sans font-normal py-2 px-4 rounded-md w-full text-base"
          style={{
            background: "black",
          }}
          onClick={() => {
            router.push("/events");
          }}
        >
          VIEW DETAIL
        </button>
      </div>
    </div>
  );
};
const ProjectContribute = () => {
  const router = useRouter();
  return (
    <div
      className="overflow-x-hidden p-3 rounded-md"
      style={{
        border: "1px solid lightgrey",
        width: "450px",
      }}
    >
      <div className="flex flex-row gap-3">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-lg">
          Artificial Intelligence and Machine Learning Webinar
        </h1>
      </div>
      <div className="my-5">
        <p>
          <span className="font-semibold">Short Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
          vulputate eu pharetra nec, mattis ac neque.
        </p>
      </div>
      <div className="w-full">
        <button
          className=" text-white font-sans font-normal py-2 px-4 rounded-md w-full text-base"
          style={{
            background: "#06394a",
          }}
          onClick={() => {
            router.push("/events");
          }}
        >
          VIEW DETAIL
        </button>
      </div>
    </div>
  );
};
const UpdateAlumniProfile = () =>{
  return (
    <div className="w-160 h-96 rounded-md bg-white fixed" style={{
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      boxShadow:"0 0 10px rgba(0,0,0,0.2)"
    }}> 

    </div>
  );
};
const Dashboard = () => {
  const router = useRouter();
  const {data:session}=useSession();
  return (
   <>
   <Nav/>
    <div className="w-256 mx-auto rounded-md my-5 relative p-3 py-5">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-xl">Dashboard</h1>
      </div>

      <div className="grid grid-cols-3 gap-3 my-2 mt-6">
        <button className="bg-gray-800 text-white items-center justify-center flex flex-row h-32 rounded-md" onClick={()=>{
          router.push('/reviews')
        }}>
          <p className="text-xl font-sans">Discuss</p>
        </button>
        <div className="bg-teal-800 text-white items-center justify-center flex flex-row h-32 rounded-md">
          <p className="text-xl font-sans">Communities</p>
        </div>
        <div className="bg-cyan-800 text-white items-center justify-center flex flex-row h-32 rounded-md">
          <button onClick={()=>{
          router.push('/mentorship')
        }}><p className="text-xl font-sans">Mentorship</p></button>
        </div>
      </div>

      <div className="my-3">
        <button className="flex flex-row justify-between w-full">
          <div>
            <p className="text-xl font-sans font-semibold">Events</p>
          </div>
          <div>
            <p className="text-base font-sans">View all</p>
          </div>
        </button>
        <div className="w-250 my-2 overflow-x-scroll scrollbar-hide">
          <div
            className="flex flex-row gap-2"
            style={{
              width: "1400px",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => {
              return <EventSnapShotComp />;
            })}
          </div>
        </div>
      </div>
      <div className="my-3">
        <button className="flex flex-row justify-between w-full">
          <div>
            <p className="text-xl font-sans font-semibold">Project Ideas</p>
          </div>
          <div>
            <p className="text-base font-sans">View all</p>
          </div>
        </button>
        <div className="w-250 my-2 overflow-x-scroll scrollbar-hide">
          <div
            className="flex flex-row gap-2"
            style={{
              width: "2200px",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => {
              return <ProjectContribute />;
            })}
          </div>
        </div>
      </div>
      <div className="my-3">
        <button className="flex flex-row justify-between w-full">
          <div>
            <p className="text-xl font-sans font-semibold">Initiatives</p>
          </div>
          <div>
            <p className="text-base font-sans">View all</p>
          </div>
        </button>
        <div className="w-250 my-2 overflow-x-scroll scrollbar-hide">
          <div
            className="flex flex-row gap-2"
            style={{
              width: "2400px",
            }}
          >
            {initiatives.map((item) => {
              return <EventContribute item={item}/>;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row h-60 justify-center items-center w-full overflow-hidden rounded-md relative">
        <Image
          src={
            "https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg"
          }
          alt="Team"
          width={1000}
          height={1000}
          className="rounded-md w-full col-start-1 col-end-6"
        />
        <div
          className="absolute w-140 items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p
            className="
          text-white font-sans font-bold py-2 px-4 rounded-md w-full text-2xl text-center
          "
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Donation for the cause of education for underprivileged children.
          </p>
          <button
            className=" text-white font-sans font-normal py-2 px-4 rounded-md text-base w-full"
            style={{
              background: "#1d3147",
            }}
            onClick={() => {
              router.push("/donateForGood");
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
    {/* <UpdateAlumniProfile/> */}
    </>
  );
};
export default Dashboard;
