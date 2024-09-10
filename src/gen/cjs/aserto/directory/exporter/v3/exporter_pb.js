"use strict";
// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportResponse = exports.ExportRequest = exports.Option = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v3/common_pb.js");
/**
 * @generated from enum aserto.directory.exporter.v3.Option
 */
var Option;
(function (Option) {
    /**
     * nothing selected (default initialization value)
     *
     * @generated from enum value: OPTION_UNKNOWN = 0;
     */
    Option[Option["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * object instances
     *
     * @generated from enum value: OPTION_DATA_OBJECTS = 8;
     */
    Option[Option["DATA_OBJECTS"] = 8] = "DATA_OBJECTS";
    /**
     * relation instances
     *
     * @generated from enum value: OPTION_DATA_RELATIONS = 16;
     */
    Option[Option["DATA_RELATIONS"] = 16] = "DATA_RELATIONS";
    /**
     * all data = OPTION_DATA_OBJECTS | OPTION_DATA_RELATIONS
     *
     * @generated from enum value: OPTION_DATA = 24;
     */
    Option[Option["DATA"] = 24] = "DATA";
    /**
     * stats
     *
     * @generated from enum value: OPTION_STATS = 64;
     */
    Option[Option["STATS"] = 64] = "STATS";
})(Option = exports.Option || (exports.Option = {}));
// Retrieve enum metadata with: proto3.getEnumType(Option)
protobuf_1.proto3.util.setEnumType(Option, "aserto.directory.exporter.v3.Option", [
    { no: 0, name: "OPTION_UNKNOWN" },
    { no: 8, name: "OPTION_DATA_OBJECTS" },
    { no: 16, name: "OPTION_DATA_RELATIONS" },
    { no: 24, name: "OPTION_DATA" },
    { no: 64, name: "OPTION_STATS" },
]);
/**
 * @generated from message aserto.directory.exporter.v3.ExportRequest
 */
class ExportRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * data export options mask
         *
         * @generated from field: uint32 options = 1;
         */
        this.options = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ExportRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ExportRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ExportRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ExportRequest, a, b);
    }
}
exports.ExportRequest = ExportRequest;
ExportRequest.runtime = protobuf_1.proto3;
ExportRequest.typeName = "aserto.directory.exporter.v3.ExportRequest";
ExportRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "options", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 20, name: "start_from", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message aserto.directory.exporter.v3.ExportResponse
 */
class ExportResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof aserto.directory.exporter.v3.ExportResponse.msg
         */
        this.msg = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ExportResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ExportResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ExportResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ExportResponse, a, b);
    }
}
exports.ExportResponse = ExportResponse;
ExportResponse.runtime = protobuf_1.proto3;
ExportResponse.typeName = "aserto.directory.exporter.v3.ExportResponse";
ExportResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "object", kind: "message", T: common_pb_js_1.Object$, oneof: "msg" },
    { no: 4, name: "relation", kind: "message", T: common_pb_js_1.Relation, oneof: "msg" },
    { no: 8, name: "stats", kind: "message", T: protobuf_1.Struct, oneof: "msg" },
]);
