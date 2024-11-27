// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/assertion/v3/assertion.proto (package aserto.directory.assertion.v3, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";
import { file_aserto_directory_reader_v3_reader } from "../../reader/v3/reader_pb";

/**
 * Describes the file aserto/directory/assertion/v3/assertion.proto.
 */
export const file_aserto_directory_assertion_v3_assertion = /*@__PURE__*/
  fileDesc("Ci1hc2VydG8vZGlyZWN0b3J5L2Fzc2VydGlvbi92My9hc3NlcnRpb24ucHJvdG8SHWFzZXJ0by5kaXJlY3RvcnkuYXNzZXJ0aW9uLnYzIiYKE0dldEFzc2VydGlvblJlcXVlc3QSDwoCaWQYASABKA1CA+BBAiJNChRHZXRBc3NlcnRpb25SZXNwb25zZRI1CgZyZXN1bHQYASABKAsyJS5hc2VydG8uZGlyZWN0b3J5LmFzc2VydGlvbi52My5Bc3NlcnQiWQoVTGlzdEFzc2VydGlvbnNSZXF1ZXN0EkAKBHBhZ2UYASABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdEID4EEBIo4BChZMaXN0QXNzZXJ0aW9uc1Jlc3BvbnNlEjYKB3Jlc3VsdHMYASADKAsyJS5hc2VydG8uZGlyZWN0b3J5LmFzc2VydGlvbi52My5Bc3NlcnQSPAoEcGFnZRgCIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSJRChNTZXRBc3NlcnRpb25SZXF1ZXN0EjoKBmFzc2VydBgBIAEoCzIlLmFzZXJ0by5kaXJlY3RvcnkuYXNzZXJ0aW9uLnYzLkFzc2VydEID4EECIk0KFFNldEFzc2VydGlvblJlc3BvbnNlEjUKBnJlc3VsdBgBIAEoCzIlLmFzZXJ0by5kaXJlY3RvcnkuYXNzZXJ0aW9uLnYzLkFzc2VydCIpChZEZWxldGVBc3NlcnRpb25SZXF1ZXN0Eg8KAmlkGAEgASgNQgPgQQIiQQoXRGVsZXRlQXNzZXJ0aW9uUmVzcG9uc2USJgoGcmVzdWx0GAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IokCCgZBc3NlcnQSCgoCaWQYASABKA0SFQoIZXhwZWN0ZWQYAiABKAhCA+BBAhI5CgVjaGVjaxgDIAEoCzIoLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVxdWVzdEgAEkoKDmNoZWNrX3JlbGF0aW9uGAQgASgLMjAuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tSZWxhdGlvblJlcXVlc3RIABJOChBjaGVja19wZXJtaXNzaW9uGAUgASgLMjIuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdEgAQgUKA21zZzKiCQoJQXNzZXJ0aW9uEq4CCgxHZXRBc3NlcnRpb24SMi5hc2VydG8uZGlyZWN0b3J5LmFzc2VydGlvbi52My5HZXRBc3NlcnRpb25SZXF1ZXN0GjMuYXNlcnRvLmRpcmVjdG9yeS5hc3NlcnRpb24udjMuR2V0QXNzZXJ0aW9uUmVzcG9uc2UitAGSQYgBCglkaXJlY3RvcnkSFkdldCBhc3NlcnRpb24gaW5zdGFuY2UaIlJldHVybnMgc2luZ2xlIGFzc2VydGlvbiBpbnN0YW5jZS4qGmRpcmVjdG9yeS52My5hc3NlcnRpb24uZ2V0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCIhIgL2FwaS92My9kaXJlY3RvcnkvYXNzZXJ0aW9uL3tpZH0SrQIKDkxpc3RBc3NlcnRpb25zEjQuYXNlcnRvLmRpcmVjdG9yeS5hc3NlcnRpb24udjMuTGlzdEFzc2VydGlvbnNSZXF1ZXN0GjUuYXNlcnRvLmRpcmVjdG9yeS5hc3NlcnRpb24udjMuTGlzdEFzc2VydGlvbnNSZXNwb25zZSKtAZJBhQEKCWRpcmVjdG9yeRIPTGlzdCBhc3NlcnRpb25zGiRSZXR1cm5zIGxpc3Qgb2YgYXNzZXJ0aW9uIGluc3RhbmNlcy4qHGRpcmVjdG9yeS52My5hc3NlcnRpb25zLmxpc3RiIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIeEhwvYXBpL3YzL2RpcmVjdG9yeS9hc3NlcnRpb25zEo4CCgxTZXRBc3NlcnRpb24SMi5hc2VydG8uZGlyZWN0b3J5LmFzc2VydGlvbi52My5TZXRBc3NlcnRpb25SZXF1ZXN0GjMuYXNlcnRvLmRpcmVjdG9yeS5hc3NlcnRpb24udjMuU2V0QXNzZXJ0aW9uUmVzcG9uc2UilAGSQWsKCWRpcmVjdG9yeRINU2V0IGFzc2VydGlvbhoOU2V0IGFzc2VydGlvbi4qGmRpcmVjdG9yeS52My5hc3NlcnRpb24uc2V0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCIDoBKiIbL2FwaS92My9kaXJlY3RvcnkvYXNzZXJ0aW9uEqICCg9EZWxldGVBc3NlcnRpb24SNS5hc2VydG8uZGlyZWN0b3J5LmFzc2VydGlvbi52My5EZWxldGVBc3NlcnRpb25SZXF1ZXN0GjYuYXNlcnRvLmRpcmVjdG9yeS5hc3NlcnRpb24udjMuRGVsZXRlQXNzZXJ0aW9uUmVzcG9uc2UinwGSQXQKCWRpcmVjdG9yeRIQRGVsZXRlIGFzc2VydGlvbhoRRGVsZXRlIGFzc2VydGlvbi4qHWRpcmVjdG9yeS52My5hc3NlcnRpb24uZGVsZXRlYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCIiogL2FwaS92My9kaXJlY3RvcnkvYXNzZXJ0aW9uL3tpZH1CTFpKZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L2Fzc2VydGlvbi92Mzthc3NlcnRpb25iBnByb3RvMw", [file_google_protobuf_empty, file_google_api_annotations, file_google_api_field_behavior, file_protoc_gen_openapiv2_options_annotations, file_aserto_directory_common_v3_common, file_aserto_directory_reader_v3_reader]);

