// package: 
// file: note.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as note_pb from "./note_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface INoteServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: INoteServiceService_IList;
    find: INoteServiceService_IFind;
}

interface INoteServiceService_IList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, note_pb.NoteListResponse> {
    path: "/NoteService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<note_pb.NoteListResponse>;
    responseDeserialize: grpc.deserialize<note_pb.NoteListResponse>;
}
interface INoteServiceService_IFind extends grpc.MethodDefinition<note_pb.NoteFindRequest, note_pb.NoteFindResponse> {
    path: "/NoteService/Find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<note_pb.NoteFindRequest>;
    requestDeserialize: grpc.deserialize<note_pb.NoteFindRequest>;
    responseSerialize: grpc.serialize<note_pb.NoteFindResponse>;
    responseDeserialize: grpc.deserialize<note_pb.NoteFindResponse>;
}

export const NoteServiceService: INoteServiceService;

export interface INoteServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, note_pb.NoteListResponse>;
    find: grpc.handleUnaryCall<note_pb.NoteFindRequest, note_pb.NoteFindResponse>;
}

export interface INoteServiceClient {
    list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    find(request: note_pb.NoteFindRequest, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
    find(request: note_pb.NoteFindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
    find(request: note_pb.NoteFindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
}

export class NoteServiceClient extends grpc.Client implements INoteServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: note_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    public find(request: note_pb.NoteFindRequest, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
    public find(request: note_pb.NoteFindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
    public find(request: note_pb.NoteFindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: note_pb.NoteFindResponse) => void): grpc.ClientUnaryCall;
}
