/* eslint-disable @typescript-eslint/no-var-requires */

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const path = require("path");

function promisify(client) {
  for (let method in client) {
    client[`${method}Async`] = (parameters) => {
      return new Promise((resolve, reject) => {
        client[method](parameters, (err, response) => {
          if (err) reject(err);
          resolve(response);
        });
      });
    };
  }
}

const noteDefinition = protoLoader.loadSync(path.resolve(__dirname, "protofile/note.proto"));
// console.log(noteDefinition);
const noteDescriptor = grpc.loadPackageDefinition(noteDefinition);
// console.log(noteDescriptor);

const client = new noteDescriptor.NoteService("localhost:50051", grpc.ServerCredentials.createInsecure());
promisify(client);

client.listAsync({}).then(console.log);

client.list({}, (err, notes) => {
  if (err) throw err;

  console.log(notes);
});

const randomNumbers = Math.floor(Math.random() * 3 + 1); // 1,2,3

client.findAsync({ id: randomNumbers }).then(console.log);

client.find({ id: randomNumbers }, (err, { note }) => {
  if (err) throw err;

  if (!note) return console.error("Note not found");

  return console.log(note);
});
