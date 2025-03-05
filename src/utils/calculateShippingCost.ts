export const calculateShippingCost = (teaCost: number): number => {
  if (teaCost === 0) {
    return 0;
  }
  if (teaCost > 0 && teaCost <= 3340) {
    return 400;
  }
  if (teaCost > 3340 && teaCost <= 3700) {
    return 350;
  }
  if (teaCost > 3700 && teaCost <= 4000) {
    return 300;
  }
  if (teaCost > 4000 && teaCost <= 4000) {
    return 250;
  }
  if (teaCost > 4000 && teaCost <= 4500) {
    return 200;
  }
  // if the cost of tea is more than 4000, the shipping will be free
  return 0;
};
