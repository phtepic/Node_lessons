////////////////////JSON///////////////////
let data_simple = { text: "foo", number: 1 };
let data_array = [
  { text: "foo", number: 1 },
  { text: "hello", number: 2 }
];

function print_data() {
  data_simple.number++;
  data_array[1].number++;
  console.log(data_simple);
  console.log(data_array);
}

print_data();
