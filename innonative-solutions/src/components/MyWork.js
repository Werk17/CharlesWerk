import React from "react";
import "./Projects.css";

const MyWork = () => {
  return (
    <div class="projects-section">
      <h1>My Projects:</h1>
      <div class="project-card">
        <img
          src="./assets/logos/LogoMaroon.png"
          alt="Website Project"
          class="project-image"
        />

        <div class="project-card-content">
          <h2>Starquilts247</h2>
          <p>
            I spearheaded the design and development of the Starquilts247
            website, providing a visually captivating and user-friendly online
            platform for showcasing exquisite quilt creations. The website
            boasts a responsive design, ensuring seamless accessibility across
            various devices. With a meticulously crafted photo gallery
            highlighting stunning quilt designs, informative pages, and
            meticulous SEO optimization, this project reflects my dedication to
            delivering compelling digital experiences that resonate with
            audiences and drive engagement.
          </p>
        </div>
      </div>
      <div class="project-card">
        <img
          src="./assets/StarTrailsDesign.png"
          alt="Mobile App Project"
          class="project-image"
        />

        <div class="project-card-content">
          <h2>StarTrails Project</h2>
          <p>
            I collaborated on the development of a mobile application for the
            Institute of Tourism and Recreation Research (ITRR), inspired by the
            Trail to the Stars website, aimed at promoting tourism in Eastern
            Montana. This comprehensive app, available on both iOS and Android
            platforms, features a robust database, secure authentication system,
            and an engaging interactive map. Users can seamlessly explore local
            attractions, access insightful travel information, and plan
            unforgettable adventures, all within the palm of their hand.
          </p>
        </div>
      </div>
      <div class="project-card">
        <img
          src="./assets/SpectralClustering.png"
          alt="Mockup Project"
          class="project-image"
        />

        <div class="project-card-content">
          <h2>Spectral Clustering Project</h2>
          <p>
            Utilizing Python and advanced machine learning methodologies, I
            embarked on a data analysis journey to uncover intricate patterns
            and predict trends. Employing spectral clustering techniques, I
            delved into the realm of data science to discern and categorize
            interconnected groups based on their proximity and similarities.
            This project showcases my prowess in leveraging sophisticated
            algorithms to derive actionable insights, paving the way for
            enhanced decision-making and strategic planning across diverse
            domains.
          </p>
        </div>
      </div>
      <div class="project-card">
        <img
          src="./assets/eventPlanner.webp"
          alt="Event Planner"
          class="project-image"
        />

        <div class="project-card-content">
          <h2>Campus Event Planner</h2>
          <p>
            In this project, I developed a mobile application using React Native
            Expo and Firebase, aimed at streamlining event planning and
            management within the campus community. The app allows students,
            faculty, and visitors to discover, RSVP to, and manage events
            conveniently from their smartphones. Leveraging Firebase for backend
            services, users can securely sign in, view event details, RSVP,
            receive notifications, and interact with event organizers. With a
            user-friendly interface and intuitive features such as event
            filtering, calendar integration, and social sharing, the Campus
            Event Planner enhances campus engagement and fosters community
            involvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
