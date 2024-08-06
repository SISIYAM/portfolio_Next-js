import React from "react";

function Header() {
  return (
    <div className="container-fluid my-6 mt-0" id="home">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" id="proImage">
            <img
              className="img-fluid float-end"
              src="/assets/img/profile.png"
              alt
            />
          </div>
          <div className="col-lg-6 py-6 pb-0 pt-lg-0">
            <h3 className="text-light mb-3" style={{ fontWeight: "bold" }}>
              I'm
            </h3>
            <h1
              className="display-3 mb-3"
              style={{
                color: "#ffeb3b",
                background:
                  "repeating-radial-gradient(circle farthest-corner at center center, #B7DF2D 0%, #E3F5AB 60%, #F8FFE8 68%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: 48,
              }}
            >
              MD Saymum Islam Siyam
            </h1>
            <h2
              className="typed-text-output d-inline"
              style={{ color: "#d9d3f8", fontWeight: "bold" }}
            />
            <div className="typed-text d-none ">
              Web Designer, Web Developer, Front End Developer, Back End
              Developer
            </div>
            <div className="d-flex align-items-center pt-5">
              <a href="#about" className="btn btn-primary py-3 px-4 me-5">
                Learn more about me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
