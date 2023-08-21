let array = [1, 2, 3, 4, 5, 5];

let object = {
  name: "laal",
  age: 20,
  msg: "key should be string or symbol",
  action: function () {
    console.log("doing something");
  },
  nums: array,
};

let set = new Set([22, 33, 44, "string", 44]);

let weakSet = new WeakSet([object]);

let map = new Map([
  ["key", "value"],
  [23, "key would be anything"],
  [33n, ["goat", "guide", "group"]],
  [99, object],
  ["set", set],
  ["weaskset", weakSet],
  [0],
]);

let weakMap = new WeakMap([
  [{}, 0],
  [{}, 1],
  [{}, "key should be a object"],
  [{ map: map }, 3],
]);

console.log(array);
console.log(object);
console.log(`-------------------------------------`);
console.log(set);
console.log(weakSet);
console.log(`-------------------------------------`);
console.log(map);
console.log(weakMap);
