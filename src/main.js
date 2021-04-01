import { createMenuMarkup } from './view/menu.js';
import { createRouteMarkup } from './view/route.js';
import { createCostMarkup } from './view/cost.js';
import { createFilterMarkup } from './view/filter.js';
import { createSortMarkup } from './view/sort.js';
import { createCreatingFormMarkup } from './view/creating-form.js';
import { createEditFormMarkup } from './view/edit-form.js';
import { createWaypointsMarkup } from './view/waypoint.js';

const WAYPOINT_COUNT = 3;

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
renderMarkup(tripMain, createRouteMarkup(), 'afterbegin');
renderMarkup(tripMain, createCostMarkup(), 'afterbegin');
renderMarkup(tripControlsFilters, createFilterMarkup(), 'beforeend');
renderMarkup(tripEvents, createSortMarkup(), 'beforeend');
renderMarkup(tripEvents, createEditFormMarkup(), 'beforeend');
renderMarkup(tripEvents, createCreatingFormMarkup(), 'beforeend');


for (let i = 0; i < WAYPOINT_COUNT; i++) {
  renderMarkup(tripEvents, createWaypointsMarkup(), 'beforeend');
}
