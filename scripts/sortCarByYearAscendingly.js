function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultAscending = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < resultAscending.length; i++) {
    for (let j = 0; j < resultAscending.length - 1; j++) {
      if (resultAscending[j].year > resultAscending[j + 1].year) {
        const temp = resultAscending[j];
        resultAscending[j] = resultAscending[j + 1];
        resultAscending[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return resultAscending;
}
