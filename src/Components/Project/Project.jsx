import React from "react";

const Project = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-12 mt-2">
          <div className="jumbotron">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4">Check out some of my work!</h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Digital Coffee</h5>

                    <p className="card-text">
                      Digital Coffee utilizes HTML, CSS (Bootstrap &
                      FontAwesome), JavaScript, and various different APIs
                      (Listed in ReadMe) to randomly generate quotes, images,
                      and weather information according to the user's choices.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/digital-coffee"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://ahnlok.github.io/digital-coffee/"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Fitness Tracker</h5>

                    <p className="card-text">
                      Fitness Tracker utilizes a Mongo database with a Mongoose
                      schema and handles routes with Express. It will allow the
                      user the ability to view, create, and track daily
                      workouts. The user will to be able to log multiple
                      exercises in a workout on a given day and track the name,
                      type, weight, sets, reps, and duration of exercise. If the
                      exercise is a cardio exercise, the user should be able to
                      track the distance traveled.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/fitness-tracker"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://murmuring-shore-54007.herokuapp.com/"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
                <br />
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Promethium</h5>

                    <p className="card-text">
                      Promethium is an app that allows users to add garments in
                      their closets for cataloguing. After adding a garment to
                      the database, they can then add specific garments to saved
                      outfits that are easily accessible. The app will help
                      users catalogue their clothes and assist them in viewing
                      the entire contents of their closet with ease.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/promethium"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://promethium.herokuapp.com/"
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Team Generator</h5>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/team-generator"
                      className="card-link"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://github.com/derrickhardison/team-generator"
                      className="card-link"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Budget Tracker</h5>

                    <p className="card-text">
                      Budget Tracker allows users to add expenses and deposits
                      to their budget with or without a connection. When
                      entering transactions offline, they should populate the
                      total when brought back online.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/budget-tracker"
                      className="card-link"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://floating-temple-52038.herokuapp.com/"
                      className="card-link"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Workday Scheduler</h5>

                    <p className="card-text">
                      Workday Scheduler is a simple application that allows
                      users to plan and schedule their day.
                    </p>
                    <a
                      href="https://github.com/derrickhardison/calendar"
                      className="card-link"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href="https://derrickhardison.github.io/calendar/"
                      className="card-link"
                    >
                      Deployed Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
