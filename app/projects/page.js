import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div
          className="row g-5 mb-5 align-items-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-6">
            <h1 className="text-light display-5 mb-0">My Projects</h1>
          </div>
        </div>
        {/*-SimovieZone-*/}
        <div
          className="content"
          style={{
            marginBottom: 30,
            border: "2px solid #fff",
            boxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            WebkitBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            MozBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
          }}
        >
          <div className="project" style={{ padding: 30 }}>
            {" "}
            <div className="mb-4 col-lg-6">
              <h1
                className="text-primary display-5 mb-0"
                style={{
                  background:
                    "linear-gradient(to right, #FFF7FE 0%, #711FFF 25%, #7729FF 75%, #8838FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SiMovieZone
              </h1>
            </div>
            <div className="description" style={{ color: "#fff", padding: 30 }}>
              <p>
                {" "}
                I proudly present SimovieZone, a dynamic movie download website
                that showcases my proficiency in web development. Leveraging
                HTML, CSS, and Bootstrap for the front-end, I crafted an
                engaging and responsive user interface. JavaScript brought
                interactive elements to life, enhancing the overall user
                experience. <br />
                For the back-end, I implemented a robust system using PHP and
                MySQL, ensuring seamless data management and retrieval. The
                integration of AJAX facilitated asynchronous communication,
                optimizing website performance. SimovieZone stands as a
                testament to my skills in both front-end and back-end
                technologies, demonstrating my ability to create user-centric,
                feature-rich platforms for online entertainment.
              </p>
            </div>
            <div className="image_slider" style={{ width: "100%" }}>
              <h1 className="text-warning" style={{ paddingBottom: 10 }}>
                Font-End
              </h1>
              <p style={{ paddingBottom: 10 }}>
                <span className="text-info" style={{ fontWeight: "bold" }}>
                  Languages
                </span>{" "}
                <br />{" "}
                <span className="text-light">
                  <i className="fab fa-html5" /> HTML <br />
                  <i className="fab fa-css3" /> CSS <br />
                  <i className="fa fa-code" aria-hidden="true" /> Bootstrap{" "}
                  <br />
                  <i className="fa fa-code" aria-hidden="true" /> JavaScript
                </span>
              </p>
              <div className="row no-gutters popup-gallery mb-3">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/1.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/1.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/2.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/2.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/3.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/3.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/4.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/4.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/6.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/6.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/7.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/7.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/8.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/8.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/9.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/9.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/10.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/10.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/11.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/11.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/12.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/12.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/13.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/13.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/14.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/14.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/15.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/15.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/16.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/16.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <h1 className="text-warning" style={{ padding: "10px 0" }}>
                Back-End | Admin Panel{" "}
              </h1>
              <p style={{ paddingBottom: 10 }}>
                <span className="text-info" style={{ fontWeight: "bold" }}>
                  Languages
                </span>{" "}
                <br />{" "}
                <span className="text-light">
                  <i className="fa fa-code" /> PHP <br />
                  <i className="fa fa-database" /> MYSQL <br />
                  <i className="fa fa-code" aria-hidden="true" /> AJAX <br />
                </span>
              </p>
              <div className="row no-gutters popup-gallery">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/1.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/1.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/2.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/2.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/3.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/3.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/4.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/4.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/6.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/6.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/7.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/7.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/8.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/8.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/9.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/9.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/10.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/10.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/11.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/11.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/12.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/12.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/13.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/13.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/14.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/14.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/15.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/15.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/16.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/16.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/18.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/18.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/19.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/19.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/simoviezone/back-end/20.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/simoviezone/back-end/20.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <button className="btn btn-primary mt-5">
                  <i className="fa fa-eye px-2" />
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/---Simoviezone--*/}
        {/*-Ecommerce-*/}
        <div
          className="content"
          style={{
            marginBottom: 30,
            border: "2px solid #fff",
            boxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            WebkitBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            MozBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
          }}
        >
          <div className="project" style={{ padding: 30 }}>
            {" "}
            <div className="mb-4 col-lg-6">
              <h1
                className="text-primary display-5 mb-0"
                style={{
                  background:
                    "linear-gradient(to right, #FFF7FE 0%, #711FFF 25%, #7729FF 75%, #8838FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ECommerce Website
              </h1>
            </div>
            <div className="description" style={{ color: "#fff", padding: 30 }}>
              <p>
                {" "}
                I showcase my expertise in web development through the creation
                of a dynamic e-commerce website. The front-end of the site was
                meticulously designed using HTML, CSS, and Bootstrap, ensuring a
                visually appealing and responsive user interface. JavaScript and
                jQuery were instrumental in adding interactive features,
                enhancing user engagement and navigation. <br /> <br />
                On the backend, I employed PHP and MySQL to establish a robust
                foundation for seamless data management, user authentication,
                and secure transactions. The integration of AJAX facilitated
                real-time updates and improved the overall user experience.
                Additionally, the use of JSON enhanced data interchange between
                the client and server, contributing to the efficiency and
                performance of the e-commerce platform. This project serves as a
                testament to my comprehensive skills in both front-end and
                back-end technologies, showcasing my ability to create
                functional and user-friendly websites in the competitive
                e-commerce landscape.
              </p>
            </div>
            <div className="image_slider" style={{ width: "100%" }}>
              <h1 className="text-warning" style={{ paddingBottom: 10 }}>
                Font-End
              </h1>
              <p style={{ paddingBottom: 10 }}>
                <span className="text-info" style={{ fontWeight: "bold" }}>
                  Languages
                </span>{" "}
                <br />{" "}
                <span className="text-light">
                  <i className="fab fa-html5" /> HTML <br />
                  <i className="fab fa-css3" /> CSS <br />
                  <i className="fa fa-code" aria-hidden="true" /> Bootstrap{" "}
                  <br />
                  <i
                    className="fa fa-code"
                    aria-hidden="true"
                  /> JavaScript <br />
                  <i className="fa fa-code" aria-hidden="true" /> JQuery
                </span>
              </p>
              <div className="row no-gutters popup-gallery mb-3">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/1.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/1.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/2.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/2.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/3.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/3.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/4.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/4.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/5.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/5.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/6.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/6.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/7.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/7.png" className="img-fluid" />
                  </a>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/9.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/9.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/10.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/10.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/11.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/11.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/12.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/12.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/13.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/13.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/17.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/14.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/14.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/15.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/15.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/16.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/16.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/18.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/18.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/19.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/19.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/20.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/20.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/21.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/21.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/22.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/22.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/23.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/23.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/24.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/24.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/25.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/25.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/26.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/26.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/27.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/27.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/28.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/28.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/29.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/29.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/30.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/30.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/31.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/31.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/32.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/32.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/33.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/33.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/34.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/34.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/35.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/35.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/36.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img src="/assets/img/ecom/36.png" className="img-fluid" />
                  </a>
                </div>
              </div>
              <h1 className="text-warning" style={{ padding: "10px 0" }}>
                Back-End | Admin Panel{" "}
              </h1>
              <p style={{ paddingBottom: 10 }}>
                <span className="text-info" style={{ fontWeight: "bold" }}>
                  Languages
                </span>{" "}
                <br />{" "}
                <span className="text-light">
                  <i className="fa fa-code" /> PHP <br />
                  <i className="fa fa-database" /> MYSQL <br />
                  <i className="fa fa-code" aria-hidden="true" /> AJAX <br />
                </span>
              </p>
              <div className="row no-gutters popup-gallery">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/1.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/1.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/2.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/2.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/3.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/3.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/4.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/4.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/6.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/6.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/7.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/7.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/8.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/8.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/9.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/9.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/10.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/10.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/11.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/11.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/12.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/12.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/13.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/13.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/14.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/14.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/15.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/15.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/16.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/16.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/18.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/18.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/19.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/19.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/20.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/20.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/21.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/21.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/22.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/22.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/23.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/23.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/24.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/24.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/25.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/25.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/26.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/26.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/27.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/27.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/28.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/28.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/29.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/29.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/30.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/30.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/31.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/31.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/ecom/back-end/32.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/ecom/back-end/32.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <button className="btn btn-primary mt-5">
                  <i className="fa fa-eye px-2" />
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/---Ecommerce--*/}
        {/*-- Sibl_Soft--*/}
        <div
          className="content"
          style={{
            marginBottom: 30,
            border: "2px solid #fff",
            boxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            WebkitBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
            MozBoxShadow: "-1px -1px 5px 9px rgba(61,208,54,0.75)",
          }}
        >
          <div className="project" style={{ padding: 30 }}>
            {" "}
            <div className="mb-4 col-lg-6">
              <h1
                className="text-primary display-5 mb-0"
                style={{
                  background:
                    "linear-gradient(to right, #FFF7FE 0%, #711FFF 25%, #7729FF 75%, #8838FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Agent Bank Managment System
              </h1>
            </div>
            <div className="description" style={{ color: "#fff", padding: 30 }}>
              <p>
                {" "}
                I proudly present my project - the Agent Bank Management System
                website, a comprehensive solution developed to streamline
                financial operations. The front-end of this system is crafted
                with HTML, CSS, JavaScript, and Bootstrap, ensuring a modern and
                user-friendly interface. The utilization of these technologies
                provides a seamless user experience, making account management
                and transactions accessible. <br /> <br />
                On the backend, I employed PHP and MySQL to create a robust
                infrastructure capable of storing and managing crucial account
                holder information. The system incorporates features such as a
                cash calculator for daily transactions, offering efficiency in
                financial tracking. Additionally, functionalities like 'Forgot
                Password,' 'Send Email,' and 'Email Verification' enhance
                security and user interaction. The integration of AJAX enables
                real-time updates, contributing to the system's responsiveness.
                Moreover, the system goes beyond the basics by incorporating SMS
                functionality, allowing users to send individual or bulk SMS
                messages directly to account holders. This multifaceted project
                showcases my proficiency in front-end and back-end technologies,
                emphasizing my ability to create a secure, feature-rich, and
                efficient banking management system.
              </p>
            </div>
            <div className="image_slider" style={{ width: "100%" }}>
              <h1 className="text-warning" style={{ paddingBottom: 10 }}>
                Back-End
              </h1>
              <p style={{ paddingBottom: 10 }}>
                <span className="text-info" style={{ fontWeight: "bold" }}>
                  Languages
                </span>{" "}
                <br />{" "}
                <span className="text-light">
                  <i className="fab fa-html5" /> HTML <br />
                  <i className="fab fa-css3" /> CSS <br />
                  <i className="fa fa-code" aria-hidden="true" /> Bootstrap{" "}
                  <br />
                  <i
                    className="fa fa-code"
                    aria-hidden="true"
                  /> JavaScript <br />
                  <i className="fa fa-code" aria-hidden="true" /> JQuery <br />
                  <i className="fa fa-code" aria-hidden="true" /> PHP <br />
                  <i className="fa fa-code" aria-hidden="true" /> MYSQL
                </span>
              </p>
              <div className="row no-gutters popup-gallery mb-3">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/1.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/1.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/2.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/2.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/3.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/3.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/4.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/4.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/5.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/5.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/6.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/6.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/7.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/7.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/8.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/8.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/9.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/9.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/10.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/10.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/11.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/11.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/12.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/12.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/13.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/13.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/14.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/14.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/15.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/15.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/16.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/16.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/17.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/17.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/18.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/18.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/19.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/19.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/20.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/20.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/21.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/21.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/22.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/22.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/23.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/23.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/24.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/24.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/25.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/25.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/26.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/26.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/27.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/27.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/28.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/28.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/29.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/29.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-2">
                  <a
                    target="_blank"
                    href="/assets/img/sibl_soft/30.png"
                    title="The Cleaner"
                  >
                    {" "}
                    <img
                      src="/assets/img/sibl_soft/30.png"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <button className="btn btn-primary mt-5">
                  <i className="fa fa-eye px-2" />
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-/Sibl soft-*/}
      </div>
    </div>
  );
}

export default page;
