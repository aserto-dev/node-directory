// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_v2_directory_pb = require('../../../aserto/directory/v2/directory_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
var aserto_api_v2_pagination_pb = require('../../../aserto/api/v2/pagination_pb.js');
var aserto_directory_v2_object_pb = require('../../../aserto/directory/v2/object_pb.js');
var aserto_directory_v2_permission_pb = require('../../../aserto/directory/v2/permission_pb.js');
var aserto_directory_v2_relation_pb = require('../../../aserto/directory/v2/relation_pb.js');

function serialize_aserto_directory_v2_CheckRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_CheckResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetGraphRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetGraphRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetGraphRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetGraphResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetGraphResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetGraphResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectManyRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectManyRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectManyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectManyRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectManyResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectManyResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectManyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectManyResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectManyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjectTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetPermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetPermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_InfoRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.InfoRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.InfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_InfoRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.InfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_InfoResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.InfoResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.InfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_InfoResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.InfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListObjectTypesRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectTypesRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectTypesRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListObjectTypesResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectTypesResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectTypesResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListObjectsRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectsRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectsRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListObjectsResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectsResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectsResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListPermissionsRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListPermissionsRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListPermissionsRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListPermissionsResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListPermissionsResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListPermissionsResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListRelationTypesRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationTypesRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationTypesRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListRelationTypesResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationTypesResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationTypesResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListRelationsRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationsRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationsRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListRelationsResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationsResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationsResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DirectoryService = exports.DirectoryService = {
  // object type metadata methods
getObjectType: {
    path: '/aserto.directory.v2.Directory/GetObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetObjectTypeRequest,
    responseType: aserto_directory_v2_directory_pb.GetObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_GetObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_GetObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetObjectTypeResponse,
  },
  listObjectTypes: {
    path: '/aserto.directory.v2.Directory/ListObjectTypes',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListObjectTypesRequest,
    responseType: aserto_directory_v2_directory_pb.ListObjectTypesResponse,
    requestSerialize: serialize_aserto_directory_v2_ListObjectTypesRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListObjectTypesRequest,
    responseSerialize: serialize_aserto_directory_v2_ListObjectTypesResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListObjectTypesResponse,
  },
  // relation type metadata methods
getRelationType: {
    path: '/aserto.directory.v2.Directory/GetRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetRelationTypeRequest,
    responseType: aserto_directory_v2_directory_pb.GetRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_GetRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_GetRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetRelationTypeResponse,
  },
  listRelationTypes: {
    path: '/aserto.directory.v2.Directory/ListRelationTypes',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListRelationTypesRequest,
    responseType: aserto_directory_v2_directory_pb.ListRelationTypesResponse,
    requestSerialize: serialize_aserto_directory_v2_ListRelationTypesRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListRelationTypesRequest,
    responseSerialize: serialize_aserto_directory_v2_ListRelationTypesResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListRelationTypesResponse,
  },
  // permission metadata methods
getPermission: {
    path: '/aserto.directory.v2.Directory/GetPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetPermissionRequest,
    responseType: aserto_directory_v2_directory_pb.GetPermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_GetPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetPermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_GetPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetPermissionResponse,
  },
  listPermissions: {
    path: '/aserto.directory.v2.Directory/ListPermissions',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListPermissionsRequest,
    responseType: aserto_directory_v2_directory_pb.ListPermissionsResponse,
    requestSerialize: serialize_aserto_directory_v2_ListPermissionsRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListPermissionsRequest,
    responseSerialize: serialize_aserto_directory_v2_ListPermissionsResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListPermissionsResponse,
  },
  // object methods
getObject: {
    path: '/aserto.directory.v2.Directory/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetObjectRequest,
    responseType: aserto_directory_v2_directory_pb.GetObjectResponse,
    requestSerialize: serialize_aserto_directory_v2_GetObjectRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetObjectRequest,
    responseSerialize: serialize_aserto_directory_v2_GetObjectResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetObjectResponse,
  },
  getObjectMany: {
    path: '/aserto.directory.v2.Directory/GetObjectMany',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetObjectManyRequest,
    responseType: aserto_directory_v2_directory_pb.GetObjectManyResponse,
    requestSerialize: serialize_aserto_directory_v2_GetObjectManyRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetObjectManyRequest,
    responseSerialize: serialize_aserto_directory_v2_GetObjectManyResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetObjectManyResponse,
  },
  listObjects: {
    path: '/aserto.directory.v2.Directory/ListObjects',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListObjectsRequest,
    responseType: aserto_directory_v2_directory_pb.ListObjectsResponse,
    requestSerialize: serialize_aserto_directory_v2_ListObjectsRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListObjectsRequest,
    responseSerialize: serialize_aserto_directory_v2_ListObjectsResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListObjectsResponse,
  },
  // relation methods
getRelation: {
    path: '/aserto.directory.v2.Directory/GetRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetRelationRequest,
    responseType: aserto_directory_v2_directory_pb.GetRelationResponse,
    requestSerialize: serialize_aserto_directory_v2_GetRelationRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetRelationRequest,
    responseSerialize: serialize_aserto_directory_v2_GetRelationResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetRelationResponse,
  },
  listRelations: {
    path: '/aserto.directory.v2.Directory/ListRelations',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListRelationsRequest,
    responseType: aserto_directory_v2_directory_pb.ListRelationsResponse,
    requestSerialize: serialize_aserto_directory_v2_ListRelationsRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListRelationsRequest,
    responseSerialize: serialize_aserto_directory_v2_ListRelationsResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListRelationsResponse,
  },
  // graph methods
getGraph: {
    path: '/aserto.directory.v2.Directory/GetGraph',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetGraphRequest,
    responseType: aserto_directory_v2_directory_pb.GetGraphResponse,
    requestSerialize: serialize_aserto_directory_v2_GetGraphRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetGraphRequest,
    responseSerialize: serialize_aserto_directory_v2_GetGraphResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetGraphResponse,
  },
  // check methods
check: {
    path: '/aserto.directory.v2.Directory/Check',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.CheckRequest,
    responseType: aserto_directory_v2_directory_pb.CheckResponse,
    requestSerialize: serialize_aserto_directory_v2_CheckRequest,
    requestDeserialize: deserialize_aserto_directory_v2_CheckRequest,
    responseSerialize: serialize_aserto_directory_v2_CheckResponse,
    responseDeserialize: deserialize_aserto_directory_v2_CheckResponse,
  },
  // misc methods
info: {
    path: '/aserto.directory.v2.Directory/Info',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.InfoRequest,
    responseType: aserto_directory_v2_directory_pb.InfoResponse,
    requestSerialize: serialize_aserto_directory_v2_InfoRequest,
    requestDeserialize: deserialize_aserto_directory_v2_InfoRequest,
    responseSerialize: serialize_aserto_directory_v2_InfoResponse,
    responseDeserialize: deserialize_aserto_directory_v2_InfoResponse,
  },
};

exports.DirectoryClient = grpc.makeGenericClientConstructor(DirectoryService);
