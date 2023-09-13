import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApiInterface {
  id?: string;
  name: string;
  url: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ApiGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
  user_id?: string;
}
