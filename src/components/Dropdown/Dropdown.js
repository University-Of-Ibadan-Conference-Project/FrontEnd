import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
const Dropdown = () => {
  const [isActive, SetisActive] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        SetisActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="dropdown" ref={menuRef}>
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