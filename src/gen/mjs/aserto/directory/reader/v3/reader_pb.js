// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/reader/v3/reader.proto (package aserto.directory.reader.v3, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";

/**
 * Describes the file aserto/directory/reader/v3/reader.proto.
 */
export const file_aserto_directory_reader_v3_reader = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3JlYWRlci92My9yZWFkZXIucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzIqMBChBHZXRPYmplY3RSZXF1ZXN0EhgKC29iamVjdF90eXBlGAEgASgJQgPgQQISFgoJb2JqZWN0X2lkGAIgASgJQgPgQQISGwoOd2l0aF9yZWxhdGlvbnMYAyABKAhCA+BBARJACgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3RCA+BBASK+AQoRR2V0T2JqZWN0UmVzcG9uc2USMgoGcmVzdWx0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0EjcKCXJlbGF0aW9ucxgEIAMoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEjwKBHBhZ2UYCSABKAsyLi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVzcG9uc2UiWAoUR2V0T2JqZWN0TWFueVJlcXVlc3QSQAoFcGFyYW0YASADKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3RJZGVudGlmaWVyQgPgQQIiTAoVR2V0T2JqZWN0TWFueVJlc3BvbnNlEjMKB3Jlc3VsdHMYASADKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3QibwoRR2V0T2JqZWN0c1JlcXVlc3QSGAoLb2JqZWN0X3R5cGUYASABKAlCA+BBARJACgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3RCA+BBASKHAQoSR2V0T2JqZWN0c1Jlc3BvbnNlEjMKB3Jlc3VsdHMYASADKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3QSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSLLAQoSR2V0UmVsYXRpb25SZXF1ZXN0EhgKC29iamVjdF90eXBlGAEgASgJQgPgQQISFgoJb2JqZWN0X2lkGAIgASgJQgPgQQISFQoIcmVsYXRpb24YAyABKAlCA+BBAhIZCgxzdWJqZWN0X3R5cGUYBCABKAlCA+BBAhIXCgpzdWJqZWN0X2lkGAUgASgJQgPgQQISHQoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUID4EEBEhkKDHdpdGhfb2JqZWN0cxgHIAEoCEID4EEBIu4BChNHZXRSZWxhdGlvblJlc3BvbnNlEjQKBnJlc3VsdBgBIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEk0KB29iamVjdHMYAiADKAsyPC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlc3BvbnNlLk9iamVjdHNFbnRyeRpSCgxPYmplY3RzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0OgI4ASK4AgoTR2V0UmVsYXRpb25zUmVxdWVzdBIYCgtvYmplY3RfdHlwZRgBIAEoCUID4EEBEhYKCW9iamVjdF9pZBgCIAEoCUID4EEBEhUKCHJlbGF0aW9uGAMgASgJQgPgQQESGQoMc3ViamVjdF90eXBlGAQgASgJQgPgQQESFwoKc3ViamVjdF9pZBgFIAEoCUID4EEBEh0KEHN1YmplY3RfcmVsYXRpb24YBiABKAlCA+BBARIZCgx3aXRoX29iamVjdHMYByABKAhCA+BBARIoCht3aXRoX2VtcHR5X3N1YmplY3RfcmVsYXRpb24YCCABKAhCA+BBARJACgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3RCA+BBASKvAgoUR2V0UmVsYXRpb25zUmVzcG9uc2USNQoHcmVzdWx0cxgBIAMoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEk4KB29iamVjdHMYAiADKAsyPS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvbnNSZXNwb25zZS5PYmplY3RzRW50cnkSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZRpSCgxPYmplY3RzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0OgI4ASKfAQoMQ2hlY2tSZXF1ZXN0EhgKC29iamVjdF90eXBlGAEgASgJQgPgQQISFgoJb2JqZWN0X2lkGAIgASgJQgPgQQISFQoIcmVsYXRpb24YAyABKAlCA+BBAhIZCgxzdWJqZWN0X3R5cGUYBCABKAlCA+BBAhIXCgpzdWJqZWN0X2lkGAUgASgJQgPgQQISEgoFdHJhY2UYByABKAhCA+BBASJXCg1DaGVja1Jlc3BvbnNlEg0KBWNoZWNrGAEgASgIEg0KBXRyYWNlGAIgAygJEigKB2NvbnRleHQYAyABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0IoQBCg1DaGVja3NSZXF1ZXN0EjkKB2RlZmF1bHQYASABKAsyKC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlcXVlc3QSOAoGY2hlY2tzGAIgAygLMiguYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tSZXF1ZXN0IksKDkNoZWNrc1Jlc3BvbnNlEjkKBmNoZWNrcxgBIAMoCzIpLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVzcG9uc2UiqwEKFkNoZWNrUGVybWlzc2lvblJlcXVlc3QSGAoLb2JqZWN0X3R5cGUYASABKAlCA+BBAhIWCglvYmplY3RfaWQYAiABKAlCA+BBAhIXCgpwZXJtaXNzaW9uGAMgASgJQgPgQQISGQoMc3ViamVjdF90eXBlGAQgASgJQgPgQQISFwoKc3ViamVjdF9pZBgFIAEoCUID4EECEhIKBXRyYWNlGAcgASgIQgPgQQEiNwoXQ2hlY2tQZXJtaXNzaW9uUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAkipwEKFENoZWNrUmVsYXRpb25SZXF1ZXN0EhgKC29iamVjdF90eXBlGAEgASgJQgPgQQISFgoJb2JqZWN0X2lkGAIgASgJQgPgQQISFQoIcmVsYXRpb24YAyABKAlCA+BBAhIZCgxzdWJqZWN0X3R5cGUYBCABKAlCA+BBAhIXCgpzdWJqZWN0X2lkGAUgASgJQgPgQQISEgoFdHJhY2UYByABKAhCA+BBASI1ChVDaGVja1JlbGF0aW9uUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAki+wEKD0dldEdyYXBoUmVxdWVzdBIYCgtvYmplY3RfdHlwZRgDIAEoCUID4EECEhYKCW9iamVjdF9pZBgEIAEoCUID4EEBEhUKCHJlbGF0aW9uGAUgASgJQgPgQQISGQoMc3ViamVjdF90eXBlGAYgASgJQgPgQQISFwoKc3ViamVjdF9pZBgHIAEoCUID4EEBEh0KEHN1YmplY3RfcmVsYXRpb24YCCABKAlCA+BBARIUCgdleHBsYWluGAkgASgIQgPgQQESEgoFdHJhY2UYCiABKAhCA+BBAUoECAEQAkoECAIQA1ILYW5jaG9yX3R5cGVSCWFuY2hvcl9pZCKUAQoQR2V0R3JhcGhSZXNwb25zZRI9CgdyZXN1bHRzGAIgAygLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0SWRlbnRpZmllchIsCgtleHBsYW5hdGlvbhgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSDQoFdHJhY2UYBCADKAlKBAgBEAIyxRYKBlJlYWRlchLpAgoJR2V0T2JqZWN0EiwuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0UmVxdWVzdBotLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdFJlc3BvbnNlIv4BkkHAAQoJZGlyZWN0b3J5EhNHZXQgb2JqZWN0IGluc3RhbmNlGjpSZXR1cm5zIHNpbmdsZSBvYmplY3QgaW5zdGFuY2UsIG9wdGlvbmFsbHkgd2l0aCByZWxhdGlvbnMuKh5kaXJlY3RvcnkucmVhZGVyLnYzLm9iamVjdC5nZXRKHQoDMzA0EhYKFE9iamVjdCBub3QgbW9kaWZpZWQuYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCNBIyL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0L3tvYmplY3RfdHlwZX0ve29iamVjdF9pZH0SdgoNR2V0T2JqZWN0TWFueRIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdE1hbnlSZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0TWFueVJlc3BvbnNlIgASnwIKCkdldE9iamVjdHMSLS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRPYmplY3RzUmVxdWVzdBouLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdHNSZXNwb25zZSKxAZJBjAEKCWRpcmVjdG9yeRIVTGlzdCBvYmplY3QgaW5zdGFuY2VzGiFSZXR1cm5zIGxpc3Qgb2Ygb2JqZWN0IGluc3RhbmNlcy4qIGRpcmVjdG9yeS5yZWFkZXIudjMub2JqZWN0cy5saXN0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCGxIZL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0cxLdAgoLR2V0UmVsYXRpb24SLi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlc3BvbnNlIuwBkkHGAQoJZGlyZWN0b3J5EhVHZXQgcmVsYXRpb24gaW5zdGFuY2UaOlJldHVybnMgc2luZ2xlIHJlbGF0aW9uIGluc3RhbmNlLCBvcHRpb25hbGx5IHdpdGggb2JqZWN0cy4qIGRpcmVjdG9yeS5yZWFkZXIudjMucmVsYXRpb24uZ2V0Sh8KAzMwNBIYChZSZWxhdGlvbiBub3QgbW9kaWZpZWQuYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHBIaL2FwaS92My9kaXJlY3RvcnkvcmVsYXRpb24SrgIKDEdldFJlbGF0aW9ucxIvLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldFJlbGF0aW9uc1JlcXVlc3QaMC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvbnNSZXNwb25zZSK6AZJBkwEKCWRpcmVjdG9yeRIYTGlzdCByZWxhdGlvbnMgaW5zdGFuY2VzGiNSZXR1cm5zIGxpc3Qgb2YgcmVsYXRpb24gaW5zdGFuY2VzLioiZGlyZWN0b3J5LnJlYWRlci52My5yZWxhdGlvbnMubGlzdGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh0SGy9hcGkvdjMvZGlyZWN0b3J5L3JlbGF0aW9ucxLuAQoFQ2hlY2sSKC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlcXVlc3QaKS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1Jlc3BvbnNlIo8BkkFqCglkaXJlY3RvcnkSBUNoZWNrGhZSZXR1cm5zIGNoZWNrIG91dGNvbWUuKhlkaXJlY3RvcnkucmVhZGVyLnYzLmNoZWNrYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHDoBKiIXL2FwaS92My9kaXJlY3RvcnkvY2hlY2sS/gEKBkNoZWNrcxIpLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrc1JlcXVlc3QaKi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja3NSZXNwb25zZSKcAZJBdgoJZGlyZWN0b3J5EgZDaGVja3MaIFJldHVybnMgbXVsdGlwbGUgY2hlY2sgb3V0Y29tZXMuKhpkaXJlY3RvcnkucmVhZGVyLnYzLmNoZWNrc2IjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh06ASoiGC9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrcxK8AgoPQ2hlY2tQZXJtaXNzaW9uEjIuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBozLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUGVybWlzc2lvblJlc3BvbnNlIr8BiAIBkkGLAQoJZGlyZWN0b3J5EhBDaGVjayBwZXJtaXNzaW9uGiFSZXR1cm5zIGNoZWNrIHBlcm1pc3Npb24gb3V0Y29tZS4qJGRpcmVjdG9yeS5yZWFkZXIudjMuY2hlY2sucGVybWlzc2lvbmIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAic6ASoiIi9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrL3Blcm1pc3Npb24SrgIKDUNoZWNrUmVsYXRpb24SMC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlbGF0aW9uUmVxdWVzdBoxLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVsYXRpb25SZXNwb25zZSK3AYgCAZJBhQEKCWRpcmVjdG9yeRIOQ2hlY2sgcmVsYXRpb24aH1JldHVybnMgY2hlY2sgcmVsYXRpb24gb3V0Y29tZS4qImRpcmVjdG9yeS5yZWFkZXIudjMuY2hlY2sucmVsYXRpb25iIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIlOgEqIiAvYXBpL3YzL2RpcmVjdG9yeS9jaGVjay9yZWxhdGlvbhLBAgoIR2V0R3JhcGgSKy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlc3BvbnNlItkBkkGOAQoJZGlyZWN0b3J5EglHZXQgZ3JhcGgaNlJldHVybnMgb2JqZWN0IGdyYXBoIGZyb20gYW5jaG9yIHRvIHN1YmplY3Qgb3Igb2JqZWN0LioZZGlyZWN0b3J5LnJlYWRlci52My5ncmFwaGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAkESPy9hcGkvdjMvZGlyZWN0b3J5L2dyYXBoL3tvYmplY3RfdHlwZX0ve3JlbGF0aW9ufS97c3ViamVjdF90eXBlfUJGWkRnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvcmVhZGVyL3YzO3JlYWRlcmIGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_google_api_annotations, file_google_api_field_behavior, file_google_protobuf_struct, file_aserto_directory_common_v3_common]);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectRequest.
 * Use `create(GetObjectRequestSchema)` to create a new message.
 */
