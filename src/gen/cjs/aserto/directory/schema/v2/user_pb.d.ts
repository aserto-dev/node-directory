import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/schema/v2/user.proto.
 */
export declare const file_aserto_directory_schema_v2_user: GenFile;
/**
 * Properties of "user" objects.
 *
 * @generated from message aserto.directory.schema.v2.UserProperties
 * @deprecated
 */
export type UserProperties = Message<"aserto.directory.schema.v2.UserProperties"> & {
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
     * @generated from field: aserto.directory.schema.v2.UserStatus status = 3;
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
 * Describes the message aserto.directory.schema.v2.UserProperties.
 * Use `create(UserPropertiesSchema)` to create a new message.
 * @deprecated
 */
export declare const UserPropertiesSchema: GenMessage<UserProperties>;
/**
 * @generated from enum aserto.directory.schema.v2.UserStatus
 * @deprecated
 */
export declare enum UserStatus {
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
    DEPROVISIONED = 8
}
/**
 * Describes the enum aserto.directory.schema.v2.UserStatus.
 * @deprecated
 */
export declare const UserStatusSchema: GenEnum<UserStatus>;
