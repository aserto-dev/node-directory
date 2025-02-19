// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/common/v3/common.proto (package aserto.directory.common.v3, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/common/v3/common.proto.
 */
export const file_aserto_directory_common_v3_common: GenFile = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L2NvbW1vbi92My9jb21tb24ucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzItMECgZPYmplY3QS8gEKBHR5cGUYASABKAlC4wHgQQK6SNwBugHRAQoLb2JqZWN0LnR5cGUShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcpyAEBcgIYQBJ8CgJpZBgCIAEoCUJw4EECukhqugFfCglvYmplY3QuaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhIgCgxkaXNwbGF5X25hbWUYAyABKAlCCuBBAbpIBHICGGQSMAoKcHJvcGVydGllcxgEIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCA+BBARIzCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjMKCnVwZGF0ZWRfYXQYFSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSGAoEZXRhZxgXIAEoCUIK4EEBukgEcgIYFCLICwoIUmVsYXRpb24SggIKC29iamVjdF90eXBlGAEgASgJQuwB4EECukjlAboB2gEKFHJlbGF0aW9uLm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKcgBAXICGEASjAEKCW9iamVjdF9pZBgCIAEoCUJ54EECukhzugFoChJyZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhL8AQoIcmVsYXRpb24YAyABKAlC6QHgQQK6SOIBugHXAQoRcmVsYXRpb24ucmVsYXRpb24ShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcpyAEBcgIYQBKEAgoMc3ViamVjdF90eXBlGAQgASgJQu0B4EECukjmAboB2wEKFXJlbGF0aW9uLnN1YmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynIAQFyAhhAEo4BCgpzdWJqZWN0X2lkGAUgASgJQnrgQQK6SHS6AWkKE3JlbGF0aW9uLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKMAgoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCULxAeBBAbpI6gG6Ad8BChlyZWxhdGlvbi5zdWJqZWN0X3JlbGF0aW9uEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKdABAXICGEASMwoKY3JlYXRlZF9hdBgUIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIzCgp1cGRhdGVkX2F0GBUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEhgKBGV0YWcYFyABKAlCCuBBAbpIBHICGBQiuQMKEE9iamVjdElkZW50aWZpZXISiwIKC29iamVjdF90eXBlGAEgASgJQvUB4EECukjuAboB4wEKHW9iamVjdF9pZGVudGlmaWVyLm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKcgBAXICGEASlgEKCW9iamVjdF9pZBgCIAEoCUKCAeBBArpIfLoBcQobb2JqZWN0X2lkZW50aWZpZXIub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAIikgsKElJlbGF0aW9uSWRlbnRpZmllchKNAgoLb2JqZWN0X3R5cGUYASABKAlC9wHgQQK6SPABugHlAQofcmVsYXRpb25faWRlbnRpZmllci5vYmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEpgBCglvYmplY3RfaWQYAiABKAlChAHgQQK6SH66AXMKHXJlbGF0aW9uX2lkZW50aWZpZXIub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcp0AEBcgMYgAIShwIKCHJlbGF0aW9uGAMgASgJQvQB4EECukjtAboB4gEKHHJlbGF0aW9uX2lkZW50aWZpZXIucmVsYXRpb24ShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBKPAgoMc3ViamVjdF90eXBlGAQgASgJQvgB4EECukjxAboB5gEKIHJlbGF0aW9uX2lkZW50aWZpZXIuc3ViamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKdABAXICGEASmgEKCnN1YmplY3RfaWQYBSABKAlChQHgQQK6SH+6AXQKHnJlbGF0aW9uX2lkZW50aWZpZXIuc3ViamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKdABAXIDGIACEpcCChBzdWJqZWN0X3JlbGF0aW9uGAYgASgJQvwB4EEBukj1AboB6gEKJHJlbGF0aW9uX2lkZW50aWZpZXIuc3ViamVjdF9yZWxhdGlvbhKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAIkMKEVBhZ2luYXRpb25SZXF1ZXN0EhoKBHNpemUYASABKAVCDOBBAbpIBhoEGGQoARISCgV0b2tlbhgCIAEoCUID4EEBIi0KElBhZ2luYXRpb25SZXNwb25zZRIXCgpuZXh0X3Rva2VuGAEgASgJQgPgQQNCRlpEZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L2NvbW1vbi92Mztjb21tb25iBnByb3RvMw", [file_google_api_field_behavior, file_google_protobuf_struct, file_google_protobuf_timestamp, file_buf_validate_validate]);

