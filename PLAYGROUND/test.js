/*async function func() {
  await promise();
  throw new Error("error");
}

func().catch((error) => {
  console.log(error.message);
});

func();

//fetch("https://jsonplaceholder.typicode.com/todos/1")

function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("resolved");
      resolve();
    }, 2000);
  });
}*/

const maxSize = 5;
let arr = [1, 2, 3, 4, 5];

addItem(6, arr);
console.log(arr);
