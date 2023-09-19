import React from "react";
import "../css/navbar.css";
import "../css/commonclasses.css";
import "../css/colorpallete.css";
import "../css/media.css";
import { navData } from "../data/navbarData";

const navbarData = {
  path: require("../assets/icons/browsericon.png"),
  menulogo: require("../assets/icons/hamburger.png"),
  bootcampPath: require("../assets/icons/bootcamp.png"),
  spacesPath: require("../assets/icons/giftbox.png"),
  ownerName: "Yash & Tanmay"
};

const Navbar = () => {
  const navbar_droplist = navData.map((items) => {
    return (
      <li key={items.id}>
        <a href="#">{items.dropItems}</a>
      </li>
    );
  });

  return (
    <>
      <nav>
        <div className="navbar_container h10v w100 flex_row_center">
          <div className="navbar_inner w90 h100p flex_row_space_between">
            <div className="nav_dropdown w40 h100p flex_row_space_evenly">
              <div className="nav_logo h100p w10 flex_row_space_evenly">
                <img src={navbarData.path} alt={navbarData.ownerName} />
              </div>
              <div className="nav_droplist h100p w90 flex_row_space_evenly">
                <ul className="navbar_list flex_row_space_evenly w100">
                  {navbar_droplist}
                </ul>
              </div>
            </div>
            <div className="menu_logo h100p w20">
              <img src={navbarData.menulogo} alt={navbarData.ownerName} />
            </div>
            <div className="login_signup h100p w40 flex_row_space_evenly">
              <div className="bootcamp h60 w20 flex_row_space_evenly">
                <img src={navbarData.bootcampPath} alt={navbarData.ownerName} />
                Bootcamps
              </div>
              <div className="spaces h60 w20 flex_row_space_evenly">
                <img src={navbarData.spacesPath} alt={navbarData.ownerName} />
                Spaces
              </div>
              <div className="buttons h60 w40 flex_row_space_evenly">
                <div className="login h100p w50 flex_row_space_evenly">
                  login
                </div>
                <div className="signup h100p w50 flex_row_space_evenly">
                  signup
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
