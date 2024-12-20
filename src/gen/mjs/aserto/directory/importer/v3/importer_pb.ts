// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Object$, Relation } from "../../common/v3/common_pb";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/importer/v3/importer.proto.
 */
export const file_aserto_directory_importer_v3_importer: GenFile = /*@__PURE__*/
  fileDesc("Cithc2VydG8vZGlyZWN0b3J5L2ltcG9ydGVyL3YzL2ltcG9ydGVyLnByb3RvEhxhc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzIr0BCg1JbXBvcnRSZXF1ZXN0EjUKB29wX2NvZGUYASABKA4yJC5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLk9wY29kZRI0CgZvYmplY3QYBSABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3RIABI4CghyZWxhdGlvbhgGIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uSABCBQoDbXNnIowBCg5JbXBvcnRSZXNwb25zZRI7CgZvYmplY3QYASABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXISPQoIcmVsYXRpb24YAiABKAsyKy5hc2VydG8uZGlyZWN0b3J5LmltcG9ydGVyLnYzLkltcG9ydENvdW50ZXIiSQoNSW1wb3J0Q291bnRlchIMCgRyZWN2GAEgASgEEgsKA3NldBgCIAEoBBIOCgZkZWxldGUYAyABKAQSDQoFZXJyb3IYBCABKAQqYQoGT3Bjb2RlEhIKDk9QQ09ERV9VTktOT1dOEAASDgoKT1BDT0RFX1NFVBABEhEKDU9QQ09ERV9ERUxFVEUQAhIgChxPUENPREVfREVMRVRFX1dJVEhfUkVMQVRJT05TEAMydQoISW1wb3J0ZXISaQoGSW1wb3J0EisuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXF1ZXN0GiwuYXNlcnRvLmRpcmVjdG9yeS5pbXBvcnRlci52My5JbXBvcnRSZXNwb25zZSIAKAEwAUJKWkhnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvaW1wb3J0ZXIvdjM7aW1wb3J0ZXJiBnByb3RvMw", [file_aserto_directory_common_v3_common]);

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
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message aserto.directory.importer.v3.ImportRequest.
 * Use `create(ImportRequestSchema)` to create a new message.
 */
export const ImportRequestSchema: GenMessage<ImportRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 0);

/**
 * @generated from message aserto.directory.importer.v3.ImportResponse
 */
export type ImportResponse = Message<"aserto.directory.importer.v3.ImportResponse"> & {
  /**
   * object import counter
   *
   * @generated from field: aserto.directory.importer.v3.ImportCounter object = 1;
   */
  object?: ImportCounter;

  /**
   * relation import counter
   *
   * @generated from field: aserto.directory.importer.v3.ImportCounter relation = 2;
   */
  relation?: ImportCounter;
};

/**
 * Describes the message aserto.directory.importer.v3.ImportResponse.
 * Use `create(ImportResponseSchema)` to create a new message.
 */
export const ImportResponseSchema: GenMessage<ImportResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 1);

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
};

/**
 * Describes the message aserto.directory.importer.v3.ImportCounter.
 * Use `create(ImportCounterSchema)` to create a new message.
 */
export const ImportCounterSchema: GenMessage<ImportCounter> = /*@__PURE__*/
  messageDesc(file_aserto_directory_importer_v3_importer, 2);

/**
 * @generated from enum aserto.directory.importer.v3.Opcode
 */
export enum Opcode {
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
  DELETE_WITH_RELATIONS = 3,
}

/**
 * Describes the enum aserto.directory.importer.v3.Opcode.
 */
export const OpcodeSchema: GenEnum<Opcode> = /*@__PURE__*/
  enumDesc(file_aserto_directory_importer_v3_importer, 0);

/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
export const Importer: GenService<{
  /**
   * import stream of objects and relations
   *
   * @generated from rpc aserto.directory.importer.v3.Importer.Import
   */
  import: {
    methodKind: "bidi_streaming";
    input: typeof ImportRequestSchema;
    output: typeof ImportResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_aserto_directory_importer_v3_importer, 0);

