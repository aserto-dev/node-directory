// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/common/v2/common.proto (package aserto.directory.common.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum aserto.directory.common.v2.Flag
 */
export enum Flag {
  /**
   * default, no special object behavior
   *
   * @generated from enum value: FLAG_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * hidden object
   *
   * @generated from enum value: FLAG_HIDDEN = 1;
   */
  HIDDEN = 1,

  /**
   * read-only object
   *
   * @generated from enum value: FLAG_READONLY = 2;
   */
  READONLY = 2,

  /**
   * system object
   *
   * @generated from enum value: FLAG_SYSTEM = 4;
   */
  SYSTEM = 4,

  /**
   * shadow object by type+key associated to parent object
   *
   * @generated from enum value: FLAG_SHADOW = 8;
   */
  SHADOW = 8,
}
// Retrieve enum metadata with: proto3.getEnumType(Flag)
proto3.util.setEnumType(Flag, "aserto.directory.common.v2.Flag", [
  { no: 0, name: "FLAG_UNKNOWN" },
  { no: 1, name: "FLAG_HIDDEN" },
  { no: 2, name: "FLAG_READONLY" },
  { no: 4, name: "FLAG_SYSTEM" },
  { no: 8, name: "FLAG_SHADOW" },
]);

/**
 * @generated from message aserto.directory.common.v2.ObjectType
 */
export class ObjectType extends Message<ObjectType> {
  /**
   * object type name (unique, lc-string)
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * object type display name
   *
   * @generated from field: string display_name = 3;
   */
  displayName = "";

  /**
   * object type is a subject (user|group) (default false)
   *
   * @generated from field: bool is_subject = 4;
   */
  isSubject = false;

  /**
   * sort ordinal (default 0)
   *
   * @generated from field: int32 ordinal = 5;
   */
  ordinal = 0;

  /**
   * status flag bitmap (default 0)
   *
   * @generated from field: uint32 status = 6;
   */
  status = 0;

  /**
   * object type schema definition (JSON)
   *
   * @generated from field: google.protobuf.Struct schema = 10;
   */
  schema?: Struct;

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance hash
   *
   * @generated from field: string hash = 23;
   */
  hash = "";

