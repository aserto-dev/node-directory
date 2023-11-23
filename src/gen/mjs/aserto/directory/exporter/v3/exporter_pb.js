// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";

/**
 * @generated from enum aserto.directory.exporter.v3.Option
 */
export const Option = proto3.makeEnum(
  "aserto.directory.exporter.v3.Option",
  [
    {no: 0, name: "OPTION_UNKNOWN", localName: "UNKNOWN"},
    {no: 8, name: "OPTION_DATA_OBJECTS", localName: "DATA_OBJECTS"},
    {no: 16, name: "OPTION_DATA_RELATIONS", localName: "DATA_RELATIONS"},
    {no: 24, name: "OPTION_DATA", localName: "DATA"},
  ],
);

/**
 * @generated from message aserto.directory.exporter.v3.ExportRequest
 */
export const ExportRequest = proto3.makeMessageType(
  "aserto.directory.exporter.v3.ExportRequest",
  () => [
    { no: 1, name: "options", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 20, name: "start_from", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message aserto.directory.exporter.v3.ExportResponse
 */
export const ExportResponse = proto3.makeMessageType(
  "aserto.directory.exporter.v3.ExportResponse",
  () => [
    { no: 2, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 4, name: "relation", kind: "message", T: Relation, oneof: "msg" },
  ],
);
