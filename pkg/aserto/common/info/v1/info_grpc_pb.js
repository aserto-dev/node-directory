// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_common_info_v1_info_pb = require('../../../../aserto/common/info/v1/info_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_aserto_common_info_v1_InfoRequest(arg) {
  if (!(arg instanceof aserto_common_info_v1_info_pb.InfoRequest)) {
    throw new Error('Expected argument of type aserto.common.info.v1.InfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_common_info_v1_InfoRequest(buffer_arg) {
  return aserto_common_info_v1_info_pb.InfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_common_info_v1_InfoResponse(arg) {
  if (!(arg instanceof aserto_common_info_v1_info_pb.InfoResponse)) {
    throw new Error('Expected argument of type aserto.common.info.v1.InfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_common_info_v1_InfoResponse(buffer_arg) {
  return aserto_common_info_v1_info_pb.InfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InfoService = exports.InfoService = {
  info: {
    path: '/aserto.common.info.v1.Info/Info',
    requestStream: false,
    responseStream: false,
    requestType: aserto_common_info_v1_info_pb.InfoRequest,
    responseType: aserto_common_info_v1_info_pb.InfoResponse,
    requestSerialize: serialize_aserto_common_info_v1_InfoRequest,
    requestDeserialize: deserialize_aserto_common_info_v1_InfoRequest,
    responseSerialize: serialize_aserto_common_info_v1_InfoResponse,
    responseDeserialize: deserialize_aserto_common_info_v1_InfoResponse,
  },
};

exports.InfoClient = grpc.makeGenericClientConstructor(InfoService);
