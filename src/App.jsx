// src/App.jsx

import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, pinNote, unpinNote } from "./actions/actions";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";

function App() {
  const notes = useSelector((state) => state.notesData.notes);
  const pinnedNotes = useSelector((state) => state.notesData.pinnedNotes);
  const dispatch = useDispatch();

  function handleAddNote(newNote) {
    dispatch(addNote(newNote));
  }

  function handleDeleteNotes(id, isPinned) {
    dispatch(deleteNote({ id, isPinned }));
  }

  function handlePinNote(id) {
    dispatch(pinNote(id));
  }

  function handleUnpinNote(id) {
    dispatch(unpinNote(id));
  }

  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0 && pinnedNotes.length === 0
            ? "Empty"
            : `Showing ${notes.length + pinnedNotes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={handleAddNote} />

      {pinnedNotes.length > 0 && (
        <div>
          <h3 className="pinned-notes-text">Pinned Notes</h3>
          <div className="grid-container">
            {pinnedNotes.map((note, index) => (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                image={note.image} // Pass image to unpinned notes
                onDelete={() => handleDeleteNotes(index, true)}
                onPin={() => handleUnpinNote(index)}
                isPinned={true}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            image={note.image} // Pass image to unpinned notes
            onDelete={() => handleDeleteNotes(index, false)}
            onPin={() => handlePinNote(index)}
            isPinned={false}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
