export interface IClient {
  id?: number;
  name?: string;
  lastName?: string;
  phone?: string;
}

export class Client implements IClient {
  constructor(public id?: number, public name?: string, public lastName?: string, public phone?: string) {}
}
