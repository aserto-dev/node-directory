import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, Relation } from "../../common/v3/common_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/importer/v3/importer.proto.
 */
export declare const file_aserto_directory_importer_v3_importer: GenFile;
/**
 * @generated from message aserto.directory.importer.v3.ImportRequest
 */
export type ImportRequest = Message<"aserto.directory.importer.v3.ImportRequest"> & {
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
};
/**
 * Describes the message aserto.directory.importer.v3.ImportRequest.
 * Use `create(ImportRequestSchema)` to create a new message.
 */
export declare const ImportRequestSchema: GenMessage<ImportRequest>;
/**
 * @generated from message aserto.directory.importer.v3.ImportResponse
 */
export type ImportResponse = Message<"aserto.directory.importer.v3.ImportResponse"> & {
    /**
     * object import counter
     *
     * @generated from field: aserto.directory.importer.v3.ImportCounter object = 1 [deprecated = true];
     * @deprecated
     */
    object?: ImportCounter;
    /**
     * relation import counter
     *
     * @generated from field: aserto.directory.importer.v3.ImportCounter relation = 2 [deprecated = true];
     * @deprecated
     */
    relation?: ImportCounter;
    /**
     * @generated from oneof aserto.directory.importer.v3.ImportResponse.msg
     */
    msg: {
        /**
         * import status message
         *
         * @generated from field: aserto.directory.importer.v3.ImportStatus status = 4;
         */
        value: ImportStatus;
        case: "status";
    } | {
        /**
         * import counter per type
         *
         * @generated from field: aserto.directory.importer.v3.ImportCounter counter = 5;
         */
        value: ImportCounter;
        case: "counter";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message aserto.directory.importer.v3.ImportResponse.
 * Use `create(ImportResponseSchema)` to create a new message.
 */
export declare const ImportResponseSchema: GenMessage<ImportResponse>;
/**
 * @generated from message aserto.directory.importer.v3.ImportCounter
 */
export type ImportCounter = Message<"aserto.directory.importer.v3.ImportCounter"> & {
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
    /**
     * counter of type (object|relation)
     *
     * @generated from field: string type = 5;
     */
    type: string;
};
/**
 * Describes the message aserto.directory.importer.v3.ImportCounter.
 * Use `create(ImportCounterSchema)` to create a new message.
 */
export declare const ImportCounterSchema: GenMessage<ImportCounter>;
/**
 * @generated from message aserto.directory.importer.v3.ImportStatus
 */
export type ImportStatus = Message<"aserto.directory.importer.v3.ImportStatus"> & {
    /**
     * gRPC status code (google.golang.org/grpc/codes)
     *
     * @generated from field: uint32 code = 1;
     */
    code: number;
    /**
     * gRPC status message (google.golang.org/grpc/status)
     *
     * @generated from field: string msg = 2;
     */
    msg: string;
    /**
     * req contains the original import request message
     *
     * @generated from field: aserto.directory.importer.v3.ImportRequest req = 3;
     */
    req?: ImportRequest;
};
/**
 * Describes the message aserto.directory.importer.v3.ImportStatus.
 * Use `create(ImportStatusSchema)` to create a new message.
 */
export declare const ImportStatusSchema: GenMessage<ImportStatus>;
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
    DELETE = 2,
    /**
     * @generated from enum value: OPCODE_DELETE_WITH_RELATIONS = 3;
     */
    DELETE_WITH_RELATIONS = 3
}
/**
 * Describes the enum aserto.directory.importer.v3.Opcode.
 */
export declare const OpcodeSchema: GenEnum<Opcode>;
/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
export declare const Importer: GenService<{
    /**
     * import stream of objects and relations
     *
     * @generated from rpc aserto.directory.importer.v3.Importer.Import
     */
    import: {
        methodKind: "bidi_streaming";
        input: typeof ImportRequestSchema;
        output: typeof ImportResponseSchema;
    };
}>;
