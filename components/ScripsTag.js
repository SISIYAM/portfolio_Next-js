import Script from "next/script";
import React from "react";

function ScripsTag() {
  return (
    <div>
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/lib/wow/wow.min.js"></Script>
      <Script src="/assets/lib/easing/easing.min.js"></Script>
      <Script src="/assets/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/assets/lib/typed/typed.min.js"></Script>
      <Script src="/assets/lib/counterup/counterup.min.js"></Script>
      <Script src="/assets/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/assets/lib/isotope/isotope.pkgd.min.js"></Script>
      <Script src="/assets/lib/lightbox/js/lightbox.min.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
        integrity="sha512-IsNh5E3eYy3tr/JiX2Yx4vsCujtkhwl7SLqgnwLNgf04Hrt9BT9SXlLlZlWx+OK4ndzAoALhsMNcCmkggjZB1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>

      <Script src="/assets/js/main.js"></Script>
    </div>
  );
}

export default ScripsTag;
