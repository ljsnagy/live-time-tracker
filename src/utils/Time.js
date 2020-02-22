export default {
  parse(str) {
    const [hour, mins] = str.split(':');
    return (Number(hour) * 60 * 60) + (Number(mins) * 60);
  },
  format(time) {
    const sign = time < 0 ? '+' : '-';
    const mins = String(Math.floor(Math.abs(time) / 60));
    const secs = String(Math.abs(time) % 60);
    return `${sign}${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`;
  },
};
