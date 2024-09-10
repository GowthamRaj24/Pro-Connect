import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
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
    password: ""
  });

  const handlechange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const redirect_now = () => {
    router.push({
      pathname: "/login",
    });
  };
  const userSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user);
    if (user.password.length < 8) {
      setResponseerr({
        passerr: (
          <p>
            <span>&#9888;</span>Password should contain atleast 8 characters{" "}
          </p>
        ),
      });
      return;
    }
    setChangeLoad(true);
    await axios
      .post("../api/User", user)
      .then((res) => {
        console.log(res.data.token);
        setRedirection_login(
          <div >
            <div >

              <p>Your account has been created successfully!</p>
              <button onClick={redirect_now}>Next →</button>
            </div>
          </div>
        );
        setChangeLoad(false);
      })
      .catch((err) => {
        let errresponse = err.response.data;
        if (errresponse === "emailerror") {
          setResponseerr({
            emailerr: (
              <p>
                <span>&#9888;</span>Email already exist!{" "}
              </p>
            ),
          });
        }
        else{
          setResponseerr({
            emailerr: (
              <p>
                <span>&#9888;</span>Something gone wrong!{" "}
              </p>
            ),
          });
        }
      })
  };
  return (
    <>
    <NextSeo
      title="Signup"
      nofollow={true}
      noindex={true}
    />
      <form  onSubmit={userSubmit}>
        <h3>CREATE ACCOUNT</h3>
        <p>First Name</p>
        <input
          type="text"
          name="firstname"
          placeholder="eg. Ravi"
          value={user.firstname}
          onChange={handlechange}
          required
        />
        <p>Last Name</p>
        <input
          type="text"
          name="lastname"
          placeholder="eg. Kumar"
          value={user.lastname}
          onChange={handlechange}
          required
        />
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="eg. Ravikumar@gmail.com"
          value={user.email}
          onChange={handlechange}
          required
        />
        <p className="responseerr">{responseerr.emailerr}</p>
        <p>Password</p>
        <input
          type={`${showpass}`}
          name="password"
          placeholder="eg. Ravi@1456"
          value={user.password}
          onChange={handlechange}
          required
        />
        <p className="responseerr">{responseerr.passerr}</p>
        <div >
          <input
            type="checkbox"
            onChange={() => {
              if (showpass == "password") {
                setShowpass("text");
              } else {
                setShowpass("password");
              }
            }}
          />
          <p>Show password</p>
        </div>
        <button type="submit">
          {changeLoad ? (
            <></>
          ) : (
            <>Submit</>
          )}
        </button>
        <p >
          Already have an account ? <Link href="/login">Log in</Link>
        </p>
      </form>
      {redirection_login}
    </>
  );
};
export default Signup;
