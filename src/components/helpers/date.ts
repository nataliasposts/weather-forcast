import moment from 'moment';

export const formatTimestampToDate = (timestamp: number) =>
  moment(timestamp * 1000).format('DD.MM.YYYY');

export const formatTimestampToTime = (timestamp: number) =>
  moment(timestamp * 1000).format('HH:mm');

export const formatTimestateToHour = (timestamp: number) =>
  moment(timestamp * 1000)
    .subtract(3, 'hours')
    .format('dddd');

export const formatTimestampToShortDate = (timestamp: number) =>
  moment(timestamp * 1000)
    .subtract(3, 'hours')
    .format('MMM DD');
