import Image from "next/image";
import { LuUsers } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
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
const EventContribute = () => {
  return (
 <>
    <div
      className="overflow-x-hidden p-3 rounded-md flex flex-row gap-3 items-center"
      style={{
        border: "1px solid lightgrey",
        width: "600px",
      }}
    >
      <div>
        <Image
          src={
            "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_27f2ff8b-e8c9-4220-9529-d5b464be8342.webp"
          }
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
            Artificial Intelligence and Machine Learning Webinar
          </h1>
        </div>
        <div className="mt-2">
          <p className="font-sans text-base">
            <span className="font-semibold">Initiative : </span>
            Education for all women in India
          </p>
          <p className="font-sans text-base text-right px-2">By John Doe</p>
        </div>
        <div className="w-full">
          <button
            className=" text-white font-sans font-normal py-2 px-4 rounded-md w-full text-base"
            style={{
              background: "#1c2326",
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
              width: "3000px",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => {
              return <EventContribute />;
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
    <UpdateAlumniProfile/>
    </>
  );
};
export default Dashboard;
