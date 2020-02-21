<script>
  import { createEventDispatcher } from 'svelte';
  import parseTimeSheet from '../utils/parseTimeSheet';

  const dispatch = createEventDispatcher();

  async function handleTimeSheet(file) {
    if (file) {
      dispatch('parse', await parseTimeSheet(file));
    }
  }
</script>


<style>
  .container {
    width: 100%;
    text-align: center;
  }

  .file-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }

  .file-dropzone {
    display: block;
    padding: 1rem;
    border: 3px dashed #AAA;
    border-radius: 6px;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
  }

  .file-help {
    opacity: 0.8;
  }
</style>

<div class="container">
  <input
    type="file"
    id="file-input"
    class="file-input"
    name="file-input"
    accept=".xlsx"
    on:change="{(e) => handleTimeSheet(e.target.files[0])}"
  >
  <label
    for="file-input"
    id="file-dropzone"
    class="file-dropzone"
    on:drop|preventDefault="{(e) => handleTimeSheet(e.dataTransfer.files[0])}"
    on:dragover|preventDefault
  >
    Drop Your Lesson's Time Tracker Here
    <br/>
    <small class="file-help">
      This is the xlsx file from the lesson plan
    </small>
  </label>
</div>