import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  //   const startIndex = (pageNumber - 1) * pageSize;
  //   return _(items).slice(startIndex).take(pageSize).value()
  const display = _.chunk(items, pageSize);
  return display[pageNumber - 1];
}
