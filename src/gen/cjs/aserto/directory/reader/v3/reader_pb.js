"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/reader/v3/reader.proto (package aserto.directory.reader.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGraphResponse = exports.GetGraphRequest = exports.CheckRelationResponse = exports.CheckRelationRequest = exports.CheckPermissionResponse = exports.CheckPermissionRequest = exports.CheckResponse = exports.CheckRequest = exports.GetRelationsResponse = exports.GetRelationsRequest = exports.GetRelationResponse = exports.GetRelationRequest = exports.GetObjectsResponse = exports.GetObjectsRequest = exports.GetObjectManyResponse = exports.GetObjectManyRequest = exports.GetObjectResponse = exports.GetObjectRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v3/common_pb.js");
/**
 * @generated from message aserto.directory.reader.v3.GetObjectRequest
 */
class GetObjectRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name (lc-string)
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
        /**
         * materialize the object relations objects
         *
         * @generated from field: bool with_relations = 3;
         */
        this.withRelations = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectRequest, a, b);
    }
}
exports.GetObjectRequest = GetObjectRequest;
GetObjectRequest.runtime = protobuf_1.proto3;
GetObjectRequest.typeName = "aserto.directory.reader.v3.GetObjectRequest";
GetObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "with_relations", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetObjectResponse
 */
class GetObjectResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object relations
         *
         * @generated from field: repeated aserto.directory.common.v3.Relation relations = 4;
         */
        this.relations = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectResponse, a, b);
    }
}
exports.GetObjectResponse = GetObjectResponse;
GetObjectResponse.runtime = protobuf_1.proto3;
GetObjectResponse.typeName = "aserto.directory.reader.v3.GetObjectResponse";
GetObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Object$ },
    { no: 4, name: "relations", kind: "message", T: common_pb_js_1.Relation, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyRequest
 */
class GetObjectManyRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object identifier list
         *
         * @generated from field: repeated aserto.directory.common.v3.ObjectIdentifier param = 1;
         */
        this.param = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectManyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectManyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectManyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectManyRequest, a, b);
    }
}
exports.GetObjectManyRequest = GetObjectManyRequest;
GetObjectManyRequest.runtime = protobuf_1.proto3;
GetObjectManyRequest.typeName = "aserto.directory.reader.v3.GetObjectManyRequest";
GetObjectManyRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectIdentifier, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetObjectManyResponse
 */
class GetObjectManyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of object instances
         *
         * @generated from field: repeated aserto.directory.common.v3.Object results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectManyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectManyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectManyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectManyResponse, a, b);
    }
}
exports.GetObjectManyResponse = GetObjectManyResponse;
GetObjectManyResponse.runtime = protobuf_1.proto3;
GetObjectManyResponse.typeName = "aserto.directory.reader.v3.GetObjectManyResponse";
GetObjectManyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Object$, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsRequest
 */
class GetObjectsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type name (lc-string)
         *
         * @generated from field: string object_type = 1;
         */
        this.objectType = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectsRequest, a, b);
    }
}
exports.GetObjectsRequest = GetObjectsRequest;
GetObjectsRequest.runtime = protobuf_1.proto3;
GetObjectsRequest.typeName = "aserto.directory.reader.v3.GetObjectsRequest";
GetObjectsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetObjectsResponse
 */
class GetObjectsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of object instances
         *
         * @generated from field: repeated aserto.directory.common.v3.Object results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectsResponse, a, b);
    }
}
exports.GetObjectsResponse = GetObjectsResponse;
GetObjectsResponse.runtime = protobuf_1.proto3;
GetObjectsResponse.typeName = "aserto.directory.reader.v3.GetObjectsResponse";
GetObjectsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Object$, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetRelationRequest
 */
class GetRelationRequest extends protobuf_1.Message {
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
         * relation name
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
         * materialize relation objects
         *
         * @generated from field: bool with_objects = 7;
         */
        this.withObjects = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationRequest, a, b);
    }
}
exports.GetRelationRequest = GetRelationRequest;
GetRelationRequest.runtime = protobuf_1.proto3;
GetRelationRequest.typeName = "aserto.directory.reader.v3.GetRelationRequest";
GetRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "with_objects", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetRelationResponse
 */
class GetRelationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * map of materialized relation objects
         *
         * @generated from field: map<string, aserto.directory.common.v3.Object> objects = 2;
         */
        this.objects = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationResponse, a, b);
    }
}
exports.GetRelationResponse = GetRelationResponse;
GetRelationResponse.runtime = protobuf_1.proto3;
GetRelationResponse.typeName = "aserto.directory.reader.v3.GetRelationResponse";
GetRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Relation },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: common_pb_js_1.Object$ } },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsRequest
 */
class GetRelationsRequest extends protobuf_1.Message {
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
         * relation name
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
         * materialize relation objects
         *
         * @generated from field: bool with_objects = 7;
         */
        this.withObjects = false;
        /**
         * only return relations that do not have a subject relation.
         *
         * @generated from field: bool with_empty_subject_relation = 8;
         */
        this.withEmptySubjectRelation = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationsRequest, a, b);
    }
}
exports.GetRelationsRequest = GetRelationsRequest;
GetRelationsRequest.runtime = protobuf_1.proto3;
GetRelationsRequest.typeName = "aserto.directory.reader.v3.GetRelationsRequest";
GetRelationsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "with_objects", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "with_empty_subject_relation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetRelationsResponse
 */
class GetRelationsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of relation instances
         *
         * @generated from field: repeated aserto.directory.common.v3.Relation results = 1;
         */
        this.results = [];
        /**
         * map of materialized relation objects
         *
         * @generated from field: map<string, aserto.directory.common.v3.Object> objects = 2;
         */
        this.objects = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationsResponse, a, b);
    }
}
exports.GetRelationsResponse = GetRelationsResponse;
GetRelationsResponse.runtime = protobuf_1.proto3;
GetRelationsResponse.typeName = "aserto.directory.reader.v3.GetRelationsResponse";
GetRelationsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Relation, repeated: true },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: common_pb_js_1.Object$ } },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckRequest
 */
class CheckRequest extends protobuf_1.Message {
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
         * relation name
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
         * collect trace information
         *
         * @generated from field: bool trace = 7;
         */
        this.trace = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckRequest, a, b);
    }
}
exports.CheckRequest = CheckRequest;
CheckRequest.runtime = protobuf_1.proto3;
CheckRequest.typeName = "aserto.directory.reader.v3.CheckRequest";
CheckRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckResponse
 */
class CheckResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * check result
         *
         * @generated from field: bool check = 1;
         */
        this.check = false;
        /**
         * trace information
         *
         * @generated from field: repeated string trace = 2;
         */
        this.trace = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckResponse, a, b);
    }
}
exports.CheckResponse = CheckResponse;
CheckResponse.runtime = protobuf_1.proto3;
CheckResponse.typeName = "aserto.directory.reader.v3.CheckResponse";
CheckResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionRequest
 */
class CheckPermissionRequest extends protobuf_1.Message {
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
         * permission name
         *
         * @generated from field: string permission = 3;
         */
        this.permission = "";
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
         * collect trace information
         *
         * @generated from field: bool trace = 7;
         */
        this.trace = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckPermissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckPermissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckPermissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckPermissionRequest, a, b);
    }
}
exports.CheckPermissionRequest = CheckPermissionRequest;
CheckPermissionRequest.runtime = protobuf_1.proto3;
CheckPermissionRequest.typeName = "aserto.directory.reader.v3.CheckPermissionRequest";
CheckPermissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckPermissionResponse
 */
class CheckPermissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * check result
         *
         * @generated from field: bool check = 1;
         */
        this.check = false;
        /**
         * trace information
         *
         * @generated from field: repeated string trace = 2;
         */
        this.trace = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckPermissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckPermissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckPermissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckPermissionResponse, a, b);
    }
}
exports.CheckPermissionResponse = CheckPermissionResponse;
CheckPermissionResponse.runtime = protobuf_1.proto3;
CheckPermissionResponse.typeName = "aserto.directory.reader.v3.CheckPermissionResponse";
CheckPermissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationRequest
 */
class CheckRelationRequest extends protobuf_1.Message {
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
         * relation name
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
         * collect trace information
         *
         * @generated from field: bool trace = 7;
         */
        this.trace = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckRelationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckRelationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckRelationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckRelationRequest, a, b);
    }
}
exports.CheckRelationRequest = CheckRelationRequest;
CheckRelationRequest.runtime = protobuf_1.proto3;
CheckRelationRequest.typeName = "aserto.directory.reader.v3.CheckRelationRequest";
CheckRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v3.CheckRelationResponse
 */
class CheckRelationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * check result
         *
         * @generated from field: bool check = 1;
         */
        this.check = false;
        /**
         * trace information
         *
         * @generated from field: repeated string trace = 2;
         */
        this.trace = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CheckRelationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CheckRelationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CheckRelationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CheckRelationResponse, a, b);
    }
}
exports.CheckRelationResponse = CheckRelationResponse;
CheckRelationResponse.runtime = protobuf_1.proto3;
CheckRelationResponse.typeName = "aserto.directory.reader.v3.CheckRelationResponse";
CheckRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetGraphRequest
 */
class GetGraphRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object type
         *
         * @generated from field: string object_type = 3;
         */
        this.objectType = "";
        /**
         * object identifier
         *
         * @generated from field: string object_id = 4;
         */
        this.objectId = "";
        /**
         * relation name
         *
         * @generated from field: string relation = 5;
         */
        this.relation = "";
        /**
         * subject type
         *
         * @generated from field: string subject_type = 6;
         */
        this.subjectType = "";
        /**
         * subject identifier
         *
         * @generated from field: string subject_id = 7;
         */
        this.subjectId = "";
        /**
         * subject relation
         *
         * @generated from field: string subject_relation = 8;
         */
        this.subjectRelation = "";
        /**
         * return graph paths for each result
         *
         * @generated from field: bool explain = 9;
         */
        this.explain = false;
        /**
         * collect trace information
         *
         * @generated from field: bool trace = 10;
         */
        this.trace = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetGraphRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetGraphRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetGraphRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetGraphRequest, a, b);
    }
}
exports.GetGraphRequest = GetGraphRequest;
GetGraphRequest.runtime = protobuf_1.proto3;
GetGraphRequest.typeName = "aserto.directory.reader.v3.GetGraphRequest";
GetGraphRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "explain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v3.GetGraphResponse
 */
class GetGraphResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * matching object identifiers
         *
         * @generated from field: repeated aserto.directory.common.v3.ObjectIdentifier results = 2;
         */
        this.results = [];
        /**
         * trace information
         *
         * @generated from field: repeated string trace = 4;
         */
        this.trace = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetGraphResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetGraphResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetGraphResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetGraphResponse, a, b);
    }
}
exports.GetGraphResponse = GetGraphResponse;
GetGraphResponse.runtime = protobuf_1.proto3;
GetGraphResponse.typeName = "aserto.directory.reader.v3.GetGraphResponse";
GetGraphResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "results", kind: "message", T: common_pb_js_1.ObjectIdentifier, repeated: true },
    { no: 3, name: "explanation", kind: "message", T: protobuf_1.Struct },
    { no: 4, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
