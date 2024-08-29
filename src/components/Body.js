import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
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
      } else {
        dispatch(removeUser(null));
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <div></div>
      </RouterProvider>
    </div>
  );
};

export default Body;
