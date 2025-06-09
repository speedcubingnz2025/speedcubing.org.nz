<script>
  const images = [
    "i1.webp",
    "i3.webp",
    "i4.webp",
    "i5.webp",
    "i6.webp",
    "i7.webp",
    "i8.webp",
  ];
</script>

<section>
  {#each images as src}
    <img src="competitions/image-row/{src}" alt="competition" />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    background-color: var(--colorBlack2);
  }
  img {
    height: 200px;
    width: calc(100vw / 7);
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    section {
      overflow-x: auto;
      scroll-behavior: smooth;
      scrollbar-width: none; /* Firefox */
    }
    img {
      width: 200px;
    }
    section:-webkit-scrollbar {
      display: none; /* Chrome */
    }
  }
</style>
