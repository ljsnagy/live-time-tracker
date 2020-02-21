import XLSX from 'xlsx';
import Time from './Time';

const TS_TIME_COL = 'A';
const TS_ACTIVITY_COL = 'C';
const TS_LENGTH_COL = 'D';
const TS_ACTIVITY_LIST_OFFSET = 3;

export default function parseTimeSheet(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const activities = [];

        for (
          let row = TS_ACTIVITY_LIST_OFFSET;
          worksheet[`${TS_TIME_COL}${row}`];
          row += 1
        ) {
          activities.push({
            time: worksheet[`${TS_TIME_COL}${row}`].w,
            name: worksheet[`${TS_ACTIVITY_COL}${row}`].w,
            seconds: Time.parse(worksheet[`${TS_LENGTH_COL}${row}`].w),
          });
        }

        resolve(activities);
      } catch (err) {
        reject(err);
      }
    };

    reader.readAsArrayBuffer(file);
  });
}
