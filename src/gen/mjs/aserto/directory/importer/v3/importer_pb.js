// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";

/**
 * @generated from enum aserto.directory.importer.v3.Opcode
 */
export const Opcode = proto3.makeEnum(
  "aserto.directory.importer.v3.Opcode",
  [
    {no: 0, name: "OPCODE_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "OPCODE_SET", localName: "SET"},
    {no: 2, name: "OPCODE_DELETE", localName: "DELETE"},
    {no: 3, name: "OPCODE_DELETE_WITH_RELATIONS", localName: "DELETE_WITH_RELATIONS"},
  ],
);

/**
 * @generated from message aserto.directory.importer.v3.ImportRequest
 */
export const ImportRequest = proto3.makeMessageType(
  "aserto.directory.importer.v3.ImportRequest",
  () => [
    { no: 1, name: "op_code", kind: "enum", T: proto3.getEnumType(Opcode) },
    { no: 5, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 6, name: "relation", kind: "message", T: Relation, oneof: "msg" },
  ],
);

/**
 * @generated from message aserto.directory.importer.v3.ImportResponse
 */
export const ImportResponse = proto3.makeMessageType(
  "aserto.directory.importer.v3.ImportResponse",
  () => [
    { no: 1, name: "object", kind: "message", T: ImportCounter },
    { no: 2, name: "relation", kind: "message", T: ImportCounter },
  ],
);

/**
 * @generated from message aserto.directory.importer.v3.ImportCounter
 */
export const ImportCounter = proto3.makeMessageType(
  "aserto.directory.importer.v3.ImportCounter",
  () => [
    { no: 1, name: "recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "set", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "delete", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "error", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

