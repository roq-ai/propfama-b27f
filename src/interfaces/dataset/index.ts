import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DatasetInterface {
  id?: string;
  name: string;
  source: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DatasetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  source?: string;
  user_id?: string;
}
