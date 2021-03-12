import React from "react";

const Contact = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-8 mt-5">
          <div className="jumbotron">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4">Let's Connect!</h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="text-muted">LinkedIn</h2>
                <a
                  href="www.linkedin.com/in/derrickhardison
"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>www.linkedin.com/in/derrickhardison</p>
                </a>
                <h2 className="text-muted">GitHub</h2>
                <a
                  href="https://github.com/derrickhardison"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>https://github.com/derrickhardison</p>
                </a>

                <h2 className="text-muted">Email</h2>
                <a
                  href="mailto:derricklhardison@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>derricklhardison@gmail.com</p>
                </a>

                <h2 className="text-muted">Resume</h2>
                <a
                  href="https://docs.google.com/document/d/1Z-iW1wj0CQVmpOQENWB4a-8dRGnL6S0BGtoxGQQmFuE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>View My Resume</p>
                </a>

                <h2 className="text-muted">Phone</h2>
                <p>Hey, we just met! Try sending an email first. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
