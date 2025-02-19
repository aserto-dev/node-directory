// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/schema/v3/tenant.proto (package aserto.directory.schema.v3, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/schema/v3/tenant.proto.
 */
export const file_aserto_directory_schema_v3_tenant: GenFile = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3NjaGVtYS92My90ZW5hbnQucHJvdG8SGmFzZXJ0by5kaXJlY3Rvcnkuc2NoZW1hLnYzIsoBChBUZW5hbnRQcm9wZXJ0aWVzEjQKBGtpbmQYASABKA4yJi5hc2VydG8uZGlyZWN0b3J5LnNjaGVtYS52My5UZW5hbnRLaW5kEhQKDGRpcmVjdG9yeV92MhgCIAEoCBIZChFkaXJlY3RvcnlfdjJfb25seRgDIAEoCBJDCgdhY2NvdW50GAQgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5zY2hlbWEudjMuQWNjb3VudFByb3BlcnRpZXNIAIgBAUIKCghfYWNjb3VudCKaAQoRQWNjb3VudFByb3BlcnRpZXMSEAoIbWF4X29yZ3MYASABKAUSRAoPZ2V0dGluZ19zdGFydGVkGAMgASgLMiYuYXNlcnRvLmRpcmVjdG9yeS5zY2hlbWEudjMuR3VpZGVTdGF0ZUgAiAEBEhkKEWRlZmF1bHRfdGVuYW50X2lkGAQgASgJQhIKEF9nZXR0aW5nX3N0YXJ0ZWQiQgoKR3VpZGVTdGF0ZRIMCgRzaG93GAEgASgIEiYKBXN0ZXBzGAIgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdCpcCgpUZW5hbnRLaW5kEhcKE1RFTkFOVF9LSU5EX1VOS05PV04QABIcChhURU5BTlRfS0lORF9PUkdBTklaQVRJT04QARIXChNURU5BTlRfS0lORF9BQ0NPVU5UEAJCRlpEZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS9hc2VydG8vZGlyZWN0b3J5L3NjaGVtYS92MztzY2hlbWFiBnByb3RvMw", [file_google_protobuf_struct]);

/**
 * Properties of a tenant object
 *
 * @generated from message aserto.directory.schema.v3.TenantProperties
 */
export type TenantProperties = Message<"aserto.directory.schema.v3.TenantProperties"> & {
  /**
   * The kind of tenant.
   *
   * @generated from field: aserto.directory.schema.v3.TenantKind kind = 1;
   */
  kind: TenantKind;

  /**
   * Whether or not the v2 directory experience enabled for this tenant.
   *
   * @generated from field: bool directory_v2 = 2;
   */
  directoryV2: boolean;

  /**
   * If true, the tenant cannot be reverted to the v1 directory experience.
   *
   * @generated from field: bool directory_v2_only = 3;
   */
  directoryV2Only: boolean;

  /**
   * Additional properties that are only set accounts (personal tenant).
   *
   * @generated from field: optional aserto.directory.schema.v3.AccountProperties account = 4;
   */
  account?: AccountProperties;
};

/**
 * Describes the message aserto.directory.schema.v3.TenantProperties.
 * Use `create(TenantPropertiesSchema)` to create a new message.
 */
export const TenantPropertiesSchema: GenMessage<TenantProperties> = /*@__PURE__*/
  messageDesc(file_aserto_directory_schema_v3_tenant, 0);

/**
 * @generated from message aserto.directory.schema.v3.AccountProperties
 */
export type AccountProperties = Message<"aserto.directory.schema.v3.AccountProperties"> & {
  /**
   * Maximum number of organizations that can be created in this account.
   * If -1, there is no limit.
   *
   * @generated from field: int32 max_orgs = 1;
   */
  maxOrgs: number;

  /**
   * Tracks the account owner's progress through the getting-started guide.
   *
   * @generated from field: optional aserto.directory.schema.v3.GuideState getting_started = 3;
   */
  gettingStarted?: GuideState;

  /**
   * The default organization for the account
   *
   * @generated from field: string default_tenant_id = 4;
   */
  defaultTenantId: string;
};

/**
 * Describes the message aserto.directory.schema.v3.AccountProperties.
 * Use `create(AccountPropertiesSchema)` to create a new message.
 */
export const AccountPropertiesSchema: GenMessage<AccountProperties> = /*@__PURE__*/
  messageDesc(file_aserto_directory_schema_v3_tenant, 1);

/**
 * The state of a user's progress through the console's getting started guide.
 *
 * @generated from message aserto.directory.schema.v3.GuideState
 */
export type GuideState = Message<"aserto.directory.schema.v3.GuideState"> & {
  /**
   * Whether or not to display the getting started guide.
   *
   * @generated from field: bool show = 1;
   */
  show: boolean;

  /**
   * Progress information about individual steps in the guide.
   *
   * @generated from field: google.protobuf.Struct steps = 2;
   */
  steps?: JsonObject;
};

/**
 * Describes the message aserto.directory.schema.v3.GuideState.
 * Use `create(GuideStateSchema)` to create a new message.
 */
export const GuideStateSchema: GenMessage<GuideState> = /*@__PURE__*/
  messageDesc(file_aserto_directory_schema_v3_tenant, 2);

/**
 * @generated from enum aserto.directory.schema.v3.TenantKind
 */
export enum TenantKind {
  /**
   * @generated from enum value: TENANT_KIND_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: TENANT_KIND_ORGANIZATION = 1;
   */
  ORGANIZATION = 1,

  /**
   * personal tenant
   *
   * @generated from enum value: TENANT_KIND_ACCOUNT = 2;
   */
  ACCOUNT = 2,
}

/**
 * Describes the enum aserto.directory.schema.v3.TenantKind.
 */
export const TenantKindSchema: GenEnum<TenantKind> = /*@__PURE__*/
  enumDesc(file_aserto_directory_schema_v3_tenant, 0);

