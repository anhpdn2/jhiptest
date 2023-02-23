import { IBook, NewBook } from './book.model';

export const sampleWithRequiredData: IBook = {
  id: 37098,
};

export const sampleWithPartialData: IBook = {
  id: 1464,
};

export const sampleWithFullData: IBook = {
  id: 78320,
  name: 'methodical synthesize compress',
};

export const sampleWithNewData: NewBook = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
