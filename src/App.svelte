<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Navbar from "./lib/Common/Navbar.svelte";
  import Sidebar from "./lib/Common/Sidebar.svelte";
  import Footer from "./lib/Common/Footer.svelte";
  import Home from "./lib/Home/Home.svelte";
</script>

<Router primary={false}>
  <Sidebar />
  <div class="container">
    <Navbar />

    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="projects" />
      <Route path="project" />
    </main>
    <Footer />
  </div>
</Router>

<style>
  .container {
    margin-left: clamp(35px, 6vw, 70px);
  }
</style>
