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

const Layout = () => {
  return (
    <div>
      <div className="layout_container w100">
        <div className="layout_inner w100">
          <div className="title h20v w90 flex_row_start_end pl">
            HTML Layout
          </div>
          <div className="navigators w100 flex_row_center h10v pvertical">
            <div className="navigators_inner h100p w90 flex_row_space_between">
              <a href="">
                <button type="button" className="navigator ">
                  home
                </button>
              </a>
              <a href="">
                <button type="button" className="navigator">
                  next
                </button>
              </a>
            </div>
          </div>
          <div className="intro_text w100 h50v flex_column_start">
            <p className="pl">
              HTML is the standard markup language for Web pages.
            </p>
            <p className="pl">With HTML you can create your own Website.</p>
            <p className="pl">HTML is easy to learn - You will enjoy it!</p>
            <div className="intro_navigators flex_column_start pl">
              <button className="intro_navigator blue">
                study our free HTML tutorial
              </button>
              <button className="intro_navigator deep_grey">
                Watch Video Tutorial
              </button>
            </div>
          </div>
          <div className="horizontal_line flex_row_center">
            <hr width="95%" color="#e7e7e7" />
          </div>
          <div className="try_it h80v w100 flex_row_center flex_column_space_between">
            <div className="try_it_title h10v w100 flex_column_start pl pvertical">
              <h1>Easy Learning with HTML "Try it Yourself"</h1>
              <p className="pvertical">
                With our "Try it Yourself" editor, you can edit the HTML code
                and view the result:
              </p>
            </div>
            <div className="example h60v w100 flex_row_center">
              <div className="example_inner h100p w98 flex_column_space_evenly">
                <div className="example_inner__inner h90 w95 flex_column_start">
                  <h2>Example</h2>
                  <div className="code_runner h40v w100 flex_column_start">
                    <p>{codeRunnerData.docType}</p>
                    <p>{codeRunnerData.htmlOpeningTag}</p>
                    <p>{codeRunnerData.headOpening}</p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {codeRunnerData.titleOpening} YT Templates{" "}
                      {codeRunnerData.titleClosing}
                    </p>
                    <p>{codeRunnerData.headClosing}</p>
                    <p>{codeRunnerData.bodyOpening}</p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {codeRunnerData.headingOpening} This is heading
                      {codeRunnerData.headingClosing}
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {codeRunnerData.paraOpening} This is paragraph
                      {codeRunnerData.paraClosing}
                    </p>
                    <p>{codeRunnerData.bodyClosing}</p>
                    <p>{codeRunnerData.htmlClosingTag}</p>
                  </div>
                  <div className="example_buttons">
                    <button className="example_button blue">
                      try it yourself
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
