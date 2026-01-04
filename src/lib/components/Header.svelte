<script>
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { onMount } from 'svelte';
  
  let menuOpen = false;
  let scrolled = false;
  const SHRINK_AT = 100;

  afterNavigate(() => {
    menuOpen = false;
  });

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > SHRINK_AT;
    }
    window.addEventListener('scroll', onScroll, {passive: true})
  });

</script>

<header class="header" class:scrolled>
    <a href="/" class="img-link">
      <img src="logo/full-white.webp" alt="SNZ logo" />
    </a>
    <button
      class="hamburger"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="menu"
    >
      <i class="bi bi-list"></i>
    </button>

    <div class="nav-wrapper" class:open={menuOpen}>
      <div class="nav">
        <a href="./getting-started" class:active={page.url.pathname === '/getting-started'}>GETTING STARTED</a>
        <a href="./competitions" class:active={page.url.pathname === '/competitions'}>COMPETITIONS</a>
        <a href="./nzs-best" class:active={page.url.pathname === '/nzs-best'}>NZ'S BEST</a>
        <a href="./about-us" class:active={page.url.pathname === '/about-us'}>ABOUT</a>
        <a href="./faq" class:active={page.url.pathname === '/faq'}>FAQ</a>
        <a href="./contact-us" class:active={page.url.pathname === '/contact-us'}>CONTACT</a>
      </div>
    </div>
</header>

<style>
  .header {
    position: sticky;
    box-sizing: border-box;
    padding: 16px;
    height: 100px;
    gap: 48px;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--colorBlack3);
    transition: height 0.4s ease, padding 0.4s ease;
    overflow-anchor: none;
  }

  .header.scrolled {
    height: 50px;
    padding: 8px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    gap: 16px 48px;
    box-sizing: border-box;
    z-index: 20;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    user-select: none;
    font-weight: 100;
    color: var(--colorWhite);
  }

  .img-link {
    height: 100%;
  }

  img {
    height: 100%;
  }

  .nav a {
    font-weight: 400;
    font-family: 'Spartan MB', sans-serif;
    font-size: clamp(1rem, 1vw, 1.2rem);
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
  }

  .active::after {
    content: "";
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 8px;
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    .header {
      justify-content: space-between;
      width: 100%;
    }
    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: var(--colorBlack3);
      padding: 8px 0px;
    }

    .nav-wrapper {
      position: absolute;
      top: calc(100% - 1px);
      width: 100%;
      left: 0;
      max-height: 0;
      transition: max-height 0.25s ease;
      overflow: hidden;
    }

    .nav-wrapper.open {
      max-height: 500px;
    }

    .hamburger {
      display: block;
    }
  }
</style>
