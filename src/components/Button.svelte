<script>
  export let warning;
</script>

<style>
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: #007bff;
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .warning {
    color: #212529;
    background-color: #ffc107;
  }
</style>

<button class="btn" class:warning on:click>
  <slot></slot>
</button>