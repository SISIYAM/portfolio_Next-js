import React from "react";

function Contact() {
  return (
    <div className="container-xxl pb-5" id="contact">
      <div className="container py-5">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="text-warning display-5 mb-0">Let's Work Together</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href>
              Say Hello
            </a>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <hr className="w-100" />
            <p className="mb-2 text-light">Call me:</p>
            <h3 className="fw-bold text-info">+8801722146631</h3>
            <hr className="w-100" />
            <p className="mb-2 text-light">Mail me:</p>
            <h3 className="fw-bold text-info">si31siyam@gmail.com</h3>
            <hr className="w-100" />
            <p className="mb-2 text-light">Follow me:</p>
            <div className="d-flex pt-2">
              <a
                target="_blank"
                className="btn btn-square btn-primary me-2"
                href="https://github.com/SISIYAM?tab=repositories"
              >
                <i className="bi bi-github" />
              </a>
              <a
                className="btn btn-square btn-primary me-2"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100078912907311"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="btn btn-square btn-primary me-2"
                target="_blank"
                href="https://youtube.com/@codesql2024?si=8c2-NGtYbf_fGK8e"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
