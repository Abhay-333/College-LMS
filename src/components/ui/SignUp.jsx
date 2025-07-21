import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Utils/UserContext";
import axios from "axios";

const SignUp = () => {
  const [userType, setUserType] = useState("faculty");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { serverUrl, getUserData } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      userName.trim() === ""
    ) {
      alert("Please fill in all required fields");
      return;
    }

    console.log(
      "Role:",
      userType,
      "Email:",
      email,
      "Username:",
      username,
      "Password:",
      password
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            >
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your mail"
              required
              //   pattern="^\d+$"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={async () => {
              await axios
                .post(
                  serverUrl + "/signup",
                  {
                    userType,
                    userName,
                    email,
                    password,
                  },
                  { withCredentials: true }
                )
                .then(async (e) => {
                  console.log(e);
                  await getUserData();
                })
                .catch((err) => {
                  console.log(err);
                });
              navigation("/");
            }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              navigation("/signIn");
            }}
          >
            SignIn
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
