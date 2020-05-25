<script>
  import { createEventDispatcher } from "svelte";

  export let targetTime;
  export let times;
  const dispatch = createEventDispatcher();
  let timePassed = 0;
  let secondsPast = 0;
  let minutesPast = 0;
  let timerStr = { min: "00", sec: "00" };
  $: timerStr = {
    sec: secondsPast < 10 ? `0${secondsPast}` : secondsPast,
    min: minutesPast < 10 ? `0${minutesPast}` : minutesPast
  };
  let timerInterval;
  const countTimer = () => {
    timePassed--;
    secondsPast--;
    if (secondsPast > 59) {
      minutesPast++;
      secondsPast = 0;
    }
    console.log(timePassed)
    if (timePassed <= 0) {
      clearInterval(timerInterval);
      times.shift();
      if (!times.length) {
        dispatch("restartTime");
        targetTime = 0;
        console.log(targetTime, timerInterval)
        return;
      }
      dispatch("restartTime", {times});
      timePassed = times[0];
      secondsPast = times[0];
      startTimer();
    }
  };

  const startTimer = () => {
    if (!targetTime) return;
    timePassed = times[0];
    secondsPast = times[0];
    timerInterval = setInterval(countTimer, 1000);
  };
</script>

<style>
  .timer-container {
    border: 1px solid #000;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  h1 {
    letter-spacing: 2.5px;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="timer-container">
  <h1>{timerStr.min}:{timerStr.sec}</h1>
  {#if targetTime && !timerInterval}
    <button on:click={startTimer} class="start-timer">Start Timer</button>
  {:else}
    <!-- <button on:click={startTimer} class="start-timer">Restart Timer</button> -->
  {/if}
</div>
