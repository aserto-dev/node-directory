// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file aserto/directory/importer/v2/importer.proto (package aserto.directory.importer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Object$, ObjectType, Permission, Relation, RelationType } from "../../common/v2/common_pb.js";
/**
 * @generated from enum aserto.directory.importer.v2.Opcode
 */
export var Opcode;
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
})(Opcode || (Opcode = {}));
// Retrieve enum metadata with: proto3.getEnumType(Opcode)
proto3.util.setEnumType(Opcode, "aserto.directory.importer.v2.Opcode", [
    { no: 0, name: "OPCODE_UNKNOWN" },
    { no: 1, name: "OPCODE_SET" },
    { no: 2, name: "OPCODE_DELETE" },
]);
/**
 * @generated from message aserto.directory.importer.v2.ImportRequest
 */
export class ImportRequest extends Message {
    /**
     * operation Opcode enum value
     *
     * @generated from field: aserto.directory.importer.v2.Opcode op_code = 1;
     */
    opCode = Opcode.UNKNOWN;
    /**
     * @generated from oneof aserto.directory.importer.v2.ImportRequest.msg
     */
    msg = { case: undefined };
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "aserto.directory.importer.v2.ImportRequest";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "op_code", kind: "enum", T: proto3.getEnumType(Opcode) },
        { no: 2, name: "object_type", kind: "message", T: ObjectType, oneof: "msg" },
        { no: 3, name: "permission", kind: "message", T: Permission, oneof: "msg" },
        { no: 4, name: "relation_type", kind: "message", T: RelationType, oneof: "msg" },
        { no: 5, name: "object", kind: "message", T: Object$, oneof: "msg" },
        { no: 6, name: "relation", kind: "message", T: Relation, oneof: "msg" },
    ]);
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
        return proto3.util.equals(ImportRequest, a, b);
    }
}
/**
 * @generated from message aserto.directory.importer.v2.ImportResponse
 */
export class ImportResponse extends Message {
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter object_type = 1;
     */
    objectType;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter permission = 2;
     */
    permission;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter relation_type = 3;
     */
    relationType;
    /**
     * object import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter object = 4;
     */
    object;
    /**
     * object_type import counter
     *
     * @generated from field: aserto.directory.importer.v2.ImportCounter relation = 5;
     */
    relation;
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "aserto.directory.importer.v2.ImportResponse";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "object_type", kind: "message", T: ImportCounter },
        { no: 2, name: "permission", kind: "message", T: ImportCounter },
        { no: 3, name: "relation_type", kind: "message", T: ImportCounter },
        { no: 4, name: "object", kind: "message", T: ImportCounter },
        { no: 5, name: "relation", kind: "message", T: ImportCounter },
    ]);
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
        return proto3.util.equals(ImportResponse, a, b);
    }
}
/**
 * @generated from message aserto.directory.importer.v2.ImportCounter
 */
export class ImportCounter extends Message {
    /**
     * number of messages received
     *
     * @generated from field: uint64 recv = 1;
     */
    recv = protoInt64.zero;
    /**
     * number of messages with OPCODE_SET
     *
     * @generated from field: uint64 set = 2;
     */
    set = protoInt64.zero;
    /**
     * number of messages with OPCODE_DELETE
     *
     * @generated from field: uint64 delete = 3;
     */
    delete = protoInt64.zero;
    /**
     * number of messages resulting in error
     *
     * @generated from field: uint64 error = 4;
     */
    error = protoInt64.zero;
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "aserto.directory.importer.v2.ImportCounter";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 2, name: "set", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 3, name: "delete", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
        { no: 4, name: "error", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    ]);
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
        return proto3.util.equals(ImportCounter, a, b);
    }
}
