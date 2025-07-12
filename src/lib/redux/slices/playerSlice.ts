import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
    id: string | null;
    name: string | null;
    email: string | null;
    characters: number[]; // Assuming characters are represented by their IDs
    isLoggedIn: boolean;
}

const initialState: PlayerState = {
    id: null,
    name: null,
    email: null,
    characters: [],
    isLoggedIn: false,
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
            state.characters = state.characters.filter(characterId => characterId !== action.payload);
        },
        updateCharacters(state, action: PayloadAction<{ characters: number[] }>) {
            state.characters = action.payload.characters;
        },
        clearCharacters(state) {
            state.characters = [];
        }
    },
});

export const { login, logout, updatePlayer, addCharacter,removeCharacter, updateCharacters } = playerSlice.actions;
export default playerSlice.reducer;