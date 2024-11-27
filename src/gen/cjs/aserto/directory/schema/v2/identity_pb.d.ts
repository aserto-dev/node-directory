import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/schema/v2/identity.proto.
 */
export declare const file_aserto_directory_schema_v2_identity: GenFile;
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
export declare const IdentityPropertiesSchema: GenMessage<IdentityProperties>;
/**
 * @generated from enum aserto.directory.schema.v2.IdentityKind
 * @deprecated
 */
export declare enum IdentityKind {
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
    EMPID = 6
}
/**
 * Describes the enum aserto.directory.schema.v2.IdentityKind.
 * @deprecated
 */
export declare const IdentityKindSchema: GenEnum<IdentityKind>;
