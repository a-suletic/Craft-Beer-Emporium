import { BeerType } from './beer_type';

export interface Column {
  Header: string;
  accessor: keyof BeerType | 'actions';
}
