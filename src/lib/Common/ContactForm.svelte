<script>
  import { contactActive } from "../../store/store";
  import { set } from "../../API/contact";

  let active;

  contactActive.subscribe((value) => {
    active = value;
  });

  function closeContact() {
    contactActive.update(() => false);
  }

  const details = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  async function sendDetails(e) {
    e.preventDefault();
    const res = await set(details);
    if (!res) alert("Invalid details!");
    else {
      alert("Response submitted!");
      Object.keys(details).forEach((k) => (details[k] = ""));
      closeContact();
    }
  }
</script>

<div class="backdrop" class:active>
  <div class="container">
    <h1 class="brand">Contact Me</h1>
    <div class="wrapper">
      <div class="contact">
        <div class="alert">Your message has been sent</div>
        <form id="contactForm" on:submit={sendDetails}>
          <p>
            <label for="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              maxlength="36"
              bind:value={details.name}
            />
          </p>
          <p>
            <label for="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              maxlength="64"
              bind:value={details.company}
            />
          </p>
          <p>
            <label for="email">Email Address*</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              bind:value={details.email}
            />
          </p>
          <p>
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              bind:value={details.phone}
            />
          </p>
          <p class="full">
            <label for="message">Message*</label>
            <textarea
              name="message"
              rows="5"
              id="message"
              required
              minlength="10"
              maxlength="512"
              bind:value={details.message}
            />
          </p>
          <p>
            <button class="close" on:click={closeContact}>Close</button>
          </p>
          <p>
            <button class="submit" type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .close {
    color: white;
    background: red;
    cursor: pointer;
    border: 0;
    text-transform: uppercase;
    transition: 0.2s;
    font-weight: 400;
    font-size: 1em;
  }
  .backdrop {
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  .backdrop.active {
    display: flex;
    align-items: center;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  }
  .brand {
    text-align: center;
    color: white;
    transform: translateX(-100vw);
    animation: brandIn 0.3s ease-in forwards;
  }
  @keyframes brandIn {
    to {
      transform: translateX(0);
    }
  }
  .wrapper {
    transform: translateX(100vw);
    box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
    animation: wrapperIn 0.3s ease-in forwards 0.3s;
  }
  @keyframes wrapperIn {
    to {
      transform: translateX(0);
    }
  }
  .wrapper > * {
    padding: 1em;
  }
  .contact {
    background: #f9feff;
    border-radius: 5px;
  }
  .contact form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .contact form label {
    display: block;
  }
  .contact form p {
    margin: 0;
  }
  .contact form .full {
    grid-column: 1 / 3;
  }
  .contact form button,
  .contact form input,
  .contact form textarea {
    width: 100%;
    padding: 1em;
    border: 1px solid #c9e6ff;
    border-radius: 5px;
  }
  .submit {
    color: white;
    background: var(--primary-color);
    cursor: pointer;
    border: 0;
    text-transform: uppercase;
    transition: 0.2s;
    font-weight: 400;
    font-size: 1em;
  }
  .contact form button:hover,
  .contact form button:focus {
    background-color: black;
    outline: 0;
  }
  .alert {
    text-align: center;
    padding: 10px;
    background: #79c879;
    color: #fff;
    margin-bottom: 10px;
    display: none;
  }
  textarea {
    max-width: 600px;
  }
  @media (min-width: 400px) {
    .wrapper > * {
      padding: 2em;
    }
  }
</style>
