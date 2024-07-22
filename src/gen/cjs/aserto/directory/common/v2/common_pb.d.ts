import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum aserto.directory.common.v2.Flag
 * @deprecated
 */
export declare enum Flag {
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
    SHADOW = 8
}
/**
 * @generated from message aserto.directory.common.v2.ObjectType
 * @deprecated
 */
export declare class ObjectType extends Message<ObjectType> {
    /**
     * object type name (unique, lc-string)
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * object type display name
     *
     * @generated from field: string display_name = 3;
     */
    displayName: string;
    /**
     * object type is a subject (user|group) (default false)
     *
     * @generated from field: bool is_subject = 4;
     */
    isSubject: boolean;
    /**
     * sort ordinal (default 0)
     *
     * @generated from field: int32 ordinal = 5;
     */
    ordinal: number;
    /**
     * status flag bitmap (default 0)
     *
     * @generated from field: uint32 status = 6;
     */
    status: number;
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
    hash: string;
    constructor(data?: PartialMessage<ObjectType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.ObjectType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectType;
    static equals(a: ObjectType | PlainMessage<ObjectType> | undefined, b: ObjectType | PlainMessage<ObjectType> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v2.Permission
 * @deprecated
 */
export declare class Permission extends Message<Permission> {
    /**
     * permission name (unique, cs-string)
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * permission display name
     *
     * @generated from field: string display_name = 3;
     */
    displayName: string;
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
    hash: string;
    constructor(data?: PartialMessage<Permission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.Permission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission;
    static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v2.RelationType
 * @deprecated
 */
export declare class RelationType extends Message<RelationType> {
    /**
     * relation type name selector
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * object type referenced by relation
     *
     * @generated from field: string object_type = 3;
     */
    objectType: string;
    /**
     * relation display name
     *
     * @generated from field: string display_name = 4;
     */
    displayName: string;
    /**
     * sort ordinal (default 0)
     *
     * @generated from field: int32 ordinal = 5;
     */
    ordinal: number;
    /**
     * status bitmap (default 0)
     *
     * @generated from field: uint32 status = 6;
     */
    status: number;
    /**
     * relations union-ed with relation type instance
     *
     * @generated from field: repeated string unions = 7;
     */
    unions: string[];
    /**
     * permissions associated to relation type instance
     *
     * @generated from field: repeated string permissions = 8;
     */
    permissions: string[];
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
    hash: string;
    constructor(data?: PartialMessage<RelationType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.RelationType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationType;
    static equals(a: RelationType | PlainMessage<RelationType> | undefined, b: RelationType | PlainMessage<RelationType> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v2.Object
 * @deprecated
 */
export declare class Object$ extends Message<Object$> {
    /**
     * external object key (cs-string)
     *
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * object type name
     *
     * @generated from field: string type = 3;
     */
    type: string;
    /**
     * display name object
     *
     * @generated from field: string display_name = 4;
     */
    displayName: string;
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
    hash: string;
    constructor(data?: PartialMessage<Object$>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.Object";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Object$;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Object$;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Object$;
    static equals(a: Object$ | PlainMessage<Object$> | undefined, b: Object$ | PlainMessage<Object$> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v2.Relation
 * @deprecated
 */
export declare class Relation extends Message<Relation> {
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
    relation: string;
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
    hash: string;
    constructor(data?: PartialMessage<Relation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.Relation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relation;
    static equals(a: Relation | PlainMessage<Relation> | undefined, b: Relation | PlainMessage<Relation> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v2.ObjectDependency
 * @deprecated
 */
export declare class ObjectDependency extends Message<ObjectDependency> {
    /**
     * object type name of source object
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object search key of source object
     *
     * @generated from field: string object_key = 4;
     */
    objectKey: string;
    /**
     * relation identifier
     *
     * @generated from field: string relation = 5;
     */
    relation: string;
    /**
     * object type id of target object
     *
     * @generated from field: string subject_type = 7;
     */
    subjectType: string;
    /**
     * object search key of target object
     *
     * @generated from field: string subject_key = 10;
     */
    subjectKey: string;
    /**
     * dependency depth
     *
     * @generated from field: int32 depth = 11;
     */
    depth: number;
    /**
     * dependency cycle
     *
     * @generated from field: bool is_cycle = 12;
     */
    isCycle: boolean;
    /**
     * dependency path
     *
     * @generated from field: repeated string path = 13;
     */
    path: string[];
    constructor(data?: PartialMessage<ObjectDependency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.ObjectDependency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectDependency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectDependency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectDependency;
    static equals(a: ObjectDependency | PlainMessage<ObjectDependency> | undefined, b: ObjectDependency | PlainMessage<ObjectDependency> | undefined): boolean;
}
/**
 * ObjectType identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectTypeIdentifier
 * @deprecated
 */
export declare class ObjectTypeIdentifier extends Message<ObjectTypeIdentifier> {
    /**
     * object type name (unique, lc-string)
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    constructor(data?: PartialMessage<ObjectTypeIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.ObjectTypeIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectTypeIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectTypeIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectTypeIdentifier;
    static equals(a: ObjectTypeIdentifier | PlainMessage<ObjectTypeIdentifier> | undefined, b: ObjectTypeIdentifier | PlainMessage<ObjectTypeIdentifier> | undefined): boolean;
}
/**
 * Permission identifier
 *
 * @generated from message aserto.directory.common.v2.PermissionIdentifier
 * @deprecated
 */
export declare class PermissionIdentifier extends Message<PermissionIdentifier> {
    /**
     * permission name (unique, cs-string)
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    constructor(data?: PartialMessage<PermissionIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.PermissionIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionIdentifier;
    static equals(a: PermissionIdentifier | PlainMessage<PermissionIdentifier> | undefined, b: PermissionIdentifier | PlainMessage<PermissionIdentifier> | undefined): boolean;
}
/**
 * RelationType identifier
 *
 * @generated from message aserto.directory.common.v2.RelationTypeIdentifier
 * @deprecated
 */
export declare class RelationTypeIdentifier extends Message<RelationTypeIdentifier> {
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
    constructor(data?: PartialMessage<RelationTypeIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.RelationTypeIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationTypeIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationTypeIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationTypeIdentifier;
    static equals(a: RelationTypeIdentifier | PlainMessage<RelationTypeIdentifier> | undefined, b: RelationTypeIdentifier | PlainMessage<RelationTypeIdentifier> | undefined): boolean;
}
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectIdentifier
 * @deprecated
 */
export declare class ObjectIdentifier extends Message<ObjectIdentifier> {
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
    constructor(data?: PartialMessage<ObjectIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.ObjectIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectIdentifier;
    static equals(a: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined, b: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined): boolean;
}
/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v2.RelationIdentifier
 * @deprecated
 */
export declare class RelationIdentifier extends Message<RelationIdentifier> {
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
    constructor(data?: PartialMessage<RelationIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.RelationIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationIdentifier;
    static equals(a: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined, b: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined): boolean;
}
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v2.PaginationRequest
 * @deprecated
 */
export declare class PaginationRequest extends Message<PaginationRequest> {
    /**
     * requested page size, valid value between 1-100 rows (default 100)
     *
     * @generated from field: int32 size = 1;
     */
    size: number;
    /**
     * pagination start token, default ""
     *
     * @generated from field: string token = 2;
     */
    token: string;
    constructor(data?: PartialMessage<PaginationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.PaginationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationRequest;
    static equals(a: PaginationRequest | PlainMessage<PaginationRequest> | undefined, b: PaginationRequest | PlainMessage<PaginationRequest> | undefined): boolean;
}
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v2.PaginationResponse
 * @deprecated
 */
export declare class PaginationResponse extends Message<PaginationResponse> {
    /**
     * next page token, when empty there are no more pages to fetch
     *
     * @generated from field: string next_token = 1;
     */
    nextToken: string;
    /**
     * result size of the page returned
     *
     * @generated from field: int32 result_size = 2;
     */
    resultSize: number;
    constructor(data?: PartialMessage<PaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v2.PaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationResponse;
    static equals(a: PaginationResponse | PlainMessage<PaginationResponse> | undefined, b: PaginationResponse | PlainMessage<PaginationResponse> | undefined): boolean;
}
