import { writable } from 'svelte/store';

function createTimer() {
  let interval;

  const stopTimer = () => clearInterval(interval);

  const { subscribe, set, update } = writable(0, () => stopTimer);

  const startTimer = () => {
    stopTimer();

    let last = Date.now();
    interval = setInterval(() => {
      const now = Date.now();
      update((t) => t + Math.floor((now - last) / 1000));
      last = now;
    }, 1000);
  };

  return {
    subscribe,
    start: startTimer,
    stop: stopTimer,
    reset: () => {
      set(0);
      stopTimer();
    },
  };
}

export default createTimer();
export { createTimer };
