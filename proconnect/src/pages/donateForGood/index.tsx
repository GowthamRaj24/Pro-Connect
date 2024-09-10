import Image from "next/image";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const LeaderboardComp = () => {
  return (
    <div
      className="flex flex-row gap-3 p-2 w-72 rounded-md"
      style={{
        border: "1px solid lightgrey",
      }}
    >
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2CNpBwzHxcljl-ZBhjhsJzVJDoxF7BqaZQ&s"
        }
        width={100}
        height={100}
        objectFit="cover"
        alt="Donate for Good"
        className="rounded-full w-12 h-12"
      />
      <div>
        <p>John Doe</p>
        <p>Donated $100</p>
      </div>
    </div>
  );
};

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
      <div className="p-3">
        <p>Thanks for your donation</p>
      </div>
    </div>
  );
};

const DonateMoney = ({ setDonate, setThanks }: any) => {
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
    <div
      className="w-140 h-44 rounded-md overflow-hidden fixed grid grid-cols-2 bg-white"
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
      <div className="p-3">
        <p className="text-xl">Donate for Good</p>
        <div className="flex flex-col mt-4">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            style={{
              border: "1px solid lightgrey",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "10px",
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
    </div>
  );
};

const DonateForGood = () => {
  const [donate, setDonate] = useState(false);
  const [thanks, setThanks] = useState(false);
  return (
    <div className="w-256 mx-auto">
      <div className="w-full h-72 overflow-hidden flex flex-row items-center justify-center rounded-md relative my-3">
        <Image
          src={
            "https://www.immihelp.com/assets/cms/doing-charity-the-american-way-a-how-to-guide-1.jpg"
          }
          width={1920}
          height={1580}
          objectFit="cover"
          alt="Donate for Good"
        />
        <p
          className="absolute text-4xl font-semibold"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          DONATE FOR GOOD
        </p>
      </div>
      <div
        className="w-256 mx-auto rounded-md my-5 relative p-3 py-5 flex flex-row gap-2"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        <div className="">
          <div className="flex flex-row gap-3 items-center my-3">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-lg font-sans">Donation for ?</h1>
          </div>
          <div className="grid grid-cols-2 h-40 gap-2">
            <div className="flex flex-row items-center gap-3 bg-gray-200 h-16 p-3 rounded-md">
              <MdLibraryBooks size={30} />
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-10 bg-black rounded-lg"></div>
                <h1 className="text-lg font-sans">
                  Student book donation camps
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 bg-gray-200 h-16 p-3 rounded-md">
              <MdOutlineBloodtype size={30} />
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-10 bg-black rounded-lg"></div>
                <h1 className="text-lg font-sans">
                  Student blood donation camp
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 bg-gray-200 h-16 p-3 rounded-md">
              <RiFunctionLine size={30} />
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-10 bg-black rounded-lg"></div>
                <h1 className="text-lg font-sans">
                  Access to paid digital learning resources
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 bg-gray-200 h-16 p-3 rounded-md">
              <GiSkills size={30} />
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-10 bg-black rounded-lg"></div>
                <h1 className="text-lg font-sans">
                  Paid skill development certications
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-3 items-center my-3">
              <div className="w-1 h-10 bg-black rounded-lg"></div>
              <h1 className="text-lg font-sans">Details</h1>
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-sans font-semibold my-2">Leaderboard</p>
          <div className="h-72 overflow-y-scroll no-scrollbar gap-y-2 flex flex-col">
            {[0, 1, 2, 3, 4].map((item, key) => {
              return <LeaderboardComp />;
            })}
          </div>
          <button
            className="w-full bg-black py-3 my-3 text-white p-2 rounded-md"
            style={{
              boxShadow: "0px 0px 15px lightgrey",
            }}
            onClick={() => setDonate(true)}
          >
            Donate
          </button>
        </div>
      </div>
      {donate && <DonateMoney setDonate={setDonate} setThanks={setThanks}/>}
      {thanks && <ThankForDonation setThanks={setThanks} />}
    </div>
  );
};
export default DonateForGood;
