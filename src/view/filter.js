import {createElement} from '../utils.js';

const getMarkup = (name, count) => {
  return `<div class="trip-filters__filter">
<input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}">
<label class="trip-filters__filter-label" for="filter-${name}">${name} ${count}</label>
</div>`;
};

const createFilterMarkup = (filters) => {
  return `<div class="trip-controls__filters">
  <h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
  ${filters.map((filter) => getMarkup(filter.name, filter.count))
    .join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  </div>`;
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterMarkup(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
