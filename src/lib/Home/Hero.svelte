<script>
  import myPhoto from "../../assets/Images/MyPhoto.png";
  import hero from "../../assets/Images/hero.svg";
</script>

<div class="hero">
  <h1 class="title">Designer & Full-stack Developer</h1>
  <h2 class="desc">
    A web designer and full-stack developer from India.<br />
    I create bespoke websites to help people go further online.
  </h2>
  <div class="image">
    <img
      src={myPhoto}
      class="png"
      alt="Parth Vaswani"
      height="100%"
      width="100%"
      draggable="false"
    />
  </div>
  <div class="heroimg">
    <img src={hero} alt="Tech" width="80%" />
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
    animation: titleBlip 1s ease-in-out infinite;
    border-radius: 10px;
    display: inline-block;
    padding: 5px;
  }
  @keyframes titleBlip {
    from {
      border-left: 3px solid black;
      border-right: 3px solid black;
    }
    to {
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
    }
  }
  .desc {
    font-size: clamp(10px, 4vw, 30px);
    font-weight: 100;
    margin-bottom: 2em;
  }
  .image {
    background-color: #7510f7;
    border-radius: 50%;
    overflow: hidden;
    width: clamp(130px, 30vw, 250px);
    display: inline-block;
    line-height: 0;
    position: relative;
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
