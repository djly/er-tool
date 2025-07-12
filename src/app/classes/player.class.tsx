import { Union } from "./union.class";

export class Player implements IPlayer {

    constructor(public id: number, public name: string, public characters?: number[], public union?: Union) {
        this.id = id;
        this.name = name;
        this.characters = [];
        this.union = union;
    }

    displayInfo(): string {
        return `Player ID: ${this.id}, Name: ${this.name}, Characters: ${this.characters?.length || 0}`;
    }
}

interface IPlayer {
    id: number,
    name: string,
    characters?: number[], // Array of characterIdss
    union?: Union // Optional union association
  }