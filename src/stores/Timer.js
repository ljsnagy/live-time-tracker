import { writable } from 'svelte/store';

function createTimer() {
  let interval;

  const stopTimer = () => {
    clearInterval(interval);
    interval = null;
  };

  const { subscribe, set, update } = writable(0, () => stopTimer);

  const startTimer = () => {
    if (!interval) {
      const started = Date.now();
      interval = setInterval(() => {
        update(() => Math.floor((Date.now() - started) / 1000));
      }, 500);
    }
  };

  return {
    subscribe,
    start: startTimer,
    reset: () => {
      set(0);
      stopTimer();
    },
  };
}

export default createTimer();
export { createTimer };
