import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, Relation } from "../../common/v3/common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/exporter/v3/exporter.proto.
 */
export declare const file_aserto_directory_exporter_v3_exporter: GenFile;
/**
 * @generated from message aserto.directory.exporter.v3.ExportRequest
 */
export type ExportRequest = Message<"aserto.directory.exporter.v3.ExportRequest"> & {
    /**
     * data export options mask
     *
     * @generated from field: uint32 options = 1;
     */
    options: number;
    /**
     * start export from timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp start_from = 20;
     */
    startFrom?: Timestamp;
};
/**
 * Describes the message aserto.directory.exporter.v3.ExportRequest.
 * Use `create(ExportRequestSchema)` to create a new message.
 */
export declare const ExportRequestSchema: GenMessage<ExportRequest>;
/**
 * @generated from message aserto.directory.exporter.v3.ExportResponse
 */
export type ExportResponse = Message<"aserto.directory.exporter.v3.ExportResponse"> & {
    /**
     * @generated from oneof aserto.directory.exporter.v3.ExportResponse.msg
     */
    msg: {
        /**
         * object instance (data)
         *
         * @generated from field: aserto.directory.common.v3.Object object = 2;
         */
        value: Object$;
        case: "object";
    } | {
        /**
         * relation instance (data)
         *
         * @generated from field: aserto.directory.common.v3.Relation relation = 4;
         */
        value: Relation;
        case: "relation";
    } | {
        /**
         * object and/or relation stats (no data)
         *
         * @generated from field: google.protobuf.Struct stats = 8;
         */
        value: JsonObject;
        case: "stats";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message aserto.directory.exporter.v3.ExportResponse.
 * Use `create(ExportResponseSchema)` to create a new message.
 */
export declare const ExportResponseSchema: GenMessage<ExportResponse>;
/**
 * @generated from enum aserto.directory.exporter.v3.Option
 */
export declare enum Option {
    /**
     * nothing selected (default initialization value)
     *
     * @generated from enum value: OPTION_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * object instances
     *
     * @generated from enum value: OPTION_DATA_OBJECTS = 8;
     */
    DATA_OBJECTS = 8,
    /**
     * relation instances
     *
     * @generated from enum value: OPTION_DATA_RELATIONS = 16;
     */
    DATA_RELATIONS = 16,
    /**
     * all data = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS
     *
     * @generated from enum value: OPTION_DATA = 24;
     */
    DATA = 24,
    /**
     * stats
     *
     * @generated from enum value: OPTION_STATS = 64;
     */
    STATS = 64
}
/**
 * Describes the enum aserto.directory.exporter.v3.Option.
 */
export declare const OptionSchema: GenEnum<Option>;
/**
 * @generated from service aserto.directory.exporter.v3.Exporter
 */
export declare const Exporter: GenService<{
    /**
     * export objects and relations as a stream
     *
     * @generated from rpc aserto.directory.exporter.v3.Exporter.Export
     */
    export: {
        methodKind: "server_streaming";
        input: typeof ExportRequestSchema;
        output: typeof ExportResponseSchema;
    };
}>;
