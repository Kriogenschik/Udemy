const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (!arr.length) return "Семья пуста";
    console.log(`Семья состоит из: ${arr.join(" ")}`);
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let city of arr) {
      console.log(city.toLowerCase());
    }
}

standardizeStrings(favoriteCities);