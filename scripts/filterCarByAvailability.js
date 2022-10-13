function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const AvailabilityResult = [];

  // Tulis code-mu disini
  for (const element of cars) {
    if (element.available === true) {
      AvailabilityResult.push(element);
    }
  }

  console.log(AvailabilityResult);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return AvailabilityResult;
}
