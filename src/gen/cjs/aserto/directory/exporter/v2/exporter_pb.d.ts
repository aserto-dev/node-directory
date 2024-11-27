import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/exporter/v2/exporter.proto.
 */
export declare const file_aserto_directory_exporter_v2_exporter: GenFile;
/**
 * @generated from message aserto.directory.exporter.v2.ExportRequest
 * @deprecated
 */
export type ExportRequest = Message<"aserto.directory.exporter.v2.ExportRequest"> & {
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
 * Describes the message aserto.directory.exporter.v2.ExportRequest.
 * Use `create(ExportRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const ExportRequestSchema: GenMessage<ExportRequest>;
/**
 * @generated from message aserto.directory.exporter.v2.ExportResponse
 * @deprecated
 */
export type ExportResponse = Message<"aserto.directory.exporter.v2.ExportResponse"> & {
    /**
     * @generated from oneof aserto.directory.exporter.v2.ExportResponse.msg
     * @deprecated
     */
    msg: {
        /**
         * object instance (data)
         *
         * @generated from field: aserto.directory.common.v2.Object object = 2;
         */
        value: Object$;
        case: "object";
    } | {
        /**
         * object type instance (metadata)
         *
         * @generated from field: aserto.directory.common.v2.ObjectType object_type = 3;
         */
        value: ObjectType;
        case: "objectType";
    } | {
        /**
         * relation instance (data)
         *
         * @generated from field: aserto.directory.common.v2.Relation relation = 4;
         */
        value: Relation;
        case: "relation";
    } | {
        /**
         * relation type instance (metadata)
         *
         * @generated from field: aserto.directory.common.v2.RelationType relation_type = 5;
         */
        value: RelationType;
        case: "relationType";
    } | {
        /**
         * permission instance (metadata)
         *
         * @generated from field: aserto.directory.common.v2.Permission permission = 6;
         */
        value: Permission;
        case: "permission";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message aserto.directory.exporter.v2.ExportResponse.
 * Use `create(ExportResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const ExportResponseSchema: GenMessage<ExportResponse>;
/**
 * @generated from enum aserto.directory.exporter.v2.Option
 * @deprecated
 */
export declare enum Option {
    /**
     * nothing selected (default initialization value)
     *
     * @generated from enum value: OPTION_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * object type metadata
     *
     * @generated from enum value: OPTION_METADATA_OBJECT_TYPES = 1;
     */
    METADATA_OBJECT_TYPES = 1,
    /**
     * relation type metadata
     *
     * @generated from enum value: OPTION_METADATA_RELATION_TYPES = 2;
     */
    METADATA_RELATION_TYPES = 2,
    /**
     * permission metadata
     *
     * @generated from enum value: OPTION_METADATA_PERMISSIONS = 4;
     */
    METADATA_PERMISSIONS = 4,
    /**
     * all metadata = OPTION_METADATA_OBJECT_TYPES | OPTION_METADATA_RELATION_TYPES | OPTION_METADATA_PERMISSIONS
     *
     * @generated from enum value: OPTION_METADATA = 7;
     */
    METADATA = 7,
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
     * relation instances with key values
     *
     * @generated from enum value: OPTION_DATA_RELATIONS_WITH_KEYS = 32;
     */
    DATA_RELATIONS_WITH_KEYS = 32,
    /**
     * all data = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS
     *
     * @generated from enum value: OPTION_DATA = 24;
     */
    DATA = 24,
    /**
     * all data with keys = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS_WITH_KEYS
     *
     * @generated from enum value: OPTION_DATA_WITH_KEYS = 40;
     */
    DATA_WITH_KEYS = 40,
    /**
     * all metadata and data = OPTION_METADATA | OPTION_DATA
     *
     * @generated from enum value: OPTION_ALL = 31;
     */
    ALL = 31,
    /**
     * all metadata and data with keys = OPTION_METADATA | OPTION_DATA_WITH_KEYS
     *
     * @generated from enum value: OPTION_ALL_WITH_KEYS = 47;
     */
    ALL_WITH_KEYS = 47
}
/**
 * Describes the enum aserto.directory.exporter.v2.Option.
 * @deprecated
 */
export declare const OptionSchema: GenEnum<Option>;
/**
 * @generated from service aserto.directory.exporter.v2.Exporter
 */
export declare const Exporter: GenService<{
    /**
     * @generated from rpc aserto.directory.exporter.v2.Exporter.Export
     * @deprecated
     */
    export: {
        methodKind: "server_streaming";
        input: typeof ExportRequestSchema;
        output: typeof ExportResponseSchema;
    };
}>;
