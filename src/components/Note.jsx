import React from "react";
import { MdDelete, MdOutlinePushPin } from "react-icons/md";

function Note({ title, content,image,  onDelete, onPin, isPinned }) {
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
        {image && (
          <div style={{ margin: "10px 0" }}>
            <img src={image} alt="Note" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        )}
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
