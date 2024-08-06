import React from "react";

function Video() {
  return (
    <div
      className="modal modal-video fade"
      id="videoModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              Youtube Video
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* 16:9 aspect ratio */}
            <div className="ratio ratio-16x9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/6d-X6zY0IY0?si=HIQGB7DJnlvjMurF"
                id="video"
                allowFullScreen
                allowscriptaccess="always"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
