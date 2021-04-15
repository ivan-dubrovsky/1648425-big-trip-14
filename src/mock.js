import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import { getRandomInteger } from './utils.js';
import { TYPE_WAYPOINT, DESTINATIONS, DESCRIPTION_TEXT, DURATION} from './const.js';

const getRandomDescription = (arr, max) => {
  const startCount = getRandomInteger(0, arr.length - max);
  const endCount = startCount + getRandomInteger(1, arr.length - 1);
  return arr.slice(startCount, endCount).join(' ');
};

// Получить случайную дату
const randomDate = (start, end) => {
  const randomDay = getRandomInteger(start, end);
  return dayjs().add(randomDay, 'day').toDate();
};
const taxiOffers = [
  {
    title: 'Add luggage',
    price: 10,
  },
  {
    title: 'Upgrade to a business class',
    price: 120,
  },
];

const trainOffers = [
  {
    title: 'Add luggage',
    price: 10,
  },
  {
    title: 'Add meal',
    price: 15,
  },
];
const busOffers = [
  {
    title: 'Add luggage',
    price: 10,
  },
  {
    title: 'wi-fi',
    price: 5,
  },
];
const type = TYPE_WAYPOINT[getRandomInteger(0, TYPE_WAYPOINT.length - 1)];

// Дополнительные опции
const offers =  new Map();
offers.set('Taxi', taxiOffers);
offers.set('Train', trainOffers);
offers.set('Bus', busOffers);

// Точка маршрута
const createWaypoint = () => {
  dayjs.extend(dayjsRandom);
  const startDate = randomDate(-7, 7);
  const endDate = dayjs.soon(getRandomInteger(1,7), startDate).toDate();
  return {
    type: type,
    destination: DESTINATIONS[getRandomInteger(0, DESTINATIONS.length - 1)],
    information: {
      description: getRandomDescription(DESCRIPTION_TEXT, 5),
      photos: `http://picsum.photos/248/152?r=${getRandomInteger(0, 4)}`,
    },
    startDate: startDate,
    endDate: endDate,
    duration: DURATION[getRandomInteger(0, 2)],
    price: getRandomInteger(100, 1000),
    offers: offers.get(type), // <== Это считается объединением структур?
  };
};

const wayPoints = new Array(15).fill().map(() => createWaypoint());

const getFutureDate = (date) => {
  return dayjs().isBefore(dayjs(date)) || dayjs().isSame(dayjs(date));
};
const getPastDate = (date) => {
  return dayjs().isAfter(dayjs(date));
};

const getCurrentWayPoints = (start, end) => {
  return dayjs().isAfter(dayjs(start)) && dayjs().isBefore(dayjs(end));
};

const getCurrentPoints = (points) => {
  const arr = [];
  for(const point of points) {
    if (getCurrentWayPoints(point.startDate, point.endDate)) {
      arr.push(point);
    }
  }
  return arr.length;
};
console.log(getCurrentPoints(wayPoints));

const wayPointsMap = {
  everything: (points) => points.length,
  future: (points) => points.filter((point) => getFutureDate(point.startDate)).length + getCurrentPoints(wayPoints),
  past: (points) => points.filter((point) => getPastDate(point.endDate)).length + getCurrentPoints(wayPoints),
};

const generateFilter = (points) => {
  return Object.entries(wayPointsMap).map(([filterName, countPoints]) => {
    return {
      name: filterName,
      count: countPoints(points),
    };
  });
};

const filter = generateFilter(wayPoints);
console.log(filter);
export {wayPoints};
