import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Login from "../login/Login";
import { AuthContext } from "../../contexts/AuthProvider";
import ProfilePage from "../pages/ProfilePage";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for Login visibility
  const [sticky, setSticky] = useState(false); // Sticky header state
  const [panelOpen, setPanelOpen] = useState(false); // State for the profile panel
  const { user, logout } = useContext(AuthContext); // Get user and logout function from AuthContext
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle the menu
  const togglePanel = () => setPanelOpen(!panelOpen); // Toggle the profile panel visibility

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultProfileImage = "/Profile_img.jpg";

  return (
    <header className={`${sticky ? "sticky top-0" : ""} z-50 shadow text-white`}>
      {/* Full-width background div */}
      <div className="bg-black">
        <nav className="mx-auto py-3" style={{ maxWidth: "1795px", width: "100%" }}>
          <div className="flex flex-wrap justify-between items-center px-4 md:px-12 lg:px-20 xl:px-32">
            {/* Logo */}
            <div className={`${menuOpen ? "hidden" : "flex"} lg:flex`}>
              <Link to="/" className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1496989981497-27d69cdad83e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2lyY2xlfGVufDB8fDB8fHww"
                  alt="Restfood Logo"
                  className="w-10 h-10"
                />
                <h1 className="text-white font-bold text-lg ml-2">GOOD FOOD</h1>
              </Link>
            </div>

            {/* Hamburger menu for small screens */}
            <button className="text-white lg:hidden block focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )}
            </button>

            {/* Menu links and login button */}
            <div className={`flex items-center justify-end w-full lg:w-auto lg:flex-grow space-x-2 ${menuOpen ? "block" : "hidden"} lg:flex`}>
              <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-4 lg:mt-0 items-center">
                <li>
                  <NavLink to="/" className="hover:text-yellow-500 px-2 py-2">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-yellow-500 px-2 py-2">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/menu" className="hover:text-yellow-500 px-2 py-2">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-yellow-500 px-2 py-2">Contact Us</NavLink>
                </li>
                <li>
                  {user ? (
                    <div className="relative flex items-center cursor-pointer" onClick={togglePanel}>
                      <div className="flex items-center space-x-2">
                        <div className="border-2 border-yellow-300 rounded-full p-1">
                          {user.photoURL ? (
                            <img src={user.photoURL} alt="User Profile" className="w-8 h-8 rounded-full" />
                          ) : (
                            <img src={defaultProfileImage} alt="Default Profile" className="w-8 h-8 rounded-full" />
                          )}
                        </div>
                        <span className="text-sm lg:text-base text-white">{user.displayName}</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="hover:text-yellow-500 px-4 py-2 flex items-center"
                      onClick={() => setIsLoginOpen(true)}
                    >
                      <FontAwesomeIcon icon={faUser} className="text-white hover:text-yellow-500 mr-2" />
                      <span className="hidden lg:block">Login</span>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* ProfilePage component */}
      <ProfilePage
        panelOpen={panelOpen}
        togglePanel={togglePanel}
        handleUpdateProfile={() => console.log("Update Profile clicked")}
        handleSettings={() => console.log("Settings clicked")}
      />

      {/* Login Component */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}

export default Header;
