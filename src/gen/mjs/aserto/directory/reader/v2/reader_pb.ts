// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/reader/v2/reader.proto (package aserto.directory.reader.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Object$, ObjectDependency, ObjectIdentifier, ObjectType, ObjectTypeIdentifier, PaginationRequest, PaginationResponse, Permission, PermissionIdentifier, Relation, RelationIdentifier, RelationType, RelationTypeIdentifier } from "../../common/v2/common_pb";
import { file_aserto_directory_common_v2_common } from "../../common/v2/common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/reader/v2/reader.proto.
 */
export const file_aserto_directory_reader_v2_reader: GenFile = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3JlYWRlci92Mi9yZWFkZXIucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyIlsKFEdldE9iamVjdFR5cGVSZXF1ZXN0Ej8KBXBhcmFtGAEgASgLMjAuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0VHlwZUlkZW50aWZpZXI6AhgBIlMKFUdldE9iamVjdFR5cGVSZXNwb25zZRI2CgZyZXN1bHQYASABKAsyJi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RUeXBlOgIYASJYChVHZXRPYmplY3RUeXBlc1JlcXVlc3QSOwoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlBhZ2luYXRpb25SZXF1ZXN0OgIYASKTAQoWR2V0T2JqZWN0VHlwZXNSZXNwb25zZRI3CgdyZXN1bHRzGAEgAygLMiYuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0VHlwZRI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlc3BvbnNlOgIYASJfChZHZXRSZWxhdGlvblR5cGVSZXF1ZXN0EkEKBXBhcmFtGAEgASgLMjIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUmVsYXRpb25UeXBlSWRlbnRpZmllcjoCGAEiVwoXR2V0UmVsYXRpb25UeXBlUmVzcG9uc2USOAoGcmVzdWx0GAEgASgLMiguYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUmVsYXRpb25UeXBlOgIYASKbAQoXR2V0UmVsYXRpb25UeXBlc1JlcXVlc3QSPwoFcGFyYW0YASABKAsyMC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RUeXBlSWRlbnRpZmllchI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlcXVlc3Q6AhgBIpcBChhHZXRSZWxhdGlvblR5cGVzUmVzcG9uc2USOQoHcmVzdWx0cxgBIAMoCzIoLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlJlbGF0aW9uVHlwZRI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlc3BvbnNlOgIYASLAAQoQR2V0T2JqZWN0UmVxdWVzdBI7CgVwYXJhbRgBIAEoCzIsLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLk9iamVjdElkZW50aWZpZXISGwoOd2l0aF9yZWxhdGlvbnMYAiABKAhIAIgBARI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlcXVlc3Q6AhgBQhEKD193aXRoX3JlbGF0aW9ucyLiAQoRR2V0T2JqZWN0UmVzcG9uc2USMgoGcmVzdWx0GAEgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0EjcKCXJlbGF0aW9ucxgEIAMoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlJlbGF0aW9uEjwKBHBhZ2UYCSABKAsyLi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5QYWdpbmF0aW9uUmVzcG9uc2U6AhgBSgQIAhADSgQIAxAEUghpbmNvbWluZ1IIb3V0Z29pbmciVwoUR2V0T2JqZWN0TWFueVJlcXVlc3QSOwoFcGFyYW0YASADKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RJZGVudGlmaWVyOgIYASJQChVHZXRPYmplY3RNYW55UmVzcG9uc2USMwoHcmVzdWx0cxgBIAMoCzIiLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLk9iamVjdDoCGAEilQEKEUdldE9iamVjdHNSZXF1ZXN0Ej8KBXBhcmFtGAEgASgLMjAuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0VHlwZUlkZW50aWZpZXISOwoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlBhZ2luYXRpb25SZXF1ZXN0OgIYASKLAQoSR2V0T2JqZWN0c1Jlc3BvbnNlEjMKB3Jlc3VsdHMYASADKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3QSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlBhZ2luYXRpb25SZXNwb25zZToCGAEigwEKEkdldFJlbGF0aW9uUmVxdWVzdBI9CgVwYXJhbRgBIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlJlbGF0aW9uSWRlbnRpZmllchIZCgx3aXRoX29iamVjdHMYAiABKAhIAIgBAToCGAFCDwoNX3dpdGhfb2JqZWN0cyLzAQoTR2V0UmVsYXRpb25SZXNwb25zZRI1CgdyZXN1bHRzGAEgAygLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUmVsYXRpb24STQoHb2JqZWN0cxgCIAMoCzI8LmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldFJlbGF0aW9uUmVzcG9uc2UuT2JqZWN0c0VudHJ5GlIKDE9iamVjdHNFbnRyeRILCgNrZXkYASABKAkSMQoFdmFsdWUYAiABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3Q6AjgBOgIYASKVAQoTR2V0UmVsYXRpb25zUmVxdWVzdBI9CgVwYXJhbRgBIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlJlbGF0aW9uSWRlbnRpZmllchI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlcXVlc3Q6AhgBIo8BChRHZXRSZWxhdGlvbnNSZXNwb25zZRI1CgdyZXN1bHRzGAEgAygLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUmVsYXRpb24SPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlBhZ2luYXRpb25SZXNwb25zZToCGAEiWwoUR2V0UGVybWlzc2lvblJlcXVlc3QSPwoFcGFyYW0YASABKAsyMC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5QZXJtaXNzaW9uSWRlbnRpZmllcjoCGAEiUwoVR2V0UGVybWlzc2lvblJlc3BvbnNlEjYKBnJlc3VsdBgBIAEoCzImLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlBlcm1pc3Npb246AhgBIlgKFUdldFBlcm1pc3Npb25zUmVxdWVzdBI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUGFnaW5hdGlvblJlcXVlc3Q6AhgBIpMBChZHZXRQZXJtaXNzaW9uc1Jlc3BvbnNlEjcKB3Jlc3VsdHMYASADKAsyJi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5QZXJtaXNzaW9uEjwKBHBhZ2UYCSABKAsyLi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5QYWdpbmF0aW9uUmVzcG9uc2U6AhgBIu4BChZDaGVja1Blcm1pc3Npb25SZXF1ZXN0Ej0KB3N1YmplY3QYASABKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RJZGVudGlmaWVyEkQKCnBlcm1pc3Npb24YAiABKAsyMC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5QZXJtaXNzaW9uSWRlbnRpZmllchI8CgZvYmplY3QYAyABKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RJZGVudGlmaWVyEg0KBXRyYWNlGAcgASgIOgIYASI7ChdDaGVja1Blcm1pc3Npb25SZXNwb25zZRINCgVjaGVjaxgBIAEoCBINCgV0cmFjZRgCIAMoCToCGAEi7AEKFENoZWNrUmVsYXRpb25SZXF1ZXN0Ej0KB3N1YmplY3QYASABKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RJZGVudGlmaWVyEkQKCHJlbGF0aW9uGAIgASgLMjIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuUmVsYXRpb25UeXBlSWRlbnRpZmllchI8CgZvYmplY3QYAyABKAsyLC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52Mi5PYmplY3RJZGVudGlmaWVyEg0KBXRyYWNlGAcgASgIOgIYASI5ChVDaGVja1JlbGF0aW9uUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAk6AhgBIjEKDUNoZWNrUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAk6AhgBIpYCCg9HZXRHcmFwaFJlcXVlc3QSPAoGYW5jaG9yGAEgASgLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0SWRlbnRpZmllchI9CgdzdWJqZWN0GAIgASgLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0SWRlbnRpZmllchJECghyZWxhdGlvbhgDIAEoCzIyLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYyLlJlbGF0aW9uVHlwZUlkZW50aWZpZXISPAoGb2JqZWN0GAQgASgLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0SWRlbnRpZmllcjoCGAEiVQoQR2V0R3JhcGhSZXNwb25zZRI9CgdyZXN1bHRzGAEgAygLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjIuT2JqZWN0RGVwZW5kZW5jeToCGAEysQ0KBlJlYWRlchJ5Cg1HZXRPYmplY3RUeXBlEjAuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0T2JqZWN0VHlwZVJlcXVlc3QaMS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRPYmplY3RUeXBlUmVzcG9uc2UiA4gCARJ8Cg5HZXRPYmplY3RUeXBlcxIxLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldE9iamVjdFR5cGVzUmVxdWVzdBoyLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldE9iamVjdFR5cGVzUmVzcG9uc2UiA4gCARJ/Cg9HZXRSZWxhdGlvblR5cGUSMi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRSZWxhdGlvblR5cGVSZXF1ZXN0GjMuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0UmVsYXRpb25UeXBlUmVzcG9uc2UiA4gCARKCAQoQR2V0UmVsYXRpb25UeXBlcxIzLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldFJlbGF0aW9uVHlwZXNSZXF1ZXN0GjQuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0UmVsYXRpb25UeXBlc1Jlc3BvbnNlIgOIAgESeQoNR2V0UGVybWlzc2lvbhIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldFBlcm1pc3Npb25SZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0UGVybWlzc2lvblJlc3BvbnNlIgOIAgESfAoOR2V0UGVybWlzc2lvbnMSMS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRQZXJtaXNzaW9uc1JlcXVlc3QaMi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRQZXJtaXNzaW9uc1Jlc3BvbnNlIgOIAgESbQoJR2V0T2JqZWN0EiwuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0T2JqZWN0UmVxdWVzdBotLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldE9iamVjdFJlc3BvbnNlIgOIAgESeQoNR2V0T2JqZWN0TWFueRIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldE9iamVjdE1hbnlSZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0T2JqZWN0TWFueVJlc3BvbnNlIgOIAgEScAoKR2V0T2JqZWN0cxItLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldE9iamVjdHNSZXF1ZXN0Gi4uYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0T2JqZWN0c1Jlc3BvbnNlIgOIAgEScwoLR2V0UmVsYXRpb24SLi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRSZWxhdGlvblJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRSZWxhdGlvblJlc3BvbnNlIgOIAgESdgoMR2V0UmVsYXRpb25zEi8uYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuR2V0UmVsYXRpb25zUmVxdWVzdBowLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkdldFJlbGF0aW9uc1Jlc3BvbnNlIgOIAgESfwoPQ2hlY2tQZXJtaXNzaW9uEjIuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBozLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkNoZWNrUGVybWlzc2lvblJlc3BvbnNlIgOIAgESeQoNQ2hlY2tSZWxhdGlvbhIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYyLkNoZWNrUmVsYXRpb25SZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjIuQ2hlY2tSZWxhdGlvblJlc3BvbnNlIgOIAgESagoIR2V0R3JhcGgSKy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRHcmFwaFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52Mi5HZXRHcmFwaFJlc3BvbnNlIgOIAgFCRlpEZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L3JlYWRlci92MjtyZWFkZXJiBnByb3RvMw", [file_aserto_directory_common_v2_common]);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeRequest
 * @deprecated
 */
