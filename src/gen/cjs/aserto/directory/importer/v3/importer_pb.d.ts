import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";
/**
 * @generated from enum aserto.directory.importer.v3.Opcode
 */
export declare enum Opcode {
    /**
     * @generated from enum value: OPCODE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: OPCODE_SET = 1;
     */
    SET = 1,
    /**
     * @generated from enum value: OPCODE_DELETE = 2;
     */
    DELETE = 2
}
/**
 * @generated from message aserto.directory.importer.v3.ImportRequest
 */
export declare class ImportRequest extends Message<ImportRequest> {
    /**
     * operation Opcode enum value
     *
     * @generated from field: aserto.directory.importer.v3.Opcode op_code = 1;
     */
    opCode: Opcode;
    /**
     * @generated from oneof aserto.directory.importer.v3.ImportRequest.msg
     */
    msg: {
        /**
         * object import message
         *
         * @generated from field: aserto.directory.common.v3.Object object = 5;
         */
        value: Object$;
        case: "object";
    } | {
        /**
         * relation import message
         *
         * @generated from field: aserto.directory.common.v3.Relation relation = 6;
         */
        value: Relation;
        case: "relation";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ImportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.importer.v3.ImportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportRequest;
    static equals(a: ImportRequest | PlainMessage<ImportRequest> | undefined, b: ImportRequest | PlainMessage<ImportRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.importer.v3.ImportResponse
 */
export declare class ImportResponse extends Message<ImportResponse> {
    /**
     * object import counter
     *
     * @generated from field: aserto.directory.importer.v3.ImportCounter object = 1;
     */
    object?: ImportCounter;
    /**
     * relation import counter
     *
     * @generated from field: aserto.directory.importer.v3.ImportCounter relation = 2;
     */
    relation?: ImportCounter;
    constructor(data?: PartialMessage<ImportResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.importer.v3.ImportResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportResponse;
    static equals(a: ImportResponse | PlainMessage<ImportResponse> | undefined, b: ImportResponse | PlainMessage<ImportResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.importer.v3.ImportCounter
 */
export declare class ImportCounter extends Message<ImportCounter> {
    /**
     * number of messages received
     *
     * @generated from field: uint64 recv = 1;
     */
    recv: bigint;
    /**
     * number of messages with OPCODE_SET
     *
     * @generated from field: uint64 set = 2;
     */
    set: bigint;
    /**
     * number of messages with OPCODE_DELETE
     *
     * @generated from field: uint64 delete = 3;
     */
    delete: bigint;
    /**
     * number of messages resulting in error
     *
     * @generated from field: uint64 error = 4;
     */
    error: bigint;
    constructor(data?: PartialMessage<ImportCounter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.importer.v3.ImportCounter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportCounter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportCounter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportCounter;
    static equals(a: ImportCounter | PlainMessage<ImportCounter> | undefined, b: ImportCounter | PlainMessage<ImportCounter> | undefined): boolean;
}
