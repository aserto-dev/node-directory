"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/writer/v3/writer.proto (package aserto.directory.writer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRelationResponse = exports.DeleteRelationRequest = exports.SetRelationResponse = exports.SetRelationRequest = exports.DeleteObjectResponse = exports.DeleteObjectRequest = exports.SetObjectResponse = exports.SetObjectRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v3/common_pb.js");
/**
 * @generated from message aserto.directory.writer.v3.SetObjectRequest
 */
class SetObjectRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetObjectRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetObjectRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetObjectRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetObjectRequest, a, b);
    }
}
exports.SetObjectRequest = SetObjectRequest;
SetObjectRequest.runtime = protobuf_1.proto3;
SetObjectRequest.typeName = "aserto.directory.writer.v3.SetObjectRequest";
SetObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object", kind: "message", T: common_pb_js_1.Object$ },
]);
/**
 * @generated from message aserto.directory.writer.v3.SetObjectResponse
 */
class SetObjectResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetObjectResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetObjectResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetObjectResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetObjectResponse, a, b);
    }
}
exports.SetObjectResponse = SetObjectResponse;
SetObjectResponse.runtime = protobuf_1.proto3;
SetObjectResponse.typeName = "aserto.directory.writer.v3.SetObjectResponse";
SetObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Object$ },
]);
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectRequest
 */
class DeleteObjectRequest extends protobuf_1.Message {
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
         * delete object relations, both object and subject relations.
         *
         * @generated from field: bool with_relations = 3;
         */
        this.withRelations = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteObjectRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteObjectRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteObjectRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteObjectRequest, a, b);
    }
}
exports.DeleteObjectRequest = DeleteObjectRequest;
DeleteObjectRequest.runtime = protobuf_1.proto3;
DeleteObjectRequest.typeName = "aserto.directory.writer.v3.DeleteObjectRequest";
DeleteObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "with_relations", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectResponse
 */
class DeleteObjectResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteObjectResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteObjectResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteObjectResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteObjectResponse, a, b);
    }
}
exports.DeleteObjectResponse = DeleteObjectResponse;
DeleteObjectResponse.runtime = protobuf_1.proto3;
DeleteObjectResponse.typeName = "aserto.directory.writer.v3.DeleteObjectResponse";
DeleteObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.writer.v3.SetRelationRequest
 */
class SetRelationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetRelationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetRelationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetRelationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetRelationRequest, a, b);
    }
}
exports.SetRelationRequest = SetRelationRequest;
SetRelationRequest.runtime = protobuf_1.proto3;
SetRelationRequest.typeName = "aserto.directory.writer.v3.SetRelationRequest";
SetRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "relation", kind: "message", T: common_pb_js_1.Relation },
]);
/**
 * @generated from message aserto.directory.writer.v3.SetRelationResponse
 */
class SetRelationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetRelationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetRelationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetRelationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetRelationResponse, a, b);
    }
}
exports.SetRelationResponse = SetRelationResponse;
SetRelationResponse.runtime = protobuf_1.proto3;
SetRelationResponse.typeName = "aserto.directory.writer.v3.SetRelationResponse";
SetRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Relation },
]);
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationRequest
 */
class DeleteRelationRequest extends protobuf_1.Message {
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
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteRelationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteRelationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteRelationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteRelationRequest, a, b);
    }
}
exports.DeleteRelationRequest = DeleteRelationRequest;
DeleteRelationRequest.runtime = protobuf_1.proto3;
DeleteRelationRequest.typeName = "aserto.directory.writer.v3.DeleteRelationRequest";
DeleteRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subject_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationResponse
 */
class DeleteRelationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteRelationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteRelationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteRelationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteRelationResponse, a, b);
    }
}
exports.DeleteRelationResponse = DeleteRelationResponse;
DeleteRelationResponse.runtime = protobuf_1.proto3;
DeleteRelationResponse.typeName = "aserto.directory.writer.v3.DeleteRelationResponse";
DeleteRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
