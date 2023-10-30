"use strict";
// Copyright 2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constraint = exports.FieldConstraints = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from message buf.validate.priv.FieldConstraints
 */
class FieldConstraints extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated buf.validate.priv.Constraint cel = 1;
         */
        this.cel = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FieldConstraints().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FieldConstraints().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FieldConstraints().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(FieldConstraints, a, b);
    }
}
exports.FieldConstraints = FieldConstraints;
FieldConstraints.runtime = protobuf_1.proto3;
FieldConstraints.typeName = "buf.validate.priv.FieldConstraints";
FieldConstraints.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "cel", kind: "message", T: Constraint, repeated: true },
]);
/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from message buf.validate.priv.Constraint
 */
class Constraint extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string message = 2;
         */
        this.message = "";
        /**
         * @generated from field: string expression = 3;
         */
        this.expression = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Constraint().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Constraint().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Constraint().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Constraint, a, b);
    }
}
exports.Constraint = Constraint;
Constraint.runtime = protobuf_1.proto3;
Constraint.typeName = "buf.validate.priv.Constraint";
Constraint.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "expression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
