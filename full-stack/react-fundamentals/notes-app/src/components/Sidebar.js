export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div
      key={note.id}
      className={`title ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <h4 className="text-snippet">
        {note.body.split("\n")[0].replace(/[^a-zA-Z0-9 ]/g, "")}
      </h4>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
