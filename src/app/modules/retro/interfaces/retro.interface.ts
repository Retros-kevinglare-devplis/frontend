import { IColumn } from '../../../core/entities/column/column.interface';

export interface IRetro {
  id: number;
  team_id: number;
  columns: IColumn[];
}
