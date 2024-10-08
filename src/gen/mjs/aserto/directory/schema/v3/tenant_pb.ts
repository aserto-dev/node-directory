// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/schema/v3/tenant.proto (package aserto.directory.schema.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";

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
// Retrieve enum metadata with: proto3.getEnumType(TenantKind)
proto3.util.setEnumType(TenantKind, "aserto.directory.schema.v3.TenantKind", [
  { no: 0, name: "TENANT_KIND_UNKNOWN" },
  { no: 1, name: "TENANT_KIND_ORGANIZATION" },
  { no: 2, name: "TENANT_KIND_ACCOUNT" },
]);

/**
 * Properties of a tenant object
 *
 * @generated from message aserto.directory.schema.v3.TenantProperties
 */
export class TenantProperties extends Message<TenantProperties> {
  /**
   * The kind of tenant.
   *
   * @generated from field: aserto.directory.schema.v3.TenantKind kind = 1;
   */
  kind = TenantKind.UNKNOWN;

  /**
   * Whether or not the v2 directory experience enabled for this tenant.
   *
   * @generated from field: bool directory_v2 = 2;
   */
  directoryV2 = false;

  /**
   * If true, the tenant cannot be reverted to the v1 directory experience.
   *
   * @generated from field: bool directory_v2_only = 3;
   */
  directoryV2Only = false;

  /**
   * Additional properties that are only set accounts (personal tenant).
   *
   * @generated from field: optional aserto.directory.schema.v3.AccountProperties account = 4;
   */
  account?: AccountProperties;

  constructor(data?: PartialMessage<TenantProperties>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.schema.v3.TenantProperties";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(TenantKind) },
    { no: 2, name: "directory_v2", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "directory_v2_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "account", kind: "message", T: AccountProperties, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantProperties {
    return new TenantProperties().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantProperties {
    return new TenantProperties().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantProperties {
    return new TenantProperties().fromJsonString(jsonString, options);
  }

  static equals(a: TenantProperties | PlainMessage<TenantProperties> | undefined, b: TenantProperties | PlainMessage<TenantProperties> | undefined): boolean {
    return proto3.util.equals(TenantProperties, a, b);
  }
}

/**
 * @generated from message aserto.directory.schema.v3.AccountProperties
 */
export class AccountProperties extends Message<AccountProperties> {
  /**
   * Maximum number of organizations that can be created in this account.
   * If -1, there is no limit.
   *
   * @generated from field: int32 max_orgs = 1;
   */
  maxOrgs = 0;

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
  defaultTenantId = "";

  constructor(data?: PartialMessage<AccountProperties>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.schema.v3.AccountProperties";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_orgs", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "getting_started", kind: "message", T: GuideState, opt: true },
    { no: 4, name: "default_tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountProperties {
    return new AccountProperties().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountProperties {
    return new AccountProperties().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountProperties {
    return new AccountProperties().fromJsonString(jsonString, options);
  }

  static equals(a: AccountProperties | PlainMessage<AccountProperties> | undefined, b: AccountProperties | PlainMessage<AccountProperties> | undefined): boolean {
    return proto3.util.equals(AccountProperties, a, b);
  }
}

/**
 * The state of a user's progress through the console's getting started guide.
 *
 * @generated from message aserto.directory.schema.v3.GuideState
 */
export class GuideState extends Message<GuideState> {
  /**
   * Whether or not to display the getting started guide.
   *
   * @generated from field: bool show = 1;
   */
  show = false;

  /**
   * Progress information about individual steps in the guide.
   *
   * @generated from field: google.protobuf.Struct steps = 2;
   */
  steps?: Struct;

  constructor(data?: PartialMessage<GuideState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.schema.v3.GuideState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "show", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "steps", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GuideState {
    return new GuideState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GuideState {
    return new GuideState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GuideState {
    return new GuideState().fromJsonString(jsonString, options);
  }

  static equals(a: GuideState | PlainMessage<GuideState> | undefined, b: GuideState | PlainMessage<GuideState> | undefined): boolean {
    return proto3.util.equals(GuideState, a, b);
  }
}

