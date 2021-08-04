/* eslint-disable @typescript-eslint/no-var-requires */

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const path = require("path");

const noteDefinition = protoLoader.loadSync(path.resolve(__dirname, "proto/note.proto"));
// console.log(noteDefinition);

const noteDescriptor = grpc.loadPackageDefinition(noteDefinition);
// console.log(noteDescriptor);

const notes = [
  { id: "1", title: "Note 1", description: "Content 1" },
  { id: "2", title: "Note 2", description: "Content 2" },
  { id: "3", title: "Note 3", description: "Content 3" }
];

function List(_, callback) {
  return callback(null, notes);
}

function Find({ request: { id } }, callback) {
  const foundNote = notes.find((note) => note.id === id);

  return callback(null, foundNote);
}

const server = new grpc.Server();

server.addService(noteDescriptor.NoteService.service, { List, Find });

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err) => {
  server.start();

  console.log("server started");
});
