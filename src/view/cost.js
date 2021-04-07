const createCostMarkup = (wayPoint) => {
  const getTotalCost = () => {
    const cost = wayPoint[0].price + wayPoint[1].price + wayPoint[2].price;
    return cost;
  };
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalCost()}</span>
  </p>`;
};

export { createCostMarkup };