export const GetObjectRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 0);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectResponse.
 * Use `create(GetObjectResponseSchema)` to create a new message.
 */
export const GetObjectResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 1);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyRequest.
 * Use `create(GetObjectManyRequestSchema)` to create a new message.
 */
export const GetObjectManyRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 2);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyResponse.
 * Use `create(GetObjectManyResponseSchema)` to create a new message.
 */
export const GetObjectManyResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 3);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectsRequest.
 * Use `create(GetObjectsRequestSchema)` to create a new message.
 */
export const GetObjectsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 4);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectsResponse.
 * Use `create(GetObjectsResponseSchema)` to create a new message.
 */
export const GetObjectsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 5);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationRequest.
 * Use `create(GetRelationRequestSchema)` to create a new message.
 */
export const GetRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 6);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationResponse.
 * Use `create(GetRelationResponseSchema)` to create a new message.
 */
export const GetRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 7);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationsRequest.
 * Use `create(GetRelationsRequestSchema)` to create a new message.
 */
export const GetRelationsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 8);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationsResponse.
 * Use `create(GetRelationsResponseSchema)` to create a new message.
 */
export const GetRelationsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 9);

/**
 * Describes the message aserto.directory.reader.v3.CheckRequest.
 * Use `create(CheckRequestSchema)` to create a new message.
 */
