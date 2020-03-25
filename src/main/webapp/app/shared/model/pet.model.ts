import { Moment } from 'moment';
import { IClient } from 'app/shared/model/client.model';
import { PetType } from 'app/shared/model/enumerations/pet-type.model';

export interface IPet {
  id?: number;
  name?: string;
  type?: PetType;
  birth?: Moment;
  client?: IClient;
}

export class Pet implements IPet {
  constructor(public id?: number, public name?: string, public type?: PetType, public birth?: Moment, public client?: IClient) {}
}
