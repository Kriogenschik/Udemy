function amountOfPages(summary){
  let pages = 0;
  for (let i = 1; i <= summary; i++) {
    pages++;
    if (pages > 99) {
      i += 2;
    } else if (pages > 9) {
      i++;
    }
  }
  return pages;
}

console.log(amountOfPages(1095));