export const CheckRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 10);

/**
 * Describes the message aserto.directory.reader.v3.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 */
export const CheckResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 11);

/**
 * Describes the message aserto.directory.reader.v3.ChecksRequest.
 * Use `create(ChecksRequestSchema)` to create a new message.
 */
export const ChecksRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 12);

/**
 * Describes the message aserto.directory.reader.v3.ChecksResponse.
 * Use `create(ChecksResponseSchema)` to create a new message.
 */
export const ChecksResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 13);

/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionRequest.
 * Use `create(CheckPermissionRequestSchema)` to create a new message.
 */
export const CheckPermissionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 14);

/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionResponse.
 * Use `create(CheckPermissionResponseSchema)` to create a new message.
 */
export const CheckPermissionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 15);

/**
 * Describes the message aserto.directory.reader.v3.CheckRelationRequest.
 * Use `create(CheckRelationRequestSchema)` to create a new message.
 */
export const CheckRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 16);

/**
 * Describes the message aserto.directory.reader.v3.CheckRelationResponse.
 * Use `create(CheckRelationResponseSchema)` to create a new message.
 */
export const CheckRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 17);

/**
 * Describes the message aserto.directory.reader.v3.GetGraphRequest.
 * Use `create(GetGraphRequestSchema)` to create a new message.
 */
export const GetGraphRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 18);

/**
 * Describes the message aserto.directory.reader.v3.GetGraphResponse.
 * Use `create(GetGraphResponseSchema)` to create a new message.
 */
export const GetGraphResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 19);

/**
 * @generated from service aserto.directory.reader.v3.Reader
 */
export const Reader = /*@__PURE__*/
  serviceDesc(file_aserto_directory_reader_v3_reader, 0);

