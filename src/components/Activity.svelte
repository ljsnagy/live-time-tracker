<script>
  export let minutes;
  export let name;
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

  .minutes, .title {
    margin: 0;
    font-size: 1.2rem;
  }

  .minutes {
    margin-left: 1rem;
    float: right;
  }
</style>

<section class="container">
  <p class="minutes">{minutes} mins</p>
  <h2 class="title">{name}</h2>
</section>