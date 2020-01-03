////////////////////ARRAYS///////////////////
let number_array = [];

const text_array = ["Hello", "Hello world", "Car"];

function filter() {
  return text_array.filter((element) => element.includes("Hello"));
}

function number_array_work() {
  for (let index = 0; index < 10; index++) {
    number_array.push(index);
    console.log(number_array);
  }
  console.log("Number_array " + number_array);
  number_array.forEach((element) => {
    console.log(element);
  });
}

const text_array_filtered = filter();
console.log(text_array_filtered);
number_array_work();
