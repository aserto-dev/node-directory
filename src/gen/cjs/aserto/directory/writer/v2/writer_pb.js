"use strict";
// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/writer/v2/writer.proto (package aserto.directory.writer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRelationResponse = exports.DeleteRelationRequest = exports.SetRelationResponse = exports.SetRelationRequest = exports.DeleteObjectResponse = exports.DeleteObjectRequest = exports.SetObjectResponse = exports.SetObjectRequest = exports.DeletePermissionResponse = exports.DeletePermissionRequest = exports.SetPermissionResponse = exports.SetPermissionRequest = exports.DeleteRelationTypeResponse = exports.DeleteRelationTypeRequest = exports.SetRelationTypeResponse = exports.SetRelationTypeRequest = exports.DeleteObjectTypeResponse = exports.DeleteObjectTypeRequest = exports.SetObjectTypeResponse = exports.SetObjectTypeRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v2/common_pb.js");
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeRequest
 * @deprecated
 */
class SetObjectTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetObjectTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetObjectTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetObjectTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetObjectTypeRequest, a, b);
    }
}
exports.SetObjectTypeRequest = SetObjectTypeRequest;
SetObjectTypeRequest.runtime = protobuf_1.proto3;
SetObjectTypeRequest.typeName = "aserto.directory.writer.v2.SetObjectTypeRequest";
SetObjectTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "message", T: common_pb_js_1.ObjectType },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeResponse
 * @deprecated
 */
class SetObjectTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetObjectTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetObjectTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetObjectTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetObjectTypeResponse, a, b);
    }
}
exports.SetObjectTypeResponse = SetObjectTypeResponse;
SetObjectTypeResponse.runtime = protobuf_1.proto3;
SetObjectTypeResponse.typeName = "aserto.directory.writer.v2.SetObjectTypeResponse";
SetObjectTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.ObjectType },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeRequest
 * @deprecated
 */
class DeleteObjectTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteObjectTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteObjectTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteObjectTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteObjectTypeRequest, a, b);
    }
}
exports.DeleteObjectTypeRequest = DeleteObjectTypeRequest;
DeleteObjectTypeRequest.runtime = protobuf_1.proto3;
DeleteObjectTypeRequest.typeName = "aserto.directory.writer.v2.DeleteObjectTypeRequest";
DeleteObjectTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectTypeIdentifier },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeResponse
 * @deprecated
 */
class DeleteObjectTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteObjectTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteObjectTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteObjectTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteObjectTypeResponse, a, b);
    }
}
exports.DeleteObjectTypeResponse = DeleteObjectTypeResponse;
DeleteObjectTypeResponse.runtime = protobuf_1.proto3;
DeleteObjectTypeResponse.typeName = "aserto.directory.writer.v2.DeleteObjectTypeResponse";
DeleteObjectTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeRequest
 * @deprecated
 */
class SetRelationTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetRelationTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetRelationTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetRelationTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetRelationTypeRequest, a, b);
    }
}
exports.SetRelationTypeRequest = SetRelationTypeRequest;
SetRelationTypeRequest.runtime = protobuf_1.proto3;
SetRelationTypeRequest.typeName = "aserto.directory.writer.v2.SetRelationTypeRequest";
SetRelationTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "relation_type", kind: "message", T: common_pb_js_1.RelationType },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeResponse
 * @deprecated
 */
class SetRelationTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetRelationTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetRelationTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetRelationTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetRelationTypeResponse, a, b);
    }
}
exports.SetRelationTypeResponse = SetRelationTypeResponse;
SetRelationTypeResponse.runtime = protobuf_1.proto3;
SetRelationTypeResponse.typeName = "aserto.directory.writer.v2.SetRelationTypeResponse";
SetRelationTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.RelationType },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeRequest
 * @deprecated
 */
class DeleteRelationTypeRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteRelationTypeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteRelationTypeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteRelationTypeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteRelationTypeRequest, a, b);
    }
}
exports.DeleteRelationTypeRequest = DeleteRelationTypeRequest;
DeleteRelationTypeRequest.runtime = protobuf_1.proto3;
DeleteRelationTypeRequest.typeName = "aserto.directory.writer.v2.DeleteRelationTypeRequest";
DeleteRelationTypeRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.RelationTypeIdentifier },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeResponse
 * @deprecated
 */
class DeleteRelationTypeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteRelationTypeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteRelationTypeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteRelationTypeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteRelationTypeResponse, a, b);
    }
}
exports.DeleteRelationTypeResponse = DeleteRelationTypeResponse;
DeleteRelationTypeResponse.runtime = protobuf_1.proto3;
DeleteRelationTypeResponse.typeName = "aserto.directory.writer.v2.DeleteRelationTypeResponse";
DeleteRelationTypeResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionRequest
 * @deprecated
 */
class SetPermissionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetPermissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetPermissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetPermissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetPermissionRequest, a, b);
    }
}
exports.SetPermissionRequest = SetPermissionRequest;
SetPermissionRequest.runtime = protobuf_1.proto3;
SetPermissionRequest.typeName = "aserto.directory.writer.v2.SetPermissionRequest";
SetPermissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "permission", kind: "message", T: common_pb_js_1.Permission },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionResponse
 * @deprecated
 */
class SetPermissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetPermissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetPermissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetPermissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SetPermissionResponse, a, b);
    }
}
exports.SetPermissionResponse = SetPermissionResponse;
SetPermissionResponse.runtime = protobuf_1.proto3;
SetPermissionResponse.typeName = "aserto.directory.writer.v2.SetPermissionResponse";
SetPermissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Permission },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionRequest
 * @deprecated
 */
class DeletePermissionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeletePermissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeletePermissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeletePermissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeletePermissionRequest, a, b);
    }
}
exports.DeletePermissionRequest = DeletePermissionRequest;
DeletePermissionRequest.runtime = protobuf_1.proto3;
DeletePermissionRequest.typeName = "aserto.directory.writer.v2.DeletePermissionRequest";
DeletePermissionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.PermissionIdentifier },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionResponse
 * @deprecated
 */
class DeletePermissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeletePermissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeletePermissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeletePermissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeletePermissionResponse, a, b);
    }
}
exports.DeletePermissionResponse = DeletePermissionResponse;
DeletePermissionResponse.runtime = protobuf_1.proto3;
DeletePermissionResponse.typeName = "aserto.directory.writer.v2.DeletePermissionResponse";
DeletePermissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetObjectRequest
 * @deprecated
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
SetObjectRequest.typeName = "aserto.directory.writer.v2.SetObjectRequest";
SetObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object", kind: "message", T: common_pb_js_1.Object$ },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetObjectResponse
 * @deprecated
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
SetObjectResponse.typeName = "aserto.directory.writer.v2.SetObjectResponse";
SetObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Object$ },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectRequest
 * @deprecated
 */
class DeleteObjectRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
DeleteObjectRequest.typeName = "aserto.directory.writer.v2.DeleteObjectRequest";
DeleteObjectRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.ObjectIdentifier },
    { no: 2, name: "with_relations", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectResponse
 * @deprecated
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
DeleteObjectResponse.typeName = "aserto.directory.writer.v2.DeleteObjectResponse";
DeleteObjectResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetRelationRequest
 * @deprecated
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
SetRelationRequest.typeName = "aserto.directory.writer.v2.SetRelationRequest";
SetRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "relation", kind: "message", T: common_pb_js_1.Relation },
]);
/**
 * @generated from message aserto.directory.writer.v2.SetRelationResponse
 * @deprecated
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
SetRelationResponse.typeName = "aserto.directory.writer.v2.SetRelationResponse";
SetRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: common_pb_js_1.Relation },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationRequest
 * @deprecated
 */
class DeleteRelationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
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
DeleteRelationRequest.typeName = "aserto.directory.writer.v2.DeleteRelationRequest";
DeleteRelationRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: common_pb_js_1.RelationIdentifier },
]);
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationResponse
 * @deprecated
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
DeleteRelationResponse.typeName = "aserto.directory.writer.v2.DeleteRelationResponse";
DeleteRelationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
