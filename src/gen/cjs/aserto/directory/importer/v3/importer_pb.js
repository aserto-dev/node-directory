"use strict";
// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Importer = exports.OpcodeSchema = exports.Opcode = exports.ImportCounterSchema = exports.ImportResponseSchema = exports.ImportRequestSchema = exports.file_aserto_directory_importer_v3_importer = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const common_pb_1 = require("../../common/v3/common_pb");
/**
 * Describes the file aserto/directory/importer/v3/importer.proto.
 */
exports.file_aserto_directory_importer_v3_importer = (0, codegenv1_1.fileDesc)("Cithc2VydG8vZGlyZWN0b3J5L2ltcG9ydGVyL3YzL2ltcG9ydGVyLnByb3RvEhxhc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzIr0BCg1JbXBvcnRSZXF1ZXN0EjUKB29wX2NvZGUYASABKA4yJC5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLk9wY29kZRI0CgZvYmplY3QYBSABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3RIABI4CghyZWxhdGlvbhgGIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uSABCBQoDbXNnIowBCg5JbXBvcnRSZXNwb25zZRI7CgZvYmplY3QYASABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXISPQoIcmVsYXRpb24YAiABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXIiSQoNSW1wb3J0Q291bnRlchIMCgRyZWN2GAEgASgEEgsKA3NldBgCIAEoBBIOCgZkZWxldGUYAyABKAQSDQoFZXJyb3IYBCABKAQqYQoGT3Bjb2RlEhIKDk9QQ09ERV9VTktOT1dOEAASDgoKT1BDT0RFX1NFVBABEhEKDU9QQ09ERV9ERUxFVEUQAhIgChxPUENPREVfREVMRVRFX1dJVEhfUkVMQVRJT05TEAMydQoISW1wb3J0ZXISaQoGSW1wb3J0EisuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXF1ZXN0GiwuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXNwb25zZSIAKAEwAUJKWkhnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvaW1wb3J0ZXIvdjM7aW1wb3J0ZXJiBnByb3RvMw", [common_pb_1.file_aserto_directory_common_v3_common]);
/**
 * Describes the message aserto.directory.importer.v3.ImportRequest.
 * Use `create(ImportRequestSchema)` to create a new message.
 */
exports.ImportRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_importer_v3_importer, 0);
/**
 * Describes the message aserto.directory.importer.v3.ImportResponse.
 * Use `create(ImportResponseSchema)` to create a new message.
 */
exports.ImportResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_importer_v3_importer, 1);
/**
 * Describes the message aserto.directory.importer.v3.ImportCounter.
 * Use `create(ImportCounterSchema)` to create a new message.
 */
exports.ImportCounterSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_importer_v3_importer, 2);
/**
 * @generated from enum aserto.directory.importer.v3.Opcode
 */
var Opcode;
(function (Opcode) {
    /**
     * @generated from enum value: OPCODE_UNKNOWN = 0;
     */
    Opcode[Opcode["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: OPCODE_SET = 1;
     */
    Opcode[Opcode["SET"] = 1] = "SET";
    /**
     * @generated from enum value: OPCODE_DELETE = 2;
     */
    Opcode[Opcode["DELETE"] = 2] = "DELETE";
    /**
     * @generated from enum value: OPCODE_DELETE_WITH_RELATIONS = 3;
     */
    Opcode[Opcode["DELETE_WITH_RELATIONS"] = 3] = "DELETE_WITH_RELATIONS";
})(Opcode || (exports.Opcode = Opcode = {}));
/**
 * Describes the enum aserto.directory.importer.v3.Opcode.
 */
exports.OpcodeSchema = (0, codegenv1_1.enumDesc)(exports.file_aserto_directory_importer_v3_importer, 0);
/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
exports.Importer = (0, codegenv1_1.serviceDesc)(exports.file_aserto_directory_importer_v3_importer, 0);
