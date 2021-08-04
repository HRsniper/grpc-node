/* eslint-disable @typescript-eslint/no-var-requires */

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const path = require("path");

const noteDefinition = protoLoader.loadSync(path.resolve(__dirname, "proto/note.proto"));
// console.log(noteDefinition);

const noteDescriptor = grpc.loadPackageDefinition(noteDefinition);
// console.log(noteDescriptor);

const client = new noteDescriptor.NoteService("localhost:50051", grpc.credentials.createInsecure());

client.list({}, (err, notes) => {
  if (err) throw err;

  console.log(notes);
});

const randomNumbers = Math.floor(Math.random() * 3 + 1); // 1,2,3

client.find(randomNumbers.toString(), (err, note) => {
  if (err) throw err;

  if (!note.id) return console.log("Note not found");

  return console.log(note);
});
