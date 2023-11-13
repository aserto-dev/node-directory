"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/reader/v2/reader.proto (package aserto.directory.reader.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGraphResponse = exports.GetGraphRequest = exports.CheckResponse = exports.CheckRelationResponse = exports.CheckRelationRequest = exports.CheckPermissionResponse = exports.CheckPermissionRequest = exports.GetPermissionsResponse = exports.GetPermissionsRequest = exports.GetPermissionResponse = exports.GetPermissionRequest = exports.GetRelationsResponse = exports.GetRelationsRequest = exports.GetRelationResponse = exports.GetRelationRequest = exports.GetObjectsResponse = exports.GetObjectsRequest = exports.GetObjectManyResponse = exports.GetObjectManyRequest = exports.GetObjectResponse = exports.GetObjectRequest = exports.GetRelationTypesResponse = exports.GetRelationTypesRequest = exports.GetRelationTypeResponse = exports.GetRelationTypeRequest = exports.GetObjectTypesResponse = exports.GetObjectTypesRequest = exports.GetObjectTypeResponse = exports.GetObjectTypeRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v2/common_pb.js");
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeRequest
 */
class GetObjectTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectTypeRequest, a, b);
    }
}
exports.GetObjectTypeRequest = GetObjectTypeRequest;
GetObjectTypeRequest.runtime = protobuf_1.proto3;
GetObjectTypeRequest.typeName = "aserto.directory.reader.v2.GetObjectTypeRequest";
GetObjectTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectTypeIdentifier },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypeResponse
 */
class GetObjectTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectTypeResponse, a, b);
    }
}
exports.GetObjectTypeResponse = GetObjectTypeResponse;
GetObjectTypeResponse.runtime = protobuf_1.proto3;
GetObjectTypeResponse.typeName = "aserto.directory.reader.v2.GetObjectTypeResponse";
GetObjectTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.ObjectType },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesRequest
 */
class GetObjectTypesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectTypesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectTypesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectTypesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectTypesRequest, a, b);
    }
}
exports.GetObjectTypesRequest = GetObjectTypesRequest;
GetObjectTypesRequest.runtime = protobuf_1.proto3;
GetObjectTypesRequest.typeName = "aserto.directory.reader.v2.GetObjectTypesRequest";
GetObjectTypesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectTypesResponse
 */
class GetObjectTypesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of object types
         *
         * @generated from field: repeated aserto.directory.common.v2.ObjectType results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetObjectTypesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetObjectTypesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetObjectTypesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetObjectTypesResponse, a, b);
    }
}
exports.GetObjectTypesResponse = GetObjectTypesResponse;
GetObjectTypesResponse.runtime = protobuf_1.proto3;
GetObjectTypesResponse.typeName = "aserto.directory.reader.v2.GetObjectTypesResponse";
GetObjectTypesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.ObjectType, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeRequest
 */
class GetRelationTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationTypeRequest, a, b);
    }
}
exports.GetRelationTypeRequest = GetRelationTypeRequest;
GetRelationTypeRequest.runtime = protobuf_1.proto3;
GetRelationTypeRequest.typeName = "aserto.directory.reader.v2.GetRelationTypeRequest";
GetRelationTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.RelationTypeIdentifier },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypeResponse
 */
class GetRelationTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationTypeResponse, a, b);
    }
}
exports.GetRelationTypeResponse = GetRelationTypeResponse;
GetRelationTypeResponse.runtime = protobuf_1.proto3;
GetRelationTypeResponse.typeName = "aserto.directory.reader.v2.GetRelationTypeResponse";
GetRelationTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.RelationType },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesRequest
 */
class GetRelationTypesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationTypesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationTypesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationTypesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationTypesRequest, a, b);
    }
}
exports.GetRelationTypesRequest = GetRelationTypesRequest;
GetRelationTypesRequest.runtime = protobuf_1.proto3;
GetRelationTypesRequest.typeName = "aserto.directory.reader.v2.GetRelationTypesRequest";
GetRelationTypesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectTypeIdentifier },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationTypesResponse
 */
class GetRelationTypesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of relation types
         *
         * @generated from field: repeated aserto.directory.common.v2.RelationType results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetRelationTypesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetRelationTypesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetRelationTypesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetRelationTypesResponse, a, b);
    }
}
exports.GetRelationTypesResponse = GetRelationTypesResponse;
GetRelationTypesResponse.runtime = protobuf_1.proto3;
GetRelationTypesResponse.typeName = "aserto.directory.reader.v2.GetRelationTypesResponse";
GetRelationTypesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.RelationType, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectRequest
 */
class GetObjectRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
GetObjectRequest.typeName = "aserto.directory.reader.v2.GetObjectRequest";
GetObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 2, name: "with_relations", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectResponse
 */
class GetObjectResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object relations
         *
         * @generated from field: repeated aserto.directory.common.v2.Relation relations = 4;
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
GetObjectResponse.typeName = "aserto.directory.reader.v2.GetObjectResponse";
GetObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Object$ },
    { no: 4, name: "relations", kind: "message", T: common_pb_js_1.Relation, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyRequest
 */
class GetObjectManyRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * object identifier list
         *
         * @generated from field: repeated aserto.directory.common.v2.ObjectIdentifier param = 1;
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
GetObjectManyRequest.typeName = "aserto.directory.reader.v2.GetObjectManyRequest";
GetObjectManyRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectIdentifier, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectManyResponse
 */
class GetObjectManyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of object instances
         *
         * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
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
GetObjectManyResponse.typeName = "aserto.directory.reader.v2.GetObjectManyResponse";
GetObjectManyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Object$, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsRequest
 */
class GetObjectsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
GetObjectsRequest.typeName = "aserto.directory.reader.v2.GetObjectsRequest";
GetObjectsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectTypeIdentifier },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetObjectsResponse
 */
class GetObjectsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of object instances
         *
         * @generated from field: repeated aserto.directory.common.v2.Object results = 1;
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
GetObjectsResponse.typeName = "aserto.directory.reader.v2.GetObjectsResponse";
GetObjectsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Object$, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationRequest
 */
class GetRelationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
GetRelationRequest.typeName = "aserto.directory.reader.v2.GetRelationRequest";
GetRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.RelationIdentifier },
    { no: 2, name: "with_objects", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationResponse
 */
class GetRelationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of relation instances
         *
         * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
         */
        this.results = [];
        /**
         * map of materialized relation objects
         *
         * @generated from field: map<string, aserto.directory.common.v2.Object> objects = 2;
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
GetRelationResponse.typeName = "aserto.directory.reader.v2.GetRelationResponse";
GetRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Relation, repeated: true },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: common_pb_js_1.Object$ } },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsRequest
 */
class GetRelationsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
GetRelationsRequest.typeName = "aserto.directory.reader.v2.GetRelationsRequest";
GetRelationsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.RelationIdentifier },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetRelationsResponse
 */
class GetRelationsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of relation instances
         *
         * @generated from field: repeated aserto.directory.common.v2.Relation results = 1;
         */
        this.results = [];
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
GetRelationsResponse.typeName = "aserto.directory.reader.v2.GetRelationsResponse";
GetRelationsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Relation, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionRequest
 */
class GetPermissionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPermissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPermissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPermissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPermissionRequest, a, b);
    }
}
exports.GetPermissionRequest = GetPermissionRequest;
GetPermissionRequest.runtime = protobuf_1.proto3;
GetPermissionRequest.typeName = "aserto.directory.reader.v2.GetPermissionRequest";
GetPermissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.PermissionIdentifier },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionResponse
 */
class GetPermissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPermissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPermissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPermissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPermissionResponse, a, b);
    }
}
exports.GetPermissionResponse = GetPermissionResponse;
GetPermissionResponse.runtime = protobuf_1.proto3;
GetPermissionResponse.typeName = "aserto.directory.reader.v2.GetPermissionResponse";
GetPermissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Permission },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsRequest
 */
class GetPermissionsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPermissionsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPermissionsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPermissionsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPermissionsRequest, a, b);
    }
}
exports.GetPermissionsRequest = GetPermissionsRequest;
GetPermissionsRequest.runtime = protobuf_1.proto3;
GetPermissionsRequest.typeName = "aserto.directory.reader.v2.GetPermissionsRequest";
GetPermissionsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetPermissionsResponse
 */
class GetPermissionsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * array of permissions
         *
         * @generated from field: repeated aserto.directory.common.v2.Permission results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetPermissionsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetPermissionsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetPermissionsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetPermissionsResponse, a, b);
    }
}
exports.GetPermissionsResponse = GetPermissionsResponse;
GetPermissionsResponse.runtime = protobuf_1.proto3;
GetPermissionsResponse.typeName = "aserto.directory.reader.v2.GetPermissionsResponse";
GetPermissionsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.Permission, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionRequest
 */
class CheckPermissionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
CheckPermissionRequest.typeName = "aserto.directory.reader.v2.CheckPermissionRequest";
CheckPermissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 2, name: "permission", kind: "message", T: common_pb_js_1.PermissionIdentifier },
    { no: 3, name: "object", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v2.CheckPermissionResponse
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
CheckPermissionResponse.typeName = "aserto.directory.reader.v2.CheckPermissionResponse";
CheckPermissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationRequest
 */
class CheckRelationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
CheckRelationRequest.typeName = "aserto.directory.reader.v2.CheckRelationRequest";
CheckRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 2, name: "relation", kind: "message", T: common_pb_js_1.RelationTypeIdentifier },
    { no: 3, name: "object", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 7, name: "trace", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.reader.v2.CheckRelationResponse
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
CheckRelationResponse.typeName = "aserto.directory.reader.v2.CheckRelationResponse";
CheckRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.CheckResponse
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
CheckResponse.typeName = "aserto.directory.reader.v2.CheckResponse";
CheckResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetGraphRequest
 */
class GetGraphRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
GetGraphRequest.typeName = "aserto.directory.reader.v2.GetGraphRequest";
GetGraphRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "anchor", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 2, name: "subject", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 3, name: "relation", kind: "message", T: common_pb_js_1.RelationTypeIdentifier },
    { no: 4, name: "object", kind: "message", T: common_pb_js_1.ObjectIdentifier },
]);
/**
 * @generated from message aserto.directory.reader.v2.GetGraphResponse
 */
class GetGraphResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * dependency graph
         *
         * @generated from field: repeated aserto.directory.common.v2.ObjectDependency results = 1;
         */
        this.results = [];
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
GetGraphResponse.typeName = "aserto.directory.reader.v2.GetGraphResponse";
GetGraphResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: common_pb_js_1.ObjectDependency, repeated: true },
]);
