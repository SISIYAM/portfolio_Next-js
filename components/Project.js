import Link from "next/link";
import React from "react";

function Project() {
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
          <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <a
                href="https://github.com/SISIYAM?tab=repositories"
                target="_blank"
              >
                <li className="mx-3 active" data-filter="*">
                  All Projects
                </li>
              </a>
              <li className="mx-3" data-filter=".first" />
              <li className="mx-3" data-filter=".second" />
            </ul>
          </div>
        </div>
        <div
          className="row g-4 portfolio-container wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img
                className="img-fluid"
                src="/assets/img/simoviezone/1.png"
                alt
              />
              <div className="portfolio-btn">
                <a
                  className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                  href="/assets/img/simoviezone/1.png"
                  data-lightbox="portfolio"
                >
                  <i className="bi bi-eye" />
                </a>
                <Link className="mx-5" href="/projects">
                  <button className="btn btn-success btn-lg">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img className="img-fluid" src="/assets/img/ecom/7.png" alt />
              <div className="portfolio-btn">
                <a
                  className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                  href="/assets/img/ecom/7.png"
                  data-lightbox="portfolio"
                >
                  <i className="bi bi-eye" />
                </a>
                <Link className="mx-5" href="/projects">
                  <button className="btn btn-success btn-lg">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first">
            <div className="portfolio-img rounded overflow-hidden">
              <img
                className="img-fluid"
                src="/assets/img/sibl_soft/1.png"
                alt
              />
              <div className="portfolio-btn">
                <a
                  className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                  href="/assets/img/sibl_soft/1.png"
                  data-lightbox="portfolio"
                >
                  <i className="bi bi-eye" />
                </a>
                <Link className="mx-5" href="/projects">
                  <button className="btn btn-success btn-lg">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
