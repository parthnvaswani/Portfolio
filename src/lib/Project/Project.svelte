<script>
  import projects from "../../data/projects";
  import ZoomImage from "../Common/ZoomImage.svelte";
  import Carousel from "svelte-carousel";
  import { fly } from "svelte/transition";

  export let name;

  window.scrollTo(0, 0);

  const { title, about, description, images, tech, resources, website } =
    projects.filter((project) => project.name === name)[0];

  let active = false,
    image;

  function zoomIn(img) {
    image = img;
    active = true;
  }
  function zoomOut() {
    active = false;
  }
</script>

<div class="container" in:fly={{ x: 200, duration: 500 }}>
  <header>
    <h1>{title}</h1>
    <h2>
      {description}
    </h2>
    <a href={website} target="blank">
      <span>Visit the website</span>
      <svg
        class="i-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 50 50"
        space="preserve"
        data-icon="facebook,"
      >
        <path
          d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z"
          fill="#ffffff"
        />
      </svg>
    </a>
  </header>
  <div class="carousal">
    <Carousel
      autoplay={true}
      autoplayDuration={4000}
      let:showPrevPage
      let:showNextPage
    >
      <div
        slot="prev"
        on:click={showPrevPage}
        class="custom-arrow custom-arrow-prev"
      >
        <i />
      </div>
      {#each images as image}
        <img
          src={image}
          alt={`${title} website`}
          loading="lazy"
          class="image"
          on:click={() => zoomIn(image)}
        />
      {/each}
      <div
        slot="next"
        on:click={showNextPage}
        class="custom-arrow custom-arrow-next"
      >
        <i />
      </div>
    </Carousel>
  </div>
  <div class="text">
    <div class="section">
      <h2>About this project</h2>
      <hr />
      {@html about}
    </div>
    <div class="section">
      <h2>Technologies used</h2>
      <hr />
      <ul>
        {#each tech as t}
          <li>{t}</li>
        {/each}
      </ul>
    </div>
    <div class="section">
      <h2>Resources</h2>
      <hr />
      <ul>
        {#each resources as resource}
          <li>
            {resource.text}
            <a target="blank" href={resource.link}>
              {resource.linkText}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <ZoomImage {image} {active} {zoomOut} />
</div>

<style>
  .image {
    cursor: zoom-in;
  }
  .custom-arrow {
    width: 20px;
    background-color: #000000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: opacity 150ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .custom-arrow-prev {
    left: 0;
  }
  .custom-arrow-prev i {
    border: solid white;
    border-width: 0 5px 5px 0;
    padding: 5px;
    transform: rotate(135deg);
    right: -4px;
    position: relative;
  }
  .custom-arrow-next {
    right: 0;
  }
  .custom-arrow-next i {
    transform: rotate(-45deg);
    left: -4px;
    border: solid white;
    border-width: 0 5px 5px 0;
    padding: 5px;
    position: relative;
  }
  .container {
    max-width: 1010px;
    width: 80vw;
    margin: auto;
  }
  header {
    margin-bottom: 2em;
  }
  header h1 {
    font-family: MontSerrat, Tahoma, Arial, sans-serif;
    font-size: 2.625em;
    margin-bottom: 20px;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: -2px;
    text-transform: lowercase;
    width: 100%;
    text-shadow: 2px 2px 0 rgb(0 0 0 / 15%);
  }
  header h2 {
    font-size: 1.15em;
    font-family: Lato, Helvetica, Arial, sans-serif;
    word-spacing: 0.02em;
    font-weight: 400;
    margin-bottom: 20px;
  }
  header a {
    display: inline-flex;
    text-decoration: none;
    vertical-align: middle;
    font-size: 12px;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    background-color: var(--primary-color);
    color: white;
    padding: 1em;
    border-radius: 5px;
    box-shadow: -4px 4px 0 #404040;
    transition: 0.2s;
  }
  header a:hover {
    box-shadow: -2px 2px 0 #404040;
  }
  header a:active {
    box-shadow: none;
  }
  header svg {
    height: 25px;
  }
  .section:nth-child(1) {
    text-align: justify;
  }
  hr {
    height: 1px;
    width: 50%;
    background-color: #484848;
    margin: 0.5em 0 1em;
  }
  .text h2 {
    font-size: 2em;
    line-height: 1.35em;
    font-weight: 600;
    letter-spacing: -0.045em;
    padding: 0;
    margin-bottom: 0.4em;
    margin-top: 0.4em;
  }
  :global(.proj_about) {
    margin-bottom: 1em;
    font-size: 1.3em;
    line-height: 1.65em;
    font-weight: 400;
  }
  ul {
    list-style: circle;
    padding: 0 1.4em;
    margin-bottom: 0.6em;
  }
  ul li {
    margin-bottom: 3px;
    font-size: 1.3em;
    line-height: 1.65em;
  }
  ul li a {
    font-weight: 700;
    padding: 1px 1px 0;
    font-size: 0.9em;
    text-transform: uppercase;
    color: black;
    word-wrap: break-word;
  }
  @media (max-width: 400px) {
    .section:nth-child(1) {
      text-align: left;
    }
  }
</style>
