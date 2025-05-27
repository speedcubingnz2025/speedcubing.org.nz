<script>
  let name;
  let email;
  let message;
  let error = false;
  let errors = [];
  let sent = false;
  function handleSubmit(){
    errors = [];
    if(!name){errors.push("Name")}
    if(!email){errors.push("Email")}
    if(!message){errors.push("Message")}
    error = errors.length > 0;
    if(error){return;}

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("form-name", "contact");

    fetch(window.location.pathname, {
      method: "POST",
      body: formData,
    })
    .then(() => {
      sent = true;
    })
    .catch((error) => console.error("Form submission error:", error));
  }
</script>

<section>
  {#if sent}
    <p>Thanks for contacting us!<br>We will be in touch shortly.</p>
  {:else}
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" on:submit|preventDefault={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <label for="name">Name</label>
      <input type="text" id="name" name="name" bind:value={name}/>
      
      <label for="email">Email</label>
      <input type="email" id="email" name="email" bind:value={email}/>
    
      <label for="message">Message</label>
      <textarea id="message" name="message" bind:value={message}></textarea>
      
      {#if error}
        <h4>Required: {errors.join(", ")}</h4>
      {/if}
      
      <input type="hidden" name="bot-field" />
      <input type="submit" class="btn" value="SEND"/>
    </form>
  {/if}
</section>

<style>
  section{
    padding-top: 16px;
    width: 50%;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  label{
    color: var(--colorGrey1);
    padding: 8px 0px 8px 0px;
  }
  input, textarea{
    background-color: var(--colorCompTable1);
    border: 1px solid var(--colorBlack1);
    color: #fff;
    padding: 8px;
    margin-bottom: 8px;
    /* border-radius: 4px; */
  }
   input:focus, textarea:focus {
    border: 1px solid var(--colorGrey2);
    outline: none;
  }
  input[type="submit"]{
    margin-top: 16px;
    padding: 4px 16px;
    align-self: flex-start;
    width: auto;
  }
  h4{
    color: var(--colorRed1);
  }

  .btn {
    font-weight: 400;
    background: none;
    color: var(--colorGrey1);
    padding: 12px 24px;
    cursor: pointer;
  }

  .btn:hover {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background-color: var(--colorGrey1);
    color: var(--colorBlack3);
  }
  @media screen and (max-width: 768px){
    section{
      width: 100%;
    }
  }
</style>