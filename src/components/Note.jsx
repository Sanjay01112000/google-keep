// src/components/Note.jsx

import React from "react";
import { MdDelete, MdOutlinePushPin } from "react-icons/md";

function Note({ title, content, onDelete, onPin, isPinned }) {
  return (
    <div className="note">
      <div className="note-data">
        <div className="note-title">
        <h1>{title}</h1>
        <button onClick={onPin}>
          <MdOutlinePushPin size={25} style={{ color: isPinned ? "gold" : "black" }} />
        </button>
        </div>
        <p>{content}</p>
      </div>
      <div className="note-button">
        <button onClick={onDelete}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
}

export default Note;
