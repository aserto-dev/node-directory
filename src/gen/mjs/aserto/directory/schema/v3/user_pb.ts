// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/schema/v3/user.proto (package aserto.directory.schema.v3, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/schema/v3/user.proto.
 */
export const file_aserto_directory_schema_v3_user: GenFile = /*@__PURE__*/
  fileDesc("CiVhc2VydG8vZGlyZWN0b3J5L3NjaGVtYS92My91c2VyLnByb3RvEhphc2VydG8uZGlyZWN0b3J5LnNjaGVtYS52MyKQAQoOVXNlclByb3BlcnRpZXMSDQoFZW1haWwYASABKAkSDwoHcGljdHVyZRgCIAEoCRI2CgZzdGF0dXMYAyABKA4yJi5hc2VydG8uZGlyZWN0b3J5LnNjaGVtYS52My5Vc2VyU3RhdHVzEg8KB2VuYWJsZWQYBCABKAgSFQoNY29ubmVjdGlvbl9pZBgFIAEoCSqEAgoKVXNlclN0YXR1cxIXChNVU0VSX1NUQVRVU19VTktOT1dOEAASFgoSVVNFUl9TVEFUVVNfU1RBR0VEEAESGwoXVVNFUl9TVEFUVVNfUFJPVklTSU9ORUQQAhIWChJVU0VSX1NUQVRVU19BQ1RJVkUQAxIYChRVU0VSX1NUQVRVU19SRUNPVkVSWRAEEiAKHFVTRVJfU1RBVFVTX1BBU1NXT1JEX0VYUElSRUQQBRIaChZVU0VSX1NUQVRVU19MT0NLRURfT1VUEAYSGQoVVVNFUl9TVEFUVVNfU1VTUEVOREVEEAcSHQoZVVNFUl9TVEFUVVNfREVQUk9WSVNJT05FRBAIQkZaRGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3RvcnkvYXNlcnRvL2RpcmVjdG9yeS9zY2hlbWEvdjM7c2NoZW1hYgZwcm90bzM");

/**
 * Properties of "user" objects.
 *
 * @generated from message aserto.directory.schema.v3.UserProperties
 */
export type UserProperties = Message<"aserto.directory.schema.v3.UserProperties"> & {
  /**
   * main email address of user
   *
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * URL to user's picture
   *
   * @generated from field: string picture = 2;
   */
  picture: string;

  /**
   * user lifecycle status
   *
   * @generated from field: aserto.directory.schema.v3.UserStatus status = 3;
   */
  status: UserStatus;

  /**
   * enabled (false prevents the user from accessing anything)
   *
   * @generated from field: bool enabled = 4;
   */
  enabled: boolean;

  /**
   * ID of the IDP connection the user instance is associated with.
   *
   * @generated from field: string connection_id = 5;
   */
  connectionId: string;
};

/**
 * Describes the message aserto.directory.schema.v3.UserProperties.
 * Use `create(UserPropertiesSchema)` to create a new message.
 */
export const UserPropertiesSchema: GenMessage<UserProperties> = /*@__PURE__*/
  messageDesc(file_aserto_directory_schema_v3_user, 0);

/**
 * @generated from enum aserto.directory.schema.v3.UserStatus
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
   *  * An admin adds a user and sets the user password without requiring email verification.
   *  * An admin adds a user, sets the user password, and requires the user to set their password when they first sign-in.
   *  * A user self-registers into a custom app or IDP and email verification is not required.
   *  * An admin explicitly activates the user.
   *
   * @generated from enum value: USER_STATUS_ACTIVE = 3;
   */
  ACTIVE = 3,

  /**
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

/**
 * Describes the enum aserto.directory.schema.v3.UserStatus.
 */
export const UserStatusSchema: GenEnum<UserStatus> = /*@__PURE__*/
  enumDesc(file_aserto_directory_schema_v3_user, 0);

