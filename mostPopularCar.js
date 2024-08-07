function mostPopularCar(carsArray) {
  const carCounts = {};
  let mostCommonCar;
  let maxCount = 0;
  carsArray = []

  carsArray.forEach(car => {
    carCounts[car] = (carCounts[car] || 0) + 1;
  });

  for (const car in carCounts) {
    if (carCounts[car] > maxCount) {
      maxCount = carCounts[car];
      mostCommonCar = car;
    }
  }

  return mostCommonCar;
}

const cars = ['Volkswagen', 'Toyota', 'Nissan', 'Ford', 'Nissan', 'Nissan', 'Volkswagen', 'Volkswagen', 'Nissan', 'Toyota', 'Toyota', 'Toyota', 'Ford', 'Nissan', 'Ford', 'Toyota', 'Ford', 'Toyota', 'Ford', 'Toyota', 'Volkswagen', 'Toyota', 'Toyota', 'Nissan', 'Ford', 'Ford', 'Toyota', 'Toyota', 'Toyota'];

const mostCommon = mostPopularCar(cars);
console.log(mostCommon);
export{mostPopularCar}