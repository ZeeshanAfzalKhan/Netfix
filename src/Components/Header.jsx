import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { clearUser, setUser } from "../Redux/userSlice";

const Header = () => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(clearUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div className="absolute px-16 pt-8 bg-gradient-to-b from-black w-full flex justify-between items-center p-4 z-50">
      <div className="w-48 h-20 cursor-pointer" onClick={() => naviagate("/")}>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <div className="text-white font-semibold">{user?.displayName}</div> 
            <button
              className="bg-red-600 text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition-colors"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            className="bg-red-600 text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition-colors"
            onClick={() => naviagate("/login")}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
