import React from "react";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from "react-split";
import { data } from "./data.js";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here...\n# delete this placeholder",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const newNotes = [];
      oldNotes.map((oldNote) => {
        if (oldNote.id === currentNoteId) {
          return newNotes.unshift({ ...oldNote, body: text });
        }
        return newNotes.push(oldNote);
        /* return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote; */
      });
      return newNotes;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event, noteId) {
    /*prevent running this event to the parent element 
    (enclose event only to the delete button)*/
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
