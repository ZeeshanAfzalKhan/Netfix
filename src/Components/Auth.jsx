import { useState } from "react";
import { useNavigate } from "react-router";
import { validateSignIn, validateSignUp } from "../utils/validate";
import FloatingInput from "./FloatingInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { setUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSignIn = mode === "signin";
  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = { email, password, ...(isSignIn ? {} : { fullName }) };

    const errors = isSignIn
      ? validateSignIn(email, password)
      : validateSignUp(email, password, fullName);

    if (Object.keys(errors).length > 0) {
      console.log("Validation Errors:", errors);
      setErrors(errors);
      return;
    }

    if (isSignIn) {
      // Handle sign-in logic here

      signInWithEmailAndPassword(auth, authData?.email, authData?.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            setUser({ uid: uid, email: email, displayName: displayName })
          );
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      // Handle sign-up logic here

      createUserWithEmailAndPassword(auth, authData?.email, authData?.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: authData?.fullName,
          })
            .then(() => {
              const user = userCredential.user;
              const { uid, email, displayName } = user;
              dispatch(
                setUser({ uid: uid, email: email, displayName: displayName })
              );
              console.log(user);
            })
            .catch((error) => {
              console.log("Profile update error:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }

    setErrors({});

    setEmail("");
    setPassword("");
    setFullName("");
  };


  return (
    <div className='w-full h-[700px] flex justify-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg")] bg-cover'>
      <form
        onSubmit={handleSubmit}
        className="w-4/12 h-[500px] bg-black/85 flex flex-col p-8 mt-28 mx-auto rounded-sm"
      >
        <div className="text-white text-3xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        <FloatingInput
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          label={"Email or Mobile Number"}
        />

        {!isSignIn && (
          <FloatingInput
            type={"text"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
            label={"Full Name"}
          />
        )}

        <FloatingInput
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          label={"Password"}
        />

        <button className="bg-red-600 p-2 text-white rounded-sm font-semibold text-xl cursor-pointer hover:bg-red-700 transition-colors">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 mt-6">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => navigate(isSignIn ? "/signup" : "/login")}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
