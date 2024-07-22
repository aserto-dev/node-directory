import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectDependency, ObjectIdentifier, ObjectType, ObjectTypeIdentifier, PaginationRequest, PaginationResponse, Permission, PermissionIdentifier, Relation, RelationIdentifier, RelationType, RelationTypeIdentifier } from "../../common/v2/common_pb.js";
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeRequest
 * @deprecated
 */
export declare class GetObjectTypeRequest extends Message<GetObjectTypeRequest> {
    /**
     * object type selector
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
    constructor(data?: PartialMessage<GetObjectTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectTypeRequest;
    static equals(a: GetObjectTypeRequest | PlainMessage<GetObjectTypeRequest> | undefined, b: GetObjectTypeRequest | PlainMessage<GetObjectTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeResponse
 * @deprecated
 */
export declare class GetObjectTypeResponse extends Message<GetObjectTypeResponse> {
    /**
     * object type instance
     *
     * @generated from field: aserto.directory.common.v2.ObjectType result = 1;
     */
    result?: ObjectType;
    constructor(data?: PartialMessage<GetObjectTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectTypeResponse;
    static equals(a: GetObjectTypeResponse | PlainMessage<GetObjectTypeResponse> | undefined, b: GetObjectTypeResponse | PlainMessage<GetObjectTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesRequest
 * @deprecated
 */
export declare class GetObjectTypesRequest extends Message<GetObjectTypesRequest> {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<GetObjectTypesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectTypesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectTypesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectTypesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectTypesRequest;
    static equals(a: GetObjectTypesRequest | PlainMessage<GetObjectTypesRequest> | undefined, b: GetObjectTypesRequest | PlainMessage<GetObjectTypesRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesResponse
 * @deprecated
 */
export declare class GetObjectTypesResponse extends Message<GetObjectTypesResponse> {
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
    constructor(data?: PartialMessage<GetObjectTypesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectTypesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectTypesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectTypesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectTypesResponse;
    static equals(a: GetObjectTypesResponse | PlainMessage<GetObjectTypesResponse> | undefined, b: GetObjectTypesResponse | PlainMessage<GetObjectTypesResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeRequest
 * @deprecated
 */
export declare class GetRelationTypeRequest extends Message<GetRelationTypeRequest> {
    /**
     * relation type selector
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier param = 1;
     */
    param?: RelationTypeIdentifier;
    constructor(data?: PartialMessage<GetRelationTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationTypeRequest;
    static equals(a: GetRelationTypeRequest | PlainMessage<GetRelationTypeRequest> | undefined, b: GetRelationTypeRequest | PlainMessage<GetRelationTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeResponse
 * @deprecated
 */
export declare class GetRelationTypeResponse extends Message<GetRelationTypeResponse> {
    /**
     * relation type instance
     *
     * @generated from field: aserto.directory.common.v2.RelationType result = 1;
     */
    result?: RelationType;
    constructor(data?: PartialMessage<GetRelationTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationTypeResponse;
    static equals(a: GetRelationTypeResponse | PlainMessage<GetRelationTypeResponse> | undefined, b: GetRelationTypeResponse | PlainMessage<GetRelationTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesRequest
 * @deprecated
 */
export declare class GetRelationTypesRequest extends Message<GetRelationTypesRequest> {
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
    constructor(data?: PartialMessage<GetRelationTypesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationTypesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationTypesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationTypesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationTypesRequest;
    static equals(a: GetRelationTypesRequest | PlainMessage<GetRelationTypesRequest> | undefined, b: GetRelationTypesRequest | PlainMessage<GetRelationTypesRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesResponse
 * @deprecated
 */
export declare class GetRelationTypesResponse extends Message<GetRelationTypesResponse> {
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
    constructor(data?: PartialMessage<GetRelationTypesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationTypesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationTypesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationTypesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationTypesResponse;
    static equals(a: GetRelationTypesResponse | PlainMessage<GetRelationTypesResponse> | undefined, b: GetRelationTypesResponse | PlainMessage<GetRelationTypesResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectRequest
 * @deprecated
 */
export declare class GetObjectRequest extends Message<GetObjectRequest> {
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
    constructor(data?: PartialMessage<GetObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectRequest;
    static equals(a: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined, b: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectResponse
 * @deprecated
 */
export declare class GetObjectResponse extends Message<GetObjectResponse> {
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
    constructor(data?: PartialMessage<GetObjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectResponse;
    static equals(a: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined, b: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyRequest
 * @deprecated
 */
export declare class GetObjectManyRequest extends Message<GetObjectManyRequest> {
    /**
     * object identifier list
     *
     * @generated from field: repeated aserto.directory.common.v2.ObjectIdentifier param = 1;
     */
    param: ObjectIdentifier[];
    constructor(data?: PartialMessage<GetObjectManyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectManyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectManyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectManyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectManyRequest;
    static equals(a: GetObjectManyRequest | PlainMessage<GetObjectManyRequest> | undefined, b: GetObjectManyRequest | PlainMessage<GetObjectManyRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyResponse
 * @deprecated
 */
export declare class GetObjectManyResponse extends Message<GetObjectManyResponse> {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
     */
    results: Object$[];
    constructor(data?: PartialMessage<GetObjectManyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectManyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectManyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectManyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectManyResponse;
    static equals(a: GetObjectManyResponse | PlainMessage<GetObjectManyResponse> | undefined, b: GetObjectManyResponse | PlainMessage<GetObjectManyResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsRequest
 * @deprecated
 */
export declare class GetObjectsRequest extends Message<GetObjectsRequest> {
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
    constructor(data?: PartialMessage<GetObjectsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsRequest;
    static equals(a: GetObjectsRequest | PlainMessage<GetObjectsRequest> | undefined, b: GetObjectsRequest | PlainMessage<GetObjectsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsResponse
 * @deprecated
 */
export declare class GetObjectsResponse extends Message<GetObjectsResponse> {
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
    constructor(data?: PartialMessage<GetObjectsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetObjectsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsResponse;
    static equals(a: GetObjectsResponse | PlainMessage<GetObjectsResponse> | undefined, b: GetObjectsResponse | PlainMessage<GetObjectsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationRequest
 * @deprecated
 */
export declare class GetRelationRequest extends Message<GetRelationRequest> {
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
    constructor(data?: PartialMessage<GetRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationRequest;
    static equals(a: GetRelationRequest | PlainMessage<GetRelationRequest> | undefined, b: GetRelationRequest | PlainMessage<GetRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationResponse
 * @deprecated
 */
export declare class GetRelationResponse extends Message<GetRelationResponse> {
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
    constructor(data?: PartialMessage<GetRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationResponse;
    static equals(a: GetRelationResponse | PlainMessage<GetRelationResponse> | undefined, b: GetRelationResponse | PlainMessage<GetRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsRequest
 * @deprecated
 */
export declare class GetRelationsRequest extends Message<GetRelationsRequest> {
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
    constructor(data?: PartialMessage<GetRelationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationsRequest;
    static equals(a: GetRelationsRequest | PlainMessage<GetRelationsRequest> | undefined, b: GetRelationsRequest | PlainMessage<GetRelationsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsResponse
 * @deprecated
 */
export declare class GetRelationsResponse extends Message<GetRelationsResponse> {
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
    constructor(data?: PartialMessage<GetRelationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetRelationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationsResponse;
    static equals(a: GetRelationsResponse | PlainMessage<GetRelationsResponse> | undefined, b: GetRelationsResponse | PlainMessage<GetRelationsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionRequest
 * @deprecated
 */
export declare class GetPermissionRequest extends Message<GetPermissionRequest> {
    /**
     * permission selector
     *
     * @generated from field: aserto.directory.common.v2.PermissionIdentifier param = 1;
     */
    param?: PermissionIdentifier;
    constructor(data?: PartialMessage<GetPermissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetPermissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPermissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPermissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPermissionRequest;
    static equals(a: GetPermissionRequest | PlainMessage<GetPermissionRequest> | undefined, b: GetPermissionRequest | PlainMessage<GetPermissionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionResponse
 * @deprecated
 */
export declare class GetPermissionResponse extends Message<GetPermissionResponse> {
    /**
     * permission instance
     *
     * @generated from field: aserto.directory.common.v2.Permission result = 1;
     */
    result?: Permission;
    constructor(data?: PartialMessage<GetPermissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetPermissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPermissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPermissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPermissionResponse;
    static equals(a: GetPermissionResponse | PlainMessage<GetPermissionResponse> | undefined, b: GetPermissionResponse | PlainMessage<GetPermissionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsRequest
 * @deprecated
 */
export declare class GetPermissionsRequest extends Message<GetPermissionsRequest> {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<GetPermissionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetPermissionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPermissionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPermissionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPermissionsRequest;
    static equals(a: GetPermissionsRequest | PlainMessage<GetPermissionsRequest> | undefined, b: GetPermissionsRequest | PlainMessage<GetPermissionsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsResponse
 * @deprecated
 */
export declare class GetPermissionsResponse extends Message<GetPermissionsResponse> {
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
    constructor(data?: PartialMessage<GetPermissionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetPermissionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPermissionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPermissionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPermissionsResponse;
    static equals(a: GetPermissionsResponse | PlainMessage<GetPermissionsResponse> | undefined, b: GetPermissionsResponse | PlainMessage<GetPermissionsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionRequest
 * @deprecated
 */
export declare class CheckPermissionRequest extends Message<CheckPermissionRequest> {
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
    constructor(data?: PartialMessage<CheckPermissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.CheckPermissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckPermissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckPermissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckPermissionRequest;
    static equals(a: CheckPermissionRequest | PlainMessage<CheckPermissionRequest> | undefined, b: CheckPermissionRequest | PlainMessage<CheckPermissionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionResponse
 * @deprecated
 */
export declare class CheckPermissionResponse extends Message<CheckPermissionResponse> {
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
    constructor(data?: PartialMessage<CheckPermissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.CheckPermissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckPermissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckPermissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckPermissionResponse;
    static equals(a: CheckPermissionResponse | PlainMessage<CheckPermissionResponse> | undefined, b: CheckPermissionResponse | PlainMessage<CheckPermissionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationRequest
 * @deprecated
 */
export declare class CheckRelationRequest extends Message<CheckRelationRequest> {
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
    constructor(data?: PartialMessage<CheckRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.CheckRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRelationRequest;
    static equals(a: CheckRelationRequest | PlainMessage<CheckRelationRequest> | undefined, b: CheckRelationRequest | PlainMessage<CheckRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationResponse
 * @deprecated
 */
export declare class CheckRelationResponse extends Message<CheckRelationResponse> {
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
    constructor(data?: PartialMessage<CheckRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.CheckRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRelationResponse;
    static equals(a: CheckRelationResponse | PlainMessage<CheckRelationResponse> | undefined, b: CheckRelationResponse | PlainMessage<CheckRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.CheckResponse
 * @deprecated
 */
export declare class CheckResponse extends Message<CheckResponse> {
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
    constructor(data?: PartialMessage<CheckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.CheckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse;
    static equals(a: CheckResponse | PlainMessage<CheckResponse> | undefined, b: CheckResponse | PlainMessage<CheckResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetGraphRequest
 * @deprecated
 */
export declare class GetGraphRequest extends Message<GetGraphRequest> {
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
    constructor(data?: PartialMessage<GetGraphRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetGraphRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphRequest;
    static equals(a: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined, b: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v2.GetGraphResponse
 * @deprecated
 */
export declare class GetGraphResponse extends Message<GetGraphResponse> {
    /**
     * dependency graph
     *
     * @generated from field: repeated aserto.directory.common.v2.ObjectDependency results = 1;
     */
    results: ObjectDependency[];
    constructor(data?: PartialMessage<GetGraphResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v2.GetGraphResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphResponse;
    static equals(a: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined, b: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined): boolean;
}
