import dayjs from 'dayjs';
import { getRandomInteger } from './utils.js';
import { TYPE_WAYPOINT, DESTINATIONS, DESCRIPTION_TEXT, DURATION, TIME } from './const.js';

const getRandomDescription = (arr, max) => {
  const startCount = getRandomInteger(0, arr.length - max);
  const endCount = startCount + getRandomInteger(1, arr.length - 1);
  return arr.slice(startCount, endCount).join(' ');
};

// Получить случайную дату
const randomDate = (start, end) => {
  const randomDay = getRandomInteger(start, end);
  const date = dayjs().add(randomDay, 'day').toDate();
  return dayjs(date).format('MM/DD/YYYY H:mm');
};

const randomTime = () => {
  return TIME[getRandomInteger(0, 3)];
};


// Точка маршрута
const createWaypoint = () => {
  return {
    type: TYPE_WAYPOINT[getRandomInteger(0, TYPE_WAYPOINT.length - 1)],
    destination: DESTINATIONS[getRandomInteger(0, DESTINATIONS.length - 1)],
    information: {
      description: getRandomDescription(DESCRIPTION_TEXT, 5),
      photos: `http://picsum.photos/248/152?r=${getRandomInteger(0, 4)}`,
    },
    startDate: randomDate(1, 7),
    startTime: randomTime(),
    endTime: randomTime(),
    endDate: randomDate(7, 20),
    duration: DURATION[getRandomInteger(0, 2)],
    price: getRandomInteger(100, 1000),
    offers: offer, // <== Это считается объединением структур?
  };
};

const offer = {
  type: 'taxi',
  offers: [
    {
      title: 'Upgrade to a business class',
      price: 120,
    }, {
      title: 'Choose the radio station',
      price: 60,
    },
  ],
};

const wayPoints = new Array(15).fill().map(() => createWaypoint());

export {wayPoints};
