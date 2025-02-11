import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty } from "@bufbuild/protobuf/wkt";
import type { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb";
import type { CheckPermissionRequest, CheckRelationRequest, CheckRequest } from "../../reader/v3/reader_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/assertion/v3/assertion.proto.
 */
export declare const file_aserto_directory_assertion_v3_assertion: GenFile;
/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionRequest
 */
export type GetAssertionRequest = Message<"aserto.directory.assertion.v3.GetAssertionRequest"> & {
    /**
     * assertion identifier
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
};
/**
 * Describes the message aserto.directory.assertion.v3.GetAssertionRequest.
 * Use `create(GetAssertionRequestSchema)` to create a new message.
 */
export declare const GetAssertionRequestSchema: GenMessage<GetAssertionRequest>;
/**
 * @generated from message aserto.directory.assertion.v3.GetAssertionResponse
 */
export type GetAssertionResponse = Message<"aserto.directory.assertion.v3.GetAssertionResponse"> & {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert result = 1;
     */
    result?: Assert;
};
/**
 * Describes the message aserto.directory.assertion.v3.GetAssertionResponse.
 * Use `create(GetAssertionResponseSchema)` to create a new message.
 */
export declare const GetAssertionResponseSchema: GenMessage<GetAssertionResponse>;
/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsRequest
 */
export type ListAssertionsRequest = Message<"aserto.directory.assertion.v3.ListAssertionsRequest"> & {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 1;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.assertion.v3.ListAssertionsRequest.
 * Use `create(ListAssertionsRequestSchema)` to create a new message.
 */
export declare const ListAssertionsRequestSchema: GenMessage<ListAssertionsRequest>;
/**
 * @generated from message aserto.directory.assertion.v3.ListAssertionsResponse
 */
export type ListAssertionsResponse = Message<"aserto.directory.assertion.v3.ListAssertionsResponse"> & {
    /**
     * @generated from field: repeated aserto.directory.assertion.v3.Assert results = 1;
     */
    results: Assert[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 2;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.assertion.v3.ListAssertionsResponse.
 * Use `create(ListAssertionsResponseSchema)` to create a new message.
 */
export declare const ListAssertionsResponseSchema: GenMessage<ListAssertionsResponse>;
/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionRequest
 */
export type SetAssertionRequest = Message<"aserto.directory.assertion.v3.SetAssertionRequest"> & {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert assert = 1;
     */
    assert?: Assert;
};
/**
 * Describes the message aserto.directory.assertion.v3.SetAssertionRequest.
 * Use `create(SetAssertionRequestSchema)` to create a new message.
 */
export declare const SetAssertionRequestSchema: GenMessage<SetAssertionRequest>;
/**
 * @generated from message aserto.directory.assertion.v3.SetAssertionResponse
 */
export type SetAssertionResponse = Message<"aserto.directory.assertion.v3.SetAssertionResponse"> & {
    /**
     * @generated from field: aserto.directory.assertion.v3.Assert result = 1;
     */
    result?: Assert;
};
/**
 * Describes the message aserto.directory.assertion.v3.SetAssertionResponse.
 * Use `create(SetAssertionResponseSchema)` to create a new message.
 */
export declare const SetAssertionResponseSchema: GenMessage<SetAssertionResponse>;
/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionRequest
 */
export type DeleteAssertionRequest = Message<"aserto.directory.assertion.v3.DeleteAssertionRequest"> & {
    /**
     * assertion identifier
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
};
/**
 * Describes the message aserto.directory.assertion.v3.DeleteAssertionRequest.
 * Use `create(DeleteAssertionRequestSchema)` to create a new message.
 */
export declare const DeleteAssertionRequestSchema: GenMessage<DeleteAssertionRequest>;
/**
 * @generated from message aserto.directory.assertion.v3.DeleteAssertionResponse
 */
export type DeleteAssertionResponse = Message<"aserto.directory.assertion.v3.DeleteAssertionResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.assertion.v3.DeleteAssertionResponse.
 * Use `create(DeleteAssertionResponseSchema)` to create a new message.
 */
export declare const DeleteAssertionResponseSchema: GenMessage<DeleteAssertionResponse>;
/**
 * @generated from message aserto.directory.assertion.v3.Assert
 */
export type Assert = Message<"aserto.directory.assertion.v3.Assert"> & {
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
    /**
     * description
     *
     * @generated from field: string description = 6;
     */
    description: string;
};
/**
 * Describes the message aserto.directory.assertion.v3.Assert.
 * Use `create(AssertSchema)` to create a new message.
 */
export declare const AssertSchema: GenMessage<Assert>;
/**
 * @generated from service aserto.directory.assertion.v3.Assertion
 */
export declare const Assertion: GenService<{
    /**
     * @generated from rpc aserto.directory.assertion.v3.Assertion.GetAssertion
     */
    getAssertion: {
        methodKind: "unary";
        input: typeof GetAssertionRequestSchema;
        output: typeof GetAssertionResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.assertion.v3.Assertion.ListAssertions
     */
    listAssertions: {
        methodKind: "unary";
        input: typeof ListAssertionsRequestSchema;
        output: typeof ListAssertionsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.assertion.v3.Assertion.SetAssertion
     */
    setAssertion: {
        methodKind: "unary";
        input: typeof SetAssertionRequestSchema;
        output: typeof SetAssertionResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.assertion.v3.Assertion.DeleteAssertion
     */
    deleteAssertion: {
        methodKind: "unary";
        input: typeof DeleteAssertionRequestSchema;
        output: typeof DeleteAssertionResponseSchema;
    };
}>;
