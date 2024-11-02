import React from 'react';
import './about.css';

const ExploreConnections = () => {
  return (
    <section className="s_text_image pt80 pb80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pt16 pb16">
            {/* <img
              src="/web/image/website.s_image_text_default_image"
              className="img img-fluid mx-auto rounded img-thumbnail"
              alt="Connections"
            /> */}
          </div>
          <div className="col-lg-5 offset-lg-1 pt16 pb16">
            <h2 className="h3-fs">
              Explore New <strong>Connections</strong>
            </h2>
            <p>
              Write one or two paragraphs describing your product or services.
              To be successful your content needs to be useful to your readers.
            </p>
            <p>
              Start with the user - understand their needs and provide seamless
              connectivity.
            </p>
            <p>
              <a href="#" className="btn btn-secondary">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreConnections;
