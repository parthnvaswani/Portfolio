<script>
  import IntersectionObserver from "../utils/IntersectionObserver.svelte";
  let top = -50;
</script>

<div class="about">
  <div class="container">
    <IntersectionObserver let:intersecting {top}>
      <h1 class:intersecting>Hi, I’m Parth. Nice to meet you.</h1>
    </IntersectionObserver>
    <IntersectionObserver let:intersecting {top}>
      <h2 class:intersecting>
        I am a web designer & full-stack developer from India. I've worked with
        most of the popular frameworks as a junior developer and freelancer. I
        specialise in creating interactive experiences, functional interfaces
        and secure & scalable backend. I am bachelors in computer applications
        and love adopting and working with latest web technologies.
      </h2>
    </IntersectionObserver>
  </div>
</div>
<div class="wave">
  <svg viewBox="0 0 879 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M679.273 0C518.415 0 112.628 140.749 0 14.7888V256H879V46.9163C866.152 49.4661 801.912 0 679.273 0Z"
      fill="#7510F7"
    />
  </svg>
</div>

<style>
  .about {
    background-color: #7510f7;
    padding-top: 20vh;
    padding-bottom: 5vh;
    margin-top: -8px;
    color: white;
    margin-bottom: -4px;
  }
  .container {
    width: 55%;
    margin: auto;
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 300;
  }
  h1,
  h2 {
    opacity: 0;
    transform: translateY(20px);
  }
  h1 {
    transition: 0.5s;
  }
  h2 {
    transition: 0.5s 0.3s;
  }
  h2.intersecting,
  h1.intersecting {
    opacity: 1;
    transform: translateY(0px);
  }
  .wave {
    transform: rotate(180deg);
    line-height: 0;
    position: relative;
    z-index: -1;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 1.75rem;
      margin-bottom: 1.25rem;
    }
    h2 {
      font-size: 1rem;
    }
    .container {
      width: 80%;
    }
  }
</style>
