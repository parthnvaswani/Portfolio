<script>
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Conclusion from "./Conclusion.svelte";
  import { fly } from "svelte/transition";
</script>

<div class="home" in:fly={{ x: -200, duration: 500 }}>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Conclusion />
</div>
