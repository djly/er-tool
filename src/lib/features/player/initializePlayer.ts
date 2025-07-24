import { Player } from '../../../app/classes/player.class';

export function initializePlayer(name: string): Player {
    return {
    characters: [],
    union: undefined,
    id: 0,
    name: name,
    displayInfo: function (): string {
        throw new Error('Function not implemented.');
    },
    charactersInvestment: {},
};
}