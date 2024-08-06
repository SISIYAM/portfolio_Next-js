import React from "react";

function GoogleMap() {
  return (
    <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container-xxl pt-5 px-0">
        <div className="bg-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12348.89468690966!2d89.06998149136905!3d24.294732102842445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc1865e39031e7%3A0xeababc07e0970dc9!2sBonpara!5e1!3m2!1sen!2sbd!4v1704108235888!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ width: "100%", height: 450, border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
