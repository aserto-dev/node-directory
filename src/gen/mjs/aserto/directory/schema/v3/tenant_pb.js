// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file aserto/directory/schema/v3/tenant.proto (package aserto.directory.schema.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";

/**
 * @generated from enum aserto.directory.schema.v3.TenantKind
 */
export const TenantKind = proto3.makeEnum(
  "aserto.directory.schema.v3.TenantKind",
  [
    {no: 0, name: "TENANT_KIND_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "TENANT_KIND_ORGANIZATION", localName: "ORGANIZATION"},
    {no: 2, name: "TENANT_KIND_ACCOUNT", localName: "ACCOUNT"},
  ],
);

/**
 * Properties of a tenant object
 *
 * @generated from message aserto.directory.schema.v3.TenantProperties
 */
export const TenantProperties = proto3.makeMessageType(
  "aserto.directory.schema.v3.TenantProperties",
  () => [
    { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(TenantKind) },
    { no: 2, name: "directory_v2", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "directory_v2_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "account", kind: "message", T: AccountProperties, opt: true },
  ],
);

/**
 * @generated from message aserto.directory.schema.v3.AccountProperties
 */
export const AccountProperties = proto3.makeMessageType(
  "aserto.directory.schema.v3.AccountProperties",
  () => [
    { no: 1, name: "max_orgs", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "getting_started", kind: "message", T: GuideState, opt: true },
    { no: 4, name: "default_tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The state of a user's progress through the console's getting started guide.
 *
 * @generated from message aserto.directory.schema.v3.GuideState
 */
export const GuideState = proto3.makeMessageType(
  "aserto.directory.schema.v3.GuideState",
  () => [
    { no: 1, name: "show", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "steps", kind: "message", T: Struct },
  ],
);
