<script>
  import ProjectCard from "./ProjectCard.svelte";
  import projects from "../../data/projects";
</script>

<section>
  <h1 class="title">My Recent Projects</h1>
  <div class="projects">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<style>
  section {
    padding-bottom: 1rem;
    padding: 5rem 1.5rem;
    text-align: center;
  }
  .title {
    margin-bottom: 1.5rem;
    font-weight: 800;
    font-size: clamp(25px, 2.8vw, 60px);
  }
  .projects {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 4.75rem 0px;
    gap: 25px;
  }
</style>
