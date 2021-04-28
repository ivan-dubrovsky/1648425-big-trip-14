import SiteMenuView from './view/menu.js';
import RouteView from './view/route.js';
import CostView from './view/cost.js';
import FilterView from './view/filter.js';
import SortWaysView from './view/sort.js';
import CreateFormView from './view/creating-form.js';
import EditFormView from './view/edit-form.js';
import WayPointView from './view/way-point.js';
import {wayPoints, filter} from './mock.js';
import {WAY_POINTS_COUNT} from './const';
import {renderElement, renderPosition} from './utils.js';


const pageHeader = document.querySelector('.page-header');
const pageBodyPageMain = document.querySelector('.page-body__page-main');
const tripMain = pageHeader.querySelector('.trip-main');
const tripControlsNavigation = pageHeader.querySelector('.trip-controls__navigation');
const tripControlsFilters = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = pageBodyPageMain.querySelector('.trip-events');

const renderPoints = (point) => {
  const way = new WayPointView(point);
  const editWayPoint = new EditFormView(point);

  const replaceWayPointToForm = () => {
    tripEvents.replaceChild(editWayPoint.getElement(point), way.getElement(point));
  };

  const replaceFormToWayPoint = () => {
    tripEvents.replaceChild(way.getElement(point), editWayPoint.getElement(point));
  };

  way.getElement(point).querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceWayPointToForm();
  });
  editWayPoint.getElement(point).addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToWayPoint();
  });
  renderElement(tripEvents, way.getElement(), renderPosition.BEFOREEND);
};

renderElement(tripControlsNavigation, new SiteMenuView().getElement(), renderPosition.BEFOREEND);
renderElement(tripControlsFilters, new FilterView(filter).getElement(), renderPosition.BEFOREEND);
renderElement(tripEvents, new SortWaysView().getElement(), renderPosition.BEFOREEND);
renderElement(tripMain, new RouteView(wayPoints).getElement(), renderPosition.AFTERBEGIN);
renderElement(tripMain, new CostView().getElement(wayPoints), renderPosition.AFTERBEGIN);
renderElement(tripEvents, new CreateFormView(wayPoints[0]).getElement(), renderPosition.BEFOREEND);
for (let i = 0; i < WAY_POINTS_COUNT; i++) {
  renderPoints(wayPoints[i]);
}

