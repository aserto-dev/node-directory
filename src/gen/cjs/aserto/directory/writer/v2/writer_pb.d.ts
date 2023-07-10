import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectIdentifier, ObjectType, ObjectTypeIdentifier, Permission, PermissionIdentifier, Relation, RelationIdentifier, RelationType, RelationTypeIdentifier } from "../../common/v2/common_pb.js";
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeRequest
 */
export declare class SetObjectTypeRequest extends Message<SetObjectTypeRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.ObjectType object_type = 1;
     */
    objectType?: ObjectType;
    constructor(data?: PartialMessage<SetObjectTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetObjectTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectTypeRequest;
    static equals(a: SetObjectTypeRequest | PlainMessage<SetObjectTypeRequest> | undefined, b: SetObjectTypeRequest | PlainMessage<SetObjectTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeResponse
 */
export declare class SetObjectTypeResponse extends Message<SetObjectTypeResponse> {
    /**
     * object type instance
     *
     * @generated from field: aserto.directory.common.v2.ObjectType result = 1;
     */
    result?: ObjectType;
    constructor(data?: PartialMessage<SetObjectTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetObjectTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectTypeResponse;
    static equals(a: SetObjectTypeResponse | PlainMessage<SetObjectTypeResponse> | undefined, b: SetObjectTypeResponse | PlainMessage<SetObjectTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeRequest
 */
export declare class DeleteObjectTypeRequest extends Message<DeleteObjectTypeRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
    constructor(data?: PartialMessage<DeleteObjectTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteObjectTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectTypeRequest;
    static equals(a: DeleteObjectTypeRequest | PlainMessage<DeleteObjectTypeRequest> | undefined, b: DeleteObjectTypeRequest | PlainMessage<DeleteObjectTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeResponse
 */
export declare class DeleteObjectTypeResponse extends Message<DeleteObjectTypeResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteObjectTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteObjectTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectTypeResponse;
    static equals(a: DeleteObjectTypeResponse | PlainMessage<DeleteObjectTypeResponse> | undefined, b: DeleteObjectTypeResponse | PlainMessage<DeleteObjectTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeRequest
 */
export declare class SetRelationTypeRequest extends Message<SetRelationTypeRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.RelationType relation_type = 1;
     */
    relationType?: RelationType;
    constructor(data?: PartialMessage<SetRelationTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetRelationTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationTypeRequest;
    static equals(a: SetRelationTypeRequest | PlainMessage<SetRelationTypeRequest> | undefined, b: SetRelationTypeRequest | PlainMessage<SetRelationTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeResponse
 */
export declare class SetRelationTypeResponse extends Message<SetRelationTypeResponse> {
    /**
     * relation types instance
     *
     * @generated from field: aserto.directory.common.v2.RelationType result = 1;
     */
    result?: RelationType;
    constructor(data?: PartialMessage<SetRelationTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetRelationTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationTypeResponse;
    static equals(a: SetRelationTypeResponse | PlainMessage<SetRelationTypeResponse> | undefined, b: SetRelationTypeResponse | PlainMessage<SetRelationTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeRequest
 */
export declare class DeleteRelationTypeRequest extends Message<DeleteRelationTypeRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier param = 1;
     */
    param?: RelationTypeIdentifier;
    constructor(data?: PartialMessage<DeleteRelationTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteRelationTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationTypeRequest;
    static equals(a: DeleteRelationTypeRequest | PlainMessage<DeleteRelationTypeRequest> | undefined, b: DeleteRelationTypeRequest | PlainMessage<DeleteRelationTypeRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeResponse
 */
export declare class DeleteRelationTypeResponse extends Message<DeleteRelationTypeResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteRelationTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteRelationTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationTypeResponse;
    static equals(a: DeleteRelationTypeResponse | PlainMessage<DeleteRelationTypeResponse> | undefined, b: DeleteRelationTypeResponse | PlainMessage<DeleteRelationTypeResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionRequest
 */
export declare class SetPermissionRequest extends Message<SetPermissionRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.Permission permission = 1;
     */
    permission?: Permission;
    constructor(data?: PartialMessage<SetPermissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetPermissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPermissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPermissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPermissionRequest;
    static equals(a: SetPermissionRequest | PlainMessage<SetPermissionRequest> | undefined, b: SetPermissionRequest | PlainMessage<SetPermissionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionResponse
 */
export declare class SetPermissionResponse extends Message<SetPermissionResponse> {
    /**
     * permission instance
     *
     * @generated from field: aserto.directory.common.v2.Permission result = 1;
     */
    result?: Permission;
    constructor(data?: PartialMessage<SetPermissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetPermissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPermissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPermissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPermissionResponse;
    static equals(a: SetPermissionResponse | PlainMessage<SetPermissionResponse> | undefined, b: SetPermissionResponse | PlainMessage<SetPermissionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionRequest
 */
export declare class DeletePermissionRequest extends Message<DeletePermissionRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.PermissionIdentifier param = 1;
     */
    param?: PermissionIdentifier;
    constructor(data?: PartialMessage<DeletePermissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeletePermissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePermissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePermissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePermissionRequest;
    static equals(a: DeletePermissionRequest | PlainMessage<DeletePermissionRequest> | undefined, b: DeletePermissionRequest | PlainMessage<DeletePermissionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionResponse
 */
export declare class DeletePermissionResponse extends Message<DeletePermissionResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeletePermissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeletePermissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePermissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePermissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePermissionResponse;
    static equals(a: DeletePermissionResponse | PlainMessage<DeletePermissionResponse> | undefined, b: DeletePermissionResponse | PlainMessage<DeletePermissionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetObjectRequest
 */
export declare class SetObjectRequest extends Message<SetObjectRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.Object object = 1;
     */
    object?: Object$;
    constructor(data?: PartialMessage<SetObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectRequest;
    static equals(a: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined, b: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetObjectResponse
 */
export declare class SetObjectResponse extends Message<SetObjectResponse> {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v2.Object result = 1;
     */
    result?: Object$;
    constructor(data?: PartialMessage<SetObjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectResponse;
    static equals(a: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined, b: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectRequest
 */
export declare class DeleteObjectRequest extends Message<DeleteObjectRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier param = 1;
     */
    param?: ObjectIdentifier;
    /**
     * delete object relations, both object and subject relations.
     *
     * @generated from field: optional bool with_relations = 2;
     */
    withRelations?: boolean;
    constructor(data?: PartialMessage<DeleteObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectRequest;
    static equals(a: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined, b: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectResponse
 */
export declare class DeleteObjectResponse extends Message<DeleteObjectResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteObjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectResponse;
    static equals(a: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined, b: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetRelationRequest
 */
export declare class SetRelationRequest extends Message<SetRelationRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.Relation relation = 1;
     */
    relation?: Relation;
    constructor(data?: PartialMessage<SetRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationRequest;
    static equals(a: SetRelationRequest | PlainMessage<SetRelationRequest> | undefined, b: SetRelationRequest | PlainMessage<SetRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.SetRelationResponse
 */
export declare class SetRelationResponse extends Message<SetRelationResponse> {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v2.Relation result = 1;
     */
    result?: Relation;
    constructor(data?: PartialMessage<SetRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.SetRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationResponse;
    static equals(a: SetRelationResponse | PlainMessage<SetRelationResponse> | undefined, b: SetRelationResponse | PlainMessage<SetRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationRequest
 */
export declare class DeleteRelationRequest extends Message<DeleteRelationRequest> {
    /**
     *
     *
     * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
     */
    param?: RelationIdentifier;
    constructor(data?: PartialMessage<DeleteRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationRequest;
    static equals(a: DeleteRelationRequest | PlainMessage<DeleteRelationRequest> | undefined, b: DeleteRelationRequest | PlainMessage<DeleteRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationResponse
 */
export declare class DeleteRelationResponse extends Message<DeleteRelationResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v2.DeleteRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationResponse;
    static equals(a: DeleteRelationResponse | PlainMessage<DeleteRelationResponse> | undefined, b: DeleteRelationResponse | PlainMessage<DeleteRelationResponse> | undefined): boolean;
}
