// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_writer_v2_writer_pb = require('../../../../aserto/directory/writer/v2/writer_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var aserto_directory_v2_object_pb = require('../../../../aserto/directory/v2/object_pb.js');
var aserto_directory_v2_relation_pb = require('../../../../aserto/directory/v2/relation_pb.js');

function serialize_aserto_directory_writer_v2_DeleteObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteObjectRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteObjectResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteObjectTypeRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteObjectTypeResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeletePermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeletePermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeletePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeletePermissionRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeletePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeletePermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeletePermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeletePermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeletePermissionResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeletePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteRelationRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteRelationResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteRelationTypeRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_DeleteRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.DeleteRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_DeleteRelationTypeResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetObjectRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetObjectResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetObjectTypeRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetObjectTypeResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetPermissionRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetPermissionResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetRelationRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetRelationResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetRelationTypeRequest(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_writer_v2_SetRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.writer.v2.SetRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_writer_v2_SetRelationTypeResponse(buffer_arg) {
  return aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WriterService = exports.WriterService = {
  // object type metadata methods
setObjectType: {
    path: '/aserto.directory.writer.v2.Writer/SetObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest,
    responseType: aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_SetObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_SetObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_SetObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_SetObjectTypeResponse,
  },
  deleteObjectType: {
    path: '/aserto.directory.writer.v2.Writer/DeleteObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest,
    responseType: aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_DeleteObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_DeleteObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_DeleteObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_DeleteObjectTypeResponse,
  },
  // relation type metadata methods
setRelationType: {
    path: '/aserto.directory.writer.v2.Writer/SetRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest,
    responseType: aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_SetRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_SetRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_SetRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_SetRelationTypeResponse,
  },
  deleteRelationType: {
    path: '/aserto.directory.writer.v2.Writer/DeleteRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest,
    responseType: aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_DeleteRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_DeleteRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_DeleteRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_DeleteRelationTypeResponse,
  },
  // permission metadata methods
setPermission: {
    path: '/aserto.directory.writer.v2.Writer/SetPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.SetPermissionRequest,
    responseType: aserto_directory_writer_v2_writer_pb.SetPermissionResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_SetPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_SetPermissionRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_SetPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_SetPermissionResponse,
  },
  deletePermission: {
    path: '/aserto.directory.writer.v2.Writer/DeletePermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.DeletePermissionRequest,
    responseType: aserto_directory_writer_v2_writer_pb.DeletePermissionResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_DeletePermissionRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_DeletePermissionRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_DeletePermissionResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_DeletePermissionResponse,
  },
  // object methods
setObject: {
    path: '/aserto.directory.writer.v2.Writer/SetObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.SetObjectRequest,
    responseType: aserto_directory_writer_v2_writer_pb.SetObjectResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_SetObjectRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_SetObjectRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_SetObjectResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_SetObjectResponse,
  },
  deleteObject: {
    path: '/aserto.directory.writer.v2.Writer/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.DeleteObjectRequest,
    responseType: aserto_directory_writer_v2_writer_pb.DeleteObjectResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_DeleteObjectRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_DeleteObjectRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_DeleteObjectResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_DeleteObjectResponse,
  },
  // relation methods
setRelation: {
    path: '/aserto.directory.writer.v2.Writer/SetRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.SetRelationRequest,
    responseType: aserto_directory_writer_v2_writer_pb.SetRelationResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_SetRelationRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_SetRelationRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_SetRelationResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_SetRelationResponse,
  },
  deleteRelation: {
    path: '/aserto.directory.writer.v2.Writer/DeleteRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_writer_v2_writer_pb.DeleteRelationRequest,
    responseType: aserto_directory_writer_v2_writer_pb.DeleteRelationResponse,
    requestSerialize: serialize_aserto_directory_writer_v2_DeleteRelationRequest,
    requestDeserialize: deserialize_aserto_directory_writer_v2_DeleteRelationRequest,
    responseSerialize: serialize_aserto_directory_writer_v2_DeleteRelationResponse,
    responseDeserialize: deserialize_aserto_directory_writer_v2_DeleteRelationResponse,
  },
};

exports.WriterClient = grpc.makeGenericClientConstructor(WriterService);
