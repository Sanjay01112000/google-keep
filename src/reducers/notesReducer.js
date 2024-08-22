// src/reducers/notesReducer.js

import { ADD_NOTE, DELETE_NOTE, PIN_NOTE, UNPIN_NOTE } from "../actions/actions";

const initialState = {
  notes: [],
  pinnedNotes: [],
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      if (action.payload.isPinned) {
        return {
          ...state,
          pinnedNotes: state.pinnedNotes.filter((_, index) => index !== action.payload.id),
        };
      } else {
        return {
          ...state,
          notes: state.notes.filter((_, index) => index !== action.payload.id),
        };
      }
    case PIN_NOTE:
      const pinnedNote = state.notes[action.payload];
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.payload),
        pinnedNotes: [...state.pinnedNotes, pinnedNote],
      };
    case UNPIN_NOTE:
      const unpinnedNote = state.pinnedNotes[action.payload];
      return {
        ...state,
        pinnedNotes: state.pinnedNotes.filter((_, index) => index !== action.payload),
        notes: [...state.notes, unpinnedNote],
      };
    default:
      return state;
  }
}

export default notesReducer;
