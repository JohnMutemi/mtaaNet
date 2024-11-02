import React from 'react';
import './about.css';

const AboutUsTextImage = () => {
  return (
    <section className="s_text_image pt80 pb80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pt16 pb16">
            <p className="small-text">
              <b>ABOUT US</b>
            </p>
            <h2 className="h3-fs">Connecting You to the Future</h2>
            <p>
              In today's digital age, reliable internet connectivity is
              essential for both personal and professional growth. We are
              committed to providing top-notch WiFi services to empower
              communities and businesses alike.
            </p>
            <p>
              <a href="#" className="btn btn-secondary">
                Learn more
              </a>
            </p>
          </div>
          <div className="col-lg-6 offset-lg-1 pt16 pb16">
            {/* <img
              src="/web_editor/image_shape/website.s_text_image_default_image/web_editor/geometric_round/geo_round_blob_medium.svg"
              className="img img-fluid mx-auto rounded"
              alt="Text Image"
              loading="lazy"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTextImage;
