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
import {renderElement, renderPosition} from './utils/render.js';


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
    tripEvents.replaceChild(editWayPoint.getElement(point), way.getElement());
  };
  const replaceFormToWayPoint = () => {
    tripEvents.replaceChild(way.getElement(), editWayPoint.getElement(point));
  };
  way.setEditClickHandler(() => {
    replaceWayPointToForm();
  });
  editWayPoint.setFormSubmitHandler(() => {
    replaceFormToWayPoint();
  });
  renderElement(tripEvents, way, renderPosition.BEFOREEND);
};

renderElement(tripControlsNavigation, new SiteMenuView(), renderPosition.BEFOREEND);
renderElement(tripControlsFilters, new FilterView(filter), renderPosition.BEFOREEND);
renderElement(tripEvents, new SortWaysView(), renderPosition.BEFOREEND);
renderElement(tripMain, new RouteView(wayPoints), renderPosition.AFTERBEGIN);
renderElement(tripMain, new CostView(wayPoints), renderPosition.AFTERBEGIN);
renderElement(tripEvents, new CreateFormView(wayPoints[0]), renderPosition.BEFOREEND);
for (let i = 0; i < WAY_POINTS_COUNT; i++) {
  renderPoints(wayPoints[i]);
}
