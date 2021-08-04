/* eslint-disable @typescript-eslint/no-var-requires */

const { NoteFindRequest } = require("../src/pb/note_pb.js");
const { NoteServiceClient } = require("../src/pb/note_grpc_web_pb.js");

const client = new NoteServiceClient("http://0.0.0.0:50051");
const request = new NoteFindRequest();
request.setId("2");

client.find(request, (err, { note }) => {
  if (err) return (document.querySelector("#noteFind").innerHTML = err.details);
  return (document.querySelector("#noteFind").innerHTML = note);
});

client.list(null, (err, { notes }) => {
  if (err) return (document.querySelector("#noteList").innerHTML = err.details);
  return (document.querySelector("#noteList").innerHTML = notes);
});
