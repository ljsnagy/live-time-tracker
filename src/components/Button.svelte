<script>
  export let secondary;
  export let warning;
</script>

<style>
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: #007bff;
    border: 1px solid #0062cc;
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .btn.secondary {
    background-color: #5a6268;
    border-color: #545b62;
  }

  .btn.warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #d39e00;
  }
</style>

<button class="btn" class:secondary class:warning on:click>
  <slot></slot>
</button>