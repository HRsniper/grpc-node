/* eslint-disable @typescript-eslint/no-var-requires */

const { NoteFindRequest } = require("../src/pb/note_pb.js");
const { NoteServiceClient } = require("../src/pb/note_grpc_web_pb.js");

const client = new NoteServiceClient("0.0.0.0:50051");

const request = new NoteFindRequest();
request.setId(2);

client.find(request, (err, note) => {
  if (err) {
    console.error(err.details);
    return (document.querySelector("#noteFind").innerHTML = err.details);
  }

  console.log(note);
  return (document.querySelector("#noteFind").innerHTML = note);
});

client.list({}, (err, notes) => {
  if (err) {
    console.error(err.details);
    return (document.querySelector("#noteList").innerHTML = err.details);
  }

  console.log(notes);
  return (document.querySelector("#noteList").innerHTML = notes);
});