/**
 * @generated from message aserto.directory.common.v3.Object
 */
export type Object$ = Message<"aserto.directory.common.v3.Object"> & {
  /**
   * object type name
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * external object identifier (cs-string, no spaces or tabs)
   *
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * display name object
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  /**
   * property bag
   *
   * @generated from field: google.protobuf.Struct properties = 4;
   */
  properties?: JsonObject;

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance etag
   *
   * @generated from field: string etag = 23;
   */
  etag: string;
};

/**
 * Describes the message aserto.directory.common.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
export const ObjectSchema: GenMessage<Object$> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 0);

/**
 * @generated from message aserto.directory.common.v3.Relation
 */
export type Relation = Message<"aserto.directory.common.v3.Relation"> & {
  /**
   * object type
   *
   * @generated from field: string object_type = 1;
   */
  objectType: string;

  /**
   * object identifier
   *
   * @generated from field: string object_id = 2;
   */
  objectId: string;

  /**
   * object relation name
   *
   * @generated from field: string relation = 3;
   */
  relation: string;

  /**
   * subject type
   *
   * @generated from field: string subject_type = 4;
   */
  subjectType: string;

  /**
   * subject identifier
   *
   * @generated from field: string subject_id = 5;
   */
  subjectId: string;

  /**
   * optional subject relation name
   *
   * @generated from field: string subject_relation = 6;
   */
  subjectRelation: string;

  /**
   * created at timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp created_at = 20;
   */
  createdAt?: Timestamp;

  /**
   * last updated timestamp (UTC)
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 21;
   */
  updatedAt?: Timestamp;

  /**
   * object instance etag
   *
   * @generated from field: string etag = 23;
   */
  etag: string;
};

/**
 * Describes the message aserto.directory.common.v3.Relation.
 * Use `create(RelationSchema)` to create a new message.
 */
export const RelationSchema: GenMessage<Relation> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 1);

/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v3.ObjectIdentifier
 */
export type ObjectIdentifier = Message<"aserto.directory.common.v3.ObjectIdentifier"> & {
  /**
   * object type (lc-string)
   *
   * @generated from field: string object_type = 1;
   */
  objectType: string;

  /**
   * object identifier (cs-string)
   *
   * @generated from field: string object_id = 2;
   */
  objectId: string;
};

/**
 * Describes the message aserto.directory.common.v3.ObjectIdentifier.
 * Use `create(ObjectIdentifierSchema)` to create a new message.
 */
export const ObjectIdentifierSchema: GenMessage<ObjectIdentifier> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 2);

/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v3.RelationIdentifier
 */
export type RelationIdentifier = Message<"aserto.directory.common.v3.RelationIdentifier"> & {
  /**
   * object type
   *
   * @generated from field: string object_type = 1;
   */
  objectType: string;

  /**
   * object identifier
   *
   * @generated from field: string object_id = 2;
   */
  objectId: string;

  /**
   * object relation name
   *
   * @generated from field: string relation = 3;
   */
  relation: string;

  /**
   * subject type
   *
   * @generated from field: string subject_type = 4;
   */
  subjectType: string;

  /**
   * subject identifier
   *
   * @generated from field: string subject_id = 5;
   */
  subjectId: string;

  /**
   * optional subject relation name
   *
   * @generated from field: string subject_relation = 6;
   */
  subjectRelation: string;
};

/**
 * Describes the message aserto.directory.common.v3.RelationIdentifier.
 * Use `create(RelationIdentifierSchema)` to create a new message.
 */
export const RelationIdentifierSchema: GenMessage<RelationIdentifier> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 3);

/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v3.PaginationRequest
 */
export type PaginationRequest = Message<"aserto.directory.common.v3.PaginationRequest"> & {
  /**
   * requested page size, valid value between 1-100 rows (default 100)
   *
   * @generated from field: int32 size = 1;
   */
  size: number;

  /**
   * pagination start token, default ""
   *
   * @generated from field: string token = 2;
   */
  token: string;
};

/**
 * Describes the message aserto.directory.common.v3.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
export const PaginationRequestSchema: GenMessage<PaginationRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 4);

/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v3.PaginationResponse
 */
export type PaginationResponse = Message<"aserto.directory.common.v3.PaginationResponse"> & {
  /**
   * next page token, when empty there are no more pages to fetch
   *
   * @generated from field: string next_token = 1;
   */
  nextToken: string;
};

/**
 * Describes the message aserto.directory.common.v3.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
export const PaginationResponseSchema: GenMessage<PaginationResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_common_v3_common, 5);

