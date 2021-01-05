export function getDiffDateInDays(init: string, end: string) {
  const timeStart = new Date(init).getTime();
  const timeEnd = new Date(end).getTime();
  return Number((timeEnd - timeStart) / (24 * 3600 * 1000));
}

export type Locales = 'pt-br' | 'en' | 'fr-ca';
const getQtdOfWeeks = (init: string, end: string): number =>
  Math.floor(getDiffDateInDays(init, end) / 7);
const getMajorDayOfWeek = (init: string, end: string): number =>
  Number(Boolean(new Date(init).getDay() < new Date(end).getDay()));
const getSunday = (init: string): number =>
  Number(Boolean(new Date(init).getDay() == 7));

export function getDaysOfFDS(init: string, end: string): number {
  return (
    getQtdOfWeeks(init, end) +
    getMajorDayOfWeek(init, end) * 2 +
    getSunday(init)
  );
}

export const getCurrentDate = (locale: Locales, extensive = false) => {
  const date = new Date();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  if (extensive) {
    return date.toLocaleDateString(locale, options);
  }

  return date.toLocaleDateString(locale, { ...options, month: 'numeric' });
};

export const changeDate = (
  dateString: string,
  locale: Locales,
  { extensive = false, debug = false } = {},
) => {
  if (debug) console.log({ dateString });
  if (!dateString) return '';
  if (['/'].indexOf(dateString)) {
    dateString.split('/').reverse().join('-');
  }

  let date = new Date(dateString);
  date = new Date(date.getTime() + date.getTimezoneOffset() * 60000); // without that he returns one day less
  if (debug) console.log({ date });
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  if (extensive) {
    const extensiveDate = date.toLocaleDateString(locale, options);
    if (debug) console.log({ extensiveDate });
    return extensiveDate;
  }

  const returnDate = date.toLocaleDateString(locale, {
    ...options,
    month: 'numeric',
  });
  if (debug) console.log({ returnDate });
  return returnDate;
};
