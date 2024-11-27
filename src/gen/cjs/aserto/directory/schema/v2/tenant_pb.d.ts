import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/schema/v2/tenant.proto.
 */
export declare const file_aserto_directory_schema_v2_tenant: GenFile;
/**
 * Properties of a tenant object
 *
 * @generated from message aserto.directory.schema.v2.TenantProperties
 * @deprecated
 */
export type TenantProperties = Message<"aserto.directory.schema.v2.TenantProperties"> & {
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
};
/**
 * Describes the message aserto.directory.schema.v2.TenantProperties.
 * Use `create(TenantPropertiesSchema)` to create a new message.
 * @deprecated
 */
export declare const TenantPropertiesSchema: GenMessage<TenantProperties>;
/**
 * @generated from message aserto.directory.schema.v2.AccountProperties
 * @deprecated
 */
export type AccountProperties = Message<"aserto.directory.schema.v2.AccountProperties"> & {
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
};
/**
 * Describes the message aserto.directory.schema.v2.AccountProperties.
 * Use `create(AccountPropertiesSchema)` to create a new message.
 * @deprecated
 */
export declare const AccountPropertiesSchema: GenMessage<AccountProperties>;
/**
 * The state of a user's progress through the console's getting started guide.
 *
 * @generated from message aserto.directory.schema.v2.GuideState
 * @deprecated
 */
export type GuideState = Message<"aserto.directory.schema.v2.GuideState"> & {
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
 * Describes the message aserto.directory.schema.v2.GuideState.
 * Use `create(GuideStateSchema)` to create a new message.
 * @deprecated
 */
export declare const GuideStateSchema: GenMessage<GuideState>;
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
 * Describes the enum aserto.directory.schema.v2.TenantKind.
 * @deprecated
 */
export declare const TenantKindSchema: GenEnum<TenantKind>;
