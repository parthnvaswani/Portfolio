<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Navbar from "./lib/Common/Navbar.svelte";
  import Sidebar from "./lib/Common/Sidebar.svelte";
  import Footer from "./lib/Common/Footer.svelte";
  import Home from "./lib/Home/Home.svelte";
  import NotFound from "./lib/404/NotFound.svelte";
  import Project from "./lib/Project/Project.svelte";
  import ContactForm from "./lib/Common/ContactForm.svelte";
</script>

<Router primary={false}>
  <Sidebar />
  <div class="container">
    <Navbar />

    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="project/:name" let:params>
        <Project name={params.name} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </main>
    <ContactForm />
    <Footer />
  </div>
</Router>

<style>
  .container {
    margin-left: clamp(35px, 6vw, 70px);
  }
</style>
