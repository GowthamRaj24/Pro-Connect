import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeLoad, setChangeLoad] = useState(false);
  const [errmsg, setErrmsg] = useState({
    usernameerr: "",
    username_and_password_error: null,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setChangeLoad(true);
    try {
      const loginRes = await signIn("credentials", { email, password });
      if (loginRes && !loginRes.ok) {
        setChangeLoad(false);
        setErrmsg({
          usernameerr: "",
          username_and_password_error: (
            <p className="text-red-500 text-sm mt-2">
              <span>&#9888;</span> Email or Password Incorrect
            </p>
          ),
        });
      } else {
        // Redirect to homepage or dashboard
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setChangeLoad(false);
        setErrmsg({
          usernameerr: "",
          username_and_password_error: (
            <p className="text-red-500 text-sm mt-2">
              <span>&#9888;</span> Something went wrong!
            </p>
          ),
        });
      }
    }
  };

  if (session) {
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex flex-row gap-3 items-center my-2">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-xl">Log In</h1>
          </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grey-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grey-500"
              required
            />
          </div>
          {errmsg.username_and_password_error && (
            <p className="text-red-500 text-sm">
              {errmsg.username_and_password_error}
            </p>
          )}
          <button
            type="submit"
            className={`w-full py-2 text-white font-bold rounded-md ${
              changeLoad
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-grey-700 transition duration-300"
            }`}
            disabled={changeLoad}
          >
            {changeLoad ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-grey-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
