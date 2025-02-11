"use strict";
// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/writer/v3/writer.proto (package aserto.directory.writer.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = exports.DeleteRelationResponseSchema = exports.DeleteRelationRequestSchema = exports.SetRelationResponseSchema = exports.SetRelationRequestSchema = exports.DeleteObjectResponseSchema = exports.DeleteObjectRequestSchema = exports.SetObjectResponseSchema = exports.SetObjectRequestSchema = exports.file_aserto_directory_writer_v3_writer = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const annotations_pb_1 = require("../../../../protoc-gen-openapiv2/options/annotations_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const annotations_pb_2 = require("../../../../google/api/annotations_pb");
const field_behavior_pb_1 = require("../../../../google/api/field_behavior_pb");
const validate_pb_1 = require("../../../../buf/validate/validate_pb");
const common_pb_1 = require("../../common/v3/common_pb");
/**
 * Describes the file aserto/directory/writer/v3/writer.proto.
 */
exports.file_aserto_directory_writer_v3_writer = (0, codegenv1_1.fileDesc)("Cidhc2VydG8vZGlyZWN0b3J5L3dyaXRlci92My93cml0ZXIucHJvdG8SGmFzZXJ0by5kaXJlY3Rvcnkud3JpdGVyLnYzIlEKEFNldE9iamVjdFJlcXVlc3QSPQoGb2JqZWN0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0QgngQQK6SAPIAQEiRwoRU2V0T2JqZWN0UmVzcG9uc2USMgoGcmVzdWx0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0Is4DChNEZWxldGVPYmplY3RSZXF1ZXN0EoUCCgtvYmplY3RfdHlwZRgBIAEoCULvAeBBArpI6AG6Ad0BChlkZWxldGVfb2JqZWN0Lm9iamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynIAQFyAhhAEpEBCglvYmplY3RfaWQYAiABKAlCfuBBArpIeLoBbQoXZGVsZXRlX29iamVjdC5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhIbCg53aXRoX3JlbGF0aW9ucxgDIAEoCEID4EEBIj4KFERlbGV0ZU9iamVjdFJlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJXChJTZXRSZWxhdGlvblJlcXVlc3QSQQoIcmVsYXRpb24YASABKAsyJC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5SZWxhdGlvbkIJ4EECukgDyAEBIksKE1NldFJlbGF0aW9uUmVzcG9uc2USNAoGcmVzdWx0GAEgASgLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUmVsYXRpb24i8goKFURlbGV0ZVJlbGF0aW9uUmVxdWVzdBKEAgoLb2JqZWN0X3R5cGUYASABKAlC7gHgQQK6SOcBugHfAQobZGVsZXRlX3JlbGF0aW9uLm9iamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJylyAhhAEpQBCglvYmplY3RfaWQYAiABKAlCgAHgQQK6SHq6AW8KGWRlbGV0ZV9yZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKBAgoIcmVsYXRpb24YAyABKAlC7gHgQQK6SOcBugHcAQoYZGVsZXRlX3JlbGF0aW9uLnJlbGF0aW9uEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynIAQFyAhhAEokCCgxzdWJqZWN0X3R5cGUYBCABKAlC8gHgQQK6SOsBugHgAQocZGVsZXRlX3JlbGF0aW9uLnN1YmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcpyAEBcgIYQBKWAQoKc3ViamVjdF9pZBgFIAEoCUKBAeBBArpIe7oBcAoaZGVsZXRlX3JlbGF0aW9uLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKRAgoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUL2AeBBAbpI7wG6AeQBCiBkZWxldGVfcmVsYXRpb24uc3ViamVjdF9yZWxhdGlvbhKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQCJAChZEZWxldGVSZWxhdGlvblJlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eTK0CAoGV3JpdGVyEvMBCglTZXRPYmplY3QSLC5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5TZXRPYmplY3RSZXF1ZXN0Gi0uYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuU2V0T2JqZWN0UmVzcG9uc2UiiAGSQWIKCWRpcmVjdG9yeRIKU2V0IG9iamVjdBoLU2V0IG9iamVjdC4qF2RpcmVjdG9yeS52My5vYmplY3Quc2V0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHToBKiIYL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0EpwCCgxEZWxldGVPYmplY3QSLy5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5EZWxldGVPYmplY3RSZXF1ZXN0GjAuYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuRGVsZXRlT2JqZWN0UmVzcG9uc2UiqAGSQWsKCWRpcmVjdG9yeRINRGVsZXRlIG9iamVjdBoORGVsZXRlIG9iamVjdC4qGmRpcmVjdG9yeS52My5vYmplY3QuZGVsZXRlYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCNCoyL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0L3tvYmplY3RfdHlwZX0ve29iamVjdF9pZH0SgQIKC1NldFJlbGF0aW9uEi4uYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuU2V0UmVsYXRpb25SZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS53cml0ZXIudjMuU2V0UmVsYXRpb25SZXNwb25zZSKQAZJBaAoJZGlyZWN0b3J5EgxTZXQgcmVsYXRpb24aDVNldCByZWxhdGlvbi4qGWRpcmVjdG9yeS52My5yZWxhdGlvbi5zZXRiIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIfOgEqIhovYXBpL3YzL2RpcmVjdG9yeS9yZWxhdGlvbhKQAgoORGVsZXRlUmVsYXRpb24SMS5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5EZWxldGVSZWxhdGlvblJlcXVlc3QaMi5hc2VydG8uZGlyZWN0b3J5LndyaXRlci52My5EZWxldGVSZWxhdGlvblJlc3BvbnNlIpYBkkFxCglkaXJlY3RvcnkSD0RlbGV0ZSByZWxhdGlvbhoQRGVsZXRlIHJlbGF0aW9uLiocZGlyZWN0b3J5LnYzLnJlbGF0aW9uLmRlbGV0ZWIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAhwqGi9hcGkvdjMvZGlyZWN0b3J5L3JlbGF0aW9uQkZaRGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3RvcnkvYXNlcnRvL2RpcmVjdG9yeS93cml0ZXIvdjM7d3JpdGVyYgZwcm90bzM", [annotations_pb_1.file_protoc_gen_openapiv2_options_annotations, wkt_1.file_google_protobuf_empty, annotations_pb_2.file_google_api_annotations, field_behavior_pb_1.file_google_api_field_behavior, validate_pb_1.file_buf_validate_validate, common_pb_1.file_aserto_directory_common_v3_common]);
/**
 * Describes the message aserto.directory.writer.v3.SetObjectRequest.
 * Use `create(SetObjectRequestSchema)` to create a new message.
 */
