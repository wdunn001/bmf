export class Character {
  public constructor(params?: ICharacter) {
    if (params) {
      Object.assign(this, params);
    }
  }
  name = '';
}

export interface ICharacter {
  name: string;
}
