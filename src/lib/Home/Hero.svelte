<script>
  import myPhotoPng from "../../assets/Images/MyPhoto.png";
  import myPhotoWebp from "../../assets/Images/MyPhoto.webp";
  import IntersectionObserver from "../utils/IntersectionObserver.svelte";
  import HeroSvg from "./HeroSVG.svelte";
</script>

<div class="hero">
  <h1 class="title">Designer & Full-stack Developer</h1>
  <h2 class="desc">
    A web designer and full-stack developer from India.<br />
    I create bespoke websites to help people go further online.
  </h2>
  <div class="image">
    <picture>
      <source srcset={myPhotoWebp} type="image/webp" />
      <img
        src={myPhotoPng}
        class="png"
        alt="Parth Vaswani"
        height="100%"
        width="100%"
        draggable="false"
        loading="lazy"
      />
    </picture>
  </div>
  <div class="heroimg">
    <IntersectionObserver let:intersecting top={-100} bottom={1000}>
      <HeroSvg {intersecting} />
    </IntersectionObserver>
  </div>
</div>

<style>
  .hero {
    margin-top: 5em;
    padding: 3vh calc(var(--nav-width) + 5px);
    text-align: center;
  }
  .title {
    font-size: clamp(20px, 5vw, 60px);
    margin-bottom: 1em;
    animation: titleBlip 2s ease-in-out infinite;
    border-radius: 10px;
    display: inline-block;
    padding: 5px;
    max-width: 85%;
  }
  @keyframes titleBlip {
    0% {
      border-left: 3px solid black;
      border-right: 3px solid black;
    }
    50% {
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
    }
    100% {
      border-left: 3px solid black;
      border-right: 3px solid black;
    }
  }
  .desc {
    font-size: clamp(10px, 4vw, 30px);
    font-weight: 100;
    margin-bottom: 2em;
    display: inline-block;
    max-width: 85%;
  }
  .image {
    background-color: var(--primary-color);
    border-radius: 50%;
    overflow: hidden;
    width: clamp(130px, 30vw, 250px);
    margin: auto;
    line-height: 0;
    margin-bottom: 5em;
    cursor: zoom-in;
  }
  .png {
    transition: 0.5s;
  }
  .image:hover .png {
    transform: scale(1.2);
  }
  .heroimg {
    max-width: 860px;
    margin: auto;
  }
</style>
