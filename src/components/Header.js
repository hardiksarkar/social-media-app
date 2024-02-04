import React from "react";
import "../styleSheets/header.css";
import {
  faHouse,
  faBell,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="header">
      <h3>TravelMedia.in</h3>
      <div className="icon-div">
        <FontAwesomeIcon icon={faHouse} onClick={()=>navigate("/")}/>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
