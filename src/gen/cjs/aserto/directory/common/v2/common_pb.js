"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/common/v2/common.proto (package aserto.directory.common.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponse = exports.PaginationRequest = exports.RelationIdentifier = exports.ObjectIdentifier = exports.RelationTypeIdentifier = exports.PermissionIdentifier = exports.ObjectTypeIdentifier = exports.ObjectDependency = exports.Relation = exports.Object$ = exports.RelationType = exports.Permission = exports.ObjectType = exports.Flag = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from enum aserto.directory.common.v2.Flag
 * @deprecated
 */
var Flag;
(function (Flag) {
    /**
     * default, no special object behavior
     *
     * @generated from enum value: FLAG_UNKNOWN = 0;
     */
    Flag[Flag["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * hidden object
     *
     * @generated from enum value: FLAG_HIDDEN = 1;
     */
    Flag[Flag["HIDDEN"] = 1] = "HIDDEN";
    /**
     * read-only object
     *
     * @generated from enum value: FLAG_READONLY = 2;
     */
    Flag[Flag["READONLY"] = 2] = "READONLY";
    /**
     * system object
     *
     * @generated from enum value: FLAG_SYSTEM = 4;
     */
    Flag[Flag["SYSTEM"] = 4] = "SYSTEM";
    /**
     * shadow object by type+key associated to parent object
     *
     * @generated from enum value: FLAG_SHADOW = 8;
     */
    Flag[Flag["SHADOW"] = 8] = "SHADOW";
})(Flag = exports.Flag || (exports.Flag = {}));
// Retrieve enum metadata with: proto3.getEnumType(Flag)
protobuf_1.proto3.util.setEnumType(Flag, "aserto.directory.common.v2.Flag", [
    { no: 0, name: "FLAG_UNKNOWN" },
    { no: 1, name: "FLAG_HIDDEN" },
    { no: 2, name: "FLAG_READONLY" },
    { no: 4, name: "FLAG_SYSTEM" },
    { no: 8, name: "FLAG_SHADOW" },
]);
/**
 * @generated from message aserto.directory.common.v2.ObjectType
 * @deprecated
 */
class ObjectType extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name (unique, lc-string)
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * object type display name
         *
         * @generated from field: string display_name = 3;
         */
        this.displayName = "";
        /**
         * object type is a subject (user|group) (default false)
         *
         * @generated from field: bool is_subject = 4;
         */
        this.isSubject = false;
        /**
         * sort ordinal (default 0)
         *
         * @generated from field: int32 ordinal = 5;
         */
        this.ordinal = 0;
        /**
         * status flag bitmap (default 0)
         *
         * @generated from field: uint32 status = 6;
         */
        this.status = 0;
        /**
         * object instance hash
         *
         * @generated from field: string hash = 23;
         */
        this.hash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ObjectType().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ObjectType().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ObjectType().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ObjectType, a, b);
    }
}
exports.ObjectType = ObjectType;
ObjectType.runtime = protobuf_1.proto3;
ObjectType.typeName = "aserto.directory.common.v2.ObjectType";
ObjectType.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_subject", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "schema", kind: "message", T: protobuf_1.Struct },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v2.Permission
 * @deprecated
 */
class Permission extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * permission name (unique, cs-string)
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * permission display name
         *
         * @generated from field: string display_name = 3;
         */
        this.displayName = "";
        /**
         * object instance hash
         *
         * @generated from field: string hash = 23;
         */
        this.hash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Permission().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Permission().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Permission().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Permission, a, b);
    }
}
exports.Permission = Permission;
Permission.runtime = protobuf_1.proto3;
Permission.typeName = "aserto.directory.common.v2.Permission";
Permission.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v2.RelationType
 * @deprecated
 */
class RelationType extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * relation type name selector
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        /**
         * object type referenced by relation
         *
         * @generated from field: string object_type = 3;
         */
        this.objectType = "";
        /**
         * relation display name
         *
         * @generated from field: string display_name = 4;
         */
        this.displayName = "";
        /**
         * sort ordinal (default 0)
         *
         * @generated from field: int32 ordinal = 5;
         */
        this.ordinal = 0;
        /**
         * status bitmap (default 0)
         *
         * @generated from field: uint32 status = 6;
         */
        this.status = 0;
        /**
         * relations union-ed with relation type instance
         *
         * @generated from field: repeated string unions = 7;
         */
        this.unions = [];
        /**
         * permissions associated to relation type instance
         *
         * @generated from field: repeated string permissions = 8;
         */
        this.permissions = [];
        /**
         * object instance hash
         *
         * @generated from field: string hash = 23;
         */
        this.hash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RelationType().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RelationType().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RelationType().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RelationType, a, b);
    }
}
exports.RelationType = RelationType;
RelationType.runtime = protobuf_1.proto3;
RelationType.typeName = "aserto.directory.common.v2.RelationType";
RelationType.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "unions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v2.Object
 * @deprecated
 */
class Object$ extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * external object key (cs-string)
         *
         * @generated from field: string key = 2;
         */
        this.key = "";
        /**
         * object type name
         *
         * @generated from field: string type = 3;
         */
        this.type = "";
        /**
         * display name object
         *
         * @generated from field: string display_name = 4;
         */
        this.displayName = "";
        /**
         * object instance hash
         *
         * @generated from field: string hash = 23;
         */
        this.hash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Object$().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Object$().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Object$().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Object$, a, b);
    }
}
exports.Object$ = Object$;
Object$.runtime = protobuf_1.proto3;
Object$.typeName = "aserto.directory.common.v2.Object";
Object$.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "properties", kind: "message", T: protobuf_1.Struct },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v2.Relation
 * @deprecated
 */
