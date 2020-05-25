<script>
  import TimeblockPreview from "./TimeblockPreview.svelte";
	import { createEventDispatcher } from 'svelte';

  export let times;

	const dispatch = createEventDispatcher();

  const addTime = ({detail: {time}}) => {
    dispatch('addTime', {time})
  }
</script>

<style>
  .timeblock-list-container {
    border: 1px solid #000;
    padding:10px 0;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="timeblock-list-container">
  {#each times as time}
    <TimeblockPreview on:addTime={addTime} {time} />
  {/each}
</div>
