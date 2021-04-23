import React from "react";

const About = () => {
  return (
    <div>
      <main className="container-lg">
        <div className="row mt-5">
          <div className="col-12 col-lg-8 mt-5">
            <div className="jumbotron">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">A little about Derrick...</h1>
                  <hr className="my-6" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQHrNTafUDORlQ/profile-displayphoto-shrink_200_200/0/1618941555632?e=1624492800&v=beta&t=rJyWuChxU8_OArLIQoRxJ9o5781mWluXPJFAB4TmvOA"
                    className="thumbnail float-left pr-2 pb-2"
                    alt="me"
                  />
                  <p>
                    Recent graduate of the Full Stack Web Development program at
                    Georgia Institute of Technology offering 8+ years of
                    experience in networking infrastructure and 1 year in full
                    stack web development, owning progressive web-based projects
                    from concept and design through testing, implementation and
                    updates. Quick learner with a passion for producing
                    accessible, responsive, user-friendly code. Successful at
                    achieving browser and device compatibility objectives while
                    satisfying requirements and producing robust, high-quality
                    designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
