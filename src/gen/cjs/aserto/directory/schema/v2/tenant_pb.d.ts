import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
/**
 * @generated from enum aserto.directory.schema.v2.TenantKind
 * @deprecated
 */
export declare enum TenantKind {
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
    ACCOUNT = 2
}
/**
 * Properties of a tenant object
 *
 * @generated from message aserto.directory.schema.v2.TenantProperties
 * @deprecated
 */
export declare class TenantProperties extends Message<TenantProperties> {
    /**
     * The kind of tenant.
     *
     * @generated from field: aserto.directory.schema.v2.TenantKind kind = 1;
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
     * @generated from field: optional aserto.directory.schema.v2.AccountProperties account = 4;
     */
    account?: AccountProperties;
    constructor(data?: PartialMessage<TenantProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.schema.v2.TenantProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantProperties;
    static equals(a: TenantProperties | PlainMessage<TenantProperties> | undefined, b: TenantProperties | PlainMessage<TenantProperties> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.schema.v2.AccountProperties
 * @deprecated
 */
export declare class AccountProperties extends Message<AccountProperties> {
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
     * @generated from field: optional aserto.directory.schema.v2.GuideState getting_started = 3;
     */
    gettingStarted?: GuideState;
    /**
     * The default organization for the account
     *
     * @generated from field: string default_tenant_id = 4;
     */
    defaultTenantId: string;
    constructor(data?: PartialMessage<AccountProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.schema.v2.AccountProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountProperties;
    static equals(a: AccountProperties | PlainMessage<AccountProperties> | undefined, b: AccountProperties | PlainMessage<AccountProperties> | undefined): boolean;
}
/**
 * The state of a user's progress through the console's getting started guide.
 *
 * @generated from message aserto.directory.schema.v2.GuideState
 * @deprecated
 */
export declare class GuideState extends Message<GuideState> {
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
    steps?: Struct;
    constructor(data?: PartialMessage<GuideState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.schema.v2.GuideState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GuideState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GuideState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GuideState;
    static equals(a: GuideState | PlainMessage<GuideState> | undefined, b: GuideState | PlainMessage<GuideState> | undefined): boolean;
}
