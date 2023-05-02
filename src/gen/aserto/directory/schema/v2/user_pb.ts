// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file aserto/directory/schema/v2/user.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum aserto.directory.schema.v2.UserStatus
 */
export enum UserStatus {
  /**
   * User status undefined
   *
   * @generated from enum value: USER_STATUS_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Staged status, is when the user object is first created, before the activation flow is initiated, or if there is a pending admin action.
   *
   * @generated from enum value: USER_STATUS_STAGED = 1;
   */
  STAGED = 1,

  /**
   * Provisioned status, is when the user object is provisioned, but the user has not provided verification by clicking through the activation email or provided a password.
   *
   * @generated from enum value: USER_STATUS_PROVISIONED = 2;
   */
  PROVISIONED = 2,

  /**
   * Active status, is when:
   *
   * @generated from enum value: USER_STATUS_ACTIVE = 3;
   */
  ACTIVE = 3,

  /**
   *  * An admin adds a user and sets the user password without requiring email verification.
   *  * An admin adds a user, sets the user password, and requires the user to set their password when they first sign-in.
   *  * A user self-registers into a custom app or IDP and email verification is not required.
   *  * An admin explicitly activates the user.
   *
   * Recovery status, when the user requests a password reset or an admin initiates one on their behalf.
   *
   * @generated from enum value: USER_STATUS_RECOVERY = 4;
   */
  RECOVERY = 4,

  /**
   * Password expired, status when the users' password has expired and the account requires an update to the password before a user is granted access.
   *
   * @generated from enum value: USER_STATUS_PASSWORD_EXPIRED = 5;
   */
  PASSWORD_EXPIRED = 5,

  /**
   * Locked out status, is when the user exceeds the number of login attempts defined in the login policy.
   *
   * @generated from enum value: USER_STATUS_LOCKED_OUT = 6;
   */
  LOCKED_OUT = 6,

  /**
   * Suspended status, when an admin explicitly suspends the user account.
   *
   * @generated from enum value: USER_STATUS_SUSPENDED = 7;
   */
  SUSPENDED = 7,

  /**
   * Deprovisioned status, is when an administrator explicitly deactivates or deprovisions/deletes the account.
   *
   * @generated from enum value: USER_STATUS_DEPROVISIONED = 8;
   */
  DEPROVISIONED = 8,
}
// Retrieve enum metadata with: proto3.getEnumType(UserStatus)
proto3.util.setEnumType(UserStatus, "aserto.directory.schema.v2.UserStatus", [
  { no: 0, name: "USER_STATUS_UNKNOWN" },
  { no: 1, name: "USER_STATUS_STAGED" },
  { no: 2, name: "USER_STATUS_PROVISIONED" },
  { no: 3, name: "USER_STATUS_ACTIVE" },
  { no: 4, name: "USER_STATUS_RECOVERY" },
  { no: 5, name: "USER_STATUS_PASSWORD_EXPIRED" },
  { no: 6, name: "USER_STATUS_LOCKED_OUT" },
  { no: 7, name: "USER_STATUS_SUSPENDED" },
  { no: 8, name: "USER_STATUS_DEPROVISIONED" },
]);

/**
 * Properties of "user" objects.
 *
 * @generated from message aserto.directory.schema.v2.UserProperties
 */
export class UserProperties extends Message<UserProperties> {
  /**
   * main email address of user
   *
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * URL to user's picture
   *
   * @generated from field: string picture = 2;
   */
  picture = "";

  /**
   * user lifecycle status
   *
   * @generated from field: aserto.directory.schema.v2.UserStatus status = 3;
   */
  status = UserStatus.UNKNOWN;

  /**
   * enabled (false prevents the user from accessing anything)
   *
   * @generated from field: bool enabled = 4;
   */
  enabled = false;

  /**
   * ID of the IDP connection the user is associated with.
   *
   * @generated from field: string connection_id = 5;
   */
  connectionId = "";

  constructor(data?: PartialMessage<UserProperties>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.schema.v2.UserProperties";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "picture", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(UserStatus) },
    { no: 4, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserProperties {
    return new UserProperties().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserProperties {
    return new UserProperties().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserProperties {
    return new UserProperties().fromJsonString(jsonString, options);
  }

  static equals(a: UserProperties | PlainMessage<UserProperties> | undefined, b: UserProperties | PlainMessage<UserProperties> | undefined): boolean {
    return proto3.util.equals(UserProperties, a, b);
  }
}
