import { IAuthor, NewAuthor } from './author.model';

export const sampleWithRequiredData: IAuthor = {
  id: 82416,
};

export const sampleWithPartialData: IAuthor = {
  id: 83531,
  name: 'bluetooth Inverse',
};

export const sampleWithFullData: IAuthor = {
  id: 14636,
  name: 'payment Assistant',
};

export const sampleWithNewData: NewAuthor = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
