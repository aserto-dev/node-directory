import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3 } from "@bufbuild/protobuf";
import { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb.js";
import { CheckPermissionRequest, CheckRelationRequest, CheckRequest } from "../../reader/v3/reader_pb.js";
/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionRequest
 */
export declare class GetAssertionRequest extends Message<GetAssertionRequest> {
    /**
     * assertion identifier
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
    constructor(data?: PartialMessage<GetAssertionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.GetAssertionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssertionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssertionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssertionRequest;
    static equals(a: GetAssertionRequest | PlainMessage<GetAssertionRequest> | undefined, b: GetAssertionRequest | PlainMessage<GetAssertionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionResponse
 */
export declare class GetAssertionResponse extends Message<GetAssertionResponse> {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert result = 1;
     */
    result?: Assert;
    constructor(data?: PartialMessage<GetAssertionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.GetAssertionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssertionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssertionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssertionResponse;
    static equals(a: GetAssertionResponse | PlainMessage<GetAssertionResponse> | undefined, b: GetAssertionResponse | PlainMessage<GetAssertionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsRequest
 */
export declare class ListAssertionsRequest extends Message<ListAssertionsRequest> {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 1;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<ListAssertionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.ListAssertionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssertionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssertionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssertionsRequest;
    static equals(a: ListAssertionsRequest | PlainMessage<ListAssertionsRequest> | undefined, b: ListAssertionsRequest | PlainMessage<ListAssertionsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsResponse
 */
export declare class ListAssertionsResponse extends Message<ListAssertionsResponse> {
    /**
     * @generated from field: repeated aserto.directory.assertion.v3.Assert results = 1;
     */
    results: Assert[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 2;
     */
    page?: PaginationResponse;
    constructor(data?: PartialMessage<ListAssertionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.ListAssertionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssertionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssertionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssertionsResponse;
    static equals(a: ListAssertionsResponse | PlainMessage<ListAssertionsResponse> | undefined, b: ListAssertionsResponse | PlainMessage<ListAssertionsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionRequest
 */
export declare class SetAssertionRequest extends Message<SetAssertionRequest> {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert assert = 1;
     */
    assert?: Assert;
    constructor(data?: PartialMessage<SetAssertionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.SetAssertionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetAssertionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetAssertionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetAssertionRequest;
    static equals(a: SetAssertionRequest | PlainMessage<SetAssertionRequest> | undefined, b: SetAssertionRequest | PlainMessage<SetAssertionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionResponse
 */
export declare class SetAssertionResponse extends Message<SetAssertionResponse> {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert result = 1;
     */
    result?: Assert;
    constructor(data?: PartialMessage<SetAssertionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.SetAssertionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetAssertionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetAssertionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetAssertionResponse;
    static equals(a: SetAssertionResponse | PlainMessage<SetAssertionResponse> | undefined, b: SetAssertionResponse | PlainMessage<SetAssertionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionRequest
 */
export declare class DeleteAssertionRequest extends Message<DeleteAssertionRequest> {
    /**
     * assertion identifier
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
    constructor(data?: PartialMessage<DeleteAssertionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.DeleteAssertionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAssertionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAssertionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAssertionRequest;
    static equals(a: DeleteAssertionRequest | PlainMessage<DeleteAssertionRequest> | undefined, b: DeleteAssertionRequest | PlainMessage<DeleteAssertionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionResponse
 */
export declare class DeleteAssertionResponse extends Message<DeleteAssertionResponse> {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteAssertionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.DeleteAssertionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAssertionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAssertionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAssertionResponse;
    static equals(a: DeleteAssertionResponse | PlainMessage<DeleteAssertionResponse> | undefined, b: DeleteAssertionResponse | PlainMessage<DeleteAssertionResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.assertion.v3.Assert
 */
export declare class Assert extends Message<Assert> {
    /**
     * assertion identifier
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
    /**
     * expected outcome of assertion
     *
     * @generated from field: bool expected = 2;
     */
    expected: boolean;
    /**
     * assertion request
     *
     * @generated from oneof aserto.directory.assertion.v3.Assert.msg
     */
    msg: {
        /**
         * @generated from field: aserto.directory.reader.v3.CheckRequest check = 3;
         */
        value: CheckRequest;
        case: "check";
    } | {
        /**
         * @generated from field: aserto.directory.reader.v3.CheckRelationRequest check_relation = 4;
         */
        value: CheckRelationRequest;
        case: "checkRelation";
    } | {
        /**
         * @generated from field: aserto.directory.reader.v3.CheckPermissionRequest check_permission = 5;
         */
        value: CheckPermissionRequest;
        case: "checkPermission";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Assert>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.assertion.v3.Assert";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Assert;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Assert;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Assert;
    static equals(a: Assert | PlainMessage<Assert> | undefined, b: Assert | PlainMessage<Assert> | undefined): boolean;
}
