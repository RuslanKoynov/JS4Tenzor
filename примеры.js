function greet(name, callback) {
  console.log("Привет, " + name);
  callback();
}

greet("Анна", () => console.log("Колбэк выполнен!"));



let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done" 
  setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function(resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});


let myPromise = new Promise(function(resolve, reject) {
setTimeout(() => resolve("done"), 1000);
setTimeout(() => reject(new Error("Whoops!")), 1000);
});
myPromise.then((result) => {console.log(result)})
.catch((error) => {console.log(error)})
