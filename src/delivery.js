function createDeliveryTime(items, anOrder, deliveryTime) {
  if (items.includes(anOrder.deliveryState)) {
    return deliveryTime;
  }
  return 0;
}

function calculateRushDeliveryTime(anOrder) {
  let deliveryTime = 0;
  deliveryTime = createDeliveryTime(['MA', 'CT',], anOrder, 1);
  deliveryTime = deliveryTime === 0 ? createDeliveryTime(['NY', 'NH',], anOrder, 2) : deliveryTime;
  deliveryTime = deliveryTime === 0 ? 3 : deliveryTime;
  return deliveryTime;
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = calculateRushDeliveryTime(anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = 0;
    deliveryTime = createDeliveryTime(['MA', 'CT', 'NY'], anOrder, 2);
    deliveryTime = deliveryTime === 0 ? createDeliveryTime(['ME', 'NH'], anOrder, 3) : deliveryTime;
    deliveryTime = deliveryTime === 0 ? 4 : deliveryTime;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate,
};