<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  let menuOpen = false;
</script>

<header class="header">
  <div class="header">
    <a href="/"><img src="logo/Full_white.webp" alt="SNZ logo" /></a>
    <button
      class="hamburger"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="menu"
    >
      <i class="bi bi-list"></i>
    </button>

    <div class="nav" class:open={menuOpen}>
      <a href="/">GETTING STARTED</a>
      <a href="./competitions">COMPETITIONS</a>
      <a href="./faq">TOP CUBERS</a>
      <a href="./contact">ABOUT</a>
      <a href="./faq">FAQ</a>
      <a href="./shop">SHOP</a>
      <a href="./contact">CONTACT</a>
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
    background-color: var(--colorBlack3);
    height: 100px;
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
    color: var(--colorWhite);
  }

  img {
    width: clamp(90px, 10vw, 8rem);
    padding: 16px;
  }

  .nav a {
    font-weight: 300;
    font-size: clamp(1rem, 1vw, 1.5rem);
    padding: clamp(12px, 2vw, 20px);
    text-decoration: none;
    color: var(--colorWhite);
    cursor: pointer;
  }

  .nav a:hover {
    color: var(--colorGrey2);
    transition: color 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    .header {
      justify-content: space-between;
      width: 100%;
    }
    .nav {
      display: none;
      position: absolute;
      top: 100px;
      flex-direction: column;
      align-items: center;
      background-color: var(--colorBlack2);
      width: 100%;
    }
    .nav a {
      padding: clamp(12px, 2vw, 20px);
    }
    .nav.open {
      display: flex;
    }
    .hamburger {
      display: block;
    }
  }
</style>
