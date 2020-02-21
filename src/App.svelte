<script>
  import TimeSheetInput from './components/TimeSheetInput.svelte';
  import Activity from './components/Activity.svelte';
  import Button from './components/Button.svelte';

  let activities = [];
  let hasActivities = false;
  let activeActivity = -1;

  $: hasActivities = !!activities.length;

  function reset() {
    activeActivity = -1;
  }

  function nextActivity() {
    if (activeActivity < activities.length) {
      activeActivity += 1;
    }
  }

  function prevActivity() {
    if (activeActivity >= 0) {
      activeActivity -= 1;
    }
  }

  function nextActivityOnEnter(e) {
    // If enter was pressed and it wasn't on a specific element.
    if (e.keyCode === 13 && e.target === document.body) {
      nextActivity();
    }
  }
</script>

<style>
  .container {
    max-width: 960px;
    margin: auto;
    padding: 0 1rem;
  }

  .lesson-header {
    margin: 1rem 0;
    text-align: center;
  }

  h1 {
    text-align: center;
  }
</style>

<svelte:window on:keydown={nextActivityOnEnter} />

<div class="container">
  <header>
    <h1>Live Time Tracker</h1>
    <TimeSheetInput on:parse="{(e) => { activities = e.detail; }}"/>
  </header>

  <main>
    {#if hasActivities}
      <div class="lesson-header">
        {#if activeActivity === -1}
          <Button on:click="{() => { activeActivity = 0; }}">
            Start Lesson
          </Button>
        {:else}
          <Button warning on:click={reset}>Reset Tracker</Button>
        {/if}
      </div>
    {/if}
    {#each activities as { name, minutes }, index}
      <Activity
        {name}
        {minutes}
        active="{activeActivity === index}"
        on:next={nextActivity}
        on:back={prevActivity}
      />
    {/each}
  </main>
</div>	