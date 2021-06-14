<script>
  import svelteImg from "../../assets/Images/madewithsvelte.png";
  import ogImg from "../../assets/Images/ogimage.jpg";

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];
</script>

<div class="conclusion">
  <a href="/">
    <img
      src={ogImg}
      class="webicon"
      alt="website icon"
      height="52"
      width="52"
    />
  </a>
  <div class="endnote">Have a nice {day}</div>
  <button class="contactbutt">Contact Me</button>
  <div class="credits">
    Icons made by <a
      class="credit1"
      href="https://www.flaticon.com/authors/eucalyp"
      target="blank"
      rel="noopener"
    >
      Eucalyp
    </a>
    &
    <a
      class="credit1"
      href="https://iconmonstr.com/"
      target="blank"
      rel="noopener"
    >
      Iconmonstr
    </a>
    <br />
    <a href="https://svelte.dev/" class="credit2" target="blank" rel="noopener">
      Made with &nbsp;
      <img
        height="35"
        width="35"
        src={svelteImg}
        alt="Made with svelte"
        loading="lazy"
      />
    </a>
  </div>
</div>

<style>
  .conclusion {
    padding: 3vh 0;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
  }
  .webicon {
    border-radius: 5px;
  }
  .endnote {
    margin: 0.9em 0px 1.3em 0px;
    font-weight: 300;
    font-size: 1.5rem;
  }
  .credits {
    margin: 2em auto 0px auto;
  }
  .credit1 {
    font-size: large;
    font-weight: bold;
    color: var(--secondary-color);
    text-decoration: none;
  }
  .credit2 {
    margin-top: 10px;
    color: var(--secondary-color);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  .contactbutt {
    display: inline-block;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    padding: 10px;
    cursor: pointer;
    border-radius: 290486px;
    transition: 0.5s;
    background-color: transparent;
  }
  .contactbutt:hover,
  .contactbutt:focus {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
</style>
