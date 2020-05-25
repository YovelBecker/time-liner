<script>
	import { createEventDispatcher } from 'svelte';

  export let time;

	const dispatch = createEventDispatcher();
  let blockWidth = time * 3;

  const addTime = () => {
    dispatch('addTime', {time})
  }

</script>

<style>
  .timeblock-preview-container {
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin: 5px;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div on:click={addTime} style="width:{(time * 3)+16.5}px" class="timeblock-preview-container">
  <p>{time}</p>
</div>
