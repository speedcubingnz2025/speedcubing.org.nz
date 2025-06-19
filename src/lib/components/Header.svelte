<script>
  import { afterNavigate } from '$app/navigation';
  import "bootstrap-icons/font/bootstrap-icons.css";

  let menuOpen = false;
  afterNavigate(() => {
    menuOpen = false;
  });
</script>

<header class="header">
  <div class="header">
    <a href="/"><img src="logo/full-white.webp" alt="SNZ logo" /></a>
    <button
      class="hamburger"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="menu"
    >
      <i class="bi bi-list"></i>
    </button>

    <div class="nav" class:open={menuOpen}>
      <a href="./getting-started">GETTING STARTED</a>
      <a href="./competitions">COMPETITIONS</a>
      <a href="./nzs-best">NZ'S BEST</a>
      <a href="./about-us">ABOUT</a>
      <a href="./faq">FAQ</a>
      <a href="./contact-us">CONTACT</a>
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
    font-weight: 400;
    font-family: 'Spartan MB', sans-serif;
    font-size: clamp(1rem, 1vw, 1.2rem);
    padding: clamp(12px, 2vw, 20px);
    text-decoration: none;
    color: #fff;
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
