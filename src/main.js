import { createMenuMarkup } from './view/menu.js';
import { createRouteMarkup } from './view/route.js';
import { createCostMarkup } from './view/cost.js';
import { createFilterMarkup } from './view/filter.js';
import { createSortMarkup } from './view/sort.js';
import { createCreatingFormMarkup } from './view/creating-form.js';
import { createEditFormMarkup } from './view/edit-form.js';
import { createWaypointsMarkup } from './view/waypoint.js';
import { wayPoints, filter } from './mock.js';
import { WAYPOINT_COUNT } from './const';


const pageHeader = document.querySelector('.page-header');
const pageBodyPageMain = document.querySelector('.page-body__page-main');
const tripMain = pageHeader.querySelector('.trip-main');
const tripControlsNavigation = pageHeader.querySelector('.trip-controls__navigation');
const tripControlsFilters = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = pageBodyPageMain.querySelector('.trip-events');

const renderMarkup = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderMarkup(tripControlsNavigation, createMenuMarkup(), 'beforeend');
renderMarkup(tripControlsFilters, createFilterMarkup(filter), 'beforeend');
renderMarkup(tripEvents, createSortMarkup(), 'beforeend');
renderMarkup(tripMain, createRouteMarkup(wayPoints), 'afterbegin');
renderMarkup(tripMain, createCostMarkup(wayPoints), 'afterbegin');
renderMarkup(tripEvents, createCreatingFormMarkup(wayPoints[0]), 'beforeend');
renderMarkup(tripEvents, createEditFormMarkup(wayPoints[0]), 'beforeend');
for (let i = 0; i < WAYPOINT_COUNT; i++) {
  renderMarkup(tripEvents, createWaypointsMarkup(wayPoints[i]), 'beforeend');
}
