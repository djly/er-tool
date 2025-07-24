import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CharacterInvestment {
    skillLevels: number[];
    starLevel: number;
    setBonuses: string[]; // Adjust type as needed
}

interface PlayerState {
    id: string | null;
    name: string | null;
    email: string | null;
    characters: number[];
    isLoggedIn: boolean;
    charactersInvestment: {
        [characterId: number]: CharacterInvestment;
    };
}

const initialState: PlayerState = {
    id: null,
    name: null,
    email: null,
    characters: [],
    isLoggedIn: false,
    charactersInvestment: {},
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.id = null;
            state.name = null;
            state.email = null;
            state.isLoggedIn = false;
        },
        updatePlayer(state, action: PayloadAction<{ name?: string; email?: string }>) {
            if (action.payload.name) {
                state.name = action.payload.name;
            }
            if (action.payload.email) {
                state.email = action.payload.email;
            }
        },
        addCharacter(state, action: PayloadAction<number>) {
            if (!state.characters.includes(action.payload)) {
                // Add character ID to the player's roster if it doesn't already exist
                state.characters.push(action.payload);
            }
        },
        removeCharacter (state, action: PayloadAction<number>) {
            state.characters = state.characters.filter((characterId: number) => characterId !== action.payload);
        },
        updateCharacters(state, action: PayloadAction<{ characters: number[] }>) {
            state.characters = action.payload.characters;
        },
        clearCharacters(state) {
            state.characters = [];
        },
        setCharacterSkillLevel(state, action: PayloadAction<{ characterId: number; skillIndex: number; level: number }>) {
            const { characterId, skillIndex, level } = action.payload;
            console.log(`Setting skill level for character ${characterId}, skill index ${skillIndex}, level ${level}`);
            if (!state.charactersInvestment) {
                state.charactersInvestment = {};
            }
            if (!state.charactersInvestment[characterId]) {
                state.charactersInvestment[characterId] = { skillLevels: [1, 1, 1], starLevel: 1, setBonuses: [] };
            }
            state.charactersInvestment[characterId].skillLevels[skillIndex] = level;
        }
    },
});

export const { login, logout, updatePlayer, addCharacter,removeCharacter, updateCharacters, setCharacterSkillLevel } = playerSlice.actions;
export default playerSlice.reducer;