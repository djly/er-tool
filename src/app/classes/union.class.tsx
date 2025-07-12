export class Union implements IUnion {
    members: string[];

    constructor(public id: number, public name: string) {
        this.id = id;
        this.name = name;
        this.members = [];
    }

    displayInfo(): string {
        return `Union ID: ${this.id}, Name: ${this.name}`;
    }
}

interface IUnion {
    id: number,
    name: string,
    members: string[]
  }