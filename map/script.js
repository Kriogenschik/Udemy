"use strict";

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 3000, 1500];

const map = new Map();

map.set(shops[0], 5000);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size();

const map2 = new Map([
	[{ paper: 400 }, 6000]
]);

// map.keys();

for (let shop of map.keys()) {
	console.log(shop);
}

const goods = [];
for (let shop of map.keys()) {
	goods.push(Object.keys(shop))
}
console.log(goods);

for (let price of map.values()) {
	console.log(price);
}

for (let [shop, price] of map.entries()) {
	console.log(price, shop);
}

map.forEach((value, key, map) => {
	console.log(key, value);
})