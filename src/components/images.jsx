import React from "react";
import "../css/routing.css";
import "../css/commonclasses.css";
import "../css/colorpallete.css";
import "../css/media.css";

const codeRunnerData = {
  docType: "<!DOCTYPE html>",
  htmlOpeningTag: "<html>",
  htmlClosingTag: "</html>",
  headOpening: "<head>",
  headClosing: "</head>",
  titleOpening: "<title>",
  titleClosing: "</title>",
  bodyOpening: "<body>",
  bodyClosing: "</body>",
  paraOpening: "<p>",
  paraClosing: "</p>",
  headingOpening: "<h1>",
  headingClosing: "</h1>",
};

const Images = () => {
  return (
    <div>
      <div className="images_container w100">
         <div className="images_inner w100">
                Welcome To images page
         </div>
      </div>
    </div>
  )
}

export default Images
