// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file aserto/directory/common/v3/common.proto (package aserto.directory.common.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message aserto.directory.common.v3.Object
 */
export const Object$ = proto3.makeMessageType(
  "aserto.directory.common.v3.Object",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "properties", kind: "message", T: Struct },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "etag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Object$"},
);

/**
 * @generated from message aserto.directory.common.v3.Relation
 */
export const Relation = proto3.makeMessageType(
  "aserto.directory.common.v3.Relation",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "etag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v3.ObjectIdentifier
 */
export const ObjectIdentifier = proto3.makeMessageType(
  "aserto.directory.common.v3.ObjectIdentifier",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v3.RelationIdentifier
 */
export const RelationIdentifier = proto3.makeMessageType(
  "aserto.directory.common.v3.RelationIdentifier",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v3.PaginationRequest
 */
export const PaginationRequest = proto3.makeMessageType(
  "aserto.directory.common.v3.PaginationRequest",
  () => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v3.PaginationResponse
 */
export const PaginationResponse = proto3.makeMessageType(
  "aserto.directory.common.v3.PaginationResponse",
  () => [
    { no: 1, name: "next_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

