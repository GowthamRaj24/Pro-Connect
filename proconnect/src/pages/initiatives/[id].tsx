import Image from "next/image";
import { useState } from "react";
import { LuUsers } from "react-icons/lu";
import { IoClose, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import { initiatives } from "../dashboard";
const ThankForDonation = ({ setThanks }: any) => {
  return (
    <div
      className="w-140 h-44 rounded-md overflow-hidden fixed grid grid-cols-2 bg-white items-center"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 100px lightgrey",
      }}
    >
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          setThanks(false);
        }}
      >
        <IoClose size={20} />
      </button>
      <div className="overflow-hidden" style={{}}>
        <Image
          src={
            "https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg"
          }
          width={1920}
          height={1580}
          alt="Donate for Good"
        />
      </div>
      <div className="p-3 items-center">
        <p className="text-center text-lg">Thank You!</p>
        <p className="text-center text-base">For your donation</p>
      </div>
    </div>
  );
};

const DonateMoney = ({ setDonate, setThanks,data }: any) => {
  const [amount, setAmount] = useState(0);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify(150),
    }).then((t) => t.json());
    var options = {
      key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      name: "ProConnect",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIrj4ZEWpoXTr2wyFJ9DnAvHHA_JfRCeG_Q&`,
      handler: function (response: any) {
        // // Validate payment at server - using webhooks is a better idea. // alert(response.razorpay_payment_id);  // alert(response.razorpay_order_id);  // alert(response.razorpay_signature);
        if (response.razorpay_payment_id) {
          setDonate(false);
          console.log("Donated");
          setThanks(true);
        } else {
          alert("Failed");
          console.log("Payment failed");
        }
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
   <>
    <div
      className="w-96 rounded-md overflow-hidden fixed bg-white"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 100px lightgrey",
      }}
    >
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          setDonate(false);
        }}
      >
        <IoClose size={20} />
      </button>
      <div className="overflow-hidden" style={{
        height:'200px'
      }}>
        <Image
          src={
            data?.image
          }
          width={1920}
          height={1580}
          alt="Donate for Good"
        />
      </div>
      <div className="p-5 my-6">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-xl">{data?.title}</h1>
      </div>
        <div className="flex flex-col mt-4">
          <p>Amount</p>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            style={{
              border: "1px solid lightgrey",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "20px",
              outline: "none",
            
            }}
            onChange={(e: any) => {
              setAmount(e.target.value);
            }}
          />
          <button
            className="bg-black text-white p-2 rounded-md"
            style={{
              boxShadow: "0px 0px 15px lightgrey",
            }}
            onClick={() => {
              makePayment();
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div></>
  );
};
const Initiatives: React.FC = () => {
  const [donate, setDonate] = useState(false);
  const [thanks, setThanks] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null; // or handle this case appropriately
  }
  const data = initiatives.filter((item) => {
    return item.id.toString() === id;
  })[0];
  console.log(data);
  const [currentEvent, setCurrentEvent] = useState("description");
  return (
    <>
      <Nav />
      <div>
        <div
          className="w-256 mx-auto h-80 rounded-md  my-5 relative"
          style={{
            boxShadow: "0px 0px 15px lightgrey",
          }}
        >
          <div className="w-full p-3  grid grid-cols-12">
            <Image
              src={data?.image}
              alt="Event"
              width={500}
              height={500}
              className="rounded-md w-96 col-start-1 col-end-6 "
            />
            <div className="col-start-6 col-end-13">
              <div className="flex flex-row gap-3">
                <div className="w-1 h-10 bg-black rounded-lg"></div>
                <h1 className="text-2xl">{data?.title}</h1>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div
                  className="flex flex-row items-center gap-3 w-full rounded-md px-4"
                  style={{
                    border: "lightgray 1px solid",
                  }}
                >
                  <LuUsers size={20} />
                  <div>
                    <p className="text-sm">People donated</p>
                    <p className="text-base font-bold">
                      {data?.users_donated?.length}
                    </p>
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
              <p className="mt-3">Initiative : {data?.short_description}</p>
              <div className="flex flex-row flex-wrap gap-3 mt-3">
                {data?.keywords.map((keyword) => {
                  return (
                    <p className="px-5 py-2  bg-gray-200 rounded-md text-sm">
                      {keyword}
                    </p>
                  );
                })}
              </div>
              <div className="w-full mt-3">
                <button
                  className=" text-white font-bold py-2 px-4 rounded-md w-full"
                  style={{
                    background: "black",
                  }}
                  onClick={() => setDonate(true)}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-256 mx-auto rounded-md my-5 relative p-3 py-5 flex flex-row gap-2"
          style={{
            boxShadow: "0px 0px 15px lightgrey",
          }}
        >
          {data?.users_donated?.map((item) => {
            return (
              <div
                className="flex flex-row p-2 rounded-md gap-3 w-80 relative"
                style={{
                  border: "lightgray 1px solid",
                }}
              >
                <div>
                  <Image
                    src={`https://picsum.photos/300/${Math.round(
                      Math.random() * 100
                    )}`}
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
                  <p className="text-green-800 font-bold font-sans">$ {item?.amount}</p>
                </div>
              </div>
            );
          })}
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
            <p className="my-4">{data?.long_description}</p>
          </div>
        )}
      </div>
      {donate && <DonateMoney setDonate={setDonate} setThanks={setThanks} data={data} />}
      {thanks && <ThankForDonation setThanks={setThanks} />}
    </>
  );
};
export default Initiatives;
