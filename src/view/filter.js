const getTemplate = (name, count) => {
  return `<div class="trip-filters__filter">
<input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}">
<label class="trip-filters__filter-label" for="filter-${name}">${name} ${count}</label>
</div>`;
};

const createFilterMarkup = (filters) => {
  return `<h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
  ${filters.map((filter) => getTemplate(filter.name, filter.count))
    .join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};
export { createFilterMarkup };
