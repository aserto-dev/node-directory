import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, ObjectDependency, ObjectIdentifier, ObjectType, ObjectTypeIdentifier, PaginationRequest, PaginationResponse, Permission, PermissionIdentifier, Relation, RelationIdentifier, RelationType, RelationTypeIdentifier } from "../../common/v2/common_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/reader/v2/reader.proto.
 */
export declare const file_aserto_directory_reader_v2_reader: GenFile;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeRequest
 * @deprecated
 */
export type GetObjectTypeRequest = Message<"aserto.directory.reader.v2.GetObjectTypeRequest"> & {
    /**
     * object type selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypeRequest.
 * Use `create(GetObjectTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectTypeRequestSchema: GenMessage<GetObjectTypeRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeResponse
 * @deprecated
 */
export type GetObjectTypeResponse = Message<"aserto.directory.reader.v2.GetObjectTypeResponse"> & {
    /**
     * object type instance
     *
     * @generated from field: aserto.directory.common.v2.ObjectType result = 1;
     */
    result?: ObjectType;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypeResponse.
 * Use `create(GetObjectTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectTypeResponseSchema: GenMessage<GetObjectTypeResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesRequest
 * @deprecated
 */
export type GetObjectTypesRequest = Message<"aserto.directory.reader.v2.GetObjectTypesRequest"> & {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypesRequest.
 * Use `create(GetObjectTypesRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectTypesRequestSchema: GenMessage<GetObjectTypesRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesResponse
 * @deprecated
 */
export type GetObjectTypesResponse = Message<"aserto.directory.reader.v2.GetObjectTypesResponse"> & {
    /**
     * array of object types
     *
     * @generated from field: repeated aserto.directory.common.v2.ObjectType results = 1;
     */
    results: ObjectType[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypesResponse.
 * Use `create(GetObjectTypesResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectTypesResponseSchema: GenMessage<GetObjectTypesResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeRequest
 * @deprecated
 */
export type GetRelationTypeRequest = Message<"aserto.directory.reader.v2.GetRelationTypeRequest"> & {
    /**
     * relation type selector
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier param = 1;
     */
    param?: RelationTypeIdentifier;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypeRequest.
 * Use `create(GetRelationTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationTypeRequestSchema: GenMessage<GetRelationTypeRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeResponse
 * @deprecated
 */
export type GetRelationTypeResponse = Message<"aserto.directory.reader.v2.GetRelationTypeResponse"> & {
    /**
     * relation type instance
     *
     * @generated from field: aserto.directory.common.v2.RelationType result = 1;
     */
    result?: RelationType;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypeResponse.
 * Use `create(GetRelationTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationTypeResponseSchema: GenMessage<GetRelationTypeResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesRequest
 * @deprecated
 */
export type GetRelationTypesRequest = Message<"aserto.directory.reader.v2.GetRelationTypesRequest"> & {
    /**
     * object type selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypesRequest.
 * Use `create(GetRelationTypesRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationTypesRequestSchema: GenMessage<GetRelationTypesRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesResponse
 * @deprecated
 */
export type GetRelationTypesResponse = Message<"aserto.directory.reader.v2.GetRelationTypesResponse"> & {
    /**
     * array of relation types
     *
     * @generated from field: repeated aserto.directory.common.v2.RelationType results = 1;
     */
    results: RelationType[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypesResponse.
 * Use `create(GetRelationTypesResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationTypesResponseSchema: GenMessage<GetRelationTypesResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectRequest
 * @deprecated
 */
export type GetObjectRequest = Message<"aserto.directory.reader.v2.GetObjectRequest"> & {
    /**
     * object selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier param = 1;
     */
    param?: ObjectIdentifier;
    /**
     * materialize the object relations objects
     *
     * @generated from field: optional bool with_relations = 2;
     */
    withRelations?: boolean;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectRequest.
 * Use `create(GetObjectRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectRequestSchema: GenMessage<GetObjectRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectResponse
 * @deprecated
 */
export type GetObjectResponse = Message<"aserto.directory.reader.v2.GetObjectResponse"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v2.Object result = 1;
     */
    result?: Object$;
    /**
     * object relations
     *
     * @generated from field: repeated aserto.directory.common.v2.Relation relations = 4;
     */
    relations: Relation[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectResponse.
 * Use `create(GetObjectResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectResponseSchema: GenMessage<GetObjectResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyRequest
 * @deprecated
 */
export type GetObjectManyRequest = Message<"aserto.directory.reader.v2.GetObjectManyRequest"> & {
    /**
     * object identifier list
     *
     * @generated from field: repeated aserto.directory.common.v2.ObjectIdentifier param = 1;
     */
    param: ObjectIdentifier[];
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectManyRequest.
 * Use `create(GetObjectManyRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectManyRequestSchema: GenMessage<GetObjectManyRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyResponse
 * @deprecated
 */
export type GetObjectManyResponse = Message<"aserto.directory.reader.v2.GetObjectManyResponse"> & {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
     */
    results: Object$[];
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectManyResponse.
 * Use `create(GetObjectManyResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectManyResponseSchema: GenMessage<GetObjectManyResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsRequest
 * @deprecated
 */
export type GetObjectsRequest = Message<"aserto.directory.reader.v2.GetObjectsRequest"> & {
    /**
     * object type selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectsRequest.
 * Use `create(GetObjectsRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectsRequestSchema: GenMessage<GetObjectsRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsResponse
 * @deprecated
 */
export type GetObjectsResponse = Message<"aserto.directory.reader.v2.GetObjectsResponse"> & {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
     */
    results: Object$[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetObjectsResponse.
 * Use `create(GetObjectsResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetObjectsResponseSchema: GenMessage<GetObjectsResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationRequest
 * @deprecated
 */
export type GetRelationRequest = Message<"aserto.directory.reader.v2.GetRelationRequest"> & {
    /**
     * relation selector
     *
     * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
     */
    param?: RelationIdentifier;
    /**
     * materialize relation objects
     *
     * @generated from field: optional bool with_objects = 2;
     */
    withObjects?: boolean;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationRequest.
 * Use `create(GetRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationRequestSchema: GenMessage<GetRelationRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationResponse
 * @deprecated
 */
export type GetRelationResponse = Message<"aserto.directory.reader.v2.GetRelationResponse"> & {
    /**
     * array of relation instances
     *
     * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
     */
    results: Relation[];
    /**
     * map of materialized relation objects
     *
     * @generated from field: map<string, aserto.directory.common.v2.Object> objects = 2;
     */
    objects: {
        [key: string]: Object$;
    };
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationResponse.
 * Use `create(GetRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationResponseSchema: GenMessage<GetRelationResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsRequest
 * @deprecated
 */
export type GetRelationsRequest = Message<"aserto.directory.reader.v2.GetRelationsRequest"> & {
    /**
     * relation selector
     *
     * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
     */
    param?: RelationIdentifier;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationsRequest.
 * Use `create(GetRelationsRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationsRequestSchema: GenMessage<GetRelationsRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsResponse
 * @deprecated
 */
export type GetRelationsResponse = Message<"aserto.directory.reader.v2.GetRelationsResponse"> & {
    /**
     * array of relation instances
     *
     * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
     */
    results: Relation[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetRelationsResponse.
 * Use `create(GetRelationsResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetRelationsResponseSchema: GenMessage<GetRelationsResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionRequest
 * @deprecated
 */
export type GetPermissionRequest = Message<"aserto.directory.reader.v2.GetPermissionRequest"> & {
    /**
     * permission selector
     *
     * @generated from field: aserto.directory.common.v2.PermissionIdentifier param = 1;
     */
    param?: PermissionIdentifier;
};
/**
 * Describes the message aserto.directory.reader.v2.GetPermissionRequest.
 * Use `create(GetPermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetPermissionRequestSchema: GenMessage<GetPermissionRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionResponse
 * @deprecated
 */
export type GetPermissionResponse = Message<"aserto.directory.reader.v2.GetPermissionResponse"> & {
    /**
     * permission instance
     *
     * @generated from field: aserto.directory.common.v2.Permission result = 1;
     */
    result?: Permission;
};
/**
 * Describes the message aserto.directory.reader.v2.GetPermissionResponse.
 * Use `create(GetPermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetPermissionResponseSchema: GenMessage<GetPermissionResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsRequest
 * @deprecated
 */
export type GetPermissionsRequest = Message<"aserto.directory.reader.v2.GetPermissionsRequest"> & {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.reader.v2.GetPermissionsRequest.
 * Use `create(GetPermissionsRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetPermissionsRequestSchema: GenMessage<GetPermissionsRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsResponse
 * @deprecated
 */
export type GetPermissionsResponse = Message<"aserto.directory.reader.v2.GetPermissionsResponse"> & {
    /**
     * array of permissions
     *
     * @generated from field: repeated aserto.directory.common.v2.Permission results = 1;
     */
    results: Permission[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.reader.v2.GetPermissionsResponse.
 * Use `create(GetPermissionsResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetPermissionsResponseSchema: GenMessage<GetPermissionsResponse>;
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionRequest
 * @deprecated
 */
export type CheckPermissionRequest = Message<"aserto.directory.reader.v2.CheckPermissionRequest"> & {
    /**
     * subject selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
     */
    subject?: ObjectIdentifier;
    /**
     * permission selector
     *
     * @generated from field: aserto.directory.common.v2.PermissionIdentifier permission = 2;
     */
    permission?: PermissionIdentifier;
    /**
     * object selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
     */
    object?: ObjectIdentifier;
    /**
     * collect trace information
     *
     * @generated from field: bool trace = 7;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v2.CheckPermissionRequest.
 * Use `create(CheckPermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const CheckPermissionRequestSchema: GenMessage<CheckPermissionRequest>;
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionResponse
 * @deprecated
 */
export type CheckPermissionResponse = Message<"aserto.directory.reader.v2.CheckPermissionResponse"> & {
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
 * Describes the message aserto.directory.reader.v2.CheckPermissionResponse.
 * Use `create(CheckPermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const CheckPermissionResponseSchema: GenMessage<CheckPermissionResponse>;
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationRequest
 * @deprecated
 */
export type CheckRelationRequest = Message<"aserto.directory.reader.v2.CheckRelationRequest"> & {
    /**
     * subject selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
     */
    subject?: ObjectIdentifier;
    /**
     * relation selector
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier relation = 2;
     */
    relation?: RelationTypeIdentifier;
    /**
     * object selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
     */
    object?: ObjectIdentifier;
    /**
     * collect trace information
     *
     * @generated from field: bool trace = 7;
     */
    trace: boolean;
};
/**
 * Describes the message aserto.directory.reader.v2.CheckRelationRequest.
 * Use `create(CheckRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const CheckRelationRequestSchema: GenMessage<CheckRelationRequest>;
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationResponse
 * @deprecated
 */
export type CheckRelationResponse = Message<"aserto.directory.reader.v2.CheckRelationResponse"> & {
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
 * Describes the message aserto.directory.reader.v2.CheckRelationResponse.
 * Use `create(CheckRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const CheckRelationResponseSchema: GenMessage<CheckRelationResponse>;
/**
 * @generated from message aserto.directory.reader.v2.CheckResponse
 * @deprecated
 */
export type CheckResponse = Message<"aserto.directory.reader.v2.CheckResponse"> & {
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
 * Describes the message aserto.directory.reader.v2.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const CheckResponseSchema: GenMessage<CheckResponse>;
/**
 * @generated from message aserto.directory.reader.v2.GetGraphRequest
 * @deprecated
 */
export type GetGraphRequest = Message<"aserto.directory.reader.v2.GetGraphRequest"> & {
    /**
     * anchor selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier anchor = 1;
     */
    anchor?: ObjectIdentifier;
    /**
     * subject selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 2;
     */
    subject?: ObjectIdentifier;
    /**
     * relation selector
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier relation = 3;
     */
    relation?: RelationTypeIdentifier;
    /**
     * object selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 4;
     */
    object?: ObjectIdentifier;
};
/**
 * Describes the message aserto.directory.reader.v2.GetGraphRequest.
 * Use `create(GetGraphRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const GetGraphRequestSchema: GenMessage<GetGraphRequest>;
/**
 * @generated from message aserto.directory.reader.v2.GetGraphResponse
 * @deprecated
 */
export type GetGraphResponse = Message<"aserto.directory.reader.v2.GetGraphResponse"> & {
    /**
     * dependency graph
     *
     * @generated from field: repeated aserto.directory.common.v2.ObjectDependency results = 1;
     */
    results: ObjectDependency[];
};
/**
 * Describes the message aserto.directory.reader.v2.GetGraphResponse.
 * Use `create(GetGraphResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const GetGraphResponseSchema: GenMessage<GetGraphResponse>;
/**
 * @generated from service aserto.directory.reader.v2.Reader
 */
export declare const Reader: GenService<{
    /**
     * get object type metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectType
     * @deprecated
     */
    getObjectType: {
        methodKind: "unary";
        input: typeof GetObjectTypeRequestSchema;
        output: typeof GetObjectTypeResponseSchema;
    };
    /**
     * list object type metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectTypes
     * @deprecated
     */
    getObjectTypes: {
        methodKind: "unary";
        input: typeof GetObjectTypesRequestSchema;
        output: typeof GetObjectTypesResponseSchema;
    };
    /**
     * get relation type metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationType
     * @deprecated
     */
    getRelationType: {
        methodKind: "unary";
        input: typeof GetRelationTypeRequestSchema;
        output: typeof GetRelationTypeResponseSchema;
    };
    /**
     * list relation type metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationTypes
     * @deprecated
     */
    getRelationTypes: {
        methodKind: "unary";
        input: typeof GetRelationTypesRequestSchema;
        output: typeof GetRelationTypesResponseSchema;
    };
    /**
     * get permission metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetPermission
     * @deprecated
     */
    getPermission: {
        methodKind: "unary";
        input: typeof GetPermissionRequestSchema;
        output: typeof GetPermissionResponseSchema;
    };
    /**
     * list permission metadata
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetPermissions
     * @deprecated
     */
    getPermissions: {
        methodKind: "unary";
        input: typeof GetPermissionsRequestSchema;
        output: typeof GetPermissionsResponseSchema;
    };
    /**
     * get object
     * Deprecated: directory.v2.GetObject is deprecated, use directory.v3.GetObject.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetObject
     * @deprecated
     */
    getObject: {
        methodKind: "unary";
        input: typeof GetObjectRequestSchema;
        output: typeof GetObjectResponseSchema;
    };
    /**
     * get multiple objects
     * Deprecated: directory.v2.GetObjectMany is deprecated, update to use directory.v3.GetObjectMany.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectMany
     * @deprecated
     */
    getObjectMany: {
        methodKind: "unary";
        input: typeof GetObjectManyRequestSchema;
        output: typeof GetObjectManyResponseSchema;
    };
    /**
     * list objects
     * Deprecated: directory.v2.GetObjects is deprecated, update to use directory.v3.GetObjects.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetObjects
     * @deprecated
     */
    getObjects: {
        methodKind: "unary";
        input: typeof GetObjectsRequestSchema;
        output: typeof GetObjectsResponseSchema;
    };
    /**
     * get relation
     * Deprecated: directory.v2.GetRelation is deprecated, update to use directory.v3.GetRelation.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetRelation
     * @deprecated
     */
    getRelation: {
        methodKind: "unary";
        input: typeof GetRelationRequestSchema;
        output: typeof GetRelationResponseSchema;
    };
    /**
     * list relations
     * Deprecated: directory.v2.GetRelations is deprecated, update to use directory.v3.GetRelations.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetRelations
     * @deprecated
     */
    getRelations: {
        methodKind: "unary";
        input: typeof GetRelationsRequestSchema;
        output: typeof GetRelationsResponseSchema;
    };
    /**
     * check permission
     * Deprecated: directory.v2.CheckPermission is deprecated, update to use directory.v3.Check.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.CheckPermission
     * @deprecated
     */
    checkPermission: {
        methodKind: "unary";
        input: typeof CheckPermissionRequestSchema;
        output: typeof CheckPermissionResponseSchema;
    };
    /**
     * check relation
     * Deprecated: directory.v2.CheckRelation is deprecated, update to use directory.v3.Check.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.CheckRelation
     * @deprecated
     */
    checkRelation: {
        methodKind: "unary";
        input: typeof CheckRelationRequestSchema;
        output: typeof CheckRelationResponseSchema;
    };
    /**
     * get object relationship graph
     * Deprecated: directory.v2.GetGraph is deprecated, update to use directory.v3.GetGraph.
     *
     * @generated from rpc aserto.directory.reader.v2.Reader.GetGraph
     * @deprecated
     */
    getGraph: {
        methodKind: "unary";
        input: typeof GetGraphRequestSchema;
        output: typeof GetGraphResponseSchema;
    };
}>;
