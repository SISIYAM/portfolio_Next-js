import React from "react";

function Service() {
  return (
    <div className="container-fluid bg-light my-5 py-6" id="service">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Services</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a
              className="btn btn-primary py-3 px-5"
              href="mailto:si31siyam@gmail.com"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
              <div className="bg-icon flex-shrink-0 mb-3">
                <i className="fa fa-code fa-2x text-dark" />
              </div>
              <div className="ms-sm-4">
                <h4 className="mb-3">Web Design</h4>
                <span>
                  Passionate and skilled web designer adept at creating visually
                  stunning and user-friendly websites. Proficient in HTML, CSS,
                  and JavaScript, I bring creativity and technical expertise to
                  every project. Ready to elevate your online presence through
                  innovative design solutions. Let's collaborate to turn ideas
                  into captivating digital experiences.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
              <div className="bg-icon flex-shrink-0 mb-3">
                <i className="fa fa-laptop-code fa-2x text-dark" />
              </div>
              <div className="ms-sm-4">
                <h4 className="mb-3">UI/UX Design</h4>
                <span>
                  Experienced UI/UX designer with a keen eye for detail and a
                  passion for crafting seamless and intuitive user experiences.
                  Proficient in user-centered design principles, wireframing,
                  and prototyping tools. Elevate your product with a design that
                  not only looks stunning but also enhances user satisfaction.
                  Let's collaborate to bring your vision to life through
                  thoughtful and user-centric design.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
              <div className="bg-icon flex-shrink-0 mb-3">
                <i className="fa fa-code fa-2x text-dark" />
              </div>
              <div className="ms-sm-4">
                <h4 className="mb-3">Front End Development</h4>
                <span>
                  Skilled front-end developer proficient in HTML, CSS, Bootstrap
                  and JavaScript. Excited to bring creativity and technical
                  expertise to enhance user interfaces and deliver exceptional
                  user experiences. Let's collaborate to build visually
                  appealing and responsive web solutions.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
              <div className="bg-icon flex-shrink-0 mb-3">
                <i className="fa fa-database fa-2x text-dark" />
              </div>
              <div className="ms-sm-4">
                <h4 className="mb-3">Back End Development</h4>
                <span>
                  Experienced back-end developer specializing in PHP and MySQL.
                  Proficient in creating robust and scalable server-side
                  solutions. Eager to contribute technical expertise to optimize
                  and streamline your web applications. Let's work together to
                  build powerful and efficient back-end systems.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
