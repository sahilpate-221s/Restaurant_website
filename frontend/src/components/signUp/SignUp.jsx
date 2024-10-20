import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2"; // Import SweetAlert2
import withReactContent from "sweetalert2-react-content"; // To use SweetAlert2 with React

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, signUpWithGmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal

  // Show success toast
  const showSuccessToast = (message) => {
    MySwal.fire({
      toast: true, // Enable toast
      icon: "success",
      title: message,
      position: "top-end", // Position at top-end
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  // Show error toast
  const showErrorToast = (message) => {
    MySwal.fire({
      toast: true, // Enable toast
      icon: "error",
      title: message,
      position: "top-end", // Position at top-end
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const onSubmit = (data) => {
    const { email, password, username } = data;
    setErrorMessage(""); // Reset error before new submission

    createUser(email, password)
      .then((result) => {
        // Update user profile with username
        return updateUserProfile(username);
      })
      .then(() => {
        showSuccessToast("Account creation successfully done!"); // Show success toast
        setIsModalOpen(false); // Close modal on success
        navigate(from, { replace: true }); // Navigate to the intended route
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage); // Show error message
        showErrorToast(errorMessage); // Show error toast
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signUpWithGmail()
      .then((result) => {
        showSuccessToast("Google Login successful!"); // Show success toast
        setErrorMessage("");
        setIsModalOpen(false); // Close modal on successful sign-in
        navigate(from, { replace: true }); // Navigate to the intended route
      })
      .catch((error) => {
        setErrorMessage("Google login failed! Try again.");
        showErrorToast("Google login failed! Please try again."); // Show error toast
      });
  };

  if (!isModalOpen) return null; // Don't render modal if it's closed

  return (
    <dialog id="signup_modal" className="modal modal-middle sm:modal-middle" open={isModalOpen}>
      <div className="modal-box bg-black text-white border">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Create an Account</h3>

            {/* Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className={`input input-bordered bg-black ${errors.username ? "input-error" : ""}`}
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red text-xs italic">{errors.username.message}</p>}
            </div>

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
                <span className="label-text">Password</span>
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
            </div>

            {/* Display error message */}
            {errorMessage && <p className="text-red text-xs italic">{errorMessage}</p>}

            {/* Signup Button */}
            <div className="form-control mt-4 border rounded-lg">
              <input type="submit" value="Signup" className="btn bg-black hover:bg-[#FFCC33] hover:text-black text-white" />
            </div>

            <p className="text-center my-2">
              Already have an account?{" "}
              <button
                className="underline text-red ml-1 text-[#FFCC33]"
                onClick={() => {
                  setIsModalOpen(false); // Close current modal
                  navigate("/login"); // Navigate to the login route
                }}
              >
                Login
              </button>
            </p>

            {/* Close Modal Button */}
            <button
              onClick={() => {
                setIsModalOpen(false); // Close the modal
                navigate("/"); // Navigate to the home page
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* Social Sign In */}
          <div className="text-center space-x-3 mb-5">
            <button onClick={handleGoogleSignIn} className="btn btn-circle w-64 bg-black text-white hover:bg-[#FFCC33] hover:text-black">
              <FontAwesomeIcon icon={faGoogle} />
              <p>Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
