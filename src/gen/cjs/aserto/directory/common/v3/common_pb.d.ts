import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.directory.common.v3.Object
 */
export declare class Object$ extends Message<Object$> {
    /**
     * object type name
     *
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * external object identifier (cs-string, no spaces or tabs)
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * display name object
     *
     * @generated from field: string display_name = 3;
     */
    displayName: string;
    /**
     * property bag
     *
     * @generated from field: google.protobuf.Struct properties = 4;
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
     * object instance etag
     *
     * @generated from field: string etag = 23;
     */
    etag: string;
    constructor(data?: PartialMessage<Object$>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.Object";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Object$;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Object$;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Object$;
    static equals(a: Object$ | PlainMessage<Object$> | undefined, b: Object$ | PlainMessage<Object$> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v3.Relation
 */
export declare class Relation extends Message<Relation> {
    /**
     * object type
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    /**
     * object relation name
     *
     * @generated from field: string relation = 3;
     */
    relation: string;
    /**
     * subject type
     *
     * @generated from field: string subject_type = 4;
     */
    subjectType: string;
    /**
     * subject identifier
     *
     * @generated from field: string subject_id = 5;
     */
    subjectId: string;
    /**
     * optional subject relation name
     *
     * @generated from field: string subject_relation = 6;
     */
    subjectRelation: string;
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
     * object instance etag
     *
     * @generated from field: string etag = 23;
     */
    etag: string;
    constructor(data?: PartialMessage<Relation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.Relation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relation;
    static equals(a: Relation | PlainMessage<Relation> | undefined, b: Relation | PlainMessage<Relation> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.common.v3.ObjectDependency
 */
export declare class ObjectDependency extends Message<ObjectDependency> {
    /**
     * object type
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    /**
     * object relation name
     *
     * @generated from field: string relation = 3;
     */
    relation: string;
    /**
     * subject type
     *
     * @generated from field: string subject_type = 4;
     */
    subjectType: string;
    /**
     * subject identifier
     *
     * @generated from field: string subject_id = 5;
     */
    subjectId: string;
    /**
     * optional subject relation name
     *
     * @generated from field: string subject_relation = 6;
     */
    subjectRelation: string;
    /**
     * dependency depth
     *
     * @generated from field: int32 depth = 7;
     */
    depth: number;
    /**
     * dependency cycle
     *
     * @generated from field: bool is_cycle = 8;
     */
    isCycle: boolean;
    /**
     * dependency path
     *
     * @generated from field: repeated string path = 9;
     */
    path: string[];
    constructor(data?: PartialMessage<ObjectDependency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.ObjectDependency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectDependency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectDependency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectDependency;
    static equals(a: ObjectDependency | PlainMessage<ObjectDependency> | undefined, b: ObjectDependency | PlainMessage<ObjectDependency> | undefined): boolean;
}
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v3.ObjectIdentifier
 */
export declare class ObjectIdentifier extends Message<ObjectIdentifier> {
    /**
     * object type (lc-string)
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier (cs-string)
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    constructor(data?: PartialMessage<ObjectIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.ObjectIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectIdentifier;
    static equals(a: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined, b: ObjectIdentifier | PlainMessage<ObjectIdentifier> | undefined): boolean;
}
/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v3.RelationIdentifier
 */
export declare class RelationIdentifier extends Message<RelationIdentifier> {
    /**
     * object type
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    /**
     * object relation name
     *
     * @generated from field: string relation = 3;
     */
    relation: string;
    /**
     * subject type
     *
     * @generated from field: string subject_type = 4;
     */
    subjectType: string;
    /**
     * subject identifier
     *
     * @generated from field: string subject_id = 5;
     */
    subjectId: string;
    /**
     * optional subject relation name
     *
     * @generated from field: string subject_relation = 6;
     */
    subjectRelation: string;
    constructor(data?: PartialMessage<RelationIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.RelationIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RelationIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RelationIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RelationIdentifier;
    static equals(a: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined, b: RelationIdentifier | PlainMessage<RelationIdentifier> | undefined): boolean;
}
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v3.PaginationRequest
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
    static readonly typeName = "aserto.directory.common.v3.PaginationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationRequest;
    static equals(a: PaginationRequest | PlainMessage<PaginationRequest> | undefined, b: PaginationRequest | PlainMessage<PaginationRequest> | undefined): boolean;
}
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v3.PaginationResponse
 */
export declare class PaginationResponse extends Message<PaginationResponse> {
    /**
     * next page token, when empty there are no more pages to fetch
     *
     * @generated from field: string next_token = 1;
     */
    nextToken: string;
    constructor(data?: PartialMessage<PaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.common.v3.PaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationResponse;
    static equals(a: PaginationResponse | PlainMessage<PaginationResponse> | undefined, b: PaginationResponse | PlainMessage<PaginationResponse> | undefined): boolean;
}
