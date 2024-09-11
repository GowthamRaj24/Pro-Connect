import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Signup = () => {
  const [changeLoad, setChangeLoad] = useState(false);
  const router = useRouter();
  const [showpass, setShowpass] = useState("password");
  const [redirection_login, setRedirection_login]: any = useState("");
  const [responseerr, setResponseerr]: any = useState({
    emailerr: "",
    passerr: "",
  });
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handlechange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const redirect_now = () => {
    router.push("/login");
  };

  const userSubmit = async (e: any) => {
    e.preventDefault();
    if (user.password.length < 8) {
      setResponseerr({
        passerr: (
          <p className="text-red-500 text-sm mt-1">
            <span>&#9888;</span> Password should contain at least 8 characters
          </p>
        ),
      });
      return;
    }
    setChangeLoad(true);
    await axios
      .post("../api/User", user)
      .then((res) => {
        setRedirection_login(
          <div className="text-center mt-4">
            <p className="text-green-500">
              Your account has been created successfully!
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded-md mt-4"
              onClick={redirect_now}
            >
              Next →
            </button>
          </div>
        );
        setChangeLoad(false);
      })
      .catch((err) => {
        let errresponse = err.response.data;
        if (errresponse === "emailerror") {
          setResponseerr({
            emailerr: (
              <p className="text-red-500 text-sm mt-1">
                <span>&#9888;</span> Email already exists!
              </p>
            ),
          });
        } else {
          setResponseerr({
            emailerr: (
              <p className="text-red-500 text-sm mt-1">
                <span>&#9888;</span> Something went wrong!
              </p>
            ),
          });
        }
      });
  };

  return (
    <>
      <NextSeo title="Signup" nofollow={true} noindex={true} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={userSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="flex flex-row gap-3 items-center my-2">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-xl">Sign up</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="e.g. Ravi"
              value={user.firstname}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="e.g. Kumar"
              value={user.lastname}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. Ravikumar@gmail.com"
              value={user.email}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {responseerr.emailerr && (
              <p className="text-red-500 text-sm mt-1">
                {responseerr.emailerr}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type={showpass}
              name="password"
              placeholder="e.g. Ravi@1456"
              value={user.password}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {responseerr.passerr && (
              <p className="text-red-500 text-sm mt-1">{responseerr.passerr}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              onChange={() =>
                setShowpass(showpass === "password" ? "text" : "password")
              }
              className="mr-2"
            />
            <label>Show password</label>
          </div>
          <button
            type="submit"
            className="bg-black w-full text-white py-2 rounded-md hover:bg-grey-700 transition duration-300"
            disabled={changeLoad}
          >
            {changeLoad ? "Loading..." : "Submit"}
          </button>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-grey-500 hover:underline">
              Log in
            </Link>
          </p>
          {redirection_login}
        </form>
      </div>
    </>
  );
};

export default Signup;
