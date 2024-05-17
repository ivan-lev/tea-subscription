export const calculateShippingCost = (teaCost: number): number => {
  if (teaCost === 0) {
    return 0;
  }
  if (teaCost >= 0 && teaCost < 1500) {
    return 250;
  }
  if (teaCost >= 1500 && teaCost < 2000) {
    return 225;
  }
  if (teaCost >= 2000 && teaCost < 2500) {
    return 200;
  }
  if (teaCost >= 2500 && teaCost < 2880) {
    return 175;
  }
  if (teaCost >= 2880 && teaCost < 3500) {
    return 120;
  }
  if (teaCost >= 3500 && teaCost < 4000) {
    return 100;
  }
  // if the cost of tea is more than 4000, the shipping will be free
  return 0;
};
