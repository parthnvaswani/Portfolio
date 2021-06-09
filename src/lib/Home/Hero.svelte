<script>
  import myPhoto from "../../assets/Images/MyPhoto.png";
</script>

<div class="hero">
  <h1 class="title">Designer & Full-stack Developer</h1>
  <h3 class="desc">
    A web designer and full-stack developer from India.<br />
    I create bespoke websites to help people go further online.
  </h3>
  <div class="image">
    <img src={myPhoto} alt="Parth Vaswani" height="100%" width="100%" />
  </div>
</div>

<style>
  .hero {
    padding: 3vh calc(var(--nav-width) + 5px);
    text-align: center;
  }
  .title {
    font-size: clamp(20px, 3.5vw, 70px);
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
    font-size: clamp(10px, 2vw, 60px);
    font-weight: 100;
    margin-bottom: 2em;
  }
  .image {
    background-color: #7510f7;
    border-radius: 50%;
    overflow: hidden;
    width: clamp(130px, 30vw, 250px);
    display: inline-block;
  }
</style>