  constructor(data?: PartialMessage<ObjectType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.ObjectType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_subject", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "schema", kind: "message", T: Struct },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectType {
    return new ObjectType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectType {
    return new ObjectType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectType {
    return new ObjectType().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectType | PlainMessage<ObjectType> | undefined, b: ObjectType | PlainMessage<ObjectType> | undefined): boolean {
    return proto3.util.equals(ObjectType, a, b);
  }
}

/**
 * @generated from message aserto.directory.common.v2.Permission
 */
export class Permission extends Message<Permission> {
  /**
   * permission name (unique, cs-string)
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * permission display name
   *
   * @generated from field: string display_name = 3;
   */
  displayName = "";

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance hash
   *
   * @generated from field: string hash = 23;
   */
  hash = "";

  constructor(data?: PartialMessage<Permission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.Permission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission {
    return new Permission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJsonString(jsonString, options);
  }

  static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean {
    return proto3.util.equals(Permission, a, b);
  }
}

/**
 * @generated from message aserto.directory.common.v2.RelationType
 */
export class RelationType extends Message<RelationType> {
  /**
   * relation type name selector
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * object type referenced by relation
   *
   * @generated from field: string object_type = 3;
   */
  objectType = "";

  /**
   * relation display name
   *
   * @generated from field: string display_name = 4;
   */
  displayName = "";

  /**
   * sort ordinal (default 0)
   *
   * @generated from field: int32 ordinal = 5;
   */
  ordinal = 0;

  /**
   * status bitmap (default 0)
   *
   * @generated from field: uint32 status = 6;
   */
  status = 0;

  /**
   * relations union-ed with relation type instance
   *
   * @generated from field: repeated string unions = 7;
   */
  unions: string[] = [];

  /**
   * permissions associated to relation type instance
   *
   * @generated from field: repeated string permissions = 8;
   */
  permissions: string[] = [];

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance hash
   *
   * @generated from field: string hash = 23;
   */
  hash = "";

  constructor(data?: PartialMessage<RelationType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.RelationType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "unions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationType {
    return new RelationType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationType {
    return new RelationType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationType {
    return new RelationType().fromJsonString(jsonString, options);
  }

  static equals(a: RelationType | PlainMessage<RelationType> | undefined, b: RelationType | PlainMessage<RelationType> | undefined): boolean {
    return proto3.util.equals(RelationType, a, b);
  }
}

/**
 * @generated from message aserto.directory.common.v2.Object
 */
export class Object$ extends Message<Object$> {
  /**
   * external object key (cs-string)
   *
   * @generated from field: string key = 2;
   */
  key = "";

  /**
   * object type name
   *
   * @generated from field: string type = 3;
   */
  type = "";

  /**
   * display name object
   *
   * @generated from field: string display_name = 4;
   */
  displayName = "";

  /**
   * property bag
   *
   * @generated from field: google.protobuf.Struct properties = 5;
   */
  properties?: Struct;

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance hash
   *
   * @generated from field: string hash = 23;
   */
  hash = "";

  constructor(data?: PartialMessage<Object$>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.Object";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "properties", kind: "message", T: Struct },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Object$ {
    return new Object$().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Object$ {
    return new Object$().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Object$ {
    return new Object$().fromJsonString(jsonString, options);
  }

  static equals(a: Object$ | PlainMessage<Object$> | undefined, b: Object$ | PlainMessage<Object$> | undefined): boolean {
    return proto3.util.equals(Object$, a, b);
  }
}

/**
 * @generated from message aserto.directory.common.v2.Relation
 */
export class Relation extends Message<Relation> {
  /**
   * subject identifier
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
   */
  subject?: ObjectIdentifier;

  /**
   * relation type name
   *
   * @generated from field: string relation = 2;
   */
  relation = "";

  /**
   * object identifier
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
   */
  object?: ObjectIdentifier;

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance hash
   *
   * @generated from field: string hash = 23;
   */
  hash = "";

  constructor(data?: PartialMessage<Relation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.Relation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relation {
    return new Relation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relation {
    return new Relation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relation {
    return new Relation().fromJsonString(jsonString, options);
  }

  static equals(a: Relation | PlainMessage<Relation> | undefined, b: Relation | PlainMessage<Relation> | undefined): boolean {
    return proto3.util.equals(Relation, a, b);
  }
}

/**
 * @generated from message aserto.directory.common.v2.ObjectDependency
 */
export class ObjectDependency extends Message<ObjectDependency> {
  /**
   * object type name of source object
   *
   * @generated from field: string object_type = 1;
   */
  objectType = "";

  /**
   * object search key of source object
   *
   * @generated from field: string object_key = 4;
   */
  objectKey = "";

  /**
   * relation identifier
   *
   * @generated from field: string relation = 5;
   */
  relation = "";

  /**
   * object type id of target object
   *
   * @generated from field: string subject_type = 7;
   */
  subjectType = "";

  /**
   * object search key of target object
   *
   * @generated from field: string subject_key = 10;
   */
  subjectKey = "";

  /**
   * dependency depth
   *
   * @generated from field: int32 depth = 11;
   */
  depth = 0;

  /**
   * dependency cycle
   *
   * @generated from field: bool is_cycle = 12;
   */
  isCycle = false;

  /**
   * dependency path
   *
   * @generated from field: repeated string path = 13;
   */
  path: string[] = [];

  constructor(data?: PartialMessage<ObjectDependency>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.ObjectDependency";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "subject_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "is_cycle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectDependency {
    return new ObjectDependency().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectDependency {
    return new ObjectDependency().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectDependency {
    return new ObjectDependency().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectDependency | PlainMessage<ObjectDependency> | undefined, b: ObjectDependency | PlainMessage<ObjectDependency> | undefined): boolean {
    return proto3.util.equals(ObjectDependency, a, b);
  }
}

/**
 * ObjectType identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectTypeIdentifier
 */
export class ObjectTypeIdentifier extends Message<ObjectTypeIdentifier> {
  /**
   * object type name (unique, lc-string)
   *
   * @generated from field: optional string name = 2;
   */
  name?: string;

  constructor(data?: PartialMessage<ObjectTypeIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.ObjectTypeIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectTypeIdentifier {
    return new ObjectTypeIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectTypeIdentifier {
    return new ObjectTypeIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectTypeIdentifier {
    return new ObjectTypeIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectTypeIdentifier | PlainMessage<ObjectTypeIdentifier> | undefined, b: ObjectTypeIdentifier | PlainMessage<ObjectTypeIdentifier> | undefined): boolean {
    return proto3.util.equals(ObjectTypeIdentifier, a, b);
  }
}

/**
 * Permission identifier
 *
 * @generated from message aserto.directory.common.v2.PermissionIdentifier
 */
export class PermissionIdentifier extends Message<PermissionIdentifier> {
  /**
   * permission name (unique, cs-string)
   *
   * @generated from field: optional string name = 2;
   */
  name?: string;

  constructor(data?: PartialMessage<PermissionIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.PermissionIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionIdentifier {
    return new PermissionIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionIdentifier {
    return new PermissionIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionIdentifier {
    return new PermissionIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: PermissionIdentifier | PlainMessage<PermissionIdentifier> | undefined, b: PermissionIdentifier | PlainMessage<PermissionIdentifier> | undefined): boolean {
    return proto3.util.equals(PermissionIdentifier, a, b);
  }
}

/**
 * RelationType identifier
 *
 * @generated from message aserto.directory.common.v2.RelationTypeIdentifier
 */
export class RelationTypeIdentifier extends Message<RelationTypeIdentifier> {
  /**
   * relation type name selector
   *
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * object type referenced by relation
   *
   * @generated from field: optional string object_type = 3;
   */
  objectType?: string;

  constructor(data?: PartialMessage<RelationTypeIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.RelationTypeIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationTypeIdentifier {
    return new RelationTypeIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationTypeIdentifier {
    return new RelationTypeIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationTypeIdentifier {
    return new RelationTypeIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: RelationTypeIdentifier | PlainMessage<RelationTypeIdentifier> | undefined, b: RelationTypeIdentifier | PlainMessage<RelationTypeIdentifier> | undefined): boolean {
    return proto3.util.equals(RelationTypeIdentifier, a, b);
  }
}

/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectIdentifier
 */
export class ObjectIdentifier extends Message<ObjectIdentifier> {
  /**
   * object type
   *
   * @generated from field: optional string type = 1;
   */
  type?: string;

  /**
   * external object key (cs-string)
   *
   * @generated from field: optional string key = 3;
   */
  key?: string;

  constructor(data?: PartialMessage<ObjectIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.ObjectIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectIdentifier {
    return new ObjectIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectIdentifier {
    return new ObjectIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectIdentifier {
    return new ObjectIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined, b: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined): boolean {
    return proto3.util.equals(ObjectIdentifier, a, b);
  }
}

/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v2.RelationIdentifier
 */
export class RelationIdentifier extends Message<RelationIdentifier> {
  /**
   * subject identifier
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
   */
  subject?: ObjectIdentifier;

  /**
   * relation identifier
   *
   * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier relation = 2;
   */
  relation?: RelationTypeIdentifier;

  /**
   * object identifier
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
   */
  object?: ObjectIdentifier;

  constructor(data?: PartialMessage<RelationIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.RelationIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "message", T: RelationTypeIdentifier },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationIdentifier {
    return new RelationIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationIdentifier {
    return new RelationIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationIdentifier {
    return new RelationIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined, b: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined): boolean {
    return proto3.util.equals(RelationIdentifier, a, b);
  }
}

/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v2.PaginationRequest
 */
export class PaginationRequest extends Message<PaginationRequest> {
  /**
   * requested page size, valid value between 1-100 rows (default 100)
   *
   * @generated from field: int32 size = 1;
   */
  size = 0;

  /**
   * pagination start token, default ""
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<PaginationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.PaginationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationRequest {
    return new PaginationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationRequest {
    return new PaginationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationRequest {
    return new PaginationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaginationRequest | PlainMessage<PaginationRequest> | undefined, b: PaginationRequest | PlainMessage<PaginationRequest> | undefined): boolean {
    return proto3.util.equals(PaginationRequest, a, b);
  }
}

/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v2.PaginationResponse
 */
export class PaginationResponse extends Message<PaginationResponse> {
  /**
   * next page token, when empty there are no more pages to fetch
   *
   * @generated from field: string next_token = 1;
   */
  nextToken = "";

  /**
   * result size of the page returned
   *
   * @generated from field: int32 result_size = 2;
   */
  resultSize = 0;

  constructor(data?: PartialMessage<PaginationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.common.v2.PaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "next_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "result_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationResponse {
    return new PaginationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationResponse {
    return new PaginationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationResponse {
    return new PaginationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaginationResponse | PlainMessage<PaginationResponse> | undefined, b: PaginationResponse | PlainMessage<PaginationResponse> | undefined): boolean {
    return proto3.util.equals(PaginationResponse, a, b);
  }
}

