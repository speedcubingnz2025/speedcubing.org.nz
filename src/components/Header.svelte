<script>
  let menuOpen = false;
</script>

<header class="header">
  <div class="header">
    <div class="header-items">
      <a href="/"><img src="logo/Full_white.webp" alt="SNZ logo" /></a>
      <button class="hamburger" on:click={() => (menuOpen = !menuOpen)}>
        ☰
      </button>
    </div>

    <div class="nav" class:open={menuOpen}>
      <a href="/">GETTING STARTED</a>
      <a href="./competitions.html">COMPETITIONS</a>
      <a href="./faq.html">TOP CUBERS</a>
      <a href="./contact.html">ABOUT</a>
      <a href="./contact.html">FAQ</a>
      <a href="./contact.html">SHOP</a>
      <a href="./contact.html">CONTACT</a>
    </div>
  </div>
</header>

<style>
  .header {
    position: sticky;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #101010;
    height: 100px;
  }

  .header-items {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav {
    display: flex;
    flex-direction: row;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 48px;
    padding: 8px;
    cursor: pointer;
    user-select: none;
    font-weight: 100;
    color: white;
  }

  img {
    width: 90px;
    padding: 16px;
  }

  .nav a {
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding: 0px 16px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  .nav a:hover {
    color: #aaaaaa;
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
      display: block;
    }
  }
</style>
