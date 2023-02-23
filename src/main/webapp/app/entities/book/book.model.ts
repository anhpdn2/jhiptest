import { IAuthor } from 'app/entities/author/author.model';

export interface IBook {
  id: number;
  name?: string | null;
  authors?: Pick<IAuthor, 'id' | 'name'>[] | null;
}

export type NewBook = Omit<IBook, 'id'> & { id: null };
