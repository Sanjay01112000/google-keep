// src/actions/actions.js

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const PIN_NOTE = "PIN_NOTE";
export const UNPIN_NOTE = "UNPIN_NOTE";

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: note,
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export function pinNote(id) {
  return {
    type: PIN_NOTE,
    payload: id,
  };
}

export function unpinNote(id) {
  return {
    type: UNPIN_NOTE,
    payload: id,
  };
}
