/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tech Forum",
    description: "A Tech Forum Using PHP to talk and resolve Your Issues Related to Programming Bugs and Solution To it.",
    url: "https://github.com/diwakarshukla941/Forum",
  },
  {
    title: "Face Attendance System",
    description:
      "Developed a face attendance system using Python. The system captures and encodes facial images for individual recognition, then uses webcam input to mark attendance based on facial matches. This automated approach streamlines attendance tracking and enhances accuracy.",
    url: "https://github.com/diwakarshukla941/Face-Attendance-System",
  },
  {
    title: "E-learning Platform",
    description:
      "Developed an e-learning platform using PHP. The platform offers interactive features for online education, including course management, user authentication, and progress tracking. It provides a comprehensive solution for delivering and managing educational content effectively.",
    url: "https://github.com/diwakarshukla941/e_learning_using_PHP",
  },
  {
    title: "Wheather App",
    description:
      "Developed a weather web app using HTML, CSS, and JavaScript. The app provides real-time weather updates based on user location, displaying temperature, humidity, and forecast data in an intuitive and responsive interface for a seamless user experience.",
    url: "https://github.com/diwakarshukla941/weather_app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
