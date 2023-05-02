// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file aserto/directory/schema/v2/identity.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum aserto.directory.schema.v2.IdentityKind
 */
export var IdentityKind;
(function (IdentityKind) {
    /**
     * undefined state
     *
     * @generated from enum value: IDENTITY_KIND_UNKNOWN = 0;
     */
    IdentityKind[IdentityKind["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * provider unique identifier
     *
     * @generated from enum value: IDENTITY_KIND_PID = 1;
     */
    IdentityKind[IdentityKind["PID"] = 1] = "PID";
    /**
     * email address
     *
     * @generated from enum value: IDENTITY_KIND_EMAIL = 2;
     */
    IdentityKind[IdentityKind["EMAIL"] = 2] = "EMAIL";
    /**
     * username
     *
     * @generated from enum value: IDENTITY_KIND_USERNAME = 3;
     */
    IdentityKind[IdentityKind["USERNAME"] = 3] = "USERNAME";
    /**
     * distinguished name format RFC1779
     *
     * @generated from enum value: IDENTITY_KIND_DN = 4;
     */
    IdentityKind[IdentityKind["DN"] = 4] = "DN";
    /**
     * phonenumber using the format described in RFC3966, +1-201-555-0111 (without the tel: prefix)
     *
     * @generated from enum value: IDENTITY_KIND_PHONE = 5;
     */
    IdentityKind[IdentityKind["PHONE"] = 5] = "PHONE";
    /**
     * employee identifier
     *
     * @generated from enum value: IDENTITY_KIND_EMPID = 6;
     */
    IdentityKind[IdentityKind["EMPID"] = 6] = "EMPID";
})(IdentityKind || (IdentityKind = {}));
// Retrieve enum metadata with: proto3.getEnumType(IdentityKind)
proto3.util.setEnumType(IdentityKind, "aserto.directory.schema.v2.IdentityKind", [
    { no: 0, name: "IDENTITY_KIND_UNKNOWN" },
    { no: 1, name: "IDENTITY_KIND_PID" },
    { no: 2, name: "IDENTITY_KIND_EMAIL" },
    { no: 3, name: "IDENTITY_KIND_USERNAME" },
    { no: 4, name: "IDENTITY_KIND_DN" },
    { no: 5, name: "IDENTITY_KIND_PHONE" },
    { no: 6, name: "IDENTITY_KIND_EMPID" },
]);
/**
 * Properties of "identity" objects.
 *
 * @generated from message aserto.directory.schema.v2.IdentityProperties
 */
export class IdentityProperties extends Message {
    /**
     * identity kind [email|username|uid|pid|dn|phone]
     *
     * @generated from field: aserto.directory.schema.v2.IdentityKind kind = 1;
     */
    kind = IdentityKind.UNKNOWN;
    /**
     * identity provider name
     *
     * @generated from field: string provider = 2;
     */
    provider = "";
    /**
     * identity has been verified (false when not explicitly specified)
     *
     * @generated from field: bool verified = 3;
     */
    verified = false;
    /**
     * IDP connection id which owns the object instance
     *
     * @generated from field: optional string connection_id = 4;
     */
    connectionId;
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "aserto.directory.schema.v2.IdentityProperties";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(IdentityKind) },
        { no: 2, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 4, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    ]);
    static fromBinary(bytes, options) {
        return new IdentityProperties().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IdentityProperties().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IdentityProperties().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IdentityProperties, a, b);
    }
}
