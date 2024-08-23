import React, { useState, useRef } from "react";
import { IoIosAdd } from "react-icons/io";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    image: null,
  });

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNote((prevValue) => ({
          ...prevValue,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
      image: null,
    });

    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        {isExpanded && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef} // Attach the ref here
            style={{ marginTop: "10px" }}
          />
        )}
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