export type GetObjectTypeRequest = Message<"aserto.directory.reader.v2.GetObjectTypeRequest"> & {
  /**
   * object type selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
   */
  param?: ObjectTypeIdentifier;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypeRequest.
 * Use `create(GetObjectTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectTypeRequestSchema: GenMessage<GetObjectTypeRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 0);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeResponse
 * @deprecated
 */
export type GetObjectTypeResponse = Message<"aserto.directory.reader.v2.GetObjectTypeResponse"> & {
  /**
   * object type instance
   *
   * @generated from field: aserto.directory.common.v2.ObjectType result = 1;
   */
  result?: ObjectType;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypeResponse.
 * Use `create(GetObjectTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectTypeResponseSchema: GenMessage<GetObjectTypeResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 1);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesRequest
 * @deprecated
 */
export type GetObjectTypesRequest = Message<"aserto.directory.reader.v2.GetObjectTypesRequest"> & {
  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypesRequest.
 * Use `create(GetObjectTypesRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectTypesRequestSchema: GenMessage<GetObjectTypesRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 2);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesResponse
 * @deprecated
 */
export type GetObjectTypesResponse = Message<"aserto.directory.reader.v2.GetObjectTypesResponse"> & {
  /**
   * array of object types
   *
   * @generated from field: repeated aserto.directory.common.v2.ObjectType results = 1;
   */
  results: ObjectType[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectTypesResponse.
 * Use `create(GetObjectTypesResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectTypesResponseSchema: GenMessage<GetObjectTypesResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 3);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeRequest
 * @deprecated
 */
export type GetRelationTypeRequest = Message<"aserto.directory.reader.v2.GetRelationTypeRequest"> & {
  /**
   * relation type selector
   *
   * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier param = 1;
   */
  param?: RelationTypeIdentifier;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypeRequest.
 * Use `create(GetRelationTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationTypeRequestSchema: GenMessage<GetRelationTypeRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 4);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeResponse
 * @deprecated
 */
export type GetRelationTypeResponse = Message<"aserto.directory.reader.v2.GetRelationTypeResponse"> & {
  /**
   * relation type instance
   *
   * @generated from field: aserto.directory.common.v2.RelationType result = 1;
   */
  result?: RelationType;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypeResponse.
 * Use `create(GetRelationTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationTypeResponseSchema: GenMessage<GetRelationTypeResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 5);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesRequest
 * @deprecated
 */
export type GetRelationTypesRequest = Message<"aserto.directory.reader.v2.GetRelationTypesRequest"> & {
  /**
   * object type selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
   */
  param?: ObjectTypeIdentifier;

  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypesRequest.
 * Use `create(GetRelationTypesRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationTypesRequestSchema: GenMessage<GetRelationTypesRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 6);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesResponse
 * @deprecated
 */
export type GetRelationTypesResponse = Message<"aserto.directory.reader.v2.GetRelationTypesResponse"> & {
  /**
   * array of relation types
   *
   * @generated from field: repeated aserto.directory.common.v2.RelationType results = 1;
   */
  results: RelationType[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationTypesResponse.
 * Use `create(GetRelationTypesResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationTypesResponseSchema: GenMessage<GetRelationTypesResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 7);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectRequest
 * @deprecated
 */
export type GetObjectRequest = Message<"aserto.directory.reader.v2.GetObjectRequest"> & {
  /**
   * object selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier param = 1;
   */
  param?: ObjectIdentifier;

  /**
   * materialize the object relations objects
   *
   * @generated from field: optional bool with_relations = 2;
   */
  withRelations?: boolean;

  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectRequest.
 * Use `create(GetObjectRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectRequestSchema: GenMessage<GetObjectRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 8);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectResponse
 * @deprecated
 */
export type GetObjectResponse = Message<"aserto.directory.reader.v2.GetObjectResponse"> & {
  /**
   * object instance
   *
   * @generated from field: aserto.directory.common.v2.Object result = 1;
   */
  result?: Object$;

  /**
   * object relations
   *
   * @generated from field: repeated aserto.directory.common.v2.Relation relations = 4;
   */
  relations: Relation[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectResponse.
 * Use `create(GetObjectResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectResponseSchema: GenMessage<GetObjectResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 9);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyRequest
 * @deprecated
 */
export type GetObjectManyRequest = Message<"aserto.directory.reader.v2.GetObjectManyRequest"> & {
  /**
   * object identifier list
   *
   * @generated from field: repeated aserto.directory.common.v2.ObjectIdentifier param = 1;
   */
  param: ObjectIdentifier[];
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectManyRequest.
 * Use `create(GetObjectManyRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectManyRequestSchema: GenMessage<GetObjectManyRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 10);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyResponse
 * @deprecated
 */
export type GetObjectManyResponse = Message<"aserto.directory.reader.v2.GetObjectManyResponse"> & {
  /**
   * array of object instances
   *
   * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
   */
  results: Object$[];
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectManyResponse.
 * Use `create(GetObjectManyResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectManyResponseSchema: GenMessage<GetObjectManyResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 11);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectsRequest
 * @deprecated
 */
export type GetObjectsRequest = Message<"aserto.directory.reader.v2.GetObjectsRequest"> & {
  /**
   * object type selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
   */
  param?: ObjectTypeIdentifier;

  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectsRequest.
 * Use `create(GetObjectsRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectsRequestSchema: GenMessage<GetObjectsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 12);

/**
 * @generated from message aserto.directory.reader.v2.GetObjectsResponse
 * @deprecated
 */
export type GetObjectsResponse = Message<"aserto.directory.reader.v2.GetObjectsResponse"> & {
  /**
   * array of object instances
   *
   * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
   */
  results: Object$[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetObjectsResponse.
 * Use `create(GetObjectsResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetObjectsResponseSchema: GenMessage<GetObjectsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 13);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationRequest
 * @deprecated
 */
export type GetRelationRequest = Message<"aserto.directory.reader.v2.GetRelationRequest"> & {
  /**
   * relation selector
   *
   * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
   */
  param?: RelationIdentifier;

  /**
   * materialize relation objects
   *
   * @generated from field: optional bool with_objects = 2;
   */
  withObjects?: boolean;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationRequest.
 * Use `create(GetRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationRequestSchema: GenMessage<GetRelationRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 14);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationResponse
 * @deprecated
 */
export type GetRelationResponse = Message<"aserto.directory.reader.v2.GetRelationResponse"> & {
  /**
   * array of relation instances
   *
   * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
   */
  results: Relation[];

  /**
   * map of materialized relation objects
   *
   * @generated from field: map<string, aserto.directory.common.v2.Object> objects = 2;
   */
  objects: { [key: string]: Object$ };
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationResponse.
 * Use `create(GetRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationResponseSchema: GenMessage<GetRelationResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 15);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationsRequest
 * @deprecated
 */
export type GetRelationsRequest = Message<"aserto.directory.reader.v2.GetRelationsRequest"> & {
  /**
   * relation selector
   *
   * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
   */
  param?: RelationIdentifier;

  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationsRequest.
 * Use `create(GetRelationsRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationsRequestSchema: GenMessage<GetRelationsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 16);

/**
 * @generated from message aserto.directory.reader.v2.GetRelationsResponse
 * @deprecated
 */
export type GetRelationsResponse = Message<"aserto.directory.reader.v2.GetRelationsResponse"> & {
  /**
   * array of relation instances
   *
   * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
   */
  results: Relation[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetRelationsResponse.
 * Use `create(GetRelationsResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetRelationsResponseSchema: GenMessage<GetRelationsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 17);

/**
 * @generated from message aserto.directory.reader.v2.GetPermissionRequest
 * @deprecated
 */
export type GetPermissionRequest = Message<"aserto.directory.reader.v2.GetPermissionRequest"> & {
  /**
   * permission selector
   *
   * @generated from field: aserto.directory.common.v2.PermissionIdentifier param = 1;
   */
  param?: PermissionIdentifier;
};

/**
 * Describes the message aserto.directory.reader.v2.GetPermissionRequest.
 * Use `create(GetPermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetPermissionRequestSchema: GenMessage<GetPermissionRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 18);

/**
 * @generated from message aserto.directory.reader.v2.GetPermissionResponse
 * @deprecated
 */
export type GetPermissionResponse = Message<"aserto.directory.reader.v2.GetPermissionResponse"> & {
  /**
   * permission instance
   *
   * @generated from field: aserto.directory.common.v2.Permission result = 1;
   */
  result?: Permission;
};

/**
 * Describes the message aserto.directory.reader.v2.GetPermissionResponse.
 * Use `create(GetPermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetPermissionResponseSchema: GenMessage<GetPermissionResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 19);

/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsRequest
 * @deprecated
 */
export type GetPermissionsRequest = Message<"aserto.directory.reader.v2.GetPermissionsRequest"> & {
  /**
   * pagination request
   *
   * @generated from field: aserto.directory.common.v2.PaginationRequest page = 9;
   */
  page?: PaginationRequest;
};

/**
 * Describes the message aserto.directory.reader.v2.GetPermissionsRequest.
 * Use `create(GetPermissionsRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetPermissionsRequestSchema: GenMessage<GetPermissionsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 20);

/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsResponse
 * @deprecated
 */
export type GetPermissionsResponse = Message<"aserto.directory.reader.v2.GetPermissionsResponse"> & {
  /**
   * array of permissions
   *
   * @generated from field: repeated aserto.directory.common.v2.Permission results = 1;
   */
  results: Permission[];

  /**
   * pagination response
   *
   * @generated from field: aserto.directory.common.v2.PaginationResponse page = 9;
   */
  page?: PaginationResponse;
};

/**
 * Describes the message aserto.directory.reader.v2.GetPermissionsResponse.
 * Use `create(GetPermissionsResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetPermissionsResponseSchema: GenMessage<GetPermissionsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 21);

/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionRequest
 * @deprecated
 */
export type CheckPermissionRequest = Message<"aserto.directory.reader.v2.CheckPermissionRequest"> & {
  /**
   * subject selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
   */
  subject?: ObjectIdentifier;

  /**
   * permission selector
   *
   * @generated from field: aserto.directory.common.v2.PermissionIdentifier permission = 2;
   */
  permission?: PermissionIdentifier;

  /**
   * object selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
   */
  object?: ObjectIdentifier;

  /**
   * collect trace information
   *
   * @generated from field: bool trace = 7;
   */
  trace: boolean;
};

/**
 * Describes the message aserto.directory.reader.v2.CheckPermissionRequest.
 * Use `create(CheckPermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export const CheckPermissionRequestSchema: GenMessage<CheckPermissionRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 22);

/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionResponse
 * @deprecated
 */
export type CheckPermissionResponse = Message<"aserto.directory.reader.v2.CheckPermissionResponse"> & {
  /**
   * check result
   *
   * @generated from field: bool check = 1;
   */
  check: boolean;

  /**
   * trace information
   *
   * @generated from field: repeated string trace = 2;
   */
  trace: string[];
};

/**
 * Describes the message aserto.directory.reader.v2.CheckPermissionResponse.
 * Use `create(CheckPermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export const CheckPermissionResponseSchema: GenMessage<CheckPermissionResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 23);

/**
 * @generated from message aserto.directory.reader.v2.CheckRelationRequest
 * @deprecated
 */
export type CheckRelationRequest = Message<"aserto.directory.reader.v2.CheckRelationRequest"> & {
  /**
   * subject selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 1;
   */
  subject?: ObjectIdentifier;

  /**
   * relation selector
   *
   * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier relation = 2;
   */
  relation?: RelationTypeIdentifier;

  /**
   * object selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 3;
   */
  object?: ObjectIdentifier;

  /**
   * collect trace information
   *
   * @generated from field: bool trace = 7;
   */
  trace: boolean;
};

/**
 * Describes the message aserto.directory.reader.v2.CheckRelationRequest.
 * Use `create(CheckRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export const CheckRelationRequestSchema: GenMessage<CheckRelationRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 24);

/**
 * @generated from message aserto.directory.reader.v2.CheckRelationResponse
 * @deprecated
 */
export type CheckRelationResponse = Message<"aserto.directory.reader.v2.CheckRelationResponse"> & {
  /**
   * check result
   *
   * @generated from field: bool check = 1;
   */
  check: boolean;

  /**
   * trace information
   *
   * @generated from field: repeated string trace = 2;
   */
  trace: string[];
};

/**
 * Describes the message aserto.directory.reader.v2.CheckRelationResponse.
 * Use `create(CheckRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export const CheckRelationResponseSchema: GenMessage<CheckRelationResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 25);

/**
 * @generated from message aserto.directory.reader.v2.CheckResponse
 * @deprecated
 */
export type CheckResponse = Message<"aserto.directory.reader.v2.CheckResponse"> & {
  /**
   * check result
   *
   * @generated from field: bool check = 1;
   */
  check: boolean;

  /**
   * trace information
   *
   * @generated from field: repeated string trace = 2;
   */
  trace: string[];
};

/**
 * Describes the message aserto.directory.reader.v2.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 * @deprecated
 */
export const CheckResponseSchema: GenMessage<CheckResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 26);

/**
 * @generated from message aserto.directory.reader.v2.GetGraphRequest
 * @deprecated
 */
export type GetGraphRequest = Message<"aserto.directory.reader.v2.GetGraphRequest"> & {
  /**
   * anchor selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier anchor = 1;
   */
  anchor?: ObjectIdentifier;

  /**
   * subject selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier subject = 2;
   */
  subject?: ObjectIdentifier;

  /**
   * relation selector
   *
   * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier relation = 3;
   */
  relation?: RelationTypeIdentifier;

  /**
   * object selector
   *
   * @generated from field: aserto.directory.common.v2.ObjectIdentifier object = 4;
   */
  object?: ObjectIdentifier;
};

/**
 * Describes the message aserto.directory.reader.v2.GetGraphRequest.
 * Use `create(GetGraphRequestSchema)` to create a new message.
 * @deprecated
 */
export const GetGraphRequestSchema: GenMessage<GetGraphRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 27);

/**
 * @generated from message aserto.directory.reader.v2.GetGraphResponse
 * @deprecated
 */
export type GetGraphResponse = Message<"aserto.directory.reader.v2.GetGraphResponse"> & {
  /**
   * dependency graph
   *
   * @generated from field: repeated aserto.directory.common.v2.ObjectDependency results = 1;
   */
  results: ObjectDependency[];
};

/**
 * Describes the message aserto.directory.reader.v2.GetGraphResponse.
 * Use `create(GetGraphResponseSchema)` to create a new message.
 * @deprecated
 */
export const GetGraphResponseSchema: GenMessage<GetGraphResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v2_reader, 28);

/**
 * @generated from service aserto.directory.reader.v2.Reader
 */
export const Reader: GenService<{
  /**
   * get object type metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectType
   * @deprecated
   */
  getObjectType: {
    methodKind: "unary";
    input: typeof GetObjectTypeRequestSchema;
    output: typeof GetObjectTypeResponseSchema;
  },
  /**
   * list object type metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectTypes
   * @deprecated
   */
  getObjectTypes: {
    methodKind: "unary";
    input: typeof GetObjectTypesRequestSchema;
    output: typeof GetObjectTypesResponseSchema;
  },
  /**
   * get relation type metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationType
   * @deprecated
   */
  getRelationType: {
    methodKind: "unary";
    input: typeof GetRelationTypeRequestSchema;
    output: typeof GetRelationTypeResponseSchema;
  },
  /**
   * list relation type metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationTypes
   * @deprecated
   */
  getRelationTypes: {
    methodKind: "unary";
    input: typeof GetRelationTypesRequestSchema;
    output: typeof GetRelationTypesResponseSchema;
  },
  /**
   * get permission metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetPermission
   * @deprecated
   */
  getPermission: {
    methodKind: "unary";
    input: typeof GetPermissionRequestSchema;
    output: typeof GetPermissionResponseSchema;
  },
  /**
   * list permission metadata
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetPermissions
   * @deprecated
   */
  getPermissions: {
    methodKind: "unary";
    input: typeof GetPermissionsRequestSchema;
    output: typeof GetPermissionsResponseSchema;
  },
  /**
   * get object 
   * Deprecated: directory.v2.GetObject is deprecated, use directory.v3.GetObject.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetObject
   * @deprecated
   */
  getObject: {
    methodKind: "unary";
    input: typeof GetObjectRequestSchema;
    output: typeof GetObjectResponseSchema;
  },
  /**
   * get multiple objects
   * Deprecated: directory.v2.GetObjectMany is deprecated, update to use directory.v3.GetObjectMany.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectMany
   * @deprecated
   */
  getObjectMany: {
    methodKind: "unary";
    input: typeof GetObjectManyRequestSchema;
    output: typeof GetObjectManyResponseSchema;
  },
  /**
   * list objects
   * Deprecated: directory.v2.GetObjects is deprecated, update to use directory.v3.GetObjects.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetObjects
   * @deprecated
   */
  getObjects: {
    methodKind: "unary";
    input: typeof GetObjectsRequestSchema;
    output: typeof GetObjectsResponseSchema;
  },
  /**
   * get relation
   * Deprecated: directory.v2.GetRelation is deprecated, update to use directory.v3.GetRelation.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetRelation
   * @deprecated
   */
  getRelation: {
    methodKind: "unary";
    input: typeof GetRelationRequestSchema;
    output: typeof GetRelationResponseSchema;
  },
  /**
   * list relations
   * Deprecated: directory.v2.GetRelations is deprecated, update to use directory.v3.GetRelations.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetRelations
   * @deprecated
   */
  getRelations: {
    methodKind: "unary";
    input: typeof GetRelationsRequestSchema;
    output: typeof GetRelationsResponseSchema;
  },
  /**
   * check permission
   * Deprecated: directory.v2.CheckPermission is deprecated, update to use directory.v3.Check.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.CheckPermission
   * @deprecated
   */
  checkPermission: {
    methodKind: "unary";
    input: typeof CheckPermissionRequestSchema;
    output: typeof CheckPermissionResponseSchema;
  },
  /**
   * check relation
   * Deprecated: directory.v2.CheckRelation is deprecated, update to use directory.v3.Check.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.CheckRelation
   * @deprecated
   */
  checkRelation: {
    methodKind: "unary";
    input: typeof CheckRelationRequestSchema;
    output: typeof CheckRelationResponseSchema;
  },
  /**
   * get object relationship graph
   * Deprecated: directory.v2.GetGraph is deprecated, update to use directory.v3.GetGraph.
   *
   * @generated from rpc aserto.directory.reader.v2.Reader.GetGraph
   * @deprecated
   */
  getGraph: {
    methodKind: "unary";
    input: typeof GetGraphRequestSchema;
    output: typeof GetGraphResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_aserto_directory_reader_v2_reader, 0);

