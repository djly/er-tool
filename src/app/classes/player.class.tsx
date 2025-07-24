import { Union } from "./union.class";

export class Player implements IPlayer {
    charactersInvestment: Record<number, { skillLevels: [number, number, number], starLevel: number, setBonuses: string[] }> = {};

    constructor(public id: number, public name: string, public characters?: number[], public union?: Union) {
        this.id = id;
        this.name = name;
        this.characters = [];
        this.union = union;
        this.charactersInvestment = {};
    }

    displayInfo(): string {
        return `Player ID: ${this.id}, Name: ${this.name}, Characters: ${this.characters?.length || 0}`;
    }
}

interface IPlayer {
    id: number,
    name: string,
    characters?: number[], // Array of characterIds
    union?: Union // Optional union association
    displayInfo(): string; // Method to display player information
    // A mapping of character ids and their respective skill levels, star level, and sets bonuses from the equipment.
    // Each character has 3 skills, each skill level ranges from 1 (default) to 5 (max)
    charactersInvestment?: Record<number, { skillLevels: [number, number, number], starLevel: number, setBonuses: string[] }>;
  }