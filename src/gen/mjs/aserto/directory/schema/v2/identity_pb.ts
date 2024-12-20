// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/schema/v2/identity.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/schema/v2/identity.proto.
 */
export const file_aserto_directory_schema_v2_identity: GenFile = /*@__PURE__*/
  fileDesc("Cilhc2VydG8vZGlyZWN0b3J5L3NjaGVtYS92Mi9pZGVudGl0eS5wcm90bxIaYXNlcnRvLmRpcmVjdG9yeS5zY2hlbWEudjIiogEKEklkZW50aXR5UHJvcGVydGllcxI2CgRraW5kGAEgASgOMiguYXNlcnRvLmRpcmVjdG9yeS5zY2hlbWEudjIuSWRlbnRpdHlLaW5kEhAKCHByb3ZpZGVyGAIgASgJEhAKCHZlcmlmaWVkGAMgASgIEhoKDWNvbm5lY3Rpb25faWQYBCABKAlIAIgBAToCGAFCEAoOX2Nvbm5lY3Rpb25faWQqwQEKDElkZW50aXR5S2luZBIZChVJREVOVElUWV9LSU5EX1VOS05PV04QABIVChFJREVOVElUWV9LSU5EX1BJRBABEhcKE0lERU5USVRZX0tJTkRfRU1BSUwQAhIaChZJREVOVElUWV9LSU5EX1VTRVJOQU1FEAMSFAoQSURFTlRJVFlfS0lORF9EThAEEhcKE0lERU5USVRZX0tJTkRfUEhPTkUQBRIXChNJREVOVElUWV9LSU5EX0VNUElEEAYaAhgBQkZaRGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3RvcnkvYXNlcnRvL2RpcmVjdG9yeS9zY2hlbWEvdjI7c2NoZW1hYgZwcm90bzM");

/**
 * Properties of "identity" objects.
 *
 * @generated from message aserto.directory.schema.v2.IdentityProperties
 * @deprecated
 */
export type IdentityProperties = Message<"aserto.directory.schema.v2.IdentityProperties"> & {
  /**
   * identity kind [email|username|uid|pid|dn|phone]
   *
   * @generated from field: aserto.directory.schema.v2.IdentityKind kind = 1;
   */
  kind: IdentityKind;

  /**
   * identity provider name
   *
   * @generated from field: string provider = 2;
   */
  provider: string;

  /**
   * identity has been verified (false when not explicitly specified)
   *
   * @generated from field: bool verified = 3;
   */
  verified: boolean;

  /**
   * IDP connection id which owns the object instance
   *
   * @generated from field: optional string connection_id = 4;
   */
  connectionId?: string;
};

/**
 * Describes the message aserto.directory.schema.v2.IdentityProperties.
 * Use `create(IdentityPropertiesSchema)` to create a new message.
 * @deprecated
 */
export const IdentityPropertiesSchema: GenMessage<IdentityProperties> = /*@__PURE__*/
  messageDesc(file_aserto_directory_schema_v2_identity, 0);

/**
 * @generated from enum aserto.directory.schema.v2.IdentityKind
 * @deprecated
 */
export enum IdentityKind {
  /**
   * undefined state
   *
   * @generated from enum value: IDENTITY_KIND_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * provider unique identifier
   *
   * @generated from enum value: IDENTITY_KIND_PID = 1;
   */
  PID = 1,

  /**
   * email address
   *
   * @generated from enum value: IDENTITY_KIND_EMAIL = 2;
   */
  EMAIL = 2,

  /**
   * username
   *
   * @generated from enum value: IDENTITY_KIND_USERNAME = 3;
   */
  USERNAME = 3,

  /**
   * distinguished name format RFC1779
   *
   * @generated from enum value: IDENTITY_KIND_DN = 4;
   */
  DN = 4,

  /**
   * phone number using the format described in RFC3966, using the E.164 recommendation
   *
   * @generated from enum value: IDENTITY_KIND_PHONE = 5;
   */
  PHONE = 5,

  /**
   * employee identifier
   *
   * @generated from enum value: IDENTITY_KIND_EMPID = 6;
   */
  EMPID = 6,
}

/**
 * Describes the enum aserto.directory.schema.v2.IdentityKind.
 * @deprecated
 */
export const IdentityKindSchema: GenEnum<IdentityKind> = /*@__PURE__*/
  enumDesc(file_aserto_directory_schema_v2_identity, 0);

