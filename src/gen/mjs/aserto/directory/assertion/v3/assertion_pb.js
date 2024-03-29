// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file aserto/directory/assertion/v3/assertion.proto (package aserto.directory.assertion.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, proto3 } from "@bufbuild/protobuf";
import { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb.js";
import { CheckPermissionRequest, CheckRelationRequest, CheckRequest } from "../../reader/v3/reader_pb.js";

/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionRequest
 */
export const GetAssertionRequest = proto3.makeMessageType(
  "aserto.directory.assertion.v3.GetAssertionRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionResponse
 */
export const GetAssertionResponse = proto3.makeMessageType(
  "aserto.directory.assertion.v3.GetAssertionResponse",
  () => [
    { no: 1, name: "result", kind: "message", T: Assert },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsRequest
 */
export const ListAssertionsRequest = proto3.makeMessageType(
  "aserto.directory.assertion.v3.ListAssertionsRequest",
  () => [
    { no: 1, name: "page", kind: "message", T: PaginationRequest },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsResponse
 */
export const ListAssertionsResponse = proto3.makeMessageType(
  "aserto.directory.assertion.v3.ListAssertionsResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: Assert, repeated: true },
    { no: 2, name: "page", kind: "message", T: PaginationResponse },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionRequest
 */
export const SetAssertionRequest = proto3.makeMessageType(
  "aserto.directory.assertion.v3.SetAssertionRequest",
  () => [
    { no: 1, name: "assert", kind: "message", T: Assert },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionResponse
 */
export const SetAssertionResponse = proto3.makeMessageType(
  "aserto.directory.assertion.v3.SetAssertionResponse",
  () => [
    { no: 1, name: "result", kind: "message", T: Assert },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionRequest
 */
export const DeleteAssertionRequest = proto3.makeMessageType(
  "aserto.directory.assertion.v3.DeleteAssertionRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionResponse
 */
export const DeleteAssertionResponse = proto3.makeMessageType(
  "aserto.directory.assertion.v3.DeleteAssertionResponse",
  () => [
    { no: 1, name: "result", kind: "message", T: Empty },
  ],
);

/**
 * @generated from message aserto.directory.assertion.v3.Assert
 */
export const Assert = proto3.makeMessageType(
  "aserto.directory.assertion.v3.Assert",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "expected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "check", kind: "message", T: CheckRequest, oneof: "msg" },
    { no: 4, name: "check_relation", kind: "message", T: CheckRelationRequest, oneof: "msg" },
    { no: 5, name: "check_permission", kind: "message", T: CheckPermissionRequest, oneof: "msg" },
  ],
);

