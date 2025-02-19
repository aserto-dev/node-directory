"use strict";
// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/model/v3/model.proto (package aserto.directory.model.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.BodySchema = exports.MetadataSchema = exports.DeleteManifestResponseSchema = exports.DeleteManifestRequestSchema = exports.SetManifestResponseSchema = exports.SetManifestRequestSchema = exports.GetManifestResponseSchema = exports.GetManifestRequestSchema = exports.file_aserto_directory_model_v3_model = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const annotations_pb_1 = require("../../../../google/api/annotations_pb");
const field_behavior_pb_1 = require("../../../../google/api/field_behavior_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const annotations_pb_2 = require("../../../../protoc-gen-openapiv2/options/annotations_pb");
const validate_pb_1 = require("../../../../buf/validate/validate_pb");
/**
 * Describes the file aserto/directory/model/v3/model.proto.
 */
exports.file_aserto_directory_model_v3_model = (0, codegenv1_1.fileDesc)("CiVhc2VydG8vZGlyZWN0b3J5L21vZGVsL3YzL21vZGVsLnByb3RvEhlhc2VydG8uZGlyZWN0b3J5Lm1vZGVsLnYzIjsKEkdldE1hbmlmZXN0UmVxdWVzdBIlCgVlbXB0eRgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSKwAQoTR2V0TWFuaWZlc3RSZXNwb25zZRI3CghtZXRhZGF0YRgBIAEoCzIjLmFzZXJ0by5kaXJlY3RvcnkubW9kZWwudjMuTWV0YWRhdGFIABIvCgRib2R5GAIgASgLMh8uYXNlcnRvLmRpcmVjdG9yeS5tb2RlbC52My5Cb2R5SAASKAoFbW9kZWwYAyABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SABCBQoDbXNnIkwKElNldE1hbmlmZXN0UmVxdWVzdBIvCgRib2R5GAEgASgLMh8uYXNlcnRvLmRpcmVjdG9yeS5tb2RlbC52My5Cb2R5SABCBQoDbXNnIj0KE1NldE1hbmlmZXN0UmVzcG9uc2USJgoGcmVzdWx0GAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ij4KFURlbGV0ZU1hbmlmZXN0UmVxdWVzdBIlCgVlbXB0eRgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJAChZEZWxldGVNYW5pZmVzdFJlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJSCghNZXRhZGF0YRIzCgp1cGRhdGVkX2F0GBUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEhEKBGV0YWcYFyABKAlCA+BBASIfCgRCb2R5EhcKBGRhdGEYAiABKAxCCbpIBnoEGICABDKOBAoFTW9kZWwSdgoLR2V0TWFuaWZlc3QSLS5hc2VydG8uZGlyZWN0b3J5Lm1vZGVsLnYzLkdldE1hbmlmZXN0UmVxdWVzdBouLmFzZXJ0by5kaXJlY3RvcnkubW9kZWwudjMuR2V0TWFuaWZlc3RSZXNwb25zZSIGgtPkkwIAMAESdgoLU2V0TWFuaWZlc3QSLS5hc2VydG8uZGlyZWN0b3J5Lm1vZGVsLnYzLlNldE1hbmlmZXN0UmVxdWVzdBouLmFzZXJ0by5kaXJlY3RvcnkubW9kZWwudjMuU2V0TWFuaWZlc3RSZXNwb25zZSIGgtPkkwIAKAESlAIKDkRlbGV0ZU1hbmlmZXN0EjAuYXNlcnRvLmRpcmVjdG9yeS5tb2RlbC52My5EZWxldGVNYW5pZmVzdFJlcXVlc3QaMS5hc2VydG8uZGlyZWN0b3J5Lm1vZGVsLnYzLkRlbGV0ZU1hbmlmZXN0UmVzcG9uc2UinAGSQXcKCWRpcmVjdG9yeRIPRGVsZXRlIG1hbmlmZXN0GhBEZWxldGUgbWFuaWZlc3QuKiJkaXJlY3RvcnkubW9kZWwudjMubWFuaWZlc3QuZGVsZXRlYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHCoaL2FwaS92My9kaXJlY3RvcnkvbWFuaWZlc3RCRFpCZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L21vZGVsL3YzO21vZGVsYgZwcm90bzM", [annotations_pb_1.file_google_api_annotations, field_behavior_pb_1.file_google_api_field_behavior, wkt_1.file_google_protobuf_empty, wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_timestamp, annotations_pb_2.file_protoc_gen_openapiv2_options_annotations, validate_pb_1.file_buf_validate_validate]);
/**
 * Describes the message aserto.directory.model.v3.GetManifestRequest.
 * Use `create(GetManifestRequestSchema)` to create a new message.
 */
exports.GetManifestRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 0);
/**
 * Describes the message aserto.directory.model.v3.GetManifestResponse.
 * Use `create(GetManifestResponseSchema)` to create a new message.
 */
exports.GetManifestResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 1);
/**
 * Describes the message aserto.directory.model.v3.SetManifestRequest.
 * Use `create(SetManifestRequestSchema)` to create a new message.
 */
exports.SetManifestRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 2);
/**
 * Describes the message aserto.directory.model.v3.SetManifestResponse.
 * Use `create(SetManifestResponseSchema)` to create a new message.
 */
exports.SetManifestResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 3);
/**
 * Describes the message aserto.directory.model.v3.DeleteManifestRequest.
 * Use `create(DeleteManifestRequestSchema)` to create a new message.
 */
exports.DeleteManifestRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 4);
/**
 * Describes the message aserto.directory.model.v3.DeleteManifestResponse.
 * Use `create(DeleteManifestResponseSchema)` to create a new message.
 */
exports.DeleteManifestResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 5);
/**
 * Describes the message aserto.directory.model.v3.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
exports.MetadataSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 6);
/**
 * Describes the message aserto.directory.model.v3.Body.
 * Use `create(BodySchema)` to create a new message.
 */
exports.BodySchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_model_v3_model, 7);
/**
 * @generated from service aserto.directory.model.v3.Model
 */
exports.Model = (0, codegenv1_1.serviceDesc)(exports.file_aserto_directory_model_v3_model, 0);
