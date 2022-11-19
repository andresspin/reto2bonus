



const myFunction = (a, b) => {
    for (const key in a) {
        //console.log(key);
    if (key === b && a[key] != undefined) {
      return true;
    }
    }
    return false
  };



console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));

