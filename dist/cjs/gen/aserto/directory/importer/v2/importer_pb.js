"use strict";
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file aserto/directory/importer/v2/importer.proto (package aserto.directory.importer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCounter = exports.ImportResponse = exports.ImportRequest = exports.Opcode = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v2/common_pb.js");
/**
 * @generated from enum aserto.directory.importer.v2.Opcode
 */
var Opcode;
(function (Opcode) {
    /**
     * @generated from enum value: OPCODE_UNKNOWN = 0;
     */
    Opcode[Opcode["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: OPCODE_SET = 1;
     */
    Opcode[Opcode["SET"] = 1] = "SET";
    /**
     * @generated from enum value: OPCODE_DELETE = 2;
     */
    Opcode[Opcode["DELETE"] = 2] = "DELETE";
})(Opcode = exports.Opcode || (exports.Opcode = {}));
// Retrieve enum metadata with: proto3.getEnumType(Opcode)
protobuf_1.proto3.util.setEnumType(Opcode, "aserto.directory.importer.v2.Opcode", [
    { no: 0, name: "OPCODE_UNKNOWN" },
    { no: 1, name: "OPCODE_SET" },
    { no: 2, name: "OPCODE_DELETE" },
]);
/**
 * @generated from message aserto.directory.importer.v2.ImportRequest
 */
class ImportRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * operation Opcode enum value
         *
         * @generated from field: aserto.directory.importer.v2.Opcode op_code = 1;
         */
        this.opCode = Opcode.UNKNOWN;
        /**
         * @generated from oneof aserto.directory.importer.v2.ImportRequest.msg
         */
        this.msg = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ImportRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ImportRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ImportRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ImportRequest, a, b);
    }
}
exports.ImportRequest = ImportRequest;
ImportRequest.runtime = protobuf_1.proto3;
ImportRequest.typeName = "aserto.directory.importer.v2.ImportRequest";
ImportRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "op_code", kind: "enum", T: protobuf_1.proto3.getEnumType(Opcode) },
    { no: 2, name: "object_type", kind: "message", T: common_pb_js_1.ObjectType, oneof: "msg" },
    { no: 3, name: "permission", kind: "message", T: common_pb_js_1.Permission, oneof: "msg" },
    { no: 4, name: "relation_type", kind: "message", T: common_pb_js_1.RelationType, oneof: "msg" },
    { no: 5, name: "object", kind: "message", T: common_pb_js_1.Object$, oneof: "msg" },
    { no: 6, name: "relation", kind: "message", T: common_pb_js_1.Relation, oneof: "msg" },
]);
/**
 * @generated from message aserto.directory.importer.v2.ImportResponse
 */
class ImportResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ImportResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ImportResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ImportResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ImportResponse, a, b);
    }
}
exports.ImportResponse = ImportResponse;
ImportResponse.runtime = protobuf_1.proto3;
ImportResponse.typeName = "aserto.directory.importer.v2.ImportResponse";
ImportResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "message", T: ImportCounter },
    { no: 2, name: "permission", kind: "message", T: ImportCounter },
    { no: 3, name: "relation_type", kind: "message", T: ImportCounter },
    { no: 4, name: "object", kind: "message", T: ImportCounter },
    { no: 5, name: "relation", kind: "message", T: ImportCounter },
]);
/**
 * @generated from message aserto.directory.importer.v2.ImportCounter
 */
class ImportCounter extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * number of messages received
         *
         * @generated from field: uint64 recv = 1;
         */
        this.recv = protobuf_1.protoInt64.zero;
        /**
         * number of messages with OPCODE_SET
         *
         * @generated from field: uint64 set = 2;
         */
        this.set = protobuf_1.protoInt64.zero;
        /**
         * number of messages with OPCODE_DELETE
         *
         * @generated from field: uint64 delete = 3;
         */
        this.delete = protobuf_1.protoInt64.zero;
        /**
         * number of messages resulting in error
         *
         * @generated from field: uint64 error = 4;
         */
        this.error = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ImportCounter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ImportCounter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ImportCounter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ImportCounter, a, b);
    }
}
exports.ImportCounter = ImportCounter;
ImportCounter.runtime = protobuf_1.proto3;
ImportCounter.typeName = "aserto.directory.importer.v2.ImportCounter";
ImportCounter.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "set", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "delete", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "error", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
