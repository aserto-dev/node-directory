// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_reader_v2_reader_pb = require('../../../../aserto/directory/reader/v2/reader_pb.js');
var aserto_directory_common_v2_common_pb = require('../../../../aserto/directory/common/v2/common_pb.js');

function serialize_aserto_directory_reader_v2_CheckPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.CheckPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.CheckPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_CheckPermissionRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.CheckPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_CheckPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.CheckPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.CheckPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_CheckPermissionResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.CheckPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_CheckRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.CheckRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.CheckRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_CheckRelationRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.CheckRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_CheckRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.CheckRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.CheckRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_CheckRelationResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.CheckRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetGraphRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetGraphRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetGraphRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetGraphResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetGraphResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetGraphResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectManyRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectManyRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectManyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectManyRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectManyResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectManyResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectManyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectManyResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectManyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectTypeRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectTypeResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectTypesRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectTypesRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectTypesResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectTypesResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectsRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectsRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectsRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetObjectsResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetObjectsResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetObjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetObjectsResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetObjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetPermissionRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetPermissionResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetPermissionsRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetPermissionsRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetPermissionsRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetPermissionsResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetPermissionsResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetPermissionsResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationTypeRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationTypeResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationTypesRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationTypesRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationTypesResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationTypesResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationsRequest(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationsRequest)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationsRequest(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_reader_v2_GetRelationsResponse(arg) {
  if (!(arg instanceof aserto_directory_reader_v2_reader_pb.GetRelationsResponse)) {
    throw new Error('Expected argument of type aserto.directory.reader.v2.GetRelationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_reader_v2_GetRelationsResponse(buffer_arg) {
  return aserto_directory_reader_v2_reader_pb.GetRelationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ReaderService = exports.ReaderService = {
  // object type metadata methods
getObjectType: {
    path: '/aserto.directory.reader.v2.Reader/GetObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetObjectTypeResponse,
  },
  getObjectTypes: {
    path: '/aserto.directory.reader.v2.Reader/GetObjectTypes',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetObjectTypesRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetObjectTypesRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetObjectTypesResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetObjectTypesResponse,
  },
  // relation type metadata methods
getRelationType: {
    path: '/aserto.directory.reader.v2.Reader/GetRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetRelationTypeResponse,
  },
  getRelationTypes: {
    path: '/aserto.directory.reader.v2.Reader/GetRelationTypes',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetRelationTypesRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetRelationTypesRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetRelationTypesResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetRelationTypesResponse,
  },
  // permission metadata methods
getPermission: {
    path: '/aserto.directory.reader.v2.Reader/GetPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetPermissionRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetPermissionResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetPermissionRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetPermissionResponse,
  },
  getPermissions: {
    path: '/aserto.directory.reader.v2.Reader/GetPermissions',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetPermissionsRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetPermissionsResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetPermissionsRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetPermissionsRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetPermissionsResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetPermissionsResponse,
  },
  // object methods
getObject: {
    path: '/aserto.directory.reader.v2.Reader/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetObjectRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetObjectResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetObjectRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetObjectRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetObjectResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetObjectResponse,
  },
  getObjectMany: {
    path: '/aserto.directory.reader.v2.Reader/GetObjectMany',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetObjectManyRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetObjectManyResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetObjectManyRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetObjectManyRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetObjectManyResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetObjectManyResponse,
  },
  getObjects: {
    path: '/aserto.directory.reader.v2.Reader/GetObjects',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetObjectsRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetObjectsResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetObjectsRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetObjectsRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetObjectsResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetObjectsResponse,
  },
  // relation methods
getRelation: {
    path: '/aserto.directory.reader.v2.Reader/GetRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetRelationRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetRelationResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetRelationRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetRelationRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetRelationResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetRelationResponse,
  },
  getRelations: {
    path: '/aserto.directory.reader.v2.Reader/GetRelations',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetRelationsRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetRelationsResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetRelationsRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetRelationsRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetRelationsResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetRelationsResponse,
  },
  // check methods
checkPermission: {
    path: '/aserto.directory.reader.v2.Reader/CheckPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.CheckPermissionRequest,
    responseType: aserto_directory_reader_v2_reader_pb.CheckPermissionResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_CheckPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_CheckPermissionRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_CheckPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_CheckPermissionResponse,
  },
  checkRelation: {
    path: '/aserto.directory.reader.v2.Reader/CheckRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.CheckRelationRequest,
    responseType: aserto_directory_reader_v2_reader_pb.CheckRelationResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_CheckRelationRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_CheckRelationRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_CheckRelationResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_CheckRelationResponse,
  },
  // graph methods
getGraph: {
    path: '/aserto.directory.reader.v2.Reader/GetGraph',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_reader_v2_reader_pb.GetGraphRequest,
    responseType: aserto_directory_reader_v2_reader_pb.GetGraphResponse,
    requestSerialize: serialize_aserto_directory_reader_v2_GetGraphRequest,
    requestDeserialize: deserialize_aserto_directory_reader_v2_GetGraphRequest,
    responseSerialize: serialize_aserto_directory_reader_v2_GetGraphResponse,
    responseDeserialize: deserialize_aserto_directory_reader_v2_GetGraphResponse,
  },
};

exports.ReaderClient = grpc.makeGenericClientConstructor(ReaderService);
