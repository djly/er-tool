import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react';


interface CharacterInvestmentI {
    skillLevels: number[];
    starLevel: number;
    setBonuses: string[]; // Adjust type as needed
}

interface PlayerState {
    id: string | null;
    name: string | null;
    email: string | null;
    characters: Record<string, CharacterInvestmentI>; // Using Record to map character IDs to their investments
    isLoggedIn: boolean;
}

const initialState: PlayerState = {
    id: null,
    name: null,
    email: null,
    characters: {}, // Initialize as an empty object
    isLoggedIn: false,
};

export function newCharacterInvestment(){
    return {
        skillLevels: [1, 1, 1], // Default skill levels
        starLevel: 1, // Default star level
        setBonuses: [], // Default set bonuses
    };
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
        addCharacter(state, action: PayloadAction<{characterId : string, ci?: CharacterInvestmentI}>) {
            console.log(`Adding character with ID ${action.payload.characterId} to player's roster.`);
            if (!state.characters[action.payload.characterId]) {
                // Add character ID to the player's roster if it doesn't already exist
                if (action.payload.ci) {
                    state.characters[action.payload.characterId] = action.payload.ci;
                } else {
                    state.characters[action.payload.characterId] = newCharacterInvestment();
                }    
            };
        },
        removeCharacter (state, action: PayloadAction<number>) {
            console.log(`Removing character with ID ${action.payload} from player's roster.`);
            // This is safe with Immer!
            delete state.characters[action.payload];
        },
        clearCharacters(state) {
            console.log(`Clearing all characters from player's roster.`);
            state.characters = {}
        },
        setCharacterSkillLevel(state, action: PayloadAction<{ characterId: number; skillIndex: number; level: number }>) {
            const { characterId, skillIndex, level } = action.payload;
            console.log(`Setting skill level for character ${characterId}, skill index ${skillIndex}, level ${level}`);
            if (!state.characters[characterId]) {
                state.characters[characterId] = newCharacterInvestment();
            } 
            
            state.characters[characterId].skillLevels[skillIndex] = level > 5 ? 5 : level < 1 ? 1 : level; // Ensure skill level is between 1 and 5            
        },
        setCharacterStarLevel(state, action: PayloadAction<{ characterId: number; starLevel: number}>) {
            const { characterId, starLevel } = action.payload;
            if (!state.characters[characterId]) {
                state.characters[characterId] = newCharacterInvestment();
            } 
            state.characters[characterId].starLevel = starLevel;
        }
    },
});

export const { login, logout, updatePlayer, addCharacter,removeCharacter, clearCharacters, setCharacterSkillLevel,setCharacterStarLevel } = playerSlice.actions;
export default playerSlice.reducer;
