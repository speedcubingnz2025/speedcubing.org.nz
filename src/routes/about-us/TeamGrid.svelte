<script>
  import Person from "./Person.svelte";
  const people = [
    {name: "Wee-Yeong Eyou", roles: "President", src: "wee-yeong.jpg"},
    {name: "Richard Foster", roles: "Secretary, Tech Team Leader", src: "richard.jpg"},
    {name: "Rohan Braganza", roles: "Treasurer", src: "rohan.png"},
    {name: "Alex Asbery", roles: "Competition Team Leader, WCA Regional Delegate", src: "alex.png"},
    {name: "Cam Gibson", roles: "Policy", src: "cam.jpg"},
    {name: "James Macdiarmid", roles: "Promo Team Leader", src: "james-m.jpg"},
    {name: "David Lim", roles: "WCA Delegate", src: "david.jpg"},
    {name: "Luke Heath-Edwards", roles: "WCA Delegate", src: "luke.jpg"},
    {name: "Daniel Fraser", roles: "WCA Delegate", src: "daniel.jpg"},
    {name: "Liam Wadek", roles: "WCA Junior Delegate", src: "liam.jpg"},
    {name: "Caleb Hall", roles: "WCA Junior Delegate", src: "caleb.jpg"},
    {name: "Jack Maddigan", roles: "WCA Junior Delegate", src: "jack.jpg"},
    {name: "James Dyer", roles: "WCA Trainee Delegate", src: "james-d.jpg"},
  ]
</script>

<h2>OUR TEAM</h2>
<section>
    {#each people as {name, roles, src}}
      <Person {name} {roles} src="/about-us/people/{src}"></Person>
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