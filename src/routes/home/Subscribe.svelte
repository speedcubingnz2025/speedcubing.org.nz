<script>
  import { supabase } from '$lib/supabase_client';
  import ContentColumn from '$lib/components/ContentColumn.svelte';

  let myName = '';
  let myEmail = '';
  let loading = false;
  let message = '';
  let isError = false;

  let formProcessedOk = false;

  async function handleSubmit() {
    loading = true;
    message = '';
    isError = false;

    // upsert entry into Supabase
    const { data, error } = await supabase
      .from('update_subscription_emails')
      .upsert([{ email_address: myEmail, user_name: myName }]);

    if (error) {
      console.error('Error inserting data:', error);
      message = error.message;
      isError = true;
    } else {
      console.log('Email saved successfully:', data);
      message = 'Thank you for subscribing!';

      // clear form
      myName = '';
      myEmail = '';

      formProcessedOk = true;
    }

    loading = false;
  }
</script>

<section>
   <ContentColumn>
    <h2 class="title">SUBSCRIBE</h2>
    <p>
      Sign up with your email address to receive competition announcements and
      updates about SNZ!
    </p>
  </ContentColumn>
  <div class="signup">
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="Name" id="name" bind:value={myName} required/>
        <input type="email" placeholder="Email Address" id="email" bind:value={myEmail} required/>
      {#if !formProcessedOk}
        <button type="submit" disabled={loading} class="btn">SIGN UP</button>
      {/if}
    </form>
    <div>
      {#if loading}
        <h5>SAVING...</h5>
      {/if}
    
      {#if message}
        <p class={isError ? 'error' : 'success'}>{message}</p>
      {/if}
    </div>
  </div>
</section>

<style>
  .error {
    color: red;
    margin-top: 10px;
  }
  .success {
    color: white;
    margin-top: 10px;
  }
  .signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 16px 8px;
  }
  
  input {
    border: none;
    border-bottom: 1px solid var(--colorGrey2);
    background: none;
    padding: 8px;
    color: var(--colorGrey2);
    border-radius: 0px;
    font-size: clamp(1rem, 1.2vw, 1.3rem);
  }

  input:focus {
    outline: none;
    box-shadow: none;
  }
  section {
    background-color: var(--colorBlack2);
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    form {
      flex-direction: column;
    }
    input[type="email"], input[type="text"], button{
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>

