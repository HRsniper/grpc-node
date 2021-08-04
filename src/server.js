/* eslint-disable @typescript-eslint/no-var-requires */

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const path = require("path");

const noteDefinition = protoLoader.loadSync(path.resolve(__dirname, "protofile/note.proto"));
// console.log(noteDefinition);

const noteDescriptor = grpc.loadPackageDefinition(noteDefinition);
// console.log(noteDescriptor);

const notes = [
  { id: 1, title: "Note 1", description: "Content 1" },
  { id: 2, title: "Note 2", description: "Content 2" },
  { id: 3, title: "Note 3", description: "Content 3" }
];

function List(_, callback) {
  return callback(null, { notes });
}

function Find({ request: { id } }, callback) {
  const foundNote = notes.find((note) => note.id === id);

  if (!foundNote) {
    return callback(new Error("Not found"), null);
  }

  return callback(null, { note: foundNote });
}

const server = new grpc.Server();

server.addService(noteDescriptor.NoteService.service, { List, Find });

// utilizamos o grpc.ServerCredentials.createInsecure() para criar o server localmente sem um SSL porque,
// por padrão, o HTTP/2 exige um certificado SSL para ser iniciado.
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err) => {
  if (err) throw err;

  server.start();

  console.log("\033[0;31mServer started\033[0m, listening on \033[0;32m0.0.0.0:50051\033[0m");
});
