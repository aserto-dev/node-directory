// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/exporter/v2/exporter.proto (package aserto.directory.exporter.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb.js";

/**
 * @generated from enum aserto.directory.exporter.v2.Option
 * @deprecated
 */
export enum Option {
  /**
   * nothing selected (default initialization value)
   *
   * @generated from enum value: OPTION_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * object type metadata
   *
   * @generated from enum value: OPTION_METADATA_OBJECT_TYPES = 1;
   */
  METADATA_OBJECT_TYPES = 1,

  /**
   * relation type metadata
   *
   * @generated from enum value: OPTION_METADATA_RELATION_TYPES = 2;
   */
  METADATA_RELATION_TYPES = 2,

  /**
   * permission metadata
   *
   * @generated from enum value: OPTION_METADATA_PERMISSIONS = 4;
   */
  METADATA_PERMISSIONS = 4,

  /**
   * all metadata = OPTION_METADATA_OBJECT_TYPES | OPTION_METADATA_RELATION_TYPES | OPTION_METADATA_PERMISSIONS
   *
   * @generated from enum value: OPTION_METADATA = 7;
   */
  METADATA = 7,

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
   * relation instances with key values
   *
   * @generated from enum value: OPTION_DATA_RELATIONS_WITH_KEYS = 32;
   */
  DATA_RELATIONS_WITH_KEYS = 32,

  /**
   * all data = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS
   *
   * @generated from enum value: OPTION_DATA = 24;
   */
  DATA = 24,

  /**
   * all data with keys = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS_WITH_KEYS
   *
   * @generated from enum value: OPTION_DATA_WITH_KEYS = 40;
   */
  DATA_WITH_KEYS = 40,

  /**
   * all metadata and data = OPTION_METADATA | OPTION_DATA
   *
   * @generated from enum value: OPTION_ALL = 31;
   */
  ALL = 31,

  /**
   * all metadata and data with keys = OPTION_METADATA | OPTION_DATA_WITH_KEYS
   *
   * @generated from enum value: OPTION_ALL_WITH_KEYS = 47;
   */
  ALL_WITH_KEYS = 47,
}
// Retrieve enum metadata with: proto3.getEnumType(Option)
proto3.util.setEnumType(Option, "aserto.directory.exporter.v2.Option", [
  { no: 0, name: "OPTION_UNKNOWN" },
  { no: 1, name: "OPTION_METADATA_OBJECT_TYPES" },
  { no: 2, name: "OPTION_METADATA_RELATION_TYPES" },
  { no: 4, name: "OPTION_METADATA_PERMISSIONS" },
  { no: 7, name: "OPTION_METADATA" },
  { no: 8, name: "OPTION_DATA_OBJECTS" },
  { no: 16, name: "OPTION_DATA_RELATIONS" },
  { no: 32, name: "OPTION_DATA_RELATIONS_WITH_KEYS" },
  { no: 24, name: "OPTION_DATA" },
  { no: 40, name: "OPTION_DATA_WITH_KEYS" },
  { no: 31, name: "OPTION_ALL" },
  { no: 47, name: "OPTION_ALL_WITH_KEYS" },
]);

/**
 * @generated from message aserto.directory.exporter.v2.ExportRequest
 * @deprecated
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
  static readonly typeName = "aserto.directory.exporter.v2.ExportRequest";
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
 * @generated from message aserto.directory.exporter.v2.ExportResponse
 * @deprecated
 */
export class ExportResponse extends Message<ExportResponse> {
  /**
   * @generated from oneof aserto.directory.exporter.v2.ExportResponse.msg
   */
  msg: {
    /**
     * object instance (data)
     *
     * @generated from field: aserto.directory.common.v2.Object object = 2;
     */
    value: Object$;
    case: "object";
  } | {
    /**
     * object type instance (metadata)
     *
     * @generated from field: aserto.directory.common.v2.ObjectType object_type = 3;
     */
    value: ObjectType;
    case: "objectType";
  } | {
    /**
     * relation instance (data)
     *
     * @generated from field: aserto.directory.common.v2.Relation relation = 4;
     */
    value: Relation;
    case: "relation";
  } | {
    /**
     * relation type instance (metadata)
     *
     * @generated from field: aserto.directory.common.v2.RelationType relation_type = 5;
     */
    value: RelationType;
    case: "relationType";
  } | {
    /**
     * permission instance (metadata)
     *
     * @generated from field: aserto.directory.common.v2.Permission permission = 6;
     */
    value: Permission;
    case: "permission";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ExportResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.exporter.v2.ExportResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "object", kind: "message", T: Object$, oneof: "msg" },
    { no: 3, name: "object_type", kind: "message", T: ObjectType, oneof: "msg" },
    { no: 4, name: "relation", kind: "message", T: Relation, oneof: "msg" },
    { no: 5, name: "relation_type", kind: "message", T: RelationType, oneof: "msg" },
    { no: 6, name: "permission", kind: "message", T: Permission, oneof: "msg" },
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

