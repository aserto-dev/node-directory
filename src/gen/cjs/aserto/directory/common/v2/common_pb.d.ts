import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/common/v2/common.proto.
 */
export declare const file_aserto_directory_common_v2_common: GenFile;
/**
 * @generated from message aserto.directory.common.v2.ObjectType
 * @deprecated
 */
export type ObjectType = Message<"aserto.directory.common.v2.ObjectType"> & {
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
    schema?: JsonObject;
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
};
/**
 * Describes the message aserto.directory.common.v2.ObjectType.
 * Use `create(ObjectTypeSchema)` to create a new message.
 * @deprecated
 */
export declare const ObjectTypeSchema: GenMessage<ObjectType>;
/**
 * @generated from message aserto.directory.common.v2.Permission
 * @deprecated
 */
export type Permission = Message<"aserto.directory.common.v2.Permission"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.Permission.
 * Use `create(PermissionSchema)` to create a new message.
 * @deprecated
 */
export declare const PermissionSchema: GenMessage<Permission>;
/**
 * @generated from message aserto.directory.common.v2.RelationType
 * @deprecated
 */
export type RelationType = Message<"aserto.directory.common.v2.RelationType"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.RelationType.
 * Use `create(RelationTypeSchema)` to create a new message.
 * @deprecated
 */
export declare const RelationTypeSchema: GenMessage<RelationType>;
/**
 * @generated from message aserto.directory.common.v2.Object
 * @deprecated
 */
export type Object$ = Message<"aserto.directory.common.v2.Object"> & {
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
    properties?: JsonObject;
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
};
/**
 * Describes the message aserto.directory.common.v2.Object.
 * Use `create(ObjectSchema)` to create a new message.
 * @deprecated
 */
export declare const ObjectSchema: GenMessage<Object$>;
/**
 * @generated from message aserto.directory.common.v2.Relation
 * @deprecated
 */
export type Relation = Message<"aserto.directory.common.v2.Relation"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.Relation.
 * Use `create(RelationSchema)` to create a new message.
 * @deprecated
 */
export declare const RelationSchema: GenMessage<Relation>;
/**
 * @generated from message aserto.directory.common.v2.ObjectDependency
 * @deprecated
 */
export type ObjectDependency = Message<"aserto.directory.common.v2.ObjectDependency"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.ObjectDependency.
 * Use `create(ObjectDependencySchema)` to create a new message.
 * @deprecated
 */
export declare const ObjectDependencySchema: GenMessage<ObjectDependency>;
/**
 * ObjectType identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectTypeIdentifier
 * @deprecated
 */
export type ObjectTypeIdentifier = Message<"aserto.directory.common.v2.ObjectTypeIdentifier"> & {
    /**
     * object type name (unique, lc-string)
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
};
/**
 * Describes the message aserto.directory.common.v2.ObjectTypeIdentifier.
 * Use `create(ObjectTypeIdentifierSchema)` to create a new message.
 * @deprecated
 */
export declare const ObjectTypeIdentifierSchema: GenMessage<ObjectTypeIdentifier>;
/**
 * Permission identifier
 *
 * @generated from message aserto.directory.common.v2.PermissionIdentifier
 * @deprecated
 */
export type PermissionIdentifier = Message<"aserto.directory.common.v2.PermissionIdentifier"> & {
    /**
     * permission name (unique, cs-string)
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
};
/**
 * Describes the message aserto.directory.common.v2.PermissionIdentifier.
 * Use `create(PermissionIdentifierSchema)` to create a new message.
 * @deprecated
 */
export declare const PermissionIdentifierSchema: GenMessage<PermissionIdentifier>;
/**
 * RelationType identifier
 *
 * @generated from message aserto.directory.common.v2.RelationTypeIdentifier
 * @deprecated
 */
export type RelationTypeIdentifier = Message<"aserto.directory.common.v2.RelationTypeIdentifier"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.RelationTypeIdentifier.
 * Use `create(RelationTypeIdentifierSchema)` to create a new message.
 * @deprecated
 */
export declare const RelationTypeIdentifierSchema: GenMessage<RelationTypeIdentifier>;
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectIdentifier
 * @deprecated
 */
export type ObjectIdentifier = Message<"aserto.directory.common.v2.ObjectIdentifier"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.ObjectIdentifier.
 * Use `create(ObjectIdentifierSchema)` to create a new message.
 * @deprecated
 */
export declare const ObjectIdentifierSchema: GenMessage<ObjectIdentifier>;
/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v2.RelationIdentifier
 * @deprecated
 */
export type RelationIdentifier = Message<"aserto.directory.common.v2.RelationIdentifier"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.RelationIdentifier.
 * Use `create(RelationIdentifierSchema)` to create a new message.
 * @deprecated
 */
export declare const RelationIdentifierSchema: GenMessage<RelationIdentifier>;
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v2.PaginationRequest
 * @deprecated
 */
export type PaginationRequest = Message<"aserto.directory.common.v2.PaginationRequest"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const PaginationRequestSchema: GenMessage<PaginationRequest>;
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v2.PaginationResponse
 * @deprecated
 */
export type PaginationResponse = Message<"aserto.directory.common.v2.PaginationResponse"> & {
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
};
/**
 * Describes the message aserto.directory.common.v2.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const PaginationResponseSchema: GenMessage<PaginationResponse>;
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
 * Describes the enum aserto.directory.common.v2.Flag.
 * @deprecated
 */
export declare const FlagSchema: GenEnum<Flag>;
