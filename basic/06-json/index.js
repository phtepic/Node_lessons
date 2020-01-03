////////////////////JSON///////////////////
let data_simple = { text: "foo", number: 1 };
let data_array = [
  { text: "foo", number: 1 },
  { text: "hello", number: 2 }
];

function process_data() {
  data_simple.number++;
  data_array[1].number++;

  console.log(data_simple);
  console.log(data_array);

  const data_array_filtered = data_array.filter((object) =>
    object.text.includes("hello")
  );
  console.log(data_array_filtered);
}

process_data();
