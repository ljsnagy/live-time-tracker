<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  export let active;
  export let minutes;
  export let name;

  let containerEl;

  const dispatch = createEventDispatcher();

  $: if (active && containerEl) {
    containerEl.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  function toggleCollapse(node, _active) {
    const setState = (expand) => {
      // eslint-disable-next-line no-param-reassign
      node.style.height = expand ? `${node.scrollHeight}px` : 0;
    };

    setState(_active);

    return {
      update: setState,
    };
  }
</script>

<style>
  .container {
    position: relative;
    margin: 1rem 2rem;
    padding: 1rem 0.5rem;
    border: 2px solid #888;
    border-radius: 6px;
    transition: margin 0.2s;
  }

  .container.active {
    margin-left: 0;
    margin-right: 0;
  }

  header {
    display: flex;
  }

  .title, .activity-timer {
    margin: 0;
    font-size: 1.2rem;
  }

  .title {
    flex: 1;
    align-self: center;
  }

  .activity-timer {
    margin-left: 1rem;
    transition: font-size 0.2s;
  }

  .active .activity-timer {
    font-size: 2rem;
  }

  .collapsible {
    clear: both;
    overflow: hidden;
    transition: height 0.2s;
  }

  .timer, .activity-timer {
    font-family: monospace;
  }

  .timer {
    margin: 0;
    margin-top: 1rem;
    font-size: 3rem;
    text-align: center;
  }

  .btn-back {
    float: right;
  }
</style>

<section class="container" class:active bind:this={containerEl}>
  <header>
    <h2 class="title">{name}</h2>
    <p class="activity-timer">-{minutes}:00</p>
  </header>
  <div class="collapsible" use:toggleCollapse={active}>
    <p class="timer">-5:00</p>
    <Button on:click="{() => dispatch('next')}">
      Next Activity
    </Button>
    <div class="btn-back">
      <Button warning on:click="{() => dispatch('back')}">
        Prev Activity
      </Button>
    </div>
  </div>
</section>