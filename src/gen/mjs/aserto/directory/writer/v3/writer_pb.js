// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/writer/v3/writer.proto (package aserto.directory.writer.v3, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";

/**
 * Describes the file aserto/directory/writer/v3/writer.proto.
 */
export const file_aserto_directory_writer_v3_writer = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3dyaXRlci92My93cml0ZXIucHJvdG8SGmFzZXJ0by5kaXJlY3Rvcnkud3JpdGVyLnYzIksKEFNldE9iamVjdFJlcXVlc3QSNwoGb2JqZWN0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0QgPgQQIiRwoRU2V0T2JqZWN0UmVzcG9uc2USMgoGcmVzdWx0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0ImQKE0RlbGV0ZU9iamVjdFJlcXVlc3QSGAoLb2JqZWN0X3R5cGUYASABKAlCA+BBAhIWCglvYmplY3RfaWQYAiABKAlCA+BBAhIbCg53aXRoX3JlbGF0aW9ucxgDIAEoCEID4EEBIj4KFERlbGV0ZU9iamVjdFJlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJRChJTZXRSZWxhdGlvblJlcXVlc3QSOwoIcmVsYXRpb24YASABKAsyJC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5SZWxhdGlvbkID4EECIksKE1NldFJlbGF0aW9uUmVzcG9uc2USNAoGcmVzdWx0GAEgASgLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUmVsYXRpb24iswEKFURlbGV0ZVJlbGF0aW9uUmVxdWVzdBIYCgtvYmplY3RfdHlwZRgBIAEoCUID4EECEhYKCW9iamVjdF9pZBgCIAEoCUID4EECEhUKCHJlbGF0aW9uGAMgASgJQgPgQQISGQoMc3ViamVjdF90eXBlGAQgASgJQgPgQQISFwoKc3ViamVjdF9pZBgFIAEoCUID4EECEh0KEHN1YmplY3RfcmVsYXRpb24YBiABKAlCA+BBASJAChZEZWxldGVSZWxhdGlvblJlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eTLQCAoGV3JpdGVyEvoBCglTZXRPYmplY3QSLC5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5TZXRPYmplY3RSZXF1ZXN0Gi0uYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuU2V0T2JqZWN0UmVzcG9uc2UijwGSQWkKCWRpcmVjdG9yeRIKU2V0IG9iamVjdBoLU2V0IG9iamVjdC4qHmRpcmVjdG9yeS53cml0ZXIudjMub2JqZWN0LnNldGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh06ASoiGC9hcGkvdjMvZGlyZWN0b3J5L29iamVjdBKjAgoMRGVsZXRlT2JqZWN0Ei8uYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuRGVsZXRlT2JqZWN0UmVxdWVzdBowLmFzZXJ0by5kaXJlY3Rvcnkud3JpdGVyLnYzLkRlbGV0ZU9iamVjdFJlc3BvbnNlIq8BkkFyCglkaXJlY3RvcnkSDURlbGV0ZSBvYmplY3QaDkRlbGV0ZSBvYmplY3QuKiFkaXJlY3Rvcnkud3JpdGVyLnYzLm9iamVjdC5kZWxldGViIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwI0KjIvYXBpL3YzL2RpcmVjdG9yeS9vYmplY3Qve29iamVjdF90eXBlfS97b2JqZWN0X2lkfRKIAgoLU2V0UmVsYXRpb24SLi5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5TZXRSZWxhdGlvblJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5TZXRSZWxhdGlvblJlc3BvbnNlIpcBkkFvCglkaXJlY3RvcnkSDFNldCByZWxhdGlvbhoNU2V0IHJlbGF0aW9uLiogZGlyZWN0b3J5LndyaXRlci52My5yZWxhdGlvbi5zZXRiIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIfOgEqIhovYXBpL3YzL2RpcmVjdG9yeS9yZWxhdGlvbhKXAgoORGVsZXRlUmVsYXRpb24SMS5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5EZWxldGVSZWxhdGlvblJlcXVlc3QaMi5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5EZWxldGVSZWxhdGlvblJlc3BvbnNlIp0BkkF4CglkaXJlY3RvcnkSD0RlbGV0ZSByZWxhdGlvbhoQRGVsZXRlIHJlbGF0aW9uLiojZGlyZWN0b3J5LndyaXRlci52My5yZWxhdGlvbi5kZWxldGViIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIcKhovYXBpL3YzL2RpcmVjdG9yeS9yZWxhdGlvbkJGWkRnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3Rvcnkvd3JpdGVyL3YzO3dyaXRlcmIGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_google_protobuf_empty, file_google_api_annotations, file_google_api_field_behavior, file_aserto_directory_common_v3_common]);

/**
 * Describes the message aserto.directory.writer.v3.SetObjectRequest.
 * Use `create(SetObjectRequestSchema)` to create a new message.
 */
export const SetObjectRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 0);

/**
 * Describes the message aserto.directory.writer.v3.SetObjectResponse.
 * Use `create(SetObjectResponseSchema)` to create a new message.
 */
export const SetObjectResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 1);

/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectRequest.
 * Use `create(DeleteObjectRequestSchema)` to create a new message.
 */
export const DeleteObjectRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 2);

/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectResponse.
 * Use `create(DeleteObjectResponseSchema)` to create a new message.
 */
export const DeleteObjectResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 3);

/**
 * Describes the message aserto.directory.writer.v3.SetRelationRequest.
 * Use `create(SetRelationRequestSchema)` to create a new message.
 */
export const SetRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 4);

/**
 * Describes the message aserto.directory.writer.v3.SetRelationResponse.
 * Use `create(SetRelationResponseSchema)` to create a new message.
 */
export const SetRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 5);

/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationRequest.
 * Use `create(DeleteRelationRequestSchema)` to create a new message.
 */
export const DeleteRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 6);

/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationResponse.
 * Use `create(DeleteRelationResponseSchema)` to create a new message.
 */
export const DeleteRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_writer_v3_writer, 7);

/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
export const Writer = /*@__PURE__*/
  serviceDesc(file_aserto_directory_writer_v3_writer, 0);

