<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import Video from "$lib/components/Video.svelte";
</script>

<section>
    <ContentColumn>
      <h2 class="title" id="your_first_competition">YOUR FIRST COMPETITION</h2>
      <p>
        Before the competition we'll send you an email with all the information
        you need to know. We'll also run a tutorial for new competitors on
        the day, to make sure you know how everything works and have a great
        experience. To make sure you're extra prepared though, we'd also suggest
        reading the official
        <a
          class="blueLink"
          href="https://documents.worldcubeassociation.org/edudoc/competitor-tutorial/tutorial.pdf"
          >competitor tutorial</a
        >, and watching the following video:
      </p>
      <Video
        title="WCA Competitor Tutorial"
        src="https://www.youtube.com/embed/dPL3eV-A0ww">
      </Video>
      <p>
        Still have questions? Check out our <a href="./faq" class="blueLink"
          >FAQ page</a
        >
        to find answers to all sorts of common questions, or feel free to
        <a href="./contact-us" class="blueLink">contact us</a>.
      </p>
      <br />
      <br />
      <h2 class="title" id="organising">ORGANISING A COMPETITION</h2>
      <p>
        Want a competition in your area? We're always on the lookout for more keen
        organisers!<br /><br />
        The most important part is finding a venue that's available on a suitable weekend,
        and in the right size/price range. You can usually look at past competitions
        to get an idea of the number of competitors you should expect for your area.
        After that, a good rule of thumb is that a venue needs to be 4 square meters
        per competitor, and cost no more than $30 per competitor.<br /><br />If
        you think you've found a suitable venue and want to go further, please
        read our
        <a href="/docs/organiser_guide.pdf" class="blueLink">organiser guide</a> to learn
        more, and contact us with the venue details so we can guide you through the
        rest of the process!
      </p>
    </ContentColumn>
</section>
    

<style>
  section{
    background-color: var(--colorBlack2);
  }
</style>
