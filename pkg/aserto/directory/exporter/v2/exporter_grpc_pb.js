// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_exporter_v2_exporter_pb = require('../../../../aserto/directory/exporter/v2/exporter_pb.js');
var aserto_directory_v2_object_pb = require('../../../../aserto/directory/v2/object_pb.js');
var aserto_directory_v2_relation_pb = require('../../../../aserto/directory/v2/relation_pb.js');

function serialize_aserto_directory_exporter_v2_ExportRequest(arg) {
  if (!(arg instanceof aserto_directory_exporter_v2_exporter_pb.ExportRequest)) {
    throw new Error('Expected argument of type aserto.directory.exporter.v2.ExportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_exporter_v2_ExportRequest(buffer_arg) {
  return aserto_directory_exporter_v2_exporter_pb.ExportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_exporter_v2_ExportResponse(arg) {
  if (!(arg instanceof aserto_directory_exporter_v2_exporter_pb.ExportResponse)) {
    throw new Error('Expected argument of type aserto.directory.exporter.v2.ExportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_exporter_v2_ExportResponse(buffer_arg) {
  return aserto_directory_exporter_v2_exporter_pb.ExportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExporterService = exports.ExporterService = {
  export: {
    path: '/aserto.directory.exporter.v2.Exporter/Export',
    requestStream: false,
    responseStream: true,
    requestType: aserto_directory_exporter_v2_exporter_pb.ExportRequest,
    responseType: aserto_directory_exporter_v2_exporter_pb.ExportResponse,
    requestSerialize: serialize_aserto_directory_exporter_v2_ExportRequest,
    requestDeserialize: deserialize_aserto_directory_exporter_v2_ExportRequest,
    responseSerialize: serialize_aserto_directory_exporter_v2_ExportResponse,
    responseDeserialize: deserialize_aserto_directory_exporter_v2_ExportResponse,
  },
};

exports.ExporterClient = grpc.makeGenericClientConstructor(ExporterService);
