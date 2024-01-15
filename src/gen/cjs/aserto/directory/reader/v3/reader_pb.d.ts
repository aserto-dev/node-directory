import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectDependency, ObjectIdentifier, PaginationRequest, PaginationResponse, Relation } from "../../common/v3/common_pb.js";
/**
 * @generated from message aserto.directory.reader.v3.GetObjectRequest
 */
export declare class GetObjectRequest extends Message<GetObjectRequest> {
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
    constructor(data?: PartialMessage<GetObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectRequest;
    static equals(a: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined, b: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetObjectResponse
 */
export declare class GetObjectResponse extends Message<GetObjectResponse> {
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
    constructor(data?: PartialMessage<GetObjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectResponse;
    static equals(a: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined, b: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyRequest
 */
export declare class GetObjectManyRequest extends Message<GetObjectManyRequest> {
    /**
     * object identifier list
     *
     * @generated from field: repeated aserto.directory.common.v3.ObjectIdentifier param = 1;
     */
    param: ObjectIdentifier[];
    constructor(data?: PartialMessage<GetObjectManyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectManyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectManyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectManyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectManyRequest;
    static equals(a: GetObjectManyRequest | PlainMessage<GetObjectManyRequest> | undefined, b: GetObjectManyRequest | PlainMessage<GetObjectManyRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyResponse
 */
export declare class GetObjectManyResponse extends Message<GetObjectManyResponse> {
    /**
     * array of object instances
     *
     * @generated from field: repeated aserto.directory.common.v3.Object results = 1;
     */
    results: Object$[];
    constructor(data?: PartialMessage<GetObjectManyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectManyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectManyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectManyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectManyResponse;
    static equals(a: GetObjectManyResponse | PlainMessage<GetObjectManyResponse> | undefined, b: GetObjectManyResponse | PlainMessage<GetObjectManyResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsRequest
 */
export declare class GetObjectsRequest extends Message<GetObjectsRequest> {
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
    constructor(data?: PartialMessage<GetObjectsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsRequest;
    static equals(a: GetObjectsRequest | PlainMessage<GetObjectsRequest> | undefined, b: GetObjectsRequest | PlainMessage<GetObjectsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsResponse
 */
export declare class GetObjectsResponse extends Message<GetObjectsResponse> {
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
    constructor(data?: PartialMessage<GetObjectsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetObjectsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsResponse;
    static equals(a: GetObjectsResponse | PlainMessage<GetObjectsResponse> | undefined, b: GetObjectsResponse | PlainMessage<GetObjectsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetRelationRequest
 */
export declare class GetRelationRequest extends Message<GetRelationRequest> {
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
    constructor(data?: PartialMessage<GetRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationRequest;
    static equals(a: GetRelationRequest | PlainMessage<GetRelationRequest> | undefined, b: GetRelationRequest | PlainMessage<GetRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetRelationResponse
 */
export declare class GetRelationResponse extends Message<GetRelationResponse> {
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
    constructor(data?: PartialMessage<GetRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationResponse;
    static equals(a: GetRelationResponse | PlainMessage<GetRelationResponse> | undefined, b: GetRelationResponse | PlainMessage<GetRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsRequest
 */
export declare class GetRelationsRequest extends Message<GetRelationsRequest> {
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
    constructor(data?: PartialMessage<GetRelationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetRelationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationsRequest;
    static equals(a: GetRelationsRequest | PlainMessage<GetRelationsRequest> | undefined, b: GetRelationsRequest | PlainMessage<GetRelationsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsResponse
 */
export declare class GetRelationsResponse extends Message<GetRelationsResponse> {
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
    constructor(data?: PartialMessage<GetRelationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetRelationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRelationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRelationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRelationsResponse;
    static equals(a: GetRelationsResponse | PlainMessage<GetRelationsResponse> | undefined, b: GetRelationsResponse | PlainMessage<GetRelationsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckRequest
 */
export declare class CheckRequest extends Message<CheckRequest> {
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
    constructor(data?: PartialMessage<CheckRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.CheckRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRequest;
    static equals(a: CheckRequest | PlainMessage<CheckRequest> | undefined, b: CheckRequest | PlainMessage<CheckRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckResponse
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
    static readonly typeName = "aserto.directory.reader.v3.CheckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse;
    static equals(a: CheckResponse | PlainMessage<CheckResponse> | undefined, b: CheckResponse | PlainMessage<CheckResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionRequest
 */
export declare class CheckPermissionRequest extends Message<CheckPermissionRequest> {
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
    constructor(data?: PartialMessage<CheckPermissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.CheckPermissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckPermissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckPermissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckPermissionRequest;
    static equals(a: CheckPermissionRequest | PlainMessage<CheckPermissionRequest> | undefined, b: CheckPermissionRequest | PlainMessage<CheckPermissionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionResponse
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
    static readonly typeName = "aserto.directory.reader.v3.CheckPermissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckPermissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckPermissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckPermissionResponse;
    static equals(a: CheckPermissionResponse | PlainMessage<CheckPermissionResponse> | undefined, b: CheckPermissionResponse | PlainMessage<CheckPermissionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationRequest
 */
export declare class CheckRelationRequest extends Message<CheckRelationRequest> {
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
    constructor(data?: PartialMessage<CheckRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.CheckRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRelationRequest;
    static equals(a: CheckRelationRequest | PlainMessage<CheckRelationRequest> | undefined, b: CheckRelationRequest | PlainMessage<CheckRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationResponse
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
    static readonly typeName = "aserto.directory.reader.v3.CheckRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRelationResponse;
    static equals(a: CheckRelationResponse | PlainMessage<CheckRelationResponse> | undefined, b: CheckRelationResponse | PlainMessage<CheckRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetGraphRequest
 */
export declare class GetGraphRequest extends Message<GetGraphRequest> {
    /**
     * anchor type
     *
     * @generated from field: string anchor_type = 1;
     */
    anchorType: string;
    /**
     * anchor identifier
     *
     * @generated from field: string anchor_id = 2;
     */
    anchorId: string;
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
    constructor(data?: PartialMessage<GetGraphRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetGraphRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphRequest;
    static equals(a: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined, b: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.reader.v3.GetGraphResponse
 */
export declare class GetGraphResponse extends Message<GetGraphResponse> {
    /**
     * dependency graph
     *
     * @generated from field: repeated aserto.directory.common.v3.ObjectDependency results = 1;
     */
    results: ObjectDependency[];
    constructor(data?: PartialMessage<GetGraphResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.reader.v3.GetGraphResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphResponse;
    static equals(a: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined, b: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined): boolean;
}
