import React from "react";

function Expertise() {
  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5 text-light">
              Skills &amp; Experience
            </h1>
            <p className="mb-4" style={{ color: "#f7f7f7" }}>
              I am a seasoned web developer with expertise in both front-end and
              back-end development. Proficient in PHP, MySQL, HTML, CSS,
              JavaScript, jQuery, and AJAX, I bring a comprehensive skill set to
              the table. Having honed my abilities, I am well-equipped to tackle
              diverse challenges and contribute to the success of web
              development projects.
            </p>
            <h3 className="mb-4 text-success">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">HTML</h6>
                    <h6 className="text-light font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">CSS</h6>
                    <h6 className="text-light font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">PHP</h6>
                    <h6 className="text-light font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ background: "#79FE0A" }}
                      role="progressbar"
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">C/C++</h6>
                    <h6 className="text-light font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ background: "#E515F6" }}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">Javascript</h6>
                    <h6 className="text-light font-weight-bold">70%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">
                      MysQl | MongoDB
                    </h6>
                    <h6 className="text-light font-weight-bold">80%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">Python</h6>
                    <h6 className="text-light font-weight-bold">50%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="text-light font-weight-bold">Java</h6>
                    <h6 className="text-light font-weight-bold">50%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ background: "#FA6E00" }}
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button
                  className="text-light nav-link w-100 py-3 fs-5 "
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  Experience
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className="text-light nav-link w-100 py-3 fs-5 active"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  Education
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 ">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5 className="text-light">UI Designer</h5>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-light">Web Designer</h5>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-light">Font End Developer</h5>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-light">Back End Developer</h5>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0 active">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5 className="text-light">
                      Bsc in Aeronautical Engineering
                    </h5>
                    <hr className="text-light my-2" />
                    <p className="text-light mb-1">2023- Now</p>
                    <h6 className="text-light mb-0">
                      Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace
                      University
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-light">HSC Science Group-13</h5>
                    <hr className="text-light my-2" />
                    <p className="text-light mb-1">2022</p>
                    <h6 className="text-light mb-0">
                      Notre Dame College,Dhaka
                    </h6>
                  </div>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <h5 className="text-light">SSC Science Group</h5>
                    <hr className="text-light my-2" />
                    <p className="text-light mb-1">2020</p>
                    <h6 className="text-light mb-0">
                      St. Joseph's School And College, bonpara
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
