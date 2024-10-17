import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';



//this is the yellow bar which will be showing the address and timing in the starting

function ToggleBar() {
    return (
        // This div is conditionally rendered based on screen size
        <div className="bg-[#FFCC33] text-black text-sm py-2 hidden md:flex md:px-12 lg:px-20 xl:px-32">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: Social Media Icons */}
                <div className="flex space-x-3">
                    <Link to="#" className="hover:text-red-500">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link to="#" className="hover:text-red-500">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to="#" className="hover:text-red-500">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to="#" className="hover:text-red-500">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                    <Link to="#" className="hover:text-red-500">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>

                {/* Right Section: Contact Info */}
                <div className="flex space-x-6 items-center">
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Friday Closed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Barra Bypass, Barra, Kanpur</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+1 964 565 87652</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img src="https://img.icons8.com/color/48/000000/india.png" alt="Flag" className="w-5 h-5" />
                        <span>India</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToggleBar;
