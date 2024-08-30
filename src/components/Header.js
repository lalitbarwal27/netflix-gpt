import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, phoneNumber } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            phoneNumber: phoneNumber,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img src={LOGO_URL} alt="logo" className="w-44 " />
      {user && (
        <div className="text-white">
          <p>{user.displayName}</p>
          <button onClick={() => signOutUser()}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
