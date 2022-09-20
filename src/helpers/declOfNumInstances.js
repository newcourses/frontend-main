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

export function declOfNumRealReviews(number, returnString) {
  const titles = ['реальный отзыв', 'реального отзыва', 'реальных отзывов'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumSymbols(number, returnString) {
  const titles = ['символ', 'символа', 'символов'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumAssembled(number, returnString) {
  const titles = ['собрана', 'собраны', 'собрано'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumCourses(number, returnString) {
  const titles = ['курс', 'курса', 'курсов'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumOnlineCourses(number, returnString) {
  const titles = ['онлайн-курс', 'онлайн-курса', 'онлайн-курсов'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumFreeOnlineCourses(number, returnString) {
  const titles = [
    'бесплатный онлайн-курс',
    'бесплатных онлайн-курса',
    'бесплатных онлайн-курсов',
  ];
  return declOfNum(number, titles, returnString);
}

export function declOfNumSchool(number, returnString) {
  const titles = ['школа', 'школы', 'школ'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumComments(number, returnString) {
  const titles = ['комментарий', 'комментрия', 'комментариев'];
  return declOfNum(number, titles, returnString);
}

export function declOfNumMonths(number, returnString) {
  const titles = ['месяц', 'месяца', 'месяцев'];
  return declOfNum(number, titles, returnString);
}
