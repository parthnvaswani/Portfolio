<script>
  import githubImg from "../../assets/Images/github.svg";
  import linkedinImg from "../../assets/Images/linkedin.svg";
  import instagramImg from "../../assets/Images/instagram.svg";
  import twitterImg from "../../assets/Images/twitter.svg";

  let dur = "0.2s";
  let changeLocation = false;
  const style = getComputedStyle(document.body);
  const timeout =
    (+style.getPropertyValue("--preload-delay").trim().slice(0, -1) +
      +style.getPropertyValue("--preload-duration").trim().slice(0, -1)) *
    1000;
  setTimeout(() => {
    dur = "0.9259259259259258s";
    changeLocation = true;
    document.body.style.overflowY = "scroll";
  }, timeout);
  function preloadClicked() {
    if (changeLocation) window.location = "/";
  }
</script>

<div class="preload" on:click={preloadClicked}>
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="margin: auto; display: block; shape-rendering: auto"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(50 50)">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;32.72727272727273"
          keyTimes="0;1"
          {dur}
          repeatCount="indefinite"
        />
        <path
          d="M21.719806628973473 -3.5 L28.719806628973473 -3.5 L28.719806628973473 3.5 L21.719806628973473 3.5 A22 22 0 0 1 20.164106920128635 8.798226645956591 L20.164106920128635 8.798226645956591 L26.052881649946904 12.582712368145774 L22.26839592775772 18.471487097964044 L16.37962119793945 14.68700137577486 A22 22 0 0 1 12.206445736914288 18.30307849712083 L12.206445736914288 18.30307849712083 L15.114350827927494 24.670502464602457 L8.746926860445862 27.578407555615666 L5.839021769432658 21.210983588134038 A22 22 0 0 1 0.3733242788538792 21.996832248822063 L0.3733242788538792 21.996832248822063 L-0.6228795890591158 28.925582341988594 L-7.551629682225641 27.929378474075598 L-6.555425814312645 21.000628380909067 A22 22 0 0 1 -11.578324999959333 18.706747183711997 L-11.578324999959333 18.706747183711997 L-16.16235013757633 23.996994204191807 L-21.45259715805613 19.41296906657481 L-16.868572020439135 14.122722046095003 A22 22 0 0 1 -19.85393789982063 9.477402063332867 L-19.85393789982063 9.477402063332867 L-26.57038871512211 11.449529961222876 L-28.542516613012115 4.733079145921399 L-21.826065797710633 2.760951248031391 A22 22 0 0 1 -21.826065797710633 -2.7609512480313856 L-21.826065797710633 -2.7609512480313856 L-28.542516613012115 -4.7330791459213915 L-26.57038871512211 -11.44952996122287 L-19.85393789982063 -9.477402063332864 A22 22 0 0 1 -16.868572020439142 -14.122722046095001 L-16.868572020439142 -14.122722046095001 L-21.45259715805614 -19.41296906657481 L-16.162350137576336 -23.9969942041918 L-11.578324999959339 -18.706747183711993 A22 22 0 0 1 -6.55542581431266 -21.000628380909063 L-6.55542581431266 -21.000628380909063 L-7.551629682225657 -27.92937847407559 L-0.6228795890591132 -28.925582341988594 L0.37332427885388353 -21.996832248822063 A22 22 0 0 1 5.839021769432644 -21.21098358813404 L5.839021769432644 -21.21098358813404 L8.746926860445846 -27.57840755561567 L15.114350827927488 -24.670502464602464 L12.206445736914286 -18.303078497120833 A22 22 0 0 1 16.379621197939446 -14.687001375774862 L16.379621197939446 -14.687001375774862 L22.268395927757716 -18.471487097964044 L26.052881649946904 -12.582712368145765 L20.164106920128635 -8.798226645956582 A22 22 0 0 1 21.71980662897347 -3.500000000000013 M0 -13A13 13 0 1 0 0 13 A13 13 0 1 0 0 -13"
          fill="#0a0a0a"
        />
      </g>
    </g>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
      PNV
    </text>
  </svg>
</div>
<div class="sidebar">
  <div class="name">
    <div class="gear" />
    Parth Vaswani
  </div>
  <ul>
    <li>
      <a href="https://github.com/parthnvaswani/" target="blank"
        ><img src={githubImg} alt="GitHub" width="100%" /></a
      >
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/parth-vaswani-80b427174/"
        target="blank"><img src={linkedinImg} alt="LinkedIn" width="100%" /></a
      >
    </li>
    <li>
      <a href="https://www.instagram.com/parthnvaswani/" target="blank"
        ><img src={instagramImg} alt="Instagram" width="100%" /></a
      >
    </li>
    <li>
      <a href="https://twitter.com/parthnvaswani" target="blank"
        ><img src={twitterImg} alt="Twitter" width="100%" /></a
      >
    </li>
  </ul>
</div>

<style>
  /* preloader */
  .preload {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    animation: preload var(--preload-duration) ease-in-out var(--preload-delay)
        forwards,
      preloadOver 0.5s ease var(--preload-delay) forwards;
    background-color: white;
    cursor: pointer;
    transition: 0.5s;
  }
  .preload:hover {
    transform: scale(1.5);
  }
  @keyframes preload {
    to {
      height: var(--sidebar-width);
      width: var(--sidebar-width);
    }
  }
  @keyframes preloadOver {
    to {
      background-color: transparent;
    }
  }
  .preload svg text {
    font-size: 70%;
    font-weight: bold;
  }

  /* navigation */
  .sidebar {
    background-color: gray;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: var(--sidebar-width);
  }
  ul {
    list-style: none;
    margin-top: auto;
    width: 100%;
  }
  li {
    width: 70%;
    margin: 12px auto;
  }
  .name {
    writing-mode: vertical-rl;
    color: white;
    font-size: clamp(25px, 3vw, 60px);
    display: flex;
    align-items: center;
  }
  .name .gear {
    background-color: rgb(241, 242, 243);
    height: var(--sidebar-width);
    width: var(--sidebar-width);
    margin-bottom: 5px;
  }
  img {
    transition: 0.5s;
  }
  a:focus img,
  a:hover img {
    transform: scale(1.2);
  }
</style>
