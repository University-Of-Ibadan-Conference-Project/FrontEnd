import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
const Dropdown = () => {
  const [isActive, SetisActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => SetisActive(!isActive)}>
        Call For Papers
        <FaCaretDown color="#fff" className={"icon"} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <Link className={"item"} to={"/submit-abstract"}>
            <div className="dropdown-item">Submit Abstract</div>
          </Link>
          <Link className={"item"} to={"/"}>
            <div className="dropdown-item">Lorem ipsum</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
