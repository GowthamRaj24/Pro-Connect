import Nav from "@/components/Nav";
import Image from "next/image";

const MentorCard = () => {
  return (
    <div
      className="w-60 h-80 rounded-md bg-white"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Image
          alt="i"
          src={
            `https://picsum.photos/200/300`
          }
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-full w-48 h-48 m-4"
        />
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
          <div className="flex flex-row gap-2">
            {[0, 1, 2, 3].map(() => {
              return <MentorCard />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default MentorShip;
