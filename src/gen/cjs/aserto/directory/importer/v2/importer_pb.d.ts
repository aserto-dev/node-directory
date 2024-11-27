import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/importer/v2/importer.proto.
 */
export declare const file_aserto_directory_importer_v2_importer: GenFile;
/**
 * @generated from message aserto.directory.importer.v2.ImportRequest
 * @deprecated
 */
export type ImportRequest = Message<"aserto.directory.importer.v2.ImportRequest"> & {
    /**
     * operation Opcode enum value
     *
     * @generated from field: aserto.directory.importer.v2.Opcode op_code = 1;
     */
    opCode: Opcode;
    /**
     * @generated from oneof aserto.directory.importer.v2.ImportRequest.msg
     * @deprecated
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
};
/**
 * Describes the message aserto.directory.importer.v2.ImportRequest.
 * Use `create(ImportRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const ImportRequestSchema: GenMessage<ImportRequest>;
/**
 * @generated from message aserto.directory.importer.v2.ImportResponse
 * @deprecated
 */
export type ImportResponse = Message<"aserto.directory.importer.v2.ImportResponse"> & {
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
};
/**
 * Describes the message aserto.directory.importer.v2.ImportResponse.
 * Use `create(ImportResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const ImportResponseSchema: GenMessage<ImportResponse>;
/**
 * @generated from message aserto.directory.importer.v2.ImportCounter
 * @deprecated
 */
export type ImportCounter = Message<"aserto.directory.importer.v2.ImportCounter"> & {
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
};
/**
 * Describes the message aserto.directory.importer.v2.ImportCounter.
 * Use `create(ImportCounterSchema)` to create a new message.
 * @deprecated
 */
export declare const ImportCounterSchema: GenMessage<ImportCounter>;
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
 * Describes the enum aserto.directory.importer.v2.Opcode.
 * @deprecated
 */
export declare const OpcodeSchema: GenEnum<Opcode>;
/**
 * @generated from service aserto.directory.importer.v2.Importer
 */
export declare const Importer: GenService<{
    /**
     * import stream of objects and relations
     *
     * @generated from rpc aserto.directory.importer.v2.Importer.Import
     * @deprecated
     */
    import: {
        methodKind: "bidi_streaming";
        input: typeof ImportRequestSchema;
        output: typeof ImportResponseSchema;
    };
}>;
