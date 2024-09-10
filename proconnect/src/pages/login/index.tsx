import { useState } from "react";
import { loginUser } from "../../../helpers";
import { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const session=useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeLoad, setChangeLoad] = useState(false);
  const [errmsg, setErrmsg] = useState({
    usernameerr: "",
    username_and_password_error: null,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const loginRes = await signIn("credentials",{ email, password });
      if (loginRes && !loginRes.ok) {
        setChangeLoad(false);
        setErrmsg({
          usernameerr: "",
          username_and_password_error: (
            <p>
              <span>&#9888;</span>
              {`${" " + "Email or Password Incorrect"}`}
            </p>
          ),
        });
      } else {
        // router.push("/");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setChangeLoad(false);
        const errorMsg = err.response?.data?.error;
        setErrmsg({
          usernameerr: "",
          username_and_password_error: (
            <p>
              <span>&#9888;</span>
              {`${" " + "Something went wrong!"}`}
            </p>
          ),
        });
      }
    }
  };
  if(session.data){
    console.log(session.data)
    return <div>
      <h1>You are already logged in</h1>
    </div>
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
