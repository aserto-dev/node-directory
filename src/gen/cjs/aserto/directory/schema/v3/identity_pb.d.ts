import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum aserto.directory.schema.v3.IdentityKind
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
 * Properties of "identity" objects.
 *
 * @generated from message aserto.directory.schema.v3.IdentityProperties
 */
export declare class IdentityProperties extends Message<IdentityProperties> {
    /**
     * identity kind [email|username|uid|pid|dn|phone]
     *
     * @generated from field: aserto.directory.schema.v3.IdentityKind kind = 1;
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
    constructor(data?: PartialMessage<IdentityProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.schema.v3.IdentityProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentityProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentityProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentityProperties;
    static equals(a: IdentityProperties | PlainMessage<IdentityProperties> | undefined, b: IdentityProperties | PlainMessage<IdentityProperties> | undefined): boolean;
}
