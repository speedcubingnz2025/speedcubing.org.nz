<script>
  import CubeClubCard from "./CubeClubCard.svelte";
  const clubs = [
    {title: "Auckland Speedcubing Club", location: "Auckland", src: "asc.png", link: "https://www.facebook.com/AucklandSpeedcubing/"},
    {title: "Christchurch Speedcubers", location: "Christchurch", src: "chch-cubers.png", link: "https://www.speedcube.co.nz/pages/christchurch-speedcubers"},
    {title: "Dunedin Speedcubers", location: "Dunedin", src: "dunedin.png", link: "https://cubeclubs.nz/meetups"},
    {title: "Kapiti Cubers", location: "Paraparaumu", src: "kapiti.png", link: "https://kapiticubers.wordpress.com/"},
    {title: "Manawatū Cubers", location: "Palmerston North", src: "manawatu.png", link: "https://www.facebook.com/Manawatucubers/"},
    {title: "Taranaki Cubers", location: "New Plymouth", src: "taranaki.png", link: "https://www.facebook.com/taranakicubers"},
    {title: "UC Cube Society", location: "Christchurch", src: "uc-cube-soc.png", link: "https://ucsa.org.nz/club/8865/"},
    {title: "Waikato Speedcubers", location: "Hamilton", src: "waikato.png", link: "https://www.facebook.com/waikatospeedcubers"},
  ]
</script>
<section>
    {#each clubs as {title, location, src, link}}
      <div><CubeClubCard {title} {location} src="/getting-started/clubs/{src}" {link}></CubeClubCard></div>
    {/each}
</section>

<style>
  section{
    padding: 32px 0px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 16px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px){
     section{
      grid-template-columns: auto auto;
     }
  }


</style>