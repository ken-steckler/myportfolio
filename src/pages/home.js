import React from "react";
const Home = () => {
  return (
    <div>
      <h2>Ken Steckler</h2>
      <div class="hometitle-card">
        <div class="hometitle-container">
          <p class="thanks">Thanks for visiting!</p>
          <p>My passion is building simple and elegant web experiences.</p>
          <p class="subtitle">
            Come check out my{" "}
            <a href="/projects" class="homelink">
              projects
            </a>
            !
          </p>
        </div>
      </div>
      <div class="mytech-card">
        <div class="mytech-container">
          <h2>My Skills</h2>
          <p>ReactJS, Python, HTML, CSS, JavaScript, Databases, Express, Git</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-container">
          <h3>Contact Me!</h3>
          <a href="mailto:steckler92ken@gmail.com" class="homelink">
            steckler92ken@gmail.com
          </a>{" "}
          ||{" "}
          <a href="https://www.linkedin.com/in/ken-steckler/" class="homelink">
            LinkedIn
          </a>{" "}
          ||{" "}
          <a
            href="https://github.com/ken-steckler"
            class="homelink"
            class="homelink"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
