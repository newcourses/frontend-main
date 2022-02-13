function declOfNum(number, titles, returnString) {
  const cases = [2, 0, 1, 1, 1, 2];
  const title =
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  if (returnString) {
    return `${number} ${title}`;
  }
  return title;
}

export function declOfNumReviews(number, returnString) {
  const titles = ['отзыв', 'отзыва', 'отзывов'];
  return declOfNum(number, titles, returnString);
}

export function test() {}
