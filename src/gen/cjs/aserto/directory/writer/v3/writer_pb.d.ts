import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3 } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";
/**
 * @generated from message aserto.directory.writer.v3.SetObjectRequest
 */
export declare class SetObjectRequest extends Message<SetObjectRequest> {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v3.Object object = 1;
     */
    object?: Object$;
    constructor(data?: PartialMessage<SetObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.SetObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectRequest;
    static equals(a: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined, b: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.SetObjectResponse
 */
export declare class SetObjectResponse extends Message<SetObjectResponse> {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v3.Object result = 1;
     */
    result?: Object$;
    constructor(data?: PartialMessage<SetObjectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.SetObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectResponse;
    static equals(a: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined, b: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectRequest
 */
export declare class DeleteObjectRequest extends Message<DeleteObjectRequest> {
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
     * delete object relations, both object and subject relations.
     *
     * @generated from field: bool with_relations = 3;
     */
    withRelations: boolean;
    constructor(data?: PartialMessage<DeleteObjectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.DeleteObjectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectRequest;
    static equals(a: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined, b: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectResponse
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
    static readonly typeName = "aserto.directory.writer.v3.DeleteObjectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectResponse;
    static equals(a: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined, b: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.SetRelationRequest
 */
export declare class SetRelationRequest extends Message<SetRelationRequest> {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v3.Relation relation = 1;
     */
    relation?: Relation;
    constructor(data?: PartialMessage<SetRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.SetRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationRequest;
    static equals(a: SetRelationRequest | PlainMessage<SetRelationRequest> | undefined, b: SetRelationRequest | PlainMessage<SetRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.SetRelationResponse
 */
export declare class SetRelationResponse extends Message<SetRelationResponse> {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v3.Relation result = 1;
     */
    result?: Relation;
    constructor(data?: PartialMessage<SetRelationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.SetRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRelationResponse;
    static equals(a: SetRelationResponse | PlainMessage<SetRelationResponse> | undefined, b: SetRelationResponse | PlainMessage<SetRelationResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationRequest
 */
export declare class DeleteRelationRequest extends Message<DeleteRelationRequest> {
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
    constructor(data?: PartialMessage<DeleteRelationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.writer.v3.DeleteRelationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationRequest;
    static equals(a: DeleteRelationRequest | PlainMessage<DeleteRelationRequest> | undefined, b: DeleteRelationRequest | PlainMessage<DeleteRelationRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationResponse
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
    static readonly typeName = "aserto.directory.writer.v3.DeleteRelationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRelationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRelationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRelationResponse;
    static equals(a: DeleteRelationResponse | PlainMessage<DeleteRelationResponse> | undefined, b: DeleteRelationResponse | PlainMessage<DeleteRelationResponse> | undefined): boolean;
}
