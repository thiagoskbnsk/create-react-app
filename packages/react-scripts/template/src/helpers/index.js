import accounting from 'accounting';

export const formatDate = (date) => {
  if (!date) return null;
  if (typeof date === 'object') return defaultFormat(date);
  const parts = date.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formatCurrency = (value, currency = 'R$ ', thousand = '.', decimal = ',') => {
  if (value === null || value === undefined) return null;
  const newValue = Math.round(value / 100);
  return accounting.formatMoney(parseFloat(newValue), currency, 0, thousand, decimal);
};

const defaultFormat = (d) => {
  const year = d.getFullYear();
  let month = `${d.getMonth() + 1}`;
  if (month < 10) month = `0${month}`;
  let day = `${d.getDate()}`;
  if (day < 10) day = `0${day}`;
  return `${day}/${month}/${year}`;
};

export const truncateCharacters = (text, count = 100) => {
  if (text.length <= count) return text;
  const subString = text.substr(0, count - 1);
  return `${subString.substr(0, subString.lastIndexOf(' '))}...`;
};

export const delay = (() => {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export const sortByColumn = (columnName, column, sort) => {
  const columnSortObj = { column: columnName, sort: 'asc' };

  if (column === columnName && sort === 'asc') {
    columnSortObj.sort = 'desc';
  }

  return columnSortObj;
};

export const initialAcronyms = (name) => {
  const splittedName = name.split(' ');
  const firstName = splittedName[0].split('')[0];
  const lastName = splittedName[splittedName.length - 1].split('')[0];

  return `${firstName}${lastName}`.toUpperCase();
};
