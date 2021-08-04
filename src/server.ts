import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { promisify } from "util";
import { INoteServiceServer, NoteServiceService } from "./pb/note_grpc_pb";
import { Note, NoteFindRequest, NoteFindResponse, NoteListResponse, Void } from "./pb/note_pb";

const notes: Note.AsObject[] = [
  { id: 1, title: "Note 1", description: "Content 1" },
  { id: 2, title: "Note 2", description: "Content 2" },
  { id: 3, title: "Note 3", description: "Content 3" }
];

class NoteServer implements INoteServiceServer {
  list(_: ServerUnaryCall<Void, NoteListResponse>, callback: sendUnaryData<NoteListResponse>) {
    const response = new NoteListResponse();

    notes.forEach((note) => {
      response.addNotes(new Note().setId(note.id).setTitle(note.title).setDescription(note.description));
    });

    callback(null, response);
  }

  find(call: ServerUnaryCall<NoteFindRequest, NoteFindResponse>, callback: sendUnaryData<NoteFindResponse>) {
    const id = call.request.getId();

    const foundNote = notes.find((note) => note.id === id);
    if (!foundNote) {
      return callback(new Error("Not found"), null);
    }

    const response = new NoteFindResponse();
    response.setNote(new Note().setId(foundNote.id).setTitle(foundNote.title).setDescription(foundNote.description));

    return callback(null, response);
  }

  [name: string]: UntypedHandleCall;
}

const server = new Server();

server.addService(NoteServiceService, new NoteServer());

// utilizamos o .bind(server) porque o método start() possui uma checagem
// para saber se o servidor já foi inicializado chamando this.started= true/false
const bindPromise = promisify(server.bindAsync).bind(server);

// utilizamos o grpc.ServerCredentials.createInsecure() para criar o server localmente sem um SSL porque,
// por padrão, o HTTP/2 exige um certificado SSL para ser iniciado.
bindPromise("0.0.0.0:50051", ServerCredentials.createInsecure())
  .then((port) => {
    server.start();
    console.log(`\033[0;31mServer started\033[0m, listening on \033[0;32m${port}\033[0m`);
  })
  .catch((error) => {
    console.error(`\033[0;31mServer error\033[0m: ${error.message}`);
  });
