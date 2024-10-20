import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2"; // Import SweetAlert2
import withReactContent from "sweetalert2-react-content"; // To use SweetAlert2 with React

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React

export default function Login({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

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
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then(() => {
        showSuccessToast("Login successful!"); // Show success toast on login
        setErrorMessage("");
        onClose(); // Close modal on successful login
      })
      .catch(() => {
        setErrorMessage("Provide a correct email and password!");
        showErrorToast("Login failed! Please check your credentials."); // Show error toast on failure
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signUpWithGmail()
      .then(() => {
        showSuccessToast("Google Login successful!"); // Show success toast on Google login
        setErrorMessage("");
        onClose(); // Close modal on successful login
      })
      .catch(() => {
        setErrorMessage("Google login failed! Try again.");
        showErrorToast("Google login failed! Please try again."); // Show error toast on failure
      });
  };

  if (!isOpen) return null; // Don't render modal if it's closed

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle " open={isOpen}>
        <div className="modal-box bg-black text-white border  ">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
              <h3 className="font-bold text-lg">Please Login!</h3>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`input input-bordered  bg-black ${errors.email ? "input-error" : ""}`}
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
                <input type="submit" value="Login" className="btn bg-black  hover:bg-[#FFCC33] hover:text-black text-white" />
              </div>

              <p className="text-center my-2">
                Don't have an account?{" "}
                <Link to="/signup" className="underline text-red ml-1 hover:text-[#FFCC33]">
                  Signup Now
                </Link>
              </p>

              {/* Close Modal Button */}
              <button
                onClick={onClose} // Use onClose prop to control modal
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* Social Sign-In */}
            <div className="text-center space-x-3 mb-5 " >
              <button onClick={handleGoogleSignIn} className="btn btn-circle w-64 bg-black text-white hover:bg-[#FFCC33] hover:text-black">
                <FontAwesomeIcon icon={faGoogle} />
                <p>Login with Google </p>
              </button>
              
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
