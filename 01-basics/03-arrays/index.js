////////////////////ARRAYS///////////////////
let number_array = [];

const text_array = ["Hello", "Hello world", "Car"];

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
function filter_array(value) {
  return text_array.filter((element) => element.includes(value));
}

number_array_work();

const text_array_filtered = filter_array("Hello");
console.log(text_array_filtered);
