import React from "react";
import "../styles/nav.css";
import "../styles/home.css";
import dummy1 from "../assets/dummy-img1.jpg";
import dummy2 from "../assets/dummy-img2.jpg";
import dummy3 from "../assets/dummy-img4.jpg";
import dummy4 from "../assets/dummy-img5.jpg";
import { Button } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Button>Home</Button>
            </li>
            <li>
              <Button>Memberships</Button>
            </li>
            <li>
              <Button>Instructors</Button>
            </li>
            <li>
              <Button>Signup</Button>
            </li>
          </ul>
        </nav>
      </header>

      <body>
        <div className="main-pitch">
          <h1>Anywhere Fitness</h1>
          <p className="intro-pitch">
            <strong>Anywhere Fitness</strong> is the all-in-one solution to meet
            your on-location fitness class needs. We make it painless for
            instructors and clients alike to hold and attend fitness classes
            wherever they might be held. Instructors can take attendance,
            request and process payments, create virtual “punch passes” for each
            type of class offered, alert clients of cancellations or location
            changes and so much more. Clients can easily find out information on
            classes - location, class size, start time and duration, as well as
            reschedule or cancel an upcoming appointment or reservation right
            from our mobile app.
            <div className="btn">
              <button>Join Now</button>
            </div>
          </p>
        </div>
        <br />
        <div className="dummy-gallery">
          <div className="item">
            <img src={dummy1} alt="Meet Your Goals"></img>
            <h3>Meet Your Goals</h3>
            <p class="meet-goals">Excelerate To Greatness. </p>
          </div>
          <div className="item">
            <img src={dummy4} alt="Meet Your Goals"></img>
            <h3>Physical Therapy</h3>
            <p class="meet-goals">
              Connect With World Class Physical Therpaist's.
            </p>
          </div>
          <div className="item">
            <img src={dummy3} alt="Meet Your Goals"></img>
            <h3>Attend Our Online Yoga Classes</h3>
            <p class="meet-goals">
              Excelerate Your Relaxation With Our Online Yoga Classes.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}
