// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var note_pb = require('./note_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_NoteFindRequest(arg) {
  if (!(arg instanceof note_pb.NoteFindRequest)) {
    throw new Error('Expected argument of type NoteFindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteFindRequest(buffer_arg) {
  return note_pb.NoteFindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteFindResponse(arg) {
  if (!(arg instanceof note_pb.NoteFindResponse)) {
    throw new Error('Expected argument of type NoteFindResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteFindResponse(buffer_arg) {
  return note_pb.NoteFindResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteListResponse(arg) {
  if (!(arg instanceof note_pb.NoteListResponse)) {
    throw new Error('Expected argument of type NoteListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteListResponse(buffer_arg) {
  return note_pb.NoteListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services
var NoteServiceService = exports.NoteServiceService = {
  // rpc List(Void) returns (NoteListResponse);
list: {
    path: '/NoteService/List',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: note_pb.NoteListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_NoteListResponse,
    responseDeserialize: deserialize_NoteListResponse,
  },
  find: {
    path: '/NoteService/Find',
    requestStream: false,
    responseStream: false,
    requestType: note_pb.NoteFindRequest,
    responseType: note_pb.NoteFindResponse,
    requestSerialize: serialize_NoteFindRequest,
    requestDeserialize: deserialize_NoteFindRequest,
    responseSerialize: serialize_NoteFindResponse,
    responseDeserialize: deserialize_NoteFindResponse,
  },
};

exports.NoteServiceClient = grpc.makeGenericClientConstructor(NoteServiceService);
