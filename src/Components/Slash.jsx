import React from "react";

const Slash = () => {
  return (
    <div className='w-full h-[150vh] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg")] bg-cover flex justify-center items-center '>
      <div className="w-full h-full bg-black/70 flex justify-center mt-40">
        <div className="w-6/12 h-6/12  flex flex-col justify-center items-center text-center px-4">
          <div className="text-white text-5xl font-extrabold mb-6">
            Unlimited movies, TV shows and more.
          </div>
          <div className="text-white text-2xl mb-6">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="text-white text-xl mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                id="email"
                placeholder=" "
                className="peer p-4 w-80 text-white bg-transparent rounded-sm ring-1 ring-gray-50 
                 focus:ring-2 focus:ring-gray-200 focus:outline-none placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute pointer-events-none left-4 top-4 text-gray-400 transition-all
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Email address
              </label>
            </div>

            <button className="bg-red-600 text-white px-6 py-3 text-xl font-semibold rounded-sm ml-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slash;
