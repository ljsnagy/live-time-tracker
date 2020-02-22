<script>
  import Time from '../utils/Time';

  export let seconds;
</script>

<style>
  .time {
    color: #28a745;
    transition: color 0.2s;
  }
  .time.time-danger {
    color: #dc3545;
  }
</style>

<span class="time" class:time-danger="{seconds < 0}">
  {Time.format(seconds)}
</span>