class Relation extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * relation type name
         *
         * @generated from field: string relation = 2;
         */
        this.relation = "";
        /**
         * object instance hash
         *
         * @generated from field: string hash = 23;
         */
        this.hash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Relation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Relation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Relation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Relation, a, b);
    }
}
exports.Relation = Relation;
Relation.runtime = protobuf_1.proto3;
Relation.typeName = "aserto.directory.common.v2.Relation";
Relation.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v2.ObjectDependency
 * @deprecated
 */
class ObjectDependency extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name of source object
         *
         * @generated from field: string object_type = 1;
         */
        this.objectType = "";
        /**
         * object search key of source object
         *
         * @generated from field: string object_key = 4;
         */
        this.objectKey = "";
        /**
         * relation identifier
         *
         * @generated from field: string relation = 5;
         */
        this.relation = "";
        /**
         * object type id of target object
         *
         * @generated from field: string subject_type = 7;
         */
        this.subjectType = "";
        /**
         * object search key of target object
         *
         * @generated from field: string subject_key = 10;
         */
        this.subjectKey = "";
        /**
         * dependency depth
         *
         * @generated from field: int32 depth = 11;
         */
        this.depth = 0;
        /**
         * dependency cycle
         *
         * @generated from field: bool is_cycle = 12;
         */
        this.isCycle = false;
        /**
         * dependency path
         *
         * @generated from field: repeated string path = 13;
         */
        this.path = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ObjectDependency().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ObjectDependency().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ObjectDependency().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ObjectDependency, a, b);
    }
}
exports.ObjectDependency = ObjectDependency;
ObjectDependency.runtime = protobuf_1.proto3;
ObjectDependency.typeName = "aserto.directory.common.v2.ObjectDependency";
ObjectDependency.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "subject_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "is_cycle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * ObjectType identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectTypeIdentifier
 * @deprecated
 */
class ObjectTypeIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ObjectTypeIdentifier().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ObjectTypeIdentifier().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ObjectTypeIdentifier().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ObjectTypeIdentifier, a, b);
    }
}
exports.ObjectTypeIdentifier = ObjectTypeIdentifier;
ObjectTypeIdentifier.runtime = protobuf_1.proto3;
ObjectTypeIdentifier.typeName = "aserto.directory.common.v2.ObjectTypeIdentifier";
ObjectTypeIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * Permission identifier
 *
 * @generated from message aserto.directory.common.v2.PermissionIdentifier
 * @deprecated
 */
class PermissionIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PermissionIdentifier().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PermissionIdentifier().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PermissionIdentifier().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PermissionIdentifier, a, b);
    }
}
exports.PermissionIdentifier = PermissionIdentifier;
PermissionIdentifier.runtime = protobuf_1.proto3;
PermissionIdentifier.typeName = "aserto.directory.common.v2.PermissionIdentifier";
PermissionIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * RelationType identifier
 *
 * @generated from message aserto.directory.common.v2.RelationTypeIdentifier
 * @deprecated
 */
class RelationTypeIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RelationTypeIdentifier().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RelationTypeIdentifier().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RelationTypeIdentifier().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RelationTypeIdentifier, a, b);
    }
}
exports.RelationTypeIdentifier = RelationTypeIdentifier;
RelationTypeIdentifier.runtime = protobuf_1.proto3;
RelationTypeIdentifier.typeName = "aserto.directory.common.v2.RelationTypeIdentifier";
RelationTypeIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectIdentifier
 * @deprecated
 */
class ObjectIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ObjectIdentifier().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ObjectIdentifier().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ObjectIdentifier().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ObjectIdentifier, a, b);
    }
}
exports.ObjectIdentifier = ObjectIdentifier;
ObjectIdentifier.runtime = protobuf_1.proto3;
ObjectIdentifier.typeName = "aserto.directory.common.v2.ObjectIdentifier";
ObjectIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v2.RelationIdentifier
 * @deprecated
 */
class RelationIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RelationIdentifier().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RelationIdentifier().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RelationIdentifier().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RelationIdentifier, a, b);
    }
}
exports.RelationIdentifier = RelationIdentifier;
RelationIdentifier.runtime = protobuf_1.proto3;
RelationIdentifier.typeName = "aserto.directory.common.v2.RelationIdentifier";
RelationIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "message", T: RelationTypeIdentifier },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
]);
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v2.PaginationRequest
 * @deprecated
 */
class PaginationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * requested page size, valid value between 1-100 rows (default 100)
         *
         * @generated from field: int32 size = 1;
         */
        this.size = 0;
        /**
         * pagination start token, default ""
         *
         * @generated from field: string token = 2;
         */
        this.token = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaginationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaginationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaginationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaginationRequest, a, b);
    }
}
exports.PaginationRequest = PaginationRequest;
PaginationRequest.runtime = protobuf_1.proto3;
PaginationRequest.typeName = "aserto.directory.common.v2.PaginationRequest";
PaginationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v2.PaginationResponse
 * @deprecated
 */
class PaginationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * next page token, when empty there are no more pages to fetch
         *
         * @generated from field: string next_token = 1;
         */
        this.nextToken = "";
        /**
         * result size of the page returned
         *
         * @generated from field: int32 result_size = 2;
         */
        this.resultSize = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PaginationResponse, a, b);
    }
}
exports.PaginationResponse = PaginationResponse;
PaginationResponse.runtime = protobuf_1.proto3;
PaginationResponse.typeName = "aserto.directory.common.v2.PaginationResponse";
PaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "next_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "result_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
]);
