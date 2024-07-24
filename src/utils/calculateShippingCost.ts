export const calculateShippingCost = (teaCost: number): number => {
  if (teaCost === 0) {
    return 0;
  }
  if (teaCost > 0 && teaCost < 3000) {
    return 300;
  }
  if (teaCost >= 3000 && teaCost < 3250) {
    return 275;
  }
  if (teaCost >= 3250 && teaCost < 3500) {
    return 250;
  }
  if (teaCost >= 3500 && teaCost < 3750) {
    return 225;
  }
  if (teaCost >= 3750 && teaCost < 4000) {
    return 200;
  }
  if (teaCost >= 4000 && teaCost < 4500) {
    return 150;
  }
  // if the cost of tea is more than 4000, the shipping will be free
  return 0;
};
