<script>
  import Timer from "./Timer.svelte";
  import TimerblockList from "./Timeblock/TimeblockList.svelte";

  const timeOptions = [10, 90, 60, 40, 30, 70];
  let times = [];
  let targetTime = 0;

  const addTime = ({ detail: { time } }) => {
    times = [...times, time];
    targetTime += time;
    console.log(targetTime)
  };

  const restartTime = ({ detail }) => {
    const newTimes = detail ? detail.times : null
    targetTime = 0;
    times = newTimes ? [...newTimes] : [];
  };
</script>

<style>
  .time-list {
    border: 1px solid #000;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
  }

  .time-list span:not(:last-child) {
    margin-right: 10px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="time-list flex-center">
  {#each times as time}
    <span>{time}</span>
  {/each}
</div>

<Timer on:restartTime={restartTime} {times} {targetTime} />

<TimerblockList on:addTime={addTime} times={timeOptions} />
