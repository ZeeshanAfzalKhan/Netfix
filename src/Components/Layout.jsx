import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // const User = useSelector((state) => state.user.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/browse");
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (!User) {
  //     navigate("/login");
  //   } else {
  //     navigate("/browse");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [User]);
    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
