import React from "react";

function Copyright() {
  return (
    <>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <a
                className="border-bottom text-secondary"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100078912907311"
              >
                SIYAM
              </a>{" "}
              © All Right Reserved.
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default Copyright;
