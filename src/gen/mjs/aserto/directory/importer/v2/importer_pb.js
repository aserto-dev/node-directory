// @generated by protoc-gen-es v1.2.1 with parameter "target=js"
// @generated from file aserto/directory/importer/v2/importer.proto (package aserto.directory.importer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb.js";

/**
 * @generated from enum aserto.directory.importer.v2.Opcode
 */
export const Opcode = proto3.makeEnum(
  "aserto.directory.importer.v2.Opcode",
  [
    {no: 0, name: "OPCODE_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "OPCODE_SET", localName: "SET"},
    {no: 2, name: "OPCODE_DELETE", localName: "DELETE"},
  ],
);

/**
 * @generated from message aserto.directory.importer.v2.ImportRequest
 */
export const ImportRequest = proto3.makeMessageType(
  "aserto.directory.importer.v2.ImportRequest",
  () => [
    { no: 1, name: "op_code", kind: "enum", T: proto3.getEnumType(Opcode) },
    { no: 2, name: "object_type", kind: "message", T: ObjectType, oneof: "msg" },
    { no: 3, name: "permission", kind: "message", T: Permission, oneof: "msg" },
    { no: 4, name: "relation_type", kind: "message", T: RelationType, oneof: "msg" },
    { no: 5, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 6, name: "relation", kind: "message", T: Relation, oneof: "msg" },
  ],
);

/**
 * @generated from message aserto.directory.importer.v2.ImportResponse
 */
export const ImportResponse = proto3.makeMessageType(
  "aserto.directory.importer.v2.ImportResponse",
  () => [
    { no: 1, name: "object_type", kind: "message", T: ImportCounter },
    { no: 2, name: "permission", kind: "message", T: ImportCounter },
    { no: 3, name: "relation_type", kind: "message", T: ImportCounter },
    { no: 4, name: "object", kind: "message", T: ImportCounter },
    { no: 5, name: "relation", kind: "message", T: ImportCounter },
  ],
);

/**
 * @generated from message aserto.directory.importer.v2.ImportCounter
 */
export const ImportCounter = proto3.makeMessageType(
  "aserto.directory.importer.v2.ImportCounter",
  () => [
    { no: 1, name: "recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "set", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "delete", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "error", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

