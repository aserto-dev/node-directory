// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_importer_v2_importer_pb = require('../../../../aserto/directory/importer/v2/importer_pb.js');
var aserto_directory_v2_object_pb = require('../../../../aserto/directory/v2/object_pb.js');
var aserto_directory_v2_permission_pb = require('../../../../aserto/directory/v2/permission_pb.js');
var aserto_directory_v2_relation_pb = require('../../../../aserto/directory/v2/relation_pb.js');

function serialize_aserto_directory_importer_v2_ImportRequest(arg) {
  if (!(arg instanceof aserto_directory_importer_v2_importer_pb.ImportRequest)) {
    throw new Error('Expected argument of type aserto.directory.importer.v2.ImportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_importer_v2_ImportRequest(buffer_arg) {
  return aserto_directory_importer_v2_importer_pb.ImportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_importer_v2_ImportResponse(arg) {
  if (!(arg instanceof aserto_directory_importer_v2_importer_pb.ImportResponse)) {
    throw new Error('Expected argument of type aserto.directory.importer.v2.ImportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_importer_v2_ImportResponse(buffer_arg) {
  return aserto_directory_importer_v2_importer_pb.ImportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImporterService = exports.ImporterService = {
  import: {
    path: '/aserto.directory.importer.v2.Importer/Import',
    requestStream: true,
    responseStream: true,
    requestType: aserto_directory_importer_v2_importer_pb.ImportRequest,
    responseType: aserto_directory_importer_v2_importer_pb.ImportResponse,
    requestSerialize: serialize_aserto_directory_importer_v2_ImportRequest,
    requestDeserialize: deserialize_aserto_directory_importer_v2_ImportRequest,
    responseSerialize: serialize_aserto_directory_importer_v2_ImportResponse,
    responseDeserialize: deserialize_aserto_directory_importer_v2_ImportResponse,
  },
};

exports.ImporterClient = grpc.makeGenericClientConstructor(ImporterService);
