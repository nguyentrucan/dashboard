import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { overrideStyle } from "../../utils/utils";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex items-center justify-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="http://localhost:5173/images/logo.png"
                alt="image"
              />
            </div>
          </div>
          {/* Form login admin */}
          <form onSubmit={submit}>
            {/* Input Email */}
            <div className="w-full flex flex-col gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                type="email"
                className="px-3 py-2 bg-transparent border rounded-md p-1 outline-none border-slate-400"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
            {/* Input Password */}
            <div className="w-full flex flex-col gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                type="password"
                className="px-3 py-2 bg-transparent border rounded-md p-1 outline-none border-slate-400"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
            </div>
            {/* Button Login */}
            <button
              disabled={loader ? true : false}
              className="w-full bg-slate-800 px-7 py-2 rounded-md hover:shadow-blue-300/25 hover:shadow-lg text-white mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
