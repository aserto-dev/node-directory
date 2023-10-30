// @generated by protoc-gen-es v1.2.1 with parameter "target=js"
// @generated from file aserto/directory/reader/v3/reader.proto (package aserto.directory.reader.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectDependency, ObjectIdentifier, PaginationRequest, PaginationResponse, Relation } from "../../common/v3/common_pb.js";

/**
 * @generated from message aserto.directory.reader.v3.GetObjectRequest
 */
export const GetObjectRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "with_relations", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "page", kind: "message", T: PaginationRequest },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetObjectResponse
 */
export const GetObjectResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectResponse",
  () => [
    { no: 1, name: "result", kind: "message", T: Object$ },
    { no: 4, name: "relations", kind: "message", T: Relation, repeated: true },
    { no: 9, name: "page", kind: "message", T: PaginationResponse },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyRequest
 */
export const GetObjectManyRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectManyRequest",
  () => [
    { no: 1, name: "param", kind: "message", T: ObjectIdentifier, repeated: true },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyResponse
 */
export const GetObjectManyResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectManyResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: Object$, repeated: true },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetObjectsRequest
 */
export const GetObjectsRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectsRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "page", kind: "message", T: PaginationRequest },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetObjectsResponse
 */
export const GetObjectsResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetObjectsResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: Object$, repeated: true },
    { no: 9, name: "page", kind: "message", T: PaginationResponse },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetRelationRequest
 */
export const GetRelationRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetRelationRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "with_objects", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetRelationResponse
 */
export const GetRelationResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetRelationResponse",
  () => [
    { no: 1, name: "result", kind: "message", T: Relation },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Object$} },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetRelationsRequest
 */
export const GetRelationsRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetRelationsRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "with_objects", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "page", kind: "message", T: PaginationRequest },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetRelationsResponse
 */
export const GetRelationsResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetRelationsResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: Relation, repeated: true },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Object$} },
    { no: 9, name: "page", kind: "message", T: PaginationResponse },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckRequest
 */
export const CheckRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckResponse
 */
export const CheckResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckResponse",
  () => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionRequest
 */
export const CheckPermissionRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckPermissionRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionResponse
 */
export const CheckPermissionResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckPermissionResponse",
  () => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckRelationRequest
 */
export const CheckRelationRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckRelationRequest",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.CheckRelationResponse
 */
export const CheckRelationResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.CheckRelationResponse",
  () => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetGraphRequest
 */
export const GetGraphRequest = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetGraphRequest",
  () => [
    { no: 1, name: "anchor_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "anchor_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message aserto.directory.reader.v3.GetGraphResponse
 */
export const GetGraphResponse = proto3.makeMessageType(
  "aserto.directory.reader.v3.GetGraphResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: ObjectDependency, repeated: true },
  ],
);

