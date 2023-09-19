import React, { useState } from "react";
import "../css/sidebar.css";
import "../css/commonclasses.css";
import "../css/colorpallete.css";
import "../css/media.css";
import { sideBarTutorialsData } from "../data/sideBar";
import { sideBarFormsData } from "../data/sideBar";
import { sideBarGraphicsData } from "../data/sideBar";
import { sideBarMediaData } from "../data/sideBar";
import { sideBarAPIData } from "../data/sideBar";
import { sideBarExamplesData } from "../data/sideBar";
import { sideBarReferencesData } from "../data/sideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {

  const [toggle, setToggle] = useState(false);
  
  const sidebarTutorials = sideBarTutorialsData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarForms = sideBarFormsData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarGraphics = sideBarGraphicsData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarMedia = sideBarMediaData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarAPI = sideBarAPIData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarExamples = sideBarExamplesData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });

  const sideBarReferences = sideBarReferencesData.map((items) => {
    return (
      <ul key={items.id} style={{ listStyle: "none" }}>
        {
          <li key={items.id}>
            <Link to={`${items.routeName}`}>
              {items.routeName === "/" ? "HTML Home" : items.routeName.slice(1)}
            </Link>
          </li>
        }
      </ul>
    );
  });


  return (
    <div>
      <div className="sideBar_container w100 h100v">
        <div className="sideBar_inner w100 h100p flex_column_space_between">
          
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML Tutorials</p>
          </div>
          <div className="sidebar_items__Tutorials w100 flex_column_start">
            <ul className="side_List_tutorials w100 flex_column_start phorizontal">
              {sidebarTutorials}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML Forms</p>
          </div>
          <div className="sidebar_items__Forms w100 flex_column_start">
            <ul className="side_List_forms w100 flex_column_start phorizontal">
              {sideBarForms}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML Graphics</p>
          </div>
          <div className="sidebar_items__Graphics w100 flex_column_start">
            <ul className="side_List_graphics w100 flex_column_start phorizontal">
              {sideBarGraphics}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML Media</p>
          </div>
          <div className="sidebar_items__Media w100 flex_column_start">
            <ul className="side_List_media w100 flex_column_start phorizontal">
              {sideBarMedia}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML APIs</p>
          </div>
          <div className="sidebar_items__API w100 flex_column_start">
            <ul className="side_List_api w100 flex_column_start phorizontal">
              {sideBarAPI}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML Examples</p>
          </div>
          <div className="sidebar_items__API w100 flex_column_start">
            <ul className="side_List_api w100 flex_column_start phorizontal">
              {sideBarExamples}
            </ul>
          </div>
          <div className="sideBar_title w100 h10v flex_row_start pl pvertical">
            <p>HTML References</p>
          </div>
          <div className="sidebar_items__API w100 flex_column_start">
            <ul className="side_List_api w100 flex_column_start phorizontal">
              {sideBarReferences}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
