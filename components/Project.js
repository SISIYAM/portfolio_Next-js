"use client";
import { assetsBaseUrl, baseUrl } from "@/myConst";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Project() {
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/projects/all`)
      .then((response) => {
        if (response.data.success) {
          setProjects(response.data.allProjects);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  // fetch images for a specific project
  const getImages = (projectId) => {
    axios
      .get(`${baseUrl}/projects/${projectId}/images`)
      .then((response) => {
        if (response.data.success) {
          setImages((prevImages) => ({
            ...prevImages,
            [projectId]: response.data.images,
          }));
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center">
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
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container m-5">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 portfolio-item first"
              >
                <div className="portfolio-img rounded overflow-hidden">
                  {images[project._id] ? (
                    <img
                      className="img-fluid"
                      src={`${assetsBaseUrl}/${images[project._id][0].path}`}
                      alt="Portfolio"
                    />
                  ) : (
                    <p>Loading images...</p>
                  )}
                  {getImages(project._id)}
                  <div className="portfolio-btn">
                    <a
                      className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                      href={`/${images[project._id]?.[0]?.path}`}
                      data-lightbox="portfolio"
                    >
                      <i className="bi bi-eye" />
                    </a>
                    <Link className="mx-5" href={`/projects/${project._id}`}>
                      <button className="btn btn-success btn-lg">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