/**
 * Describes the message aserto.directory.assertion.v3.GetAssertionRequest.
 * Use `create(GetAssertionRequestSchema)` to create a new message.
 */
export const GetAssertionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 0);

/**
 * Describes the message aserto.directory.assertion.v3.GetAssertionResponse.
 * Use `create(GetAssertionResponseSchema)` to create a new message.
 */
export const GetAssertionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 1);

/**
 * Describes the message aserto.directory.assertion.v3.ListAssertionsRequest.
 * Use `create(ListAssertionsRequestSchema)` to create a new message.
 */
export const ListAssertionsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 2);

/**
 * Describes the message aserto.directory.assertion.v3.ListAssertionsResponse.
 * Use `create(ListAssertionsResponseSchema)` to create a new message.
 */
export const ListAssertionsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 3);

/**
 * Describes the message aserto.directory.assertion.v3.SetAssertionRequest.
 * Use `create(SetAssertionRequestSchema)` to create a new message.
 */
export const SetAssertionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 4);

/**
 * Describes the message aserto.directory.assertion.v3.SetAssertionResponse.
 * Use `create(SetAssertionResponseSchema)` to create a new message.
 */
export const SetAssertionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 5);

/**
 * Describes the message aserto.directory.assertion.v3.DeleteAssertionRequest.
 * Use `create(DeleteAssertionRequestSchema)` to create a new message.
 */
export const DeleteAssertionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 6);

/**
 * Describes the message aserto.directory.assertion.v3.DeleteAssertionResponse.
 * Use `create(DeleteAssertionResponseSchema)` to create a new message.
 */
export const DeleteAssertionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 7);

/**
 * Describes the message aserto.directory.assertion.v3.Assert.
 * Use `create(AssertSchema)` to create a new message.
 */
export const AssertSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_assertion_v3_assertion, 8);

/**
 * @generated from service aserto.directory.assertion.v3.Assertion
 */
export const Assertion = /*@__PURE__*/
  serviceDesc(file_aserto_directory_assertion_v3_assertion, 0);

