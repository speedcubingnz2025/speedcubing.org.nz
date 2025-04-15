<script>
  import logo from "../assets/logo.png";
  let menuOpen = false;
</script>

<header class="header">
  <div class="header">
    <div class="header-items">
      <a href="/"><img src={logo} alt="SNZ logo" /></a>
      <button class="hamburger" on:click={() => (menuOpen = !menuOpen)}>
        ☰
      </button>
    </div>

    <div class="nav" class:open={menuOpen}>
      <a href="./about.html">About</a>
      <a href="./competitions.html">Competitions</a>
      <a href="./faq.html">FAQ</a>
      <a href="./contact.html">Contact</a>
    </div>
  </div>
</header>

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f5f5f5;
  }

  .header-items {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 48px;
    padding: 8px;
    cursor: pointer;
    user-select: none;
  }

  img {
    width: 180px;
    padding: 16px;
  }

  .nav a {
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    padding: 16px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  .nav a:hover {
    color: #3777ff;
    transition: color 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    .header {
      flex-direction: column;
    }
    .nav {
      display: none;
      flex-direction: column;
      align-items: center;
    }
    .nav.open {
      display: flex;
    }
    .hamburger {
      display: flex;
    }
  }
</style>
