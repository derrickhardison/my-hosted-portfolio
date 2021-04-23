import React from "react";

const Contact = () => {
  return (
    <main className="container-lg">
      <div className="row">
        <div className="col-lg-8 mt-5">
          <div className="jumbotron">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4">Let's Connect!</h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="list-group">
              <a
                href="https://www.linkedin.com/in/derrickhardison"
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
              >
                <h2 className="text-muted text-center">LinkedIn</h2>
              </a>
              <a
                href="https://github.com/derrickhardison"
                className="list-group-item list-group-item-action"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-muted text-center">GitHub</h2>
              </a>
              <a
                href="mailto:derricklhardison@gmail.com"
                className="list-group-item list-group-item-action"
              >
                <h2 className="text-muted text-center">Email</h2>
              </a>
              <a
                href="https://docs.google.com/document/d/1esY1wyuOEwIJ3r04Sz2K1Gc1AbYiFxFhd5e9ayo9Ako/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
              >
                <h2 className="text-muted text-center">Resume</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
