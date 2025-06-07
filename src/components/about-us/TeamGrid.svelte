<script>
  import TeamCard from "./TeamCard.svelte";
  const people = [
    {name: "Wee-Yeong Eyou", roles: "President", src: "Wee-Yeong.jpg"},
    {name: "Richard Foster", roles: "Secretary, Tech Team Leader", src: "Richard.jpg"},
    {name: "Rohan Braganza", roles: "Treasurer", src: "Rohan.png"},
    {name: "Alex Asbery", roles: "Competition Team Leader, WCA Regional Delegate", src: "Alex.png"},
    {name: "Cam Gibson", roles: "Policy", src: "Cam.jpg"},
    {name: "James Macdiarmid", roles: "Promo Team Leader", src: "James_M.jpg"},
    {name: "David Lim", roles: "WCA Delegate", src: "David.jpg"},
    {name: "Luke Heath-Edwards", roles: "WCA Delegate", src: "Luke.jpg"},
    {name: "Daniel Fraser", roles: "WCA Delegate", src: "Daniel.jpg"},
    {name: "Liam Wadek", roles: "WCA Junior Delegate", src: "Liam.jpg"},
    {name: "Caleb Hall", roles: "WCA Junior Delegate", src: "Caleb.jpg"},
    {name: "Jack Maddigan", roles: "WCA Junior Delegate", src: "Jack.jpg"},
    {name: "James Dyer", roles: "WCA Trainee Delegate", src: "James_D.jpg"},
  ]
</script>
<h2>OUR TEAM</h2>
<section>
    {#each people as {name, roles, src}}
      <TeamCard {name} {roles} src="/about_us/{src}"></TeamCard>
    {/each}
</section>

<style>
  section{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px 24px;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 768px){
     section{
      grid-template-columns: repeat(2, 1fr);
     }
  }


</style>