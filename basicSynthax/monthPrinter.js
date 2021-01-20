function monthPrinter(arg1) {
  let n = arg1;

  switch (n) {
    case n === "1":
      console.log("January");
      break;
    case n === "2":
      console.log("February");
      break;
    case n === "3":
      console.log("March");
      break;
    case n === "4":
      console.log("April");
      break;
    case n === "5":
      console.log("May");
      break;
    case n === "6":
      console.log("June");
      break;
    case n === "7":
      console.log("July");
      break;
    case n === "8":
      console.log("August");
      break;
    case n === "9":
      console.log("September");
      break;

    case n === "10":
      console.log("October");
      break;

    case n === "11":
      console.log("November");
      break;

    case n === "12":
      console.log("December");
      break;

    default:
      console.log("Error!");
      break;
  }
}

monthPrinter("2");
