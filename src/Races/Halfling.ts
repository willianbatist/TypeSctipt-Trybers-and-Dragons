import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.counter += 1;
  }

  static createdRacesInstances(): number {
    return this.counter;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}