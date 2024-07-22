"use strict";
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file aserto/directory/schema/v2/group.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupProperties = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Properties of "group" objects.
 *
 * @generated from message aserto.directory.schema.v2.GroupProperties
 * @deprecated
 */
class GroupProperties extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * ID of the IDP connection the group instance is associated with.
         *
         * @generated from field: string connection_id = 1;
         */
        this.connectionId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GroupProperties().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GroupProperties().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GroupProperties().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GroupProperties, a, b);
    }
}
exports.GroupProperties = GroupProperties;
GroupProperties.runtime = protobuf_1.proto3;
GroupProperties.typeName = "aserto.directory.schema.v2.GroupProperties";
GroupProperties.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
