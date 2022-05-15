import React from "react";
const Project = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div class="container">
        <div class="card-project">
          <div class="container-project">
            <h3>Giftu - Gift Exchange CRUD App</h3>
            <p>
              A gift exchange app that simplifies gift buying. It provides a
              wishlist that you can add/edit/remove from. It also allows you to
              choose which gift you would like to purchase from a particular
              group and prevents duplicate gifts from being chosen.
            </p>
            <a href="https://giftu-app.herokuapp.com/groups" class="projlink">
              Live Demo
            </a>
            <a href="https://github.com/ken-steckler/wishlist" class="projlink">
              Github
            </a>
            <li class="tech-block">EJS</li>
            <li class="tech-block">HTML</li>
            <li class="tech-block">JavaScript</li>
            <li class="tech-block">Express</li>
            <li class="tech-block">MongoDB</li>
            <li class="tech-block">Mongoose</li>
          </div>
        </div>
        <div class="card-project">
          <div class="container-project">
            <h3>Weatherfly - Weather App</h3>
            <p>
              A simple interactive weather app that fetches live weather data
              and prints out current temperature, humidity, sunset and sunrise.
              I originally made this back when I tried out sunset photography. I
              wanted something easy to use that told me exactly when the sun was
              setting.{" "}
            </p>
            <a
              href="https://ken-steckler.github.io/weatherly/"
              class="projlink"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/ken-steckler/weatherly"
              class="projlink"
            >
              Github
            </a>
            <li class="tech-block">React</li>
            <li class="tech-block">JavaScript</li>
            <li class="tech-block">CSS</li>
            <li class="tech-block">Node</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
