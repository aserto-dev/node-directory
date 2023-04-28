// @generated by protoc-gen-es v1.2.0 with parameter "target=ts,target=js"
// @generated from file aserto/directory/schema/v2/user.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum aserto.directory.schema.v2.UserStatus
 */
export const UserStatus = proto3.makeEnum(
  "aserto.directory.schema.v2.UserStatus",
  [
    {no: 0, name: "USER_STATUS_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "USER_STATUS_STAGED", localName: "STAGED"},
    {no: 2, name: "USER_STATUS_PROVISIONED", localName: "PROVISIONED"},
    {no: 3, name: "USER_STATUS_ACTIVE", localName: "ACTIVE"},
    {no: 4, name: "USER_STATUS_RECOVERY", localName: "RECOVERY"},
    {no: 5, name: "USER_STATUS_PASSWORD_EXPIRED", localName: "PASSWORD_EXPIRED"},
    {no: 6, name: "USER_STATUS_LOCKED_OUT", localName: "LOCKED_OUT"},
    {no: 7, name: "USER_STATUS_SUSPENDED", localName: "SUSPENDED"},
    {no: 8, name: "USER_STATUS_DEPROVISIONED", localName: "DEPROVISIONED"},
  ],
);

/**
 * Properties of "user" objects.
 *
 * @generated from message aserto.directory.schema.v2.UserProperties
 */
export const UserProperties = proto3.makeMessageType(
  "aserto.directory.schema.v2.UserProperties",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "picture", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(UserStatus) },
    { no: 4, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

