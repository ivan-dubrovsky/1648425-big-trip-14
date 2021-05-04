import AbstractView from './abstract.js';

const getSumOfNumbers = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
};

const getPrices = (arr) => {
  const costs = [];
  arr.map((offer) => costs.push(offer.price));
  return costs;
};

const createCostMarkup = (wayPoint) => {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${getSumOfNumbers(getPrices(wayPoint))}</span>
  </p>`;
};

export default class Cost extends AbstractView {
  constructor(wayPoints) {
    super();
    this._wayPoints = wayPoints;
  }

  getTemplate() {
    return createCostMarkup(this._wayPoints);
  }
}

