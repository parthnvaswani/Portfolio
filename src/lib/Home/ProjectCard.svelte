<script>
  import { Link } from "svelte-navigator";
  import github from "../../assets/Images/github.svg";
  import preview from "../../assets/Images/preview.svg";
  import ZoomImage from "../Common/ZoomImage.svelte";

  export let project;

  const { images, title, name, technologies, source, website } = project;

  let active = false;
  function zoomIn() {
    active = true;
  }
  function zoomOut() {
    active = false;
  }
</script>

<div class="card">
  <div class="image-container" on:click={zoomIn}>
    <img src={images[0]} alt="" class="poster" loading="lazy" />
  </div>
  <div class="desc-container">
    <div class="desc__content">
      <div class="project-title">{title}</div>
      <ul class="tech-used">
        {#each technologies as technology}
          <li>{technology}</li>
        {/each}
      </ul>
      <div class="links">
        <a href={website} class="link">
          <img
            src={preview}
            alt="visit site"
            height="100%"
            width="100%"
            loading="lazy"
          />
        </a>
        {#if source}
          <a href={source} class="link">
            <img
              src={github}
              alt="view code"
              height="105%"
              width="100%"
              loading="lazy"
            />
          </a>
        {/if}
      </div>
      <Link to={`/project/${name}`}><div class="more-btn">View more</div></Link>
    </div>
  </div>
  <ZoomImage image={images[0]} {active} {zoomOut} />
</div>

<style>
  .card {
    position: relative;
    width: calc(clamp(280px, 28vw, 550px) + 15px);
    padding-bottom: 130px;
    margin-bottom: 15px;
  }
  .image-container {
    position: relative;
    z-index: 1;
    width: 28vw;
    min-width: 270px;
    max-width: 540px;
    margin: auto;
    cursor: zoom-in;
  }
  .poster {
    width: 100%;
    box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  }
  .desc-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    position: absolute;
    top: 20px;
    box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  }
  .desc__content {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
  }
  .project-title {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 1em;
    font-weight: bolder;
  }
  .tech-used {
    list-style: none;
    display: inline-flex;
    gap: 5px;
    font-size: 0.9rem;
    margin-bottom: 8px;
    color: white;
  }
  .tech-used li {
    background-color: var(--primary-color);
    padding: 5px;
    border-radius: 5px;
  }
  .links {
    display: flex;
    padding: 5px;
    justify-content: center;
    gap: 20px;
  }
  .link {
    height: 24px;
    width: 24px;
  }
  .more-btn {
    cursor: pointer;
    width: 100%;
    background: var(--primary-color);
    color: white;
    padding: 15px 0;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    border: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  @media (hover) {
    .desc-container {
      opacity: 0;
    }
    .card:hover .desc-container {
      opacity: 1;
      animation: bounceIn 0.6s linear;
    }
    @keyframes bounceIn {
      0%,
      20%,
      40%,
      60%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
      20% {
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }
      40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }
      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.01, 1.01, 1.01);
        transform: scale3d(1.01, 1.01, 1.01);
      }
      80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
      }
      to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
</style>
