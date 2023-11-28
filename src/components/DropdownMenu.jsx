import React, { useState, useEffect, useRef } from "react";
import "../css/dropdown.css";
import { HiOutlineSpeakerphone, HiOutlineChartBar } from "react-icons/hi";
import { RxCaretRight } from "react-icons/rx";
import { AiOutlineComment } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineBookmarks } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleWindowClick);
    }

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic if needed

    // Redirect to the login page
    navigate("/"); // Replace '/' with the appropriate route for your login page
  };

  return (
    <div
      ref={dropdownRef}
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
    >
      <button className="image" onClick={toggleDropdown}>
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/20/76/man-avatar-profile-vector-21372076.webp"
          alt="img"
        />
      </button>

      {isOpen && (
        <div className="menu">
          <div className="profile-name">
            <div className="profile-pic">
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/20/76/man-avatar-profile-vector-21372076.webp"
                alt="/images/profile.jpg"
              />
            </div>

            <div className="names">
              <span>Shubham Kadu</span>
              <RxCaretRight className="caret-right" />
            </div>
          </div>

          <div className="lists">
            <div className="list-option">
              <AiOutlineComment className="outline-comment" />
              <span>Messages</span>
            </div>
            <div className="list-option">
              <HiOutlineSpeakerphone className="speaker" />
              <span>Create Ad</span>
            </div>
            <div className="list-option">
              <BsCurrencyDollar className="dollar" />
              <span>Monetization</span>
            </div>
            <div className="list-option">
              <HiOutlineChartBar className="bar" />
              <span>Your content & stats</span>
            </div>
            <div className="list-option">
              <MdOutlineBookmarks className="bookmark" />
              <span>Bookmarks</span>
            </div>
            <div className="list-option">
              <CgNotes className="notes" />
              <span>Drafts</span>
            </div>
            <div className="list-option">
              <TiPlus className="plus" />
              <span>Try Quora+</span>
            </div>
          </div>

          <div className="profile-setting">
            <div className="profile-option">
              <span>Dark mode</span>
              <span className="off">OFF</span>
            </div>
            <div className="profile-option">
              <span>Settings</span>
            </div>
            <div className="profile-option">
              <span>Languages</span>
            </div>
            <div className="profile-option">
              <span>Help</span>
            </div>
            <div className="profile-option">
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>

          <div className="profile-link">
            <a>About</a>&nbsp;&middot;&nbsp;
            <a>Careers</a>&nbsp;&middot;&nbsp;
            <a>Terms</a>&nbsp;&middot;&nbsp;
            <a>Privacy</a>&nbsp;&middot;&nbsp; <br />
            <a>Acceptable Use</a>&nbsp;&middot;&nbsp;
            <a>Bussinesses</a>&nbsp;&middot;&nbsp;
            <a>Press</a>&nbsp;&middot;&nbsp; <br />
            <a>Your Ad Choices</a>&nbsp;&middot;&nbsp;
            <a>Grievance Officer</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
