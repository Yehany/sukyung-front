import moment from 'moment';
import lzString from 'lz-string';

export const getDiffTimeFormat = (time: string | null | undefined) => {
  const diffTime = moment().diff(moment(time));
  const duration = moment.duration(diffTime);
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hrs = duration.hours();
  const mins = duration.minutes();
  const secs = duration.seconds();

  if (years) {
    return `${years}년 전`;
  }
  if (months) {
    return `${months}달 전`;
  }
  if (days) {
    return `${days}일 전`;
  }
  if (hrs) {
    return `${hrs}시간 전`;
  }
  if (mins) {
    return `${mins}분 전`;
  }
  if (secs) {
    return `${secs}초 전`;
  }

  return '';
};

export function getUuid(): string {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid.replace(/-/gi, '').toLowerCase();
}

export function saveLocalData(key: string, val: string): void {
  const storage = window.localStorage;
  if (storage) {
    try {
      storage.setItem(key, lzString.compressToUTF16(val));
    } catch (e) {
      console.error('Storage Full ... clean old data...');
      for (const k in storage) {
        if (k.indexOf('DATA_MESSAGE_DETAIL_') > -1) {
          storage.removeItem(k);
        }
      }
      storage.setItem(key, lzString.compressToUTF16(val));
    }
  }
}

export function loadLocalData(key: string): string | null {
  const storage = window.localStorage;
  if (storage) {
    const keyValue = storage.getItem(key);
    if (keyValue) return lzString.decompressFromUTF16(keyValue);
  }
  return null;
}

export function removeLocalData(key: string): void {
  const storage = window.localStorage;
  if (storage) {
    storage.removeItem(key);
  }
}
