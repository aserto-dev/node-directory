// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var aserto_directory_v2_directory_pb = require('../../../aserto/directory/v2/directory_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
var aserto_common_info_v1_info_pb = require('../../../aserto/common/info/v1/info_pb.js');
var aserto_api_v1_pagination_pb = require('../../../aserto/api/v1/pagination_pb.js');
var aserto_directory_v2_object_pb = require('../../../aserto/directory/v2/object_pb.js');
var aserto_directory_v2_relation_pb = require('../../../aserto/directory/v2/relation_pb.js');

function serialize_aserto_directory_v2_CheckPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckPermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_CheckPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckPermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_CheckRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckRelationRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_CheckRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.CheckRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.CheckRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_CheckRelationResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.CheckRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_aserto_directory_v2_DeleteObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteObjectRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteObjectResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteObjectTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteObjectTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeletePermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeletePermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeletePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeletePermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeletePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeletePermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeletePermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeletePermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeletePermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeletePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationTypePermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationTypePermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationTypePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationTypePermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationTypePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationTypePermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationTypePermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationTypePermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationTypePermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationTypePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_DeleteRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.DeleteRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.DeleteRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_DeleteRelationTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.DeleteRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_GetObjRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetObjTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetObjTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetObjTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetObjTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetObjTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_GetPermRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetPermRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetPermRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetPermRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetPermRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetPermResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetPermResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetPermResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetPermResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetPermResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_GetRelRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_GetRelationTypePermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationTypePermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationTypePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationTypePermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationTypePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_GetRelationTypePermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.GetRelationTypePermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.GetRelationTypePermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_GetRelationTypePermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.GetRelationTypePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_ListObjectGraphRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectGraphRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectGraphRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListObjectGraphResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListObjectGraphResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListObjectGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListObjectGraphResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListObjectGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_ListRelationTypePermissionsRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationTypePermissionsRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationTypePermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationTypePermissionsRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationTypePermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_ListRelationTypePermissionsResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.ListRelationTypePermissionsResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.ListRelationTypePermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_ListRelationTypePermissionsResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.ListRelationTypePermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_aserto_directory_v2_SetObjectRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetObjectRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetObjectRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetObjectResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetObjectResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetObjectResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetObjectTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetObjectTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetObjectTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetObjectTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetObjectTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetObjectTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetObjectTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetObjectTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetObjectTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetObjectTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetPermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetPermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetPermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetPermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetPermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetPermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationTypePermissionRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationTypePermissionRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationTypePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationTypePermissionRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationTypePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationTypePermissionResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationTypePermissionResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationTypePermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationTypePermissionResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationTypePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationTypeRequest(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationTypeRequest)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationTypeRequest(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aserto_directory_v2_SetRelationTypeResponse(arg) {
  if (!(arg instanceof aserto_directory_v2_directory_pb.SetRelationTypeResponse)) {
    throw new Error('Expected argument of type aserto.directory.v2.SetRelationTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aserto_directory_v2_SetRelationTypeResponse(buffer_arg) {
  return aserto_directory_v2_directory_pb.SetRelationTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  setObjectType: {
    path: '/aserto.directory.v2.Directory/SetObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetObjectTypeRequest,
    responseType: aserto_directory_v2_directory_pb.SetObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_SetObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_SetObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetObjectTypeResponse,
  },
  deleteObjectType: {
    path: '/aserto.directory.v2.Directory/DeleteObjectType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeleteObjectTypeRequest,
    responseType: aserto_directory_v2_directory_pb.DeleteObjectTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_DeleteObjectTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeleteObjectTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_DeleteObjectTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeleteObjectTypeResponse,
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
  getObjType: {
    path: '/aserto.directory.v2.Directory/GetObjType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetObjTypeRequest,
    responseType: aserto_directory_v2_directory_pb.GetObjTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_GetObjTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetObjTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_GetObjTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetObjTypeResponse,
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
  setRelationType: {
    path: '/aserto.directory.v2.Directory/SetRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetRelationTypeRequest,
    responseType: aserto_directory_v2_directory_pb.SetRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_SetRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_SetRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetRelationTypeResponse,
  },
  deleteRelationType: {
    path: '/aserto.directory.v2.Directory/DeleteRelationType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeleteRelationTypeRequest,
    responseType: aserto_directory_v2_directory_pb.DeleteRelationTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_DeleteRelationTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeleteRelationTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_DeleteRelationTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeleteRelationTypeResponse,
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
  getRelType: {
    path: '/aserto.directory.v2.Directory/GetRelType',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetRelTypeRequest,
    responseType: aserto_directory_v2_directory_pb.GetRelTypeResponse,
    requestSerialize: serialize_aserto_directory_v2_GetRelTypeRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetRelTypeRequest,
    responseSerialize: serialize_aserto_directory_v2_GetRelTypeResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetRelTypeResponse,
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
  setPermission: {
    path: '/aserto.directory.v2.Directory/SetPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetPermissionRequest,
    responseType: aserto_directory_v2_directory_pb.SetPermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_SetPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetPermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_SetPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetPermissionResponse,
  },
  deletePermission: {
    path: '/aserto.directory.v2.Directory/DeletePermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeletePermissionRequest,
    responseType: aserto_directory_v2_directory_pb.DeletePermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_DeletePermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeletePermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_DeletePermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeletePermissionResponse,
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
  getPerm: {
    path: '/aserto.directory.v2.Directory/GetPerm',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetPermRequest,
    responseType: aserto_directory_v2_directory_pb.GetPermResponse,
    requestSerialize: serialize_aserto_directory_v2_GetPermRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetPermRequest,
    responseSerialize: serialize_aserto_directory_v2_GetPermResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetPermResponse,
  },
  // relation-permission methods
getRelationTypePermission: {
    path: '/aserto.directory.v2.Directory/GetRelationTypePermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetRelationTypePermissionRequest,
    responseType: aserto_directory_v2_directory_pb.GetRelationTypePermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_GetRelationTypePermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetRelationTypePermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_GetRelationTypePermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetRelationTypePermissionResponse,
  },
  setRelationTypePermission: {
    path: '/aserto.directory.v2.Directory/SetRelationTypePermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetRelationTypePermissionRequest,
    responseType: aserto_directory_v2_directory_pb.SetRelationTypePermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_SetRelationTypePermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetRelationTypePermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_SetRelationTypePermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetRelationTypePermissionResponse,
  },
  deleteRelationTypePermission: {
    path: '/aserto.directory.v2.Directory/DeleteRelationTypePermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeleteRelationTypePermissionRequest,
    responseType: aserto_directory_v2_directory_pb.DeleteRelationTypePermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_DeleteRelationTypePermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeleteRelationTypePermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_DeleteRelationTypePermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeleteRelationTypePermissionResponse,
  },
  listRelationTypePermissions: {
    path: '/aserto.directory.v2.Directory/ListRelationTypePermissions',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListRelationTypePermissionsRequest,
    responseType: aserto_directory_v2_directory_pb.ListRelationTypePermissionsResponse,
    requestSerialize: serialize_aserto_directory_v2_ListRelationTypePermissionsRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListRelationTypePermissionsRequest,
    responseSerialize: serialize_aserto_directory_v2_ListRelationTypePermissionsResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListRelationTypePermissionsResponse,
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
  setObject: {
    path: '/aserto.directory.v2.Directory/SetObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetObjectRequest,
    responseType: aserto_directory_v2_directory_pb.SetObjectResponse,
    requestSerialize: serialize_aserto_directory_v2_SetObjectRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetObjectRequest,
    responseSerialize: serialize_aserto_directory_v2_SetObjectResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetObjectResponse,
  },
  deleteObject: {
    path: '/aserto.directory.v2.Directory/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeleteObjectRequest,
    responseType: aserto_directory_v2_directory_pb.DeleteObjectResponse,
    requestSerialize: serialize_aserto_directory_v2_DeleteObjectRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeleteObjectRequest,
    responseSerialize: serialize_aserto_directory_v2_DeleteObjectResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeleteObjectResponse,
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
  getObj: {
    path: '/aserto.directory.v2.Directory/GetObj',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetObjRequest,
    responseType: aserto_directory_v2_directory_pb.GetObjResponse,
    requestSerialize: serialize_aserto_directory_v2_GetObjRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetObjRequest,
    responseSerialize: serialize_aserto_directory_v2_GetObjResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetObjResponse,
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
  setRelation: {
    path: '/aserto.directory.v2.Directory/SetRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.SetRelationRequest,
    responseType: aserto_directory_v2_directory_pb.SetRelationResponse,
    requestSerialize: serialize_aserto_directory_v2_SetRelationRequest,
    requestDeserialize: deserialize_aserto_directory_v2_SetRelationRequest,
    responseSerialize: serialize_aserto_directory_v2_SetRelationResponse,
    responseDeserialize: deserialize_aserto_directory_v2_SetRelationResponse,
  },
  deleteRelation: {
    path: '/aserto.directory.v2.Directory/DeleteRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.DeleteRelationRequest,
    responseType: aserto_directory_v2_directory_pb.DeleteRelationResponse,
    requestSerialize: serialize_aserto_directory_v2_DeleteRelationRequest,
    requestDeserialize: deserialize_aserto_directory_v2_DeleteRelationRequest,
    responseSerialize: serialize_aserto_directory_v2_DeleteRelationResponse,
    responseDeserialize: deserialize_aserto_directory_v2_DeleteRelationResponse,
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
  getRel: {
    path: '/aserto.directory.v2.Directory/GetRel',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.GetRelRequest,
    responseType: aserto_directory_v2_directory_pb.GetRelResponse,
    requestSerialize: serialize_aserto_directory_v2_GetRelRequest,
    requestDeserialize: deserialize_aserto_directory_v2_GetRelRequest,
    responseSerialize: serialize_aserto_directory_v2_GetRelResponse,
    responseDeserialize: deserialize_aserto_directory_v2_GetRelResponse,
  },
  // graph methods
listObjectGraph: {
    path: '/aserto.directory.v2.Directory/ListObjectGraph',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.ListObjectGraphRequest,
    responseType: aserto_directory_v2_directory_pb.ListObjectGraphResponse,
    requestSerialize: serialize_aserto_directory_v2_ListObjectGraphRequest,
    requestDeserialize: deserialize_aserto_directory_v2_ListObjectGraphRequest,
    responseSerialize: serialize_aserto_directory_v2_ListObjectGraphResponse,
    responseDeserialize: deserialize_aserto_directory_v2_ListObjectGraphResponse,
  },
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
  checkRelation: {
    path: '/aserto.directory.v2.Directory/CheckRelation',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.CheckRelationRequest,
    responseType: aserto_directory_v2_directory_pb.CheckRelationResponse,
    requestSerialize: serialize_aserto_directory_v2_CheckRelationRequest,
    requestDeserialize: deserialize_aserto_directory_v2_CheckRelationRequest,
    responseSerialize: serialize_aserto_directory_v2_CheckRelationResponse,
    responseDeserialize: deserialize_aserto_directory_v2_CheckRelationResponse,
  },
  checkPermission: {
    path: '/aserto.directory.v2.Directory/CheckPermission',
    requestStream: false,
    responseStream: false,
    requestType: aserto_directory_v2_directory_pb.CheckPermissionRequest,
    responseType: aserto_directory_v2_directory_pb.CheckPermissionResponse,
    requestSerialize: serialize_aserto_directory_v2_CheckPermissionRequest,
    requestDeserialize: deserialize_aserto_directory_v2_CheckPermissionRequest,
    responseSerialize: serialize_aserto_directory_v2_CheckPermissionResponse,
    responseDeserialize: deserialize_aserto_directory_v2_CheckPermissionResponse,
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
