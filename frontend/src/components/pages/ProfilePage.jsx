import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from "sweetalert2"; // Import SweetAlert2
import withReactContent from "sweetalert2-react-content"; // To use SweetAlert2 with React

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React

function ProfilePage({ panelOpen, togglePanel, handleUpdateProfile, handleSettings }) {
  const { logOut } = useContext(AuthContext);

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

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful, hide the panel after logout
        showSuccessToast("Logged out successfully!"); // Show success toast
        togglePanel(); // Close the profile panel after logout
      })
      .catch((error) => {
        console.error('An error happened during logout:', error);
        showErrorToast("Logout failed! Please try again."); // Show error toast
      });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-60 backdrop-blur-md shadow-lg transform ${
        panelOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Profile Box */}
      <div className="p-4 flex justify-between items-center border-b border-gray-600">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white mr-2">Profile</h2> {/* Increased text size */}
        </div>
        <button 
          onClick={togglePanel} 
          className="text-gray-300 hover:text-white text-2xl" // Increased button size
        >
          &times; {/* Close button */}
        </button>
      </div>

      <div className="p-4">
        <button
          onClick={handleUpdateProfile}
          className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
        >
          Update Profile
        </button>
        <button
          onClick={handleSettings}
          className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
        >
          Settings
        </button>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;