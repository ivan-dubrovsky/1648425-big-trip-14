import SiteMenuView from './view/menu.js';
import { createRouteMarkup } from './view/route.js';
import { createCostMarkup } from './view/cost.js';
import { createFilterMarkup } from './view/filter.js';
import { createSortMarkup } from './view/sort.js';
import { createCreatingFormMarkup } from './view/creating-form.js';
import { createEditFormMarkup } from './view/edit-form.js';
import { createWaypointsMarkup } from './view/waypoint.js';
import { wayPoints, filter } from './mock.js';
import { WAYPOINT_COUNT } from './const';
import {renderTemplate, renderElement, renderPosition} from './utils.js';


const pageHeader = document.querySelector('.page-header');
const pageBodyPageMain = document.querySelector('.page-body__page-main');
const tripMain = pageHeader.querySelector('.trip-main');
const tripControlsNavigation = pageHeader.querySelector('.trip-controls__navigation');
const tripControlsFilters = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = pageBodyPageMain.querySelector('.trip-events');


renderElement(tripControlsNavigation, new SiteMenuView().getElement(), renderPosition.BEFOREEND);
renderTemplate(tripControlsFilters, createFilterMarkup(filter), 'beforeend');
renderTemplate(tripEvents, createSortMarkup(), 'beforeend');
renderTemplate(tripMain, createRouteMarkup(wayPoints), 'afterbegin');
renderTemplate(tripMain, createCostMarkup(wayPoints), 'afterbegin');
renderTemplate(tripEvents, createCreatingFormMarkup(wayPoints[0]), 'beforeend');
renderTemplate(tripEvents, createEditFormMarkup(wayPoints[0]), 'beforeend');
for (let i = 0; i < WAYPOINT_COUNT; i++) {
  renderTemplate(tripEvents, createWaypointsMarkup(wayPoints[i]), 'beforeend');
}
