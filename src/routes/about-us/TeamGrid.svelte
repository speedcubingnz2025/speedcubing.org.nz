<script>
  import Person from "./Person.svelte";

  const people = [
    {name: "Wee-Yeong Eyou", roles: "President", src: "wee-yeong.jpg"},
    {name: "Richard Foster", roles: "Secretary, Tech Team Leader", src: "richard.jpg"},
    {name: "Rohan Braganza", roles: "Treasurer", src: "rohan.png"},
    {name: "Alex Asbery", roles: "Competition Team Leader, WCA Regional Delegate", src: "alex.png", link: "https://www.worldcubeassociation.org/persons/2013ASBE01"},
    {name: "Cam Gibson", roles: "Policy", src: "cam.jpg"},
    {name: "James Macdiarmid", roles: "Promo Team Leader", src: "james-m.jpg"},
    {name: "David Lim", roles: "WCA Delegate", src: "david.jpg", link: "https://www.worldcubeassociation.org/persons/2010LIMD01"},
    {name: "Luke Heath-Edwards", roles: "WCA Delegate", src: "luke.jpg", link: "https://www.worldcubeassociation.org/persons/2018HEAT01"},
    {name: "Daniel Fraser", roles: "WCA Delegate", src: "daniel.jpg", link: "https://www.worldcubeassociation.org/persons/2020FRAS02"},
    {name: "Liam Wadek", roles: "WCA Delegate", src: "liam.jpg", link: "https://www.worldcubeassociation.org/persons/2017WADE01"},
    {name: "Caleb Hall", roles: "WCA Junior Delegate", src: "caleb.jpg", link: "https://www.worldcubeassociation.org/persons/2019HALL04"},
    {name: "Jack Maddigan", roles: "WCA Junior Delegate", src: "jack.jpg", link: "https://www.worldcubeassociation.org/persons/2020MADD02"},
    {name: "James Dyer", roles: "WCA Trainee Delegate", src: "james-d.jpg", link: "https://www.worldcubeassociation.org/persons/2019DYER01"},
    {name: "Nick Ng", roles: "WCA Trainee Delegate", src: "Nick.png", link: "https://www.worldcubeassociation.org/persons/2024NGNI01"},
  ];
</script>

<h2>OUR TEAM</h2>
<section>
    {#each people as {name, roles, src, link}}
      {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer" class="person-link">
          <Person {name} {roles} src={`/about-us/people/${src}`} />
        </a>
      {:else}
        <Person {name} {roles} src={`/about-us/people/${src}`} />
      {/if}
    {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px 24px;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 768px) {
     section {
      grid-template-columns: repeat(2, 1fr);
     }
  }

  .person-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
</style>
