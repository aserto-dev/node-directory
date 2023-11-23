"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/common/v3/common.proto (package aserto.directory.common.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectType = exports.PaginationResponse = exports.PaginationRequest = exports.ObjectIdentifier = exports.ObjectDependency = exports.Relation = exports.Object$ = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message aserto.directory.common.v3.Object
 */
class Object$ extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name
         *
         * @generated from field: string type = 1;
         */
        this.type = "";
        /**
         * external object identifier (cs-string, no spaces or tabs)
         *
         * @generated from field: string id = 2;
         */
        this.id = "";
        /**
         * display name object
         *
         * @generated from field: string display_name = 3;
         */
        this.displayName = "";
        /**
         * object instance etag
         *
         * @generated from field: string etag = 23;
         */
        this.etag = "";
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
Object$.typeName = "aserto.directory.common.v3.Object";
Object$.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "properties", kind: "message", T: protobuf_1.Struct },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "etag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v3.Relation
 */
class Relation extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type
         *
         * @generated from field: string object_type = 1;
         */
        this.objectType = "";
        /**
         * object identifier
         *
         * @generated from field: string object_id = 2;
         */
        this.objectId = "";
        /**
         * object relation name
         *
         * @generated from field: string relation = 3;
         */
        this.relation = "";
        /**
         * subject type
         *
         * @generated from field: string subject_type = 4;
         */
        this.subjectType = "";
        /**
         * subject identifier
         *
         * @generated from field: string subject_id = 5;
         */
        this.subjectId = "";
        /**
         * optional subject relation name
         *
         * @generated from field: string subject_relation = 6;
         */
        this.subjectRelation = "";
        /**
         * object instance etag
         *
         * @generated from field: string etag = 23;
         */
        this.etag = "";
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
Relation.typeName = "aserto.directory.common.v3.Relation";
Relation.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 23, name: "etag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.common.v3.ObjectDependency
 */
class ObjectDependency extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type
         *
         * @generated from field: string object_type = 1;
         */
        this.objectType = "";
        /**
         * object identifier
         *
         * @generated from field: string object_id = 2;
         */
        this.objectId = "";
        /**
         * object relation name
         *
         * @generated from field: string relation = 3;
         */
        this.relation = "";
        /**
         * subject type
         *
         * @generated from field: string subject_type = 4;
         */
        this.subjectType = "";
        /**
         * subject identifier
         *
         * @generated from field: string subject_id = 5;
         */
        this.subjectId = "";
        /**
         * optional subject relation name
         *
         * @generated from field: string subject_relation = 6;
         */
        this.subjectRelation = "";
        /**
         * dependency depth
         *
         * @generated from field: int32 depth = 7;
         */
        this.depth = 0;
        /**
         * dependency cycle
         *
         * @generated from field: bool is_cycle = 8;
         */
        this.isCycle = false;
        /**
         * dependency path
         *
         * @generated from field: repeated string path = 9;
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
ObjectDependency.typeName = "aserto.directory.common.v3.ObjectDependency";
ObjectDependency.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "is_cycle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v3.ObjectIdentifier
 */
class ObjectIdentifier extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type (lc-string)
         *
         * @generated from field: string object_type = 1;
         */
        this.objectType = "";
        /**
         * object identifier (cs-string)
         *
         * @generated from field: string object_id = 2;
         */
        this.objectId = "";
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
ObjectIdentifier.typeName = "aserto.directory.common.v3.ObjectIdentifier";
ObjectIdentifier.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v3.PaginationRequest
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
PaginationRequest.typeName = "aserto.directory.common.v3.PaginationRequest";
PaginationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v3.PaginationResponse
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
PaginationResponse.typeName = "aserto.directory.common.v3.PaginationResponse";
PaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "next_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Object type
 *
 * @generated from message aserto.directory.common.v3.ObjectType
 */
class ObjectType extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name (lc-string)
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * relations associated to object type
         *
         * @generated from field: repeated string relations = 2;
         */
        this.relations = [];
        /**
         * permissions associated to object type
         *
         * @generated from field: repeated string permissions = 3;
         */
        this.permissions = [];
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
ObjectType.typeName = "aserto.directory.common.v3.ObjectType";
ObjectType.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "relations", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);