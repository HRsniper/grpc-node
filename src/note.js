/* eslint-disable @typescript-eslint/no-var-requires */

const crypto = require("crypto");
const path = require("path");

const noteDefinitions = require(path.resolve(__dirname, "pb/note_pb"));

const note = new noteDefinitions.Note();
note.setId(crypto.randomInt(1, 3));
note.setTitle("Title");
note.setDescription("Description");

console.log(`[DEBUG]  note`, note);
console.log(`----------`);

const serializedNote = note.serializeBinary();
console.log(`[DEBUG]  serializedNote`, serializedNote);
console.log(`----------`);

const receivedNote = noteDefinitions.Note.deserializeBinary(serializedNote);
console.log(`[DEBUG]  receivedNote`, receivedNote);
console.log(`----------`);

const noteList = new noteDefinitions.NoteListResponse();
noteList.addNotes(note);
console.log(`[DEBUG]  noteList`, noteList);
console.log(`----------`);

const serializedNoteList = noteList.serializeBinary();
console.log(`[DEBUG]  serializedNoteList`, serializedNoteList);
console.log(`----------`);

const receivedList = noteDefinitions.NoteListResponse.deserializeBinary(serializedNoteList);
console.log(`[DEBUG]  receivedList`, receivedList);
console.log(`----------`);

for (const note of receivedList.getNotesList()) {
  console.log(`Logging note ID: ${note.getId()}: ${note.getTitle()} [${note.getDescription()}]`);
}
