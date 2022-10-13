function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultDescending = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < resultDescending.length; i++) {
    for (let j = 0; j < resultDescending.length - 1; j++) {
      if (resultDescending[j].year < resultDescending[j + 1].year) {
        const temp = resultDescending[j];
        resultDescending[j] = resultDescending[j + 1];
        resultDescending[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return resultDescending;
}
