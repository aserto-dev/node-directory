import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.directory.model.v3.GetManifestRequest
 */
export declare class GetManifestRequest extends Message<GetManifestRequest> {
    /**
     * empty request
     *
     * @generated from field: google.protobuf.Empty empty = 1;
     */
    empty?: Empty;
    constructor(data?: PartialMessage<GetManifestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.GetManifestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManifestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManifestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManifestRequest;
    static equals(a: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined, b: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.GetManifestResponse
 */
export declare class GetManifestResponse extends Message<GetManifestResponse> {
    /**
     * @generated from oneof aserto.directory.model.v3.GetManifestResponse.msg
     */
    msg: {
        /**
         * Manifest metadata
         *
         * @generated from field: aserto.directory.model.v3.Metadata metadata = 1;
         */
        value: Metadata;
        case: "metadata";
    } | {
        /**
         * Manifest content
         *
         * @generated from field: aserto.directory.model.v3.Body body = 2;
         */
        value: Body;
        case: "body";
    } | {
        /**
         * Model
         *
         * @generated from field: google.protobuf.Struct model = 3;
         */
        value: Struct;
        case: "model";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<GetManifestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.GetManifestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManifestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManifestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManifestResponse;
    static equals(a: GetManifestResponse | PlainMessage<GetManifestResponse> | undefined, b: GetManifestResponse | PlainMessage<GetManifestResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.SetManifestRequest
 */
export declare class SetManifestRequest extends Message<SetManifestRequest> {
    /**
     * manifest instance
     *
     * @generated from oneof aserto.directory.model.v3.SetManifestRequest.msg
     */
    msg: {
        /**
         * Manifest content
         *
         * @generated from field: aserto.directory.model.v3.Body body = 1;
         */
        value: Body;
        case: "body";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<SetManifestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.SetManifestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetManifestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetManifestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetManifestRequest;
    static equals(a: SetManifestRequest | PlainMessage<SetManifestRequest> | undefined, b: SetManifestRequest | PlainMessage<SetManifestRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.SetManifestResponse
 */
export declare class SetManifestResponse extends Message<SetManifestResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<SetManifestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.SetManifestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetManifestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetManifestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetManifestResponse;
    static equals(a: SetManifestResponse | PlainMessage<SetManifestResponse> | undefined, b: SetManifestResponse | PlainMessage<SetManifestResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.DeleteManifestRequest
 */
export declare class DeleteManifestRequest extends Message<DeleteManifestRequest> {
    /**
     * empty request
     *
     * @generated from field: google.protobuf.Empty empty = 1;
     */
    empty?: Empty;
    constructor(data?: PartialMessage<DeleteManifestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.DeleteManifestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteManifestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteManifestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteManifestRequest;
    static equals(a: DeleteManifestRequest | PlainMessage<DeleteManifestRequest> | undefined, b: DeleteManifestRequest | PlainMessage<DeleteManifestRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.DeleteManifestResponse
 */
export declare class DeleteManifestResponse extends Message<DeleteManifestResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteManifestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.DeleteManifestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteManifestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteManifestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteManifestResponse;
    static equals(a: DeleteManifestResponse | PlainMessage<DeleteManifestResponse> | undefined, b: DeleteManifestResponse | PlainMessage<DeleteManifestResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.Metadata
 */
export declare class Metadata extends Message<Metadata> {
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
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.model.v3.Body
 */
export declare class Body extends Message<Body> {
    /**
     * manifest content
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<Body>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.model.v3.Body";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body;
    static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean;
}
