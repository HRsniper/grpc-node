/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = require('./note_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.NoteServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.NoteServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.NoteListResponse>}
 */
const methodDescriptor_NoteService_List = new grpc.web.MethodDescriptor(
  '/NoteService/List',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.NoteListResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.NoteListResponse>}
 */
const methodInfo_NoteService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NoteListResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteListResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NoteListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NoteListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NoteServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NoteService/List',
      request,
      metadata || {},
      methodDescriptor_NoteService_List,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NoteListResponse>}
 *     Promise that resolves to the response
 */
proto.NoteServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NoteService/List',
      request,
      metadata || {},
      methodDescriptor_NoteService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NoteFindRequest,
 *   !proto.NoteFindResponse>}
 */
const methodDescriptor_NoteService_Find = new grpc.web.MethodDescriptor(
  '/NoteService/Find',
  grpc.web.MethodType.UNARY,
  proto.NoteFindRequest,
  proto.NoteFindResponse,
  /**
   * @param {!proto.NoteFindRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteFindResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NoteFindRequest,
 *   !proto.NoteFindResponse>}
 */
const methodInfo_NoteService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NoteFindResponse,
  /**
   * @param {!proto.NoteFindRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteFindResponse.deserializeBinary
);


/**
 * @param {!proto.NoteFindRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NoteFindResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NoteFindResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NoteServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NoteService/Find',
      request,
      metadata || {},
      methodDescriptor_NoteService_Find,
      callback);
};


/**
 * @param {!proto.NoteFindRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NoteFindResponse>}
 *     Promise that resolves to the response
 */
proto.NoteServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NoteService/Find',
      request,
      metadata || {},
      methodDescriptor_NoteService_Find);
};


module.exports = proto;

