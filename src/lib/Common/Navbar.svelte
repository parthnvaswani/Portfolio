<script>
  let active = false;

  function mobileMenu() {
    active = !active;
  }
</script>

<header>
  <div class="hamburger" on:click={mobileMenu} class:active>
    <span class="bar" />
    <span class="bar" />
    <span class="bar" />
  </div>
  <div class="links" class:active>
    <a href="Docs/Parth_Resume.pdf" target="blank">Resume</a>
    <button class="contactbutt">Contact Me</button>
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 4vh;
  }
  .links {
    margin-left: auto;
  }
  a {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: black;
    position: relative;
  }
  a::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #00121b;
    transition: 0.2s;
    transform: scaleX(0);
  }
  a:hover::after,
  a:focus::after {
    transform: scaleX(1);
  }
  .contactbutt {
    margin-left: 20px;
    display: inline-block;
    border: 2px solid black;
    color: black;
    padding: 10px;
    cursor: pointer;
    border-radius: 290486px;
    transition: 0.5s;
    background-color: transparent;
  }
  .contactbutt:hover,
  .contactbutt:focus {
    color: var(--secondary-color);
    background-color: black;
  }
  .hamburger {
    display: none;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }
  @media only screen and (max-width: 768px) {
    header {
      flex-direction: column;
    }
    .links {
      flex-direction: column;
      align-items: center;
      display: none;
      margin: auto;
      margin-top: 2em;
    }
    .links.active {
      display: flex;
    }
    header .contactbutt {
      margin: auto;
      margin-top: 10px;
    }
    .hamburger {
      display: block;
      cursor: pointer;
      margin-left: auto;
    }
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
</style>
