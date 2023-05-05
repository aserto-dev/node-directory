// @generated by protoc-gen-es v1.2.0 with parameter "target=js"
// @generated from file aserto/directory/exporter/v2/exporter.proto (package aserto.directory.exporter.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb.js";

/**
 * @generated from enum aserto.directory.exporter.v2.Option
 */
export const Option = proto3.makeEnum(
  "aserto.directory.exporter.v2.Option",
  [
    {no: 0, name: "OPTION_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "OPTION_METADATA_OBJECT_TYPES", localName: "METADATA_OBJECT_TYPES"},
    {no: 2, name: "OPTION_METADATA_RELATION_TYPES", localName: "METADATA_RELATION_TYPES"},
    {no: 4, name: "OPTION_METADATA_PERMISSIONS", localName: "METADATA_PERMISSIONS"},
    {no: 7, name: "OPTION_METADATA", localName: "METADATA"},
    {no: 8, name: "OPTION_DATA_OBJECTS", localName: "DATA_OBJECTS"},
    {no: 16, name: "OPTION_DATA_RELATIONS", localName: "DATA_RELATIONS"},
    {no: 32, name: "OPTION_DATA_RELATIONS_WITH_KEYS", localName: "DATA_RELATIONS_WITH_KEYS"},
    {no: 24, name: "OPTION_DATA", localName: "DATA"},
    {no: 40, name: "OPTION_DATA_WITH_KEYS", localName: "DATA_WITH_KEYS"},
    {no: 31, name: "OPTION_ALL", localName: "ALL"},
    {no: 47, name: "OPTION_ALL_WITH_KEYS", localName: "ALL_WITH_KEYS"},
  ],
);

/**
 * @generated from message aserto.directory.exporter.v2.ExportRequest
 */
export const ExportRequest = proto3.makeMessageType(
  "aserto.directory.exporter.v2.ExportRequest",
  () => [
    { no: 1, name: "options", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 20, name: "start_from", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message aserto.directory.exporter.v2.ExportResponse
 */
export const ExportResponse = proto3.makeMessageType(
  "aserto.directory.exporter.v2.ExportResponse",
  () => [
    { no: 2, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 3, name: "object_type", kind: "message", T: ObjectType, oneof: "msg" },
    { no: 4, name: "relation", kind: "message", T: Relation, oneof: "msg" },
    { no: 5, name: "relation_type", kind: "message", T: RelationType, oneof: "msg" },
    { no: 6, name: "permission", kind: "message", T: Permission, oneof: "msg" },
  ],
);

