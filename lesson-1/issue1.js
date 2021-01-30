function loop(times=0, callback=null) {
  if (typeof callback === 'function') {
    for (let i = 0; i < times; i++) {
      callback();
    }
  }
}

function sayHi() {
  console.log("hello");
}

loop(5, sayHi);
console.log('----------')
loop(0, sayHi);
console.log('----------')
loop(5);
console.log('----------')
loop(5, () => {console.log("I'm a hyman")});
