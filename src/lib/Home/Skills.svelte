<script>
  import designer from "../../assets/Images/designer.svg";
  import backend from "../../assets/Images/backend.svg";
  import frontend from "../../assets/Images/frontend.svg";
</script>

<section>
  <div class="container">
    <div class="column">
      <img
        height="48px"
        width="40px"
        src={designer}
        alt="designer"
        loading="lazy"
      />
      <h1>Designer</h1>
      <p>
        I design simplistic and clean interfaces with suttle animations for some
        eye candy.
      </p>
      <p class="title">Things I enjoy designing:</p>
      <p>UI & UX, Websites, Apps, Logos, Illustrations</p>
      <p class="title">Design Tools:</p>
      <ul>
        <li>GIMP</li>
        <li>Figma</li>
        <li>Spline</li>
        <li>Framer</li>
        <li>Webflow</li>
        <li>Pen &amp; Paper</li>
      </ul>
    </div>
    <div class="column">
      <img
        height="48px"
        width="40px"
        src={frontend}
        alt="frontend"
        loading="lazy"
      />
      <h1>Front-end Developer</h1>
      <p>
        I like to adopt new technologies, and most of the time I enjoy building
        things without major dependencies.
      </p>
      <p class="title">Tech I use:</p>
      <p>
        HTML, CSS, Javascript, React, Vue, Svelte, React Native, Vite, Firebase
      </p>
      <p class="title">Dev Tools:</p>
      <ul>
        <li>Git</li>
        <li>Yarn</li>
        <li>Github</li>
        <li>Squoosh</li>
        <li>VS Code</li>
        <li>Terminal</li>
        <li>Chrome Dev Tools</li>
      </ul>
    </div>
    <div class="column">
      <img
        height="48px"
        width="40px"
        src={backend}
        alt="backend"
        loading="lazy"
      />
      <h1>Backend-end Developer</h1>
      <p>
        I design, build, maintain and test back-end applications which are
        simple and scalable.
      </p>
      <p class="title">Tech I use:</p>
      <p>NodeJS, ExpressJS, SQL, MongoDB, Fastify, PHP</p>
      <p class="title">Dev Tools:</p>
      <ul>
        <li>Git</li>
        <li>Yarn</li>
        <li>Github</li>
        <li>Postman</li>
        <li>VS Code</li>
        <li>Terminal</li>
        <li>MongoDB Compass</li>
      </ul>
    </div>
  </div>
</section>

<style>
  section {
    margin-top: -25vw;
    padding-bottom: 1rem;
    padding: 5rem 1.5rem;
    text-align: center;
  }
  .container {
    display: flex;
    border-radius: 12px;
    box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
    background-color: var(--secondary-color);
    overflow: hidden;
    max-width: 1200px;
    margin: auto;
  }
  .column {
    padding: 60px 45px;
    flex: 1;
  }
  .column:nth-child(2) {
    border-left: 1px solid #e6ecf8;
    border-right: 1px solid #e6ecf8;
  }
  img {
    margin-bottom: 2em;
    animation: bounce 4s infinite;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  h1 {
    margin-bottom: 1em;
  }
  p:not(.title) {
    margin-bottom: 2em;
  }
  .title {
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: var(--primary-color);
  }
  ul {
    list-style: none;
  }
  @media (max-width: 770px) {
    section {
      margin-top: -150px;
    }
    .container {
      flex-direction: column;
    }
    .column {
      padding: 50px 30px;
    }
    .column:nth-child(2) {
      border: transparent;
      border-top: 1px solid #e6ecf8;
      border-bottom: 1px solid #e6ecf8;
    }
  }
</style>
