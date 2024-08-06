import React from "react";

function About(props) {
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-4">
                <h1 className="display-1 mb-0 text-light">2</h1>
                <h5 className="mb-0 text-warning">Years</h5>
              </div>
              <h3 className="lh-base mb-0 text-primary">
                of working experience as a web designer &amp; developer
              </h3>
            </div>
            <p className="mb-3 text-light">
              <i className="far fa-check-circle text-primary me-3" />
              Afordable Prices
            </p>
            <p className="mb-3 text-light">
              <i className="far fa-check-circle text-primary me-3" />
              High Quality Product
            </p>
            <p className="mb-3 text-light">
              <i className="far fa-check-circle text-primary me-3" />
              On Time Project Delivery
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3" href>
              Read More
            </a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="row justify-content-start pb-3"
              style={{
                WebkitBoxShadow: "-2px 0px 5px 8px rgba(189,82,189,1)",
                MozBoxShadow: "-2px 0px 5px 8px rgba(189,82,189,1)",
                boxShadow: "-2px 0px 5px 8px rgba(189,82,189,1)",
                marginBottom: 15,
              }}
            >
              <div
                className="col-md-12 heading-section ftco-animate"
                style={{ padding: "10px 30px" }}
              >
                <h2
                  className="mb-4 text-warning"
                  style={{
                    fontSize: 50,
                    fontWeight: 1000,
                    borderBottom: "2px solid #15E212",
                  }}
                >
                  About Me
                </h2>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Name:{" "}
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      MD Saymum Islam Siyam
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Email:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      si31siyam@gmail.com
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Phone:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      +8801722146631
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Date Of Birth:{" "}
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      June 18,2004
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Blood Group:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      B+ (Ve)
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Religion:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      Islam
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Nationality:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      Bangladeshi
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Education:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      Bsc in Engineering
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Institution:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace
                      University
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <span className="text-light" style={{ fontWeight: "bold" }}>
                      Department:
                    </span>
                    <span className="text-light" style={{ paddingLeft: 10 }}>
                      Aeronautical Engineering
                    </span>
                  </li>

                  <li className="d-flex py-1">
                    <i class="bi bi-code-slash text-primary me-3"></i>
                    <span
                      className
                      style={{ color: "#D4B00C", fontWeight: "bold" }}
                    >
                      Front End:
                    </span>{" "}
                    <span className="text-info mx-1"> {props.frontEnd}</span>
                  </li>
                  <li className="d-flex py-1">
                    <i className="bi bi-wrench text-primary me-3" />
                    <span style={{ color: "#D4B00C", fontWeight: "bold" }}>
                      Back End:
                    </span>{" "}
                    <span className="text-info mx-1">{props.backEnd}</span>
                  </li>
                  <li className="d-flex py-1">
                    <i className="bi bi-database text-primary me-3" />{" "}
                    <span
                      className
                      style={{ color: "#D4B00C", fontWeight: "bold" }}
                    >
                      Database:
                    </span>{" "}
                    <span className="text-info mx-1">{props.database}</span>
                  </li>
                  <li className="d-flex py-1">
                    <i className="bi bi-braces-asterisk text-primary me-3" />{" "}
                    <span
                      className
                      style={{ color: "#D4B00C", fontWeight: "bold" }}
                    >
                      Frameworks:
                    </span>{" "}
                    <span className="text-info mx-1">{props.frameWorks}</span>
                  </li>
                  <li className="d-flex py-1">
                    <i className="bi bi-file-earmark-code-fill text-primary me-3" />{" "}
                    <span
                      className
                      style={{ color: "#D4B00C", fontWeight: "bold" }}
                    >
                      Programming Languages:
                    </span>
                    <span className="text-info mx-1">
                      {" "}
                      {props.programmingLanguage}
                    </span>
                  </li>
                  <li className="d-flex py-1">
                    <i className="bi bi-pc-display text-primary me-3" />{" "}
                    <span
                      className
                      style={{ color: "#D4B00C", fontWeight: "bold" }}
                    >
                      Software:
                    </span>{" "}
                    <span className="text-info mx-1"> {props.software}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <h5 className="border-end pe-3 me-3 mb-0 text-white">
                Projects Completed
              </h5>
              <h2 className="text-danger fw-bold mb-0" data-toggle="counter-up">
                {props.projectComplete}
              </h2>
            </div>
            <p className="mb-0 text-secondary">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
