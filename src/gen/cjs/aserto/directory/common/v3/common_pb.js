"use strict";
// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/common/v3/common.proto (package aserto.directory.common.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponseSchema = exports.PaginationRequestSchema = exports.RelationIdentifierSchema = exports.ObjectIdentifierSchema = exports.RelationSchema = exports.ObjectSchema = exports.file_aserto_directory_common_v3_common = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const field_behavior_pb_1 = require("../../../../google/api/field_behavior_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file aserto/directory/common/v3/common.proto.
 */
exports.file_aserto_directory_common_v3_common = (0, codegenv1_1.fileDesc)("Cidhc2VydG8vZGlyZWN0b3J5L2NvbW1vbi92My9jb21tb24ucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzIvYBCgZPYmplY3QSEQoEdHlwZRgBIAEoCUID4EECEg8KAmlkGAIgASgJQgPgQQISGQoMZGlzcGxheV9uYW1lGAMgASgJQgPgQQESMAoKcHJvcGVydGllcxgEIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCA+BBARIzCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjMKCnVwZGF0ZWRfYXQYFSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEQoEZXRhZxgXIAEoCUID4EEBIqMCCghSZWxhdGlvbhIYCgtvYmplY3RfdHlwZRgBIAEoCUID4EECEhYKCW9iamVjdF9pZBgCIAEoCUID4EECEhUKCHJlbGF0aW9uGAMgASgJQgPgQQISGQoMc3ViamVjdF90eXBlGAQgASgJQgPgQQISFwoKc3ViamVjdF9pZBgFIAEoCUID4EECEh0KEHN1YmplY3RfcmVsYXRpb24YBiABKAlCA+BBARIzCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjMKCnVwZGF0ZWRfYXQYFSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEQoEZXRhZxgXIAEoCUID4EEBIkQKEE9iamVjdElkZW50aWZpZXISGAoLb2JqZWN0X3R5cGUYASABKAlCA+BBAhIWCglvYmplY3RfaWQYAiABKAlCA+BBAiKwAQoSUmVsYXRpb25JZGVudGlmaWVyEhgKC29iamVjdF90eXBlGAEgASgJQgPgQQISFgoJb2JqZWN0X2lkGAIgASgJQgPgQQISFQoIcmVsYXRpb24YAyABKAlCA+BBAhIZCgxzdWJqZWN0X3R5cGUYBCABKAlCA+BBAhIXCgpzdWJqZWN0X2lkGAUgASgJQgPgQQISHQoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUID4EEBIjoKEVBhZ2luYXRpb25SZXF1ZXN0EhEKBHNpemUYASABKAVCA+BBARISCgV0b2tlbhgCIAEoCUID4EEBIi0KElBhZ2luYXRpb25SZXNwb25zZRIXCgpuZXh0X3Rva2VuGAEgASgJQgPgQQNCRlpEZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L2NvbW1vbi92Mztjb21tb25iBnByb3RvMw", [field_behavior_pb_1.file_google_api_field_behavior, wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_timestamp]);
/**
 * Describes the message aserto.directory.common.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
exports.ObjectSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 0);
/**
 * Describes the message aserto.directory.common.v3.Relation.
 * Use `create(RelationSchema)` to create a new message.
 */
exports.RelationSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 1);
/**
 * Describes the message aserto.directory.common.v3.ObjectIdentifier.
 * Use `create(ObjectIdentifierSchema)` to create a new message.
 */
exports.ObjectIdentifierSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 2);
/**
 * Describes the message aserto.directory.common.v3.RelationIdentifier.
 * Use `create(RelationIdentifierSchema)` to create a new message.
 */
exports.RelationIdentifierSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 3);
/**
 * Describes the message aserto.directory.common.v3.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
exports.PaginationRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 4);
/**
 * Describes the message aserto.directory.common.v3.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
exports.PaginationResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 5);
