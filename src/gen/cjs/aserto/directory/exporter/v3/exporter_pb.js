"use strict";
// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exporter = exports.OptionSchema = exports.Option = exports.ExportResponseSchema = exports.ExportRequestSchema = exports.file_aserto_directory_exporter_v3_exporter = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const common_pb_1 = require("../../common/v3/common_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file aserto/directory/exporter/v3/exporter.proto.
 */
exports.file_aserto_directory_exporter_v3_exporter = (0, codegenv1_1.fileDesc)("Cithc2VydG8vZGlyZWN0b3J5L2V4cG9ydGVyL3YzL2V4cG9ydGVyLnByb3RvEhxhc2VydG8uZGlyZWN0b3J5LmV4cG9ydGVyLnYzIlAKDUV4cG9ydFJlcXVlc3QSDwoHb3B0aW9ucxgBIAEoDRIuCgpzdGFydF9mcm9tGBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKxAQoORXhwb3J0UmVzcG9uc2USNAoGb2JqZWN0GAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0SAASOAoIcmVsYXRpb24YBCABKAsyJC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5SZWxhdGlvbkgAEigKBXN0YXRzGAggASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdEgAQgUKA21zZypzCgZPcHRpb24SEgoOT1BUSU9OX1VOS05PV04QABIXChNPUFRJT05fREFUQV9PQkpFQ1RTEAgSGQoVT1BUSU9OX0RBVEFfUkVMQVRJT05TEBASDwoLT1BUSU9OX0RBVEEQGBIQCgxPUFRJT05fU1RBVFMQQDJzCghFeHBvcnRlchJnCgZFeHBvcnQSKy5hc2VydG8uZGlyZWN0b3J5LmV4cG9ydGVyLnYzLkV4cG9ydFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LmV4cG9ydGVyLnYzLkV4cG9ydFJlc3BvbnNlIgAwAUJKWkhnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvZXhwb3J0ZXIvdjM7ZXhwb3J0ZXJiBnByb3RvMw", [common_pb_1.file_aserto_directory_common_v3_common, wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_timestamp]);
/**
 * Describes the message aserto.directory.exporter.v3.ExportRequest.
 * Use `create(ExportRequestSchema)` to create a new message.
 */
exports.ExportRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_exporter_v3_exporter, 0);
/**
 * Describes the message aserto.directory.exporter.v3.ExportResponse.
 * Use `create(ExportResponseSchema)` to create a new message.
 */
exports.ExportResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_exporter_v3_exporter, 1);
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
})(Option || (exports.Option = Option = {}));
/**
 * Describes the enum aserto.directory.exporter.v3.Option.
 */
exports.OptionSchema = (0, codegenv1_1.enumDesc)(exports.file_aserto_directory_exporter_v3_exporter, 0);
/**
 * @generated from service aserto.directory.exporter.v3.Exporter
 */
exports.Exporter = (0, codegenv1_1.serviceDesc)(exports.file_aserto_directory_exporter_v3_exporter, 0);
