import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className='w-full h-[150vh] flex justify-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg")] bg-cover'>
      <form className="w-4/12 h-6/12 bg-black/85 flex flex-col p-8 mt-28 mx-auto rounded-sm">
        <div className="text-white text-3xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Email or Mobile number"
            className="peer w-full p-4 text-white bg-transparent rounded-sm ring-1 ring-gray-50 focus:ring-2 focus:ring-gray-200 placeholder-transparent focus:outline-none mb-6"
          />
          <label
            htmlFor="email"
            className="absolute pointer-events-none left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
          >
            Email or Mobile number
          </label>
        </div>

        {
          !isSignIn && (
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="peer w-full p-4 text-white bg-transparent rounded-sm ring-1 ring-gray-50 focus:ring-2 focus:ring-gray-200 placeholder-transparent focus:outline-none mb-6" />
              <label
                htmlFor="fullname"
                className="absolute pointer-events-none left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Full Name
              </label>
            </div>
          )
        }

        <div className="relative w-full">
          <input
            type="password"
            placeholder="Password"
            className="peer w-full p-4 text-white bg-transparent rounded-sm ring-1 ring-gray-50 focus:ring-2 focus:ring-gray-200 placeholder-transparent focus:outline-none mb-6"
          />
          <label
            htmlFor="password"
            className="absolute pointer-events-none left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
          >
            Password
          </label>
        </div>
        {

        }
        <button className="bg-red-600 p-2 text-white rounded-sm font-semibold text-xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 mt-6">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
