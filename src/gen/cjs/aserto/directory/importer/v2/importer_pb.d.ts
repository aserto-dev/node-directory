import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb.js";
/**
 * @generated from enum aserto.directory.importer.v2.Opcode
 * @deprecated
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
 * @generated from message aserto.directory.importer.v2.ImportRequest
 * @deprecated
 */
export declare class ImportRequest extends Message<ImportRequest> {
    /**
     * operation Opcode enum value
     *
     * @generated from field: aserto.directory.importer.v2.Opcode op_code = 1;
     */
    opCode: Opcode;
    /**
     * @generated from oneof aserto.directory.importer.v2.ImportRequest.msg
     */
    msg: {
        /**
         * object_type import message
         *
         * @generated from field: aserto.directory.common.v2.ObjectType object_type = 2;
         */
        value: ObjectType;
        case: "objectType";
    } | {
        /**
         * permission import message
         *
         * @generated from field: aserto.directory.common.v2.Permission permission = 3;
         */
        value: Permission;
        case: "permission";
    } | {
        /**
         * relation_type import message
         *
         * @generated from field: aserto.directory.common.v2.RelationType relation_type = 4;
         */
        value: RelationType;
        case: "relationType";
    } | {
        /**
         * object import message
         *
         * @generated from field: aserto.directory.common.v2.Object object = 5;
         */
        value: Object$;
        case: "object";
    } | {
        /**
         * relation import message
         *
         * @generated from field: aserto.directory.common.v2.Relation relation = 6;
         */
        value: Relation;
        case: "relation";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ImportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.importer.v2.ImportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportRequest;
    static equals(a: ImportRequest | PlainMessage<ImportRequest> | undefined, b: ImportRequest | PlainMessage<ImportRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.importer.v2.ImportResponse
 * @deprecated
 */
export declare class ImportResponse extends Message<ImportResponse> {
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter object_type = 1;
     */
    objectType?: ImportCounter;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter permission = 2;
     */
    permission?: ImportCounter;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter relation_type = 3;
     */
    relationType?: ImportCounter;
    /**
     * object import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter object = 4;
     */
    object?: ImportCounter;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter relation = 5;
     */
    relation?: ImportCounter;
    constructor(data?: PartialMessage<ImportResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.importer.v2.ImportResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportResponse;
    static equals(a: ImportResponse | PlainMessage<ImportResponse> | undefined, b: ImportResponse | PlainMessage<ImportResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.importer.v2.ImportCounter
 * @deprecated
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
    static readonly typeName = "aserto.directory.importer.v2.ImportCounter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportCounter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportCounter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportCounter;
    static equals(a: ImportCounter | PlainMessage<ImportCounter> | undefined, b: ImportCounter | PlainMessage<ImportCounter> | undefined): boolean;
}
