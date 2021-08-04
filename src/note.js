/* eslint-disable @typescript-eslint/no-var-requires */

const crypto = require("crypto");
const path = require("path");

const noteDefinitions = require(path.resolve(__dirname, "proto/note_pb"));

const note = new noteDefinitions.Note();
note.setId(crypto.randomBytes(16).toString("hex"));
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

const noteList = new noteDefinitions.NoteList();
noteList.addNotes(note);
console.log(`[DEBUG]  noteList`, noteList);
console.log(`----------`);

const serializedNoteList = noteList.serializeBinary();
console.log(`[DEBUG]  serializedNoteList`, serializedNoteList);
console.log(`----------`);

const receivedList = noteDefinitions.NoteList.deserializeBinary(serializedNoteList);
console.log(`[DEBUG]  receivedList`, receivedList);
console.log(`----------`);

for (const note of receivedList.getNotesList()) {
  console.log(`Logging note ID: ${note.getId()}: ${note.getTitle()} [${note.getDescription()}]`);
}