exports.SetObjectRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 0);
/**
 * Describes the message aserto.directory.writer.v3.SetObjectResponse.
 * Use `create(SetObjectResponseSchema)` to create a new message.
 */
exports.SetObjectResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 1);
/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectRequest.
 * Use `create(DeleteObjectRequestSchema)` to create a new message.
 */
exports.DeleteObjectRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 2);
/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectResponse.
 * Use `create(DeleteObjectResponseSchema)` to create a new message.
 */
exports.DeleteObjectResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 3);
/**
 * Describes the message aserto.directory.writer.v3.SetRelationRequest.
 * Use `create(SetRelationRequestSchema)` to create a new message.
 */
exports.SetRelationRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 4);
/**
 * Describes the message aserto.directory.writer.v3.SetRelationResponse.
 * Use `create(SetRelationResponseSchema)` to create a new message.
 */
exports.SetRelationResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 5);
/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationRequest.
 * Use `create(DeleteRelationRequestSchema)` to create a new message.
 */
exports.DeleteRelationRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 6);
/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationResponse.
 * Use `create(DeleteRelationResponseSchema)` to create a new message.
 */
exports.DeleteRelationResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_writer_v3_writer, 7);
/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
exports.Writer = (0, codegenv1_1.serviceDesc)(exports.file_aserto_directory_writer_v3_writer, 0);
