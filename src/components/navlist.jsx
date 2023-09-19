import React from 'react'
import { navListData } from '../data/navlistData';
import '../css/navlist.css';
import '../css/commonclasses.css';
import '../css/colorpallete.css';
import '../css/media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavlistData = {
    menulogo: require("../assets/icons/hamburger.png"),
    ownerName: "Yash & Tanmay"
}

const Navlist = () => {
  const navList = navListData.map(items => {
    return (
        <li key={items.id}>
            <a href="">{items.listItem}</a>
        </li>
    );
  });   
  return (
    <div>
        <nav>
            <div className="nav_list_container w100 h5v">
                <div className="nav_list_inner w100 h100p flex_row_space_between">
                    {/* <div className="menu_logo h100p w20">
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} />
                    </div>          */}
                    <div className="nav_links h100p w80">
                        <ul className='nav_list flex_row_space_evenly w100 h100p'>
                            {navList}
                        </ul>
                    </div>
                    <div className="nav_icons w10 h100p">
                        <ul className='icon_list flex_row_space_evenly w100 h100p'>
                            <li>
                                <FontAwesomeIcon icon = {faCircleHalfStroke} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon = {faEarthAmericas} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon = {faMagnifyingGlass} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navlist
