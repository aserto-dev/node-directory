// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";

/**
 * @generated from enum aserto.directory.exporter.v3.Option
 */
export enum Option {
  /**
   * nothing selected (default initialization value)
   *
   * @generated from enum value: OPTION_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * object instances
   *
   * @generated from enum value: OPTION_DATA_OBJECTS = 8;
   */
  DATA_OBJECTS = 8,

  /**
   * relation instances
   *
   * @generated from enum value: OPTION_DATA_RELATIONS = 16;
   */
  DATA_RELATIONS = 16,

  /**
   * all data = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS
   *
   * @generated from enum value: OPTION_DATA = 24;
   */
  DATA = 24,

  /**
   * stats
   *
   * @generated from enum value: OPTION_STATS = 64;
   */
  STATS = 64,
}
// Retrieve enum metadata with: proto3.getEnumType(Option)
proto3.util.setEnumType(Option, "aserto.directory.exporter.v3.Option", [
  { no: 0, name: "OPTION_UNKNOWN" },
  { no: 8, name: "OPTION_DATA_OBJECTS" },
  { no: 16, name: "OPTION_DATA_RELATIONS" },
  { no: 24, name: "OPTION_DATA" },
  { no: 64, name: "OPTION_STATS" },
]);

/**
 * @generated from message aserto.directory.exporter.v3.ExportRequest
 */
export class ExportRequest extends Message<ExportRequest> {
  /**
   * data export options mask
   *
   * @generated from field: uint32 options = 1;
   */
  options = 0;

  /**
   * start export from timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp start_from = 20;
   */
  startFrom?: Timestamp;

  constructor(data?: PartialMessage<ExportRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.exporter.v3.ExportRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "options", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 20, name: "start_from", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportRequest {
    return new ExportRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportRequest {
    return new ExportRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportRequest {
    return new ExportRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ExportRequest | PlainMessage<ExportRequest> | undefined, b: ExportRequest | PlainMessage<ExportRequest> | undefined): boolean {
    return proto3.util.equals(ExportRequest, a, b);
  }
}

/**
 * @generated from message aserto.directory.exporter.v3.ExportResponse
 */
export class ExportResponse extends Message<ExportResponse> {
  /**
   * @generated from oneof aserto.directory.exporter.v3.ExportResponse.msg
   */
  msg: {
    /**
     * object instance (data)
     *
     * @generated from field: aserto.directory.common.v3.Object object = 2;
     */
    value: Object$;
    case: "object";
  } | {
    /**
     * relation instance (data)
     *
     * @generated from field: aserto.directory.common.v3.Relation relation = 4;
     */
    value: Relation;
    case: "relation";
  } | {
    /**
     * object and/or relation stats (no data)
     *
     * @generated from field: google.protobuf.Struct stats = 8;
     */
    value: Struct;
    case: "stats";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ExportResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.exporter.v3.ExportResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 4, name: "relation", kind: "message", T: Relation, oneof: "msg" },
    { no: 8, name: "stats", kind: "message", T: Struct, oneof: "msg" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportResponse {
    return new ExportResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportResponse {
    return new ExportResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportResponse {
    return new ExportResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ExportResponse | PlainMessage<ExportResponse> | undefined, b: ExportResponse | PlainMessage<ExportResponse> | undefined): boolean {
    return proto3.util.equals(ExportResponse, a, b);
  }
}

