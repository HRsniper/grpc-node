import { ChannelCredentials } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { NoteServiceClient } from "./pb/note_grpc_pb";
import { NoteFindRequest } from "./pb/note_pb";

const client = new NoteServiceClient("0.0.0.0:50051", ChannelCredentials.createInsecure());

client.list(new Empty(), (err, notes) => {
  if (err) return console.error(err);

  console.log(notes.toObject());
});

const randomNumbers = Math.floor(Math.random() * 2 + 2); // 2,3

client.find(new NoteFindRequest().setId(randomNumbers), (err, note) => {
  if (err) return console.error(err);
  console.log(note.toObject());
});

client.find(new NoteFindRequest().setId(1), (err, note) => {
  if (err) return console.error(err);
  console.log(note.toObject());
});
