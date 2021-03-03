export type Locales = 'pt-br' | 'en' | 'fr-ca';
interface ToLocaleDateString {
  year?: 'numeric';
  month?: 'long' | 'short' | 'numeric';
  weekday?: 'long' | 'short';
  day?: 'numeric';
  hour?: 'numeric';
  minute?: 'numeric';
  second?: 'numeric';
  era?: 'long' | 'short';
  timeZoneName?: 'long' | 'short';
}

// get date and time
function getTime(date?: string | Date) {
  if (!date) return new Date().getTime();
  if (typeof date === 'string') return new Date(date).getTime();
  return date.getTime();
}

function getDay(date?: string | Date) {
  if (!date) return new Date().getDay();
  if (typeof date === 'string') return new Date(date).getDay();
  return date.getDay();
}

function getDayOfWeek(date?: string | Date) {
  const week = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];
  return week[getDay(date)];
}

const getSunday = (init: string | Date): number => {
  return Number(Boolean(getDay(init) === 7));
};

function addOneDay(
  type?: 'hour' | 'minutes' | 'secconds' | 'milisecconds',
): number {
  switch (type) {
    case 'hour':
      return 24;
    case 'minutes':
      return 24 * 60;
    case 'secconds':
      return 24 * 60 * 60;
    case 'milisecconds':
      return 24 * 60 * 60 * 60;
    default:
      return 6000;
  }
}

// get difference of dates
export function getDiffDateInDays(init: string | Date, end?: string | Date) {
  const timeStart = getTime(init);
  const timeEnd = getTime(end);
  return Number((timeEnd - timeStart) / (24 * 3600 * 1000));
}

const getQtdOfWeeks = (init: string | Date, end?: string | Date): number => {
  return Math.floor(getDiffDateInDays(init, end) / 7);
};

const getMajorDayOfWeek = (
  init: string | Date,
  end?: string | Date,
): number => {
  return Number(Boolean(getDay(init) < getDay(end)));
};

export function getDaysOfFDS(init: string | Date, end?: string | Date): number {
  return (
    getQtdOfWeeks(init, end) +
    getMajorDayOfWeek(init, end) * 2 +
    getSunday(init)
  );
}

export function datetoLocaleDateString(
  date: string | Date,
  locale: Locales,
  options: ToLocaleDateString,
) {
  if (!date) return new Date().toLocaleDateString(locale, options);
  if (typeof date === 'string')
    return new Date(date).toLocaleDateString(locale, options);
  return date.toLocaleDateString(locale, options);
}
export const getCurrentDate = (locale: Locales, extensive = false) => {
  const date = new Date();

  const options: ToLocaleDateString = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (extensive) {
    return datetoLocaleDateString(date, locale, options);
  }

  return datetoLocaleDateString(date, locale, { ...options, month: 'numeric' });
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
  date = new Date(getTime() + date.getTimezoneOffset() * addOneDay());
  if (debug) console.log({ date });
  const options: ToLocaleDateString = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (extensive) {
    const extensiveDate = datetoLocaleDateString(date, locale, options);
    if (debug) console.log({ extensiveDate });
    return extensiveDate;
  }

  const returnDate = datetoLocaleDateString(date, locale, {
    ...options,
    month: 'numeric',
  });
  if (debug) console.log({ returnDate });
  return returnDate;
};
