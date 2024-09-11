import Image from "next/image";
import { useState } from "react";
import { LuUsers } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci"
import { IoMdTime } from "react-icons/io";
import Nav from "@/components/Nav";
const data = [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ];
const Initiatives: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState("description");
  return (
   <>
   <Nav/>
    <div>
      <div
        className="w-256 mx-auto h-80 rounded-md  my-5 relative"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        <div className="w-full p-3  grid grid-cols-12">
          <Image
            src={
              "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_27f2ff8b-e8c9-4220-9529-d5b464be8342.webp"
            }
            alt="Event"
            width={500}
            height={500}
            className="rounded-md w-96 col-start-1 col-end-6 "
          />
          <div className="col-start-6 col-end-13">
            <div className="flex flex-row gap-3">
              <div className="w-1 h-10 bg-black rounded-lg"></div>
              <h1 className="text-2xl">
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
            <div className="grid grid-cols-2 gap-3">
              <div
                className="flex flex-row items-center gap-3 w-full rounded-md px-4"
                style={{
                  border: "lightgray 1px solid",
                }}
              >
                <LuUsers size={20} />
                <div>
                  <p className="text-sm">Users applied</p>
                  <p className="text-base font-bold">1001</p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-3 w-full rounded-md px-4 bg-black"
                style={{
                  border: "lightgray 1px solid",
                }}
              >
                <div className="flex flex-row items-center">
                  <IoShareSocialOutline color="white" size={20} />
                  <p className="text-white">Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-3 absolute right-0 bottom-0">
          <button
            className=" text-white font-bold py-2 px-4 rounded-md w-full"
            style={{
              background: "black",
            }}
            onClick={() => {
              console.log("Register button clicked");
            }}
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="w-256 mx-auto rounded-md my-5 relative p-3 py-5 flex flex-row gap-2"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        <div
          className="flex flex-row p-2 rounded-md gap-3 w-80 relative"
          style={{
            border: "lightgray 1px solid",
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
              className=" w-12 h-12 rounded-full col-start-1 col-end-6 "
            />
          </div>
          <div>
            <p className="text-lg">John Doe</p>
            <p className="text-sm">CEO, XYZ Company</p>
          </div>
          <div className="absolute top-3 right-3">
            <p>Host</p>
          </div>
        </div>
        <div
          className="flex flex-row p-2 rounded-md gap-3 w-80 relative"
          style={{
            border: "lightgray 1px solid",
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
              className=" w-12 h-12 rounded-full col-start-1 col-end-6 "
            />
          </div>
          <div>
            <p className="text-lg">John Doe</p>
            <p className="text-sm">CEO, XYZ Company</p>
          </div>
          <div className="absolute top-3 right-3">
            <p>Host</p>
          </div>
        </div>
      </div>
      <div
        className="w-256 mx-auto rounded-md my-5 relative p-3 py-5 flex flex-row gap-2"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        {currentEvent === "description" ? (
          <button onClick={() => setCurrentEvent("description")}>
            <p className="bg-gray-700  text-white p-1 px-4 rounded-lg">
              Description
            </p>
          </button>
        ) : (
          <button onClick={() => setCurrentEvent("description")}>
            <p className=" p-1 px-4 rounded-lg">Description</p>
          </button>
        )}
        {currentEvent === "datesAndDeadlines" ? (
          <button>
            <p className="bg-gray-700  text-white p-1 px-4 rounded-lg">
              Dates & Deadlines
            </p>
          </button>
        ) : (
          <button>
            <p className=" p-1 px-4 rounded-lg">Date & Deadlines</p>
          </button>
        )}
        {currentEvent === "faqs" ? (
          <button onClick={() => setCurrentEvent("faqs")}>
            <p className="bg-gray-700  text-white p-1 px-4 rounded-lg">FAQ'S</p>
          </button>
        ) : (
          <button onClick={() => setCurrentEvent("faqs")}>
            <p className=" p-1 px-4 rounded-lg">FAQ's</p>
          </button>
        )}
      </div>
      {currentEvent === "description" && (
        <div
          className="w-256 mx-auto rounded-md my-5 relative p-3 py-5"
          style={{
            boxShadow: "0px 0px 15px lightgrey",
          }}
        >
          <div className="flex flex-row gap-3">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-xl">Description</h1>
          </div>
          <p className="my-4">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
        </div>
      )}
      {currentEvent==="faqs" && (
           <div
           className="w-256 mx-auto rounded-md my-5 relative p-3 py-5"
           style={{
             boxShadow: "0px 0px 15px lightgrey",
           }}
         >
           <div className="flex flex-row gap-3">
             <div className="w-1 h-10 bg-black rounded-lg"></div>
             <h1 className="text-xl">FAQ's</h1>
           </div>
           <div className="mx-4">
            {
              data?.map((item)=>{
                return (<div>
                  <p className="text-lg font-medium font-sans">{item.title}</p>
                  <p className="mb-4">{item.content}</p>
                </div>);
              })
            }
           </div>
         </div>
      )}
      <div
        className="w-256 mx-auto rounded-md my-5 relative p-3 py-5"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        <div className="flex flex-row gap-3">
          <div className="w-1 h-10 bg-black rounded-lg"></div>
          <h1 className="text-xl">Event summary</h1>
        </div>
        <p className="my-4">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        </p>
      </div>
    </div></>
  );
};
export default Initiatives;
