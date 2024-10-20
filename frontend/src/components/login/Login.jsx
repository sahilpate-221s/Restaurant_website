import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function AuthModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Use navigate hook

  // Show success toast
  const showSuccessToast = (message) => {
    MySwal.fire({
      toast: true,
      icon: "success",
      title: message,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  // Show error toast
  const showErrorToast = (message) => {
    MySwal.fire({
      toast: true,
      icon: "error",
      title: message,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const onSubmitLogin = (data) => {
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then(() => {
        showSuccessToast("Login successful!");
        setErrorMessage("");
        onClose(); // Close the modal
        navigate("/"); // Navigate to home page
      })
      .catch(() => {
        setErrorMessage("Provide a correct email and password!");
        showErrorToast("Login failed! Please check your credentials.");
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signUpWithGmail()
      .then(() => {
        showSuccessToast("Google Login successful!");
        setErrorMessage("");
        onClose(); // Close the modal
        navigate("/"); // Navigate to home page
      })
      .catch(() => {
        setErrorMessage("Google login failed! Try again.");
        showErrorToast("Google login failed! Please try again.");
      });
  };

  if (!isOpen) return null;

  return (
    <>
      <dialog id="auth_modal" className="modal modal-middle sm:modal-middle" open={isOpen}>
        <div className="modal-box bg-black text-white border">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form onSubmit={handleSubmit(onSubmitLogin)} className="card-body" method="dialog">
              <h3 className="font-bold text-lg">Please Login!</h3>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`input input-bordered bg-black ${errors.email ? "input-error" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                  })}
                />
                {errors.email && <p className="text-red text-xs italic">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`input input-bordered bg-black ${errors.password ? "input-error" : ""}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                />
                {errors.password && <p className="text-red text-xs italic">{errors.password.message}</p>}
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {errorMessage && <p className="text-red text-xs italic">{errorMessage}</p>}

              {/* Login Button */}
              <div className="form-control mt-4 border rounded-lg">
                <input type="submit" value="Login" className="btn bg-black hover:bg-[#FFCC33] hover:text-black text-white" />
              </div>

              <p className="text-center my-2">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose(); // Close modal
                    navigate("/signup"); // Navigate to the signup route
                  }}
                  className="underline text-red ml-1 hover:text-[#FFCC33]"
                >
                  Signup Now
                </button>
              </p>

              {/* Close Modal Button */}
              <button
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* Social Sign-In */}
            <div className="text-center space-x-3 mb-5">
              <button onClick={handleGoogleSignIn} className="btn btn-circle w-64 bg-black text-white hover:bg-[#FFCC33] hover:text-black">
                <FontAwesomeIcon icon={faGoogle} />
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
