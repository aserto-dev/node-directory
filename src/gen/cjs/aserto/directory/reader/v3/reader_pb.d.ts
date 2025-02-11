import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, ObjectIdentifier, PaginationRequest, PaginationResponse, Relation } from "../../common/v3/common_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/reader/v3/reader.proto.
 */
export declare const file_aserto_directory_reader_v3_reader: GenFile;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectRequest
 */
export type GetObjectRequest = Message<"aserto.directory.reader.v3.GetObjectRequest"> & {
    /**
     * object type name (lc-string)
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
    /**
     * materialize the object relations objects
     *
     * @generated from field: bool with_relations = 3;
     */
    withRelations: boolean;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectRequest.
 * Use `create(GetObjectRequestSchema)` to create a new message.
 */
export declare const GetObjectRequestSchema: GenMessage<GetObjectRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectResponse
 */
export type GetObjectResponse = Message<"aserto.directory.reader.v3.GetObjectResponse"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v3.Object result = 1;
     */
    result?: Object$;
    /**
     * object relations
     *
     * @generated from field: repeated aserto.directory.common.v3.Relation relations = 4;
     */
    relations: Relation[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectResponse.
 * Use `create(GetObjectResponseSchema)` to create a new message.
 */
export declare const GetObjectResponseSchema: GenMessage<GetObjectResponse>;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyRequest
 */
export type GetObjectManyRequest = Message<"aserto.directory.reader.v3.GetObjectManyRequest"> & {
    /**
     * object identifier list
     *
     * @generated from field: repeated aserto.directory.common.v3.ObjectIdentifier param = 1;
     */
    param: ObjectIdentifier[];
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyRequest.
 * Use `create(GetObjectManyRequestSchema)` to create a new message.
 */
export declare const GetObjectManyRequestSchema: GenMessage<GetObjectManyRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyResponse
 */
export type GetObjectManyResponse = Message<"aserto.directory.reader.v3.GetObjectManyResponse"> & {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v3.Object results = 1;
     */
    results: Object$[];
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyResponse.
 * Use `create(GetObjectManyResponseSchema)` to create a new message.
 */
export declare const GetObjectManyResponseSchema: GenMessage<GetObjectManyResponse>;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsRequest
 */
export type GetObjectsRequest = Message<"aserto.directory.reader.v3.GetObjectsRequest"> & {
    /**
     * object type name (lc-string)
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectsRequest.
 * Use `create(GetObjectsRequestSchema)` to create a new message.
 */
export declare const GetObjectsRequestSchema: GenMessage<GetObjectsRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsResponse
 */
export type GetObjectsResponse = Message<"aserto.directory.reader.v3.GetObjectsResponse"> & {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v3.Object results = 1;
     */
    results: Object$[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v3.GetObjectsResponse.
 * Use `create(GetObjectsResponseSchema)` to create a new message.
 */
export declare const GetObjectsResponseSchema: GenMessage<GetObjectsResponse>;
/**
 * @generated from message aserto.directory.reader.v3.GetRelationRequest
 */
export type GetRelationRequest = Message<"aserto.directory.reader.v3.GetRelationRequest"> & {
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
     * relation name
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
     * materialize relation objects
     *
     * @generated from field: bool with_objects = 7;
     */
    withObjects: boolean;
};
/**
 * Describes the message aserto.directory.reader.v3.GetRelationRequest.
 * Use `create(GetRelationRequestSchema)` to create a new message.
 */
export declare const GetRelationRequestSchema: GenMessage<GetRelationRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetRelationResponse
 */
export type GetRelationResponse = Message<"aserto.directory.reader.v3.GetRelationResponse"> & {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v3.Relation result = 1;
     */
    result?: Relation;
    /**
     * map of materialized relation objects
     *
     * @generated from field: map<string, aserto.directory.common.v3.Object> objects = 2;
     */
    objects: {
        [key: string]: Object$;
    };
};
/**
 * Describes the message aserto.directory.reader.v3.GetRelationResponse.
 * Use `create(GetRelationResponseSchema)` to create a new message.
 */
export declare const GetRelationResponseSchema: GenMessage<GetRelationResponse>;
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsRequest
 */
export type GetRelationsRequest = Message<"aserto.directory.reader.v3.GetRelationsRequest"> & {
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
     * relation name
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
     * materialize relation objects
     *
     * @generated from field: bool with_objects = 7;
     */
    withObjects: boolean;
    /**
     * only return relations that do not have a subject relation.
     *
     * @generated from field: bool with_empty_subject_relation = 8;
     */
    withEmptySubjectRelation: boolean;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v3.GetRelationsRequest.
 * Use `create(GetRelationsRequestSchema)` to create a new message.
 */
export declare const GetRelationsRequestSchema: GenMessage<GetRelationsRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsResponse
 */
export type GetRelationsResponse = Message<"aserto.directory.reader.v3.GetRelationsResponse"> & {
    /**
     * array of relation instances
     *
     * @generated from field: repeated aserto.directory.common.v3.Relation results = 1;
     */
    results: Relation[];
    /**
     * map of materialized relation objects
     *
     * @generated from field: map<string, aserto.directory.common.v3.Object> objects = 2;
     */
    objects: {
        [key: string]: Object$;
    };
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v3.GetRelationsResponse.
 * Use `create(GetRelationsResponseSchema)` to create a new message.
 */
export declare const GetRelationsResponseSchema: GenMessage<GetRelationsResponse>;
/**
 * @generated from message aserto.directory.reader.v3.CheckRequest
 */
export type CheckRequest = Message<"aserto.directory.reader.v3.CheckRequest"> & {
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
     * relation name
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
     * collect trace information
     *
     * @generated from field: bool trace = 7;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v3.CheckRequest.
 * Use `create(CheckRequestSchema)` to create a new message.
 */
export declare const CheckRequestSchema: GenMessage<CheckRequest>;
/**
 * @generated from message aserto.directory.reader.v3.CheckResponse
 */
export type CheckResponse = Message<"aserto.directory.reader.v3.CheckResponse"> & {
    /**
     * check result
     *
     * @generated from field: bool check = 1;
     */
    check: boolean;
    /**
     * trace information
     *
     * @generated from field: repeated string trace = 2;
     */
    trace: string[];
    /**
     * context
     *
     * @generated from field: google.protobuf.Struct context = 3;
     */
    context?: JsonObject;
};
/**
 * Describes the message aserto.directory.reader.v3.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 */
export declare const CheckResponseSchema: GenMessage<CheckResponse>;
/**
 * EXPERIMENTAL
 *
 * @generated from message aserto.directory.reader.v3.ChecksRequest
 */
export type ChecksRequest = Message<"aserto.directory.reader.v3.ChecksRequest"> & {
    /**
     * @generated from field: aserto.directory.reader.v3.CheckRequest default = 1;
     */
    default?: CheckRequest;
    /**
     * @generated from field: repeated aserto.directory.reader.v3.CheckRequest checks = 2;
     */
    checks: CheckRequest[];
};
/**
 * Describes the message aserto.directory.reader.v3.ChecksRequest.
 * Use `create(ChecksRequestSchema)` to create a new message.
 */
export declare const ChecksRequestSchema: GenMessage<ChecksRequest>;
/**
 * EXPERIMENTAL
 *
 * @generated from message aserto.directory.reader.v3.ChecksResponse
 */
export type ChecksResponse = Message<"aserto.directory.reader.v3.ChecksResponse"> & {
    /**
     * @generated from field: repeated aserto.directory.reader.v3.CheckResponse checks = 1;
     */
    checks: CheckResponse[];
};
/**
 * Describes the message aserto.directory.reader.v3.ChecksResponse.
 * Use `create(ChecksResponseSchema)` to create a new message.
 */
export declare const ChecksResponseSchema: GenMessage<ChecksResponse>;
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionRequest
 */
export type CheckPermissionRequest = Message<"aserto.directory.reader.v3.CheckPermissionRequest"> & {
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
     * permission name
     *
     * @generated from field: string permission = 3;
     */
    permission: string;
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
     * collect trace information
     *
     * @generated from field: bool trace = 7;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionRequest.
 * Use `create(CheckPermissionRequestSchema)` to create a new message.
 */
export declare const CheckPermissionRequestSchema: GenMessage<CheckPermissionRequest>;
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionResponse
 */
export type CheckPermissionResponse = Message<"aserto.directory.reader.v3.CheckPermissionResponse"> & {
    /**
     * check result
     *
     * @generated from field: bool check = 1;
     */
    check: boolean;
    /**
     * trace information
     *
     * @generated from field: repeated string trace = 2;
     */
    trace: string[];
};
/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionResponse.
 * Use `create(CheckPermissionResponseSchema)` to create a new message.
 */
export declare const CheckPermissionResponseSchema: GenMessage<CheckPermissionResponse>;
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationRequest
 */
export type CheckRelationRequest = Message<"aserto.directory.reader.v3.CheckRelationRequest"> & {
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
     * relation name
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
     * collect trace information
     *
     * @generated from field: bool trace = 7;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v3.CheckRelationRequest.
 * Use `create(CheckRelationRequestSchema)` to create a new message.
 */
export declare const CheckRelationRequestSchema: GenMessage<CheckRelationRequest>;
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationResponse
 */
export type CheckRelationResponse = Message<"aserto.directory.reader.v3.CheckRelationResponse"> & {
    /**
     * check result
     *
     * @generated from field: bool check = 1;
     */
    check: boolean;
    /**
     * trace information
     *
     * @generated from field: repeated string trace = 2;
     */
    trace: string[];
};
/**
 * Describes the message aserto.directory.reader.v3.CheckRelationResponse.
 * Use `create(CheckRelationResponseSchema)` to create a new message.
 */
export declare const CheckRelationResponseSchema: GenMessage<CheckRelationResponse>;
/**
 * @generated from message aserto.directory.reader.v3.GetGraphRequest
 */
export type GetGraphRequest = Message<"aserto.directory.reader.v3.GetGraphRequest"> & {
    /**
     * object type
     *
     * @generated from field: string object_type = 3;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 4;
     */
    objectId: string;
    /**
     * relation name
     *
     * @generated from field: string relation = 5;
     */
    relation: string;
    /**
     * subject type
     *
     * @generated from field: string subject_type = 6;
     */
    subjectType: string;
    /**
     * subject identifier
     *
     * @generated from field: string subject_id = 7;
     */
    subjectId: string;
    /**
     * subject relation
     *
     * @generated from field: string subject_relation = 8;
     */
    subjectRelation: string;
    /**
     * return graph paths for each result
     *
     * @generated from field: bool explain = 9;
     */
    explain: boolean;
    /**
     * collect trace information
     *
     * @generated from field: bool trace = 10;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v3.GetGraphRequest.
 * Use `create(GetGraphRequestSchema)` to create a new message.
 */
export declare const GetGraphRequestSchema: GenMessage<GetGraphRequest>;
/**
 * @generated from message aserto.directory.reader.v3.GetGraphResponse
 */
export type GetGraphResponse = Message<"aserto.directory.reader.v3.GetGraphResponse"> & {
    /**
     * matching object identifiers
     *
     * @generated from field: repeated aserto.directory.common.v3.ObjectIdentifier results = 2;
     */
    results: ObjectIdentifier[];
    /**
     * explanation of results
     *
     * @generated from field: google.protobuf.Struct explanation = 3;
     */
    explanation?: JsonObject;
    /**
     * trace information
     *
     * @generated from field: repeated string trace = 4;
     */
    trace: string[];
};
/**
 * Describes the message aserto.directory.reader.v3.GetGraphResponse.
 * Use `create(GetGraphResponseSchema)` to create a new message.
 */
export declare const GetGraphResponseSchema: GenMessage<GetGraphResponse>;
/**
 * @generated from service aserto.directory.reader.v3.Reader
 */
export declare const Reader: GenService<{
    /**
     * get object
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetObject
     */
    getObject: {
        methodKind: "unary";
        input: typeof GetObjectRequestSchema;
        output: typeof GetObjectResponseSchema;
    };
    /**
     * get multiple objects
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetObjectMany
     */
    getObjectMany: {
        methodKind: "unary";
        input: typeof GetObjectManyRequestSchema;
        output: typeof GetObjectManyResponseSchema;
    };
    /**
     * list objects
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetObjects
     */
    getObjects: {
        methodKind: "unary";
        input: typeof GetObjectsRequestSchema;
        output: typeof GetObjectsResponseSchema;
    };
    /**
     * get relation
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetRelation
     */
    getRelation: {
        methodKind: "unary";
        input: typeof GetRelationRequestSchema;
        output: typeof GetRelationResponseSchema;
    };
    /**
     * list relations
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetRelations
     */
    getRelations: {
        methodKind: "unary";
        input: typeof GetRelationsRequestSchema;
        output: typeof GetRelationsResponseSchema;
    };
    /**
     * check if subject has relation or permission with object
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.Check
     */
    check: {
        methodKind: "unary";
        input: typeof CheckRequestSchema;
        output: typeof CheckResponseSchema;
    };
    /**
     * EXPERIMENTAL: checks validates a set of check requests in a single roundtrip
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.Checks
     */
    checks: {
        methodKind: "unary";
        input: typeof ChecksRequestSchema;
        output: typeof ChecksResponseSchema;
    };
    /**
     * check permission (deprecated, use the check method)
     * Deprecated: use directory.v3.Check()
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.CheckPermission
     * @deprecated
     */
    checkPermission: {
        methodKind: "unary";
        input: typeof CheckPermissionRequestSchema;
        output: typeof CheckPermissionResponseSchema;
    };
    /**
     * check relation (deprecated, use the check method)
     * Deprecated: use directory.v3.Check()
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.CheckRelation
     * @deprecated
     */
    checkRelation: {
        methodKind: "unary";
        input: typeof CheckRelationRequestSchema;
        output: typeof CheckRelationResponseSchema;
    };
    /**
     * get object relationship graph
     *
     * @generated from rpc aserto.directory.reader.v3.Reader.GetGraph
     */
    getGraph: {
        methodKind: "unary";
        input: typeof GetGraphRequestSchema;
        output: typeof GetGraphResponseSchema;
    };
}>;
