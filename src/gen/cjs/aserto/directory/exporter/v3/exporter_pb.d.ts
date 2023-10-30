import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Object$, Relation } from "../../common/v3/common_pb.js";
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
    DATA = 24
}
/**
 * @generated from message aserto.directory.exporter.v3.ExportRequest
 */
export declare class ExportRequest extends Message<ExportRequest> {
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
    constructor(data?: PartialMessage<ExportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.exporter.v3.ExportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportRequest;
    static equals(a: ExportRequest | PlainMessage<ExportRequest> | undefined, b: ExportRequest | PlainMessage<ExportRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.exporter.v3.ExportResponse
 */
export declare class ExportResponse extends Message<ExportResponse> {
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
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ExportResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.exporter.v3.ExportResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportResponse;
    static equals(a: ExportResponse | PlainMessage<ExportResponse> | undefined, b: ExportResponse | PlainMessage<ExportResponse> | undefined): boolean;
}
