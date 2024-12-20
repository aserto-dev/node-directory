// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";

/**
 * Describes the file aserto/directory/importer/v3/importer.proto.
 */
export const file_aserto_directory_importer_v3_importer = /*@__PURE__*/
  fileDesc("Cithc2VydG8vZGlyZWN0b3J5L2ltcG9ydGVyL3YzL2ltcG9ydGVyLnByb3RvEhxhc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzIr0BCg1JbXBvcnRSZXF1ZXN0EjUKB29wX2NvZGUYASABKA4yJC5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLk9wY29kZRI0CgZvYmplY3QYBSABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3RIABI4CghyZWxhdGlvbhgGIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uSABCBQoDbXNnIowBCg5JbXBvcnRSZXNwb25zZRI7CgZvYmplY3QYASABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXISPQoIcmVsYXRpb24YAiABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXIiSQoNSW1wb3J0Q291bnRlchIMCgRyZWN2GAEgASgEEgsKA3NldBgCIAEoBBIOCgZkZWxldGUYAyABKAQSDQoFZXJyb3IYBCABKAQqYQoGT3Bjb2RlEhIKDk9QQ09ERV9VTktOT1dOEAASDgoKT1BDT0RFX1NFVBABEhEKDU9QQ09ERV9ERUxFVEUQAhIgChxPUENPREVfREVMRVRFX1dJVEhfUkVMQVRJT05TEAMydQoISW1wb3J0ZXISaQoGSW1wb3J0EisuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXF1ZXN0GiwuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXNwb25zZSIAKAEwAUJKWkhnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvaW1wb3J0ZXIvdjM7aW1wb3J0ZXJiBnByb3RvMw", [file_aserto_directory_common_v3_common]);

/**
 * Describes the message aserto.directory.importer.v3.ImportRequest.
 * Use `create(ImportRequestSchema)` to create a new message.
 */
export const ImportRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 0);

/**
 * Describes the message aserto.directory.importer.v3.ImportResponse.
 * Use `create(ImportResponseSchema)` to create a new message.
 */
export const ImportResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 1);

/**
 * Describes the message aserto.directory.importer.v3.ImportCounter.
 * Use `create(ImportCounterSchema)` to create a new message.
 */
export const ImportCounterSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 2);

/**
 * Describes the enum aserto.directory.importer.v3.Opcode.
 */
export const OpcodeSchema = /*@__PURE__*/
  enumDesc(file_aserto_directory_importer_v3_importer, 0);

/**
 * @generated from enum aserto.directory.importer.v3.Opcode
 */
export const Opcode = /*@__PURE__*/
  tsEnum(OpcodeSchema);

/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
export const Importer = /*@__PURE__*/
  serviceDesc(file_aserto_directory_importer_v3_importer, 0);

