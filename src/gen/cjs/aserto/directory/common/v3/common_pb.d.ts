import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/common/v3/common.proto.
 */
export declare const file_aserto_directory_common_v3_common: GenFile;
/**
 * @generated from message aserto.directory.common.v3.Object
 */
export type Object$ = Message<"aserto.directory.common.v3.Object"> & {
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
     * object instance etag
     *
     * @generated from field: string etag = 23;
     */
    etag: string;
};
/**
 * Describes the message aserto.directory.common.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
export declare const ObjectSchema: GenMessage<Object$>;
/**
 * @generated from message aserto.directory.common.v3.Relation
 */
export type Relation = Message<"aserto.directory.common.v3.Relation"> & {
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
};
/**
 * Describes the message aserto.directory.common.v3.Relation.
 * Use `create(RelationSchema)` to create a new message.
 */
export declare const RelationSchema: GenMessage<Relation>;
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v3.ObjectIdentifier
 */
export type ObjectIdentifier = Message<"aserto.directory.common.v3.ObjectIdentifier"> & {
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
};
/**
 * Describes the message aserto.directory.common.v3.ObjectIdentifier.
 * Use `create(ObjectIdentifierSchema)` to create a new message.
 */
export declare const ObjectIdentifierSchema: GenMessage<ObjectIdentifier>;
/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v3.RelationIdentifier
 */
export type RelationIdentifier = Message<"aserto.directory.common.v3.RelationIdentifier"> & {
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
};
/**
 * Describes the message aserto.directory.common.v3.RelationIdentifier.
 * Use `create(RelationIdentifierSchema)` to create a new message.
 */
export declare const RelationIdentifierSchema: GenMessage<RelationIdentifier>;
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v3.PaginationRequest
 */
export type PaginationRequest = Message<"aserto.directory.common.v3.PaginationRequest"> & {
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
 * Describes the message aserto.directory.common.v3.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
export declare const PaginationRequestSchema: GenMessage<PaginationRequest>;
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v3.PaginationResponse
 */
export type PaginationResponse = Message<"aserto.directory.common.v3.PaginationResponse"> & {
    /**
     * next page token, when empty there are no more pages to fetch
     *
     * @generated from field: string next_token = 1;
     */
    nextToken: string;
};
/**
 * Describes the message aserto.directory.common.v3.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
export declare const PaginationResponseSchema: GenMessage<PaginationResponse>;
