import React, { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { validateBoth } from "../utils/validate";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const checkvalidation = () => {
    const message = validateBoth(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { displayName, photoURL, email } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                  phoneNumber: "",
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
          alt="background-image"
        />
      </div>
      <div className="flex justify-center align-middle">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative w-3/12 bg-black p-12  text-white bg-opacity-80"
        >
          <h1 className="text-3xl p-2 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 w-full bg-gray-500 rounded-lg "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="email"
            className="p-2 m-2 w-full bg-gray-500 rounded-lg "
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-2 m-2 w-full bg-gray-500 rounded-lg "
          />
          {errorMessage && (
            <p className="text-red-500 font-bold">{errorMessage}</p>
          )}
          <button
            type="submit"
            onClick={() => checkvalidation()}
            className="bg-red-500 text-white text-center p-2 m-2 w-full rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h4
            className="p-2 m-2 cursor-pointer"
            onClick={() => toggleSignInForm()}
          >
            {isSignInForm
              ? "New To Netflix? Sign Up"
              : "Already Register?Please Sign in"}
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
