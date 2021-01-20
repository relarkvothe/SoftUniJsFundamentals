function studentInformation(arg1, arg2, arg3) {
  let studentName = arg1;
  let studentAge = Number(arg2);
  let grade = Number(arg3);
  let g = grade.toFixed(2);

  console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${g}`);
}
studentInformation("John", "15", "5.54678");
