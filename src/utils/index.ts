import { SortOrder } from "interfaces";

export function join (...args: any)  {
  let result = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      if (result) result += ' ';
      result += args[i];
    }
  }
  return result;
}


export function range (start: number, end: number){
  return Array.from(Array(end).keys()).map(el => el + start);
}


export function sortByNumber (data: any, sortingKey: string, sortOrder: SortOrder) {
  return data.sort((a: any, b: any) => sortOrder === 'asn'
    ? b[sortingKey] - a[sortingKey]
    : a[sortingKey] - b[sortingKey]);
}


export function sortByLetters(data: any, sortingKey: string, sortOrder: SortOrder) {
  return data.sort((a: any, b: any) => (sortOrder === 'asn'
    ? (a[sortingKey] < b[sortingKey] ? 1 : -1)
    : (b[sortingKey] < a[sortingKey] ? 1 : -1)));
}
