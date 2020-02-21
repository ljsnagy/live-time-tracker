<script>
  import uniqId from './utils/uniqId';
  import timer from './stores/Timer';
  import TimeSheetInput from './components/TimeSheetInput.svelte';
  import Activity, { resetTimers as resetActivityTimers } from './components/Activity.svelte';
  import Button from './components/Button.svelte';

  let activities = [];
  let activeActivity = -1;

  $: hasActivities = !!activities.length;
  $: isLessonInProgress = activeActivity !== -1;

  function start() {
    timer.start();
    activeActivity = 0;
  }

  function finish() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Very buggy in firefox?
    timer.stop();
  }

  function reset() {
    timer.reset();
    resetActivityTimers();
    activeActivity = -1;
  }

  function onTimesheetParse(e) {
    activities = e.detail.map((activity) => ({
      ...activity,
      id: uniqId(),
    }));

    reset();
  }

  function nextActivity() {
    if (activeActivity < activities.length) {
      activeActivity += 1;
      if (activeActivity === activities.length) {
        finish();
      }
    }
  }

  function prevActivity() {
    if (activeActivity >= 0) {
      activeActivity -= 1;
      if (activeActivity === -1) {
        reset();
      }
    }
  }

  function nextActivityOnEnter(e) {
    // If enter was pressed and it wasn't on a specific element.
    if (e.keyCode === 13 && e.target === document.body) {
      nextActivity();
    }
  }

  function getTotalSecondsUpTo(index) {
    return activities
      .slice(0, index)
      .reduce((acc, { seconds }) => acc + seconds, 0);
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
    <TimeSheetInput on:parse={onTimesheetParse} />
  </header>

  <main>
    {#if hasActivities}
      <div class="lesson-header">
        {#if !isLessonInProgress}
          <Button on:click={start}>Start Lesson</Button>
        {:else}
          <Button warning on:click={reset}>Reset Tracker</Button>
        {/if}
      </div>
    {/if}
    {#each activities as { id, name, seconds }, index (id)}
      <Activity
        {name}
        {seconds}
        accumulatedSeconds={getTotalSecondsUpTo(index)}
        active="{activeActivity === index}"
        on:next={nextActivity}
        on:back={prevActivity}
      />
    {/each}
  </main>
</div>	