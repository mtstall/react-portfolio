import React from "react";
import deployment from "../../public/images/deployment.png";
import github from "../../public/images/github-icon.jpg";
import workDayScheduler from "../../public/images/work-day-scheduler.png";
import codeQuiz from "../../public/images/coding-quiz.png";
import weatherForecast from "../../public/images/five-day-weather-forecast.png";
import passwordGenerator from "../../public/images/password-generator.png";
import movieMania from "../../public/images/movie-mania.png";
import calmCalendar from "../../public/images/calm-calendar.png";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="applications">
      <div class="work-day-scheduler">
        <div class="screenshot">
          <img
            src={workDayScheduler}
            alt="screenshot of deployed workday schedule app"
          />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://mtstall.github.io/work-day-scheduler/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mtstall/work-day-scheduler"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>

      <div class="code-quiz">
        <div class="screenshot">
          <img src={codeQuiz} alt="screenshot of deployed code quiz app" />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://mtstall.github.io/coding-assessment/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mtstall/coding-assessment"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>

      <div class="five-day-weather-forecast">
        <div class="screenshot">
          <img
            src={weatherForecast}
            alt="screenshot of deployed weather forecast app"
          />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://mtstall.github.io/five-day-weather-forecast/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mtstall/five-day-weather-forecast"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>

      <div class="password-generator">
        <div class="screenshot">
          <img
            src={passwordGenerator}
            alt="screenshot of deployed password generator app"
          />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://mtstall.github.io/password-generator/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mtstall/password-generator"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>

      <div class="movie-mania">
        <div class="screenshot">
          <img src={movieMania} alt="screenshot of deployed movie mania app" />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://mia2380.github.io/Sneak-Attack-Project-1/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mia2380/Sneak-Attack-Project-1"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>

      <div class="calm-calendar">
        <div class="screenshot">
          <img
            src={calmCalendar}
            alt="screenshot of deployed calm calendar app"
          />
        </div>
        <div className="links">
          {/* <div class="deployed-app"> */}
            <a
              href="https://calm-calendar-app.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={deployment} alt="deployment icon" />
            </a>
          {/* </div> */}
          {/* <div class="repo"> */}
            <a
              href="https://github.com/mtstall/calm-calendar-app"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github icon for link to github repo" />
            </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
