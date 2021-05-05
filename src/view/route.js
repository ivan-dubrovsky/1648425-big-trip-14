import dayjs from 'dayjs';
import AbstractView from './abstract.js';

const createRouteMarkup = (wayPoints) => {
  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${wayPoints[0].destination} &mdash; ${wayPoints[1].destination} &mdash;
        ${wayPoints[2].destination}</h1>
        <p class="trip-info__dates">${dayjs(wayPoints[0].startDate).format('MMM DD')}&nbsp;
        &mdash;&nbsp;${dayjs(wayPoints[0].endDate).format('DD')}</p>
      </div>
    </section>`;
};

export default class Route extends AbstractView {
  constructor(wayPoints) {
    super();
    this._wayPoints = wayPoints;
  }

  getTemplate() {
    return createRouteMarkup(this._wayPoints);
  }
}
