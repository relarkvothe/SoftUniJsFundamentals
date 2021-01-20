function leapYears(input) {
  let leapYear = Number(input[0]);
  let randomYear = Number(input[1]);

  for (let index = leapYear; index <= randomYear; index++) { // обхождането се запазва в индекс
    if (index % 4 === 0) {
      console.log(index);
    }
  }
}
leapYears(["2000", "2011"]);
