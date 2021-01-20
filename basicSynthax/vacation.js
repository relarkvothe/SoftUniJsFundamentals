function calculator(arg1, arg2, arg3) {
  let people = Number(arg1);
  let type = arg2;
  let day = arg3;
  let price = 0;

  if (day === "Friday") {
    if (type === "Students") {
      if (people >= 30) {
        price = people * 8.45 * 0.85;
      } else {
        price = people * 8.45;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 10.9;
      } else {
        price = people * 10.9;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people <= 20) {
        price = people * 15 * 0.95;
      } else {
        price = people * 15;
      }
    }
  } else if (day === "Saturday") {
    if (type === "Students") {
      if (people >= 30) {
        price = people * 9.8 * 0.85;
      } else {
        price = people * 9.8;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 15.6;
      } else {
        price = people * 15.6;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people <= 20) {
        price = people * 20 * 0.95;
      } else {
        price = people * 20;
      }
    }
  } else if (day === "Sunday") {
    if (type === "Students") {
      if (people >= 30) {
        price = people * 10.46 * 0.85;
      } else {
        price = people * 10.46;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 16;
      } else {
        price = people * 16;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people <= 20) {
        price = people * 22.5 * 0.95;
      } else {
        price = people * 22.5;
      }
    }
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
calculator("40", "Regular", "Saturday");
