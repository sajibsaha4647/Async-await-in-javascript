// //async and await in javascript

// let newpromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one2");
// });

// getdata = async () => {
//   let promis = new Promise((res, reject) => {
//     setTimeout(res, 100, "one");
//   });

//   let s = await promis;
//   console.log(s);
// };

// getdata();

// //resolve here
// // newpromise.then((res) => {
// //   console.log(res);
// // });

// Promise.race([newpromise2, newpromise]).then((res) => {
//   console.log(res);
// });

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => {
//   console.log(res);
// });

async function getapidata() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(JSON.stringify(data));

  data = await data.json();
  console.log(data);
}

// getapidata();

async function onlyasync() {
  return "bdtask";
}

console.log(onlyasync());
