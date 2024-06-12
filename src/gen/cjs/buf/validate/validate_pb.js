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
exports.TimestampRules = exports.DurationRules = exports.AnyRules = exports.MapRules = exports.RepeatedRules = exports.EnumRules = exports.BytesRules = exports.StringRules = exports.BoolRules = exports.SFixed64Rules = exports.SFixed32Rules = exports.Fixed64Rules = exports.Fixed32Rules = exports.SInt64Rules = exports.SInt32Rules = exports.UInt64Rules = exports.UInt32Rules = exports.Int64Rules = exports.Int32Rules = exports.DoubleRules = exports.FloatRules = exports.FieldConstraints = exports.OneofConstraints = exports.MessageConstraints = exports.KnownRegex = exports.Ignore = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const expression_pb_js_1 = require("./expression_pb.js");
/**
 * Specifies how FieldConstraints.ignore behaves. See the documentation for
 * FieldConstraints.required for definitions of "populated" and "nullable".
 *
 * @generated from enum buf.validate.Ignore
 */
var Ignore;
(function (Ignore) {
    /**
     * Validation is only skipped if it's an unpopulated nullable fields.
     *
     * ```proto
     * syntax="proto3";
     *
     * message Request {
     *   // The uri rule applies to any value, including the empty string.
     *   string foo = 1 [
     *     (buf.validate.field).string.uri = true
     *   ];
     *
     *   // The uri rule only applies if the field is set, including if it's
     *   // set to the empty string.
     *   optional string bar = 2 [
     *     (buf.validate.field).string.uri = true
     *   ];
     *
     *   // The min_items rule always applies, even if the list is empty.
     *   repeated string baz = 3 [
     *     (buf.validate.field).repeated.min_items = 3
     *   ];
     *
     *   // The custom CEL rule applies only if the field is set, including if
     *   // it's the "zero" value of that message.
     *   SomeMessage quux = 4 [
     *     (buf.validate.field).cel = {/* ... *\/}
     *   ];
     * }
     * ```
     *
     * @generated from enum value: IGNORE_UNSPECIFIED = 0;
     */
    Ignore[Ignore["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Validation is skipped if the field is unpopulated. This rule is redundant
     * if the field is already nullable. This value is equivalent behavior to the
     * deprecated ignore_empty rule.
     *
     * ```proto
     * syntax="proto3
     *
     * message Request {
     *   // The uri rule applies only if the value is not the empty string.
     *   string foo = 1 [
     *     (buf.validate.field).string.uri = true,
     *     (buf.validate.field).ignore = IGNORE_IF_UNPOPULATED
     *   ];
     *
     *   // IGNORE_IF_UNPOPULATED is equivalent to IGNORE_UNSPECIFIED in this
     *   // case: the uri rule only applies if the field is set, including if
     *   // it's set to the empty string.
     *   optional string bar = 2 [
     *     (buf.validate.field).string.uri = true,
     *     (buf.validate.field).ignore = IGNORE_IF_UNPOPULATED
     *   ];
     *
     *   // The min_items rule only applies if the list has at least one item.
     *   repeated string baz = 3 [
     *     (buf.validate.field).repeated.min_items = 3,
     *     (buf.validate.field).ignore = IGNORE_IF_UNPOPULATED
     *   ];
     *
     *   // IGNORE_IF_UNPOPULATED is equivalent to IGNORE_UNSPECIFIED in this
     *   // case: the custom CEL rule applies only if the field is set, including
     *   // if it's the "zero" value of that message.
     *   SomeMessage quux = 4 [
     *     (buf.validate.field).cel = {/* ... *\/},
     *     (buf.validate.field).ignore = IGNORE_IF_UNPOPULATED
     *   ];
     * }
     * ```
     *
     * @generated from enum value: IGNORE_IF_UNPOPULATED = 1;
     */
    Ignore[Ignore["IF_UNPOPULATED"] = 1] = "IF_UNPOPULATED";
    /**
     * Validation is skipped if the field is unpopulated or if it is a nullable
     * field populated with its default value. This is typically the zero or
     * empty value, but proto2 scalars support custom defaults. For messages, the
     * default is a non-null message with all its fields unpopulated.
     *
     * ```proto
     * syntax="proto3
     *
     * message Request {
     *   // IGNORE_IF_DEFAULT_VALUE is equivalent to IGNORE_IF_UNPOPULATED in
     *   // this case; the uri rule applies only if the value is not the empty
     *   // string.
     *   string foo = 1 [
     *     (buf.validate.field).string.uri = true,
     *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE
     *   ];
     *
     *   // The uri rule only applies if the field is set to a value other than
     *   // the empty string.
     *   optional string bar = 2 [
     *     (buf.validate.field).string.uri = true,
     *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE
     *   ];
     *
     *   // IGNORE_IF_DEFAULT_VALUE is equivalent to IGNORE_IF_UNPOPULATED in
     *   // this case; the min_items rule only applies if the list has at least
     *   // one item.
     *   repeated string baz = 3 [
     *     (buf.validate.field).repeated.min_items = 3,
     *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE
     *   ];
     *
     *   // The custom CEL rule only applies if the field is set to a value other
     *   // than an empty message (i.e., fields are unpopulated).
     *   SomeMessage quux = 4 [
     *     (buf.validate.field).cel = {/* ... *\/},
     *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE
     *   ];
     * }
     * ```
     *
     * This rule is affected by proto2 custom default values:
     *
     * ```proto
     * syntax="proto2";
     *
     * message Request {
     *   // The gt rule only applies if the field is set and it's value is not
     *   the default (i.e., not -42). The rule even applies if the field is set
     *   to zero since the default value differs.
     *   optional int32 value = 1 [
     *     default = -42,
     *     (buf.validate.field).int32.gt = 0,
     *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE
     *   ];
     * }
     *
     * @generated from enum value: IGNORE_IF_DEFAULT_VALUE = 2;
     */
    Ignore[Ignore["IF_DEFAULT_VALUE"] = 2] = "IF_DEFAULT_VALUE";
    /**
     * The validation rules of this field will be skipped and not evaluated. This
     * is useful for situations that necessitate turning off the rules of a field
     * containing a message that may not make sense in the current context, or to
     * temporarily disable constraints during development.
     *
     * ```proto
     * message MyMessage {
     *   // The field's rules will always be ignored, including any validation's
     *   // on value's fields.
     *   MyOtherMessage value = 1 [
     *     (buf.validate.field).ignore = IGNORE_ALWAYS];
     * }
     * ```
     *
     * @generated from enum value: IGNORE_ALWAYS = 3;
     */
    Ignore[Ignore["ALWAYS"] = 3] = "ALWAYS";
    /**
     * Deprecated: Use IGNORE_IF_UNPOPULATED instead. TODO: Remove this value pre-v1.
     *
     * @generated from enum value: IGNORE_EMPTY = 1 [deprecated = true];
     * @deprecated
     */
    Ignore[Ignore["EMPTY"] = 1] = "EMPTY";
    /**
     * Deprecated: Use IGNORE_IF_DEFAULT_VALUE. TODO: Remove this value pre-v1.
     *
     * @generated from enum value: IGNORE_DEFAULT = 2 [deprecated = true];
     * @deprecated
     */
    Ignore[Ignore["DEFAULT"] = 2] = "DEFAULT";
})(Ignore = exports.Ignore || (exports.Ignore = {}));
// Retrieve enum metadata with: proto3.getEnumType(Ignore)
protobuf_1.proto3.util.setEnumType(Ignore, "buf.validate.Ignore", [
    { no: 0, name: "IGNORE_UNSPECIFIED" },
    { no: 1, name: "IGNORE_IF_UNPOPULATED" },
    { no: 2, name: "IGNORE_IF_DEFAULT_VALUE" },
    { no: 3, name: "IGNORE_ALWAYS" },
    { no: 1, name: "IGNORE_EMPTY" },
    { no: 2, name: "IGNORE_DEFAULT" },
]);
/**
 * WellKnownRegex contain some well-known patterns.
 *
 * @generated from enum buf.validate.KnownRegex
 */
var KnownRegex;
(function (KnownRegex) {
    /**
     * @generated from enum value: KNOWN_REGEX_UNSPECIFIED = 0;
     */
    KnownRegex[KnownRegex["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * HTTP header name as defined by [RFC 7230](https://tools.ietf.org/html/rfc7230#section-3.2).
     *
     * @generated from enum value: KNOWN_REGEX_HTTP_HEADER_NAME = 1;
     */
    KnownRegex[KnownRegex["HTTP_HEADER_NAME"] = 1] = "HTTP_HEADER_NAME";
    /**
     * HTTP header value as defined by [RFC 7230](https://tools.ietf.org/html/rfc7230#section-3.2.4).
     *
     * @generated from enum value: KNOWN_REGEX_HTTP_HEADER_VALUE = 2;
     */
    KnownRegex[KnownRegex["HTTP_HEADER_VALUE"] = 2] = "HTTP_HEADER_VALUE";
})(KnownRegex = exports.KnownRegex || (exports.KnownRegex = {}));
// Retrieve enum metadata with: proto3.getEnumType(KnownRegex)
protobuf_1.proto3.util.setEnumType(KnownRegex, "buf.validate.KnownRegex", [
    { no: 0, name: "KNOWN_REGEX_UNSPECIFIED" },
    { no: 1, name: "KNOWN_REGEX_HTTP_HEADER_NAME" },
    { no: 2, name: "KNOWN_REGEX_HTTP_HEADER_VALUE" },
]);
/**
 * MessageConstraints represents validation rules that are applied to the entire message.
 * It includes disabling options and a list of Constraint messages representing Common Expression Language (CEL) validation rules.
 *
 * @generated from message buf.validate.MessageConstraints
 */
class MessageConstraints extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `cel` is a repeated field of type Constraint. Each Constraint specifies a validation rule to be applied to this message.
         * These constraints are written in Common Expression Language (CEL) syntax. For more information on
         * CEL, [see our documentation](https://github.com/bufbuild/protovalidate/blob/main/docs/cel.md).
         *
         *
         * ```proto
         * message MyMessage {
         *   // The field `foo` must be greater than 42.
         *   option (buf.validate.message).cel = {
         *     id: "my_message.value",
         *     message: "value must be greater than 42",
         *     expression: "this.foo > 42",
         *   };
         *   optional int32 foo = 1;
         * }
         * ```
         *
         * @generated from field: repeated buf.validate.Constraint cel = 3;
         */
        this.cel = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MessageConstraints().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MessageConstraints().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MessageConstraints().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MessageConstraints, a, b);
    }
}
exports.MessageConstraints = MessageConstraints;
MessageConstraints.runtime = protobuf_1.proto3;
MessageConstraints.typeName = "buf.validate.MessageConstraints";
MessageConstraints.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "cel", kind: "message", T: expression_pb_js_1.Constraint, repeated: true },
]);
/**
 * The `OneofConstraints` message type enables you to manage constraints for
 * oneof fields in your protobuf messages.
 *
 * @generated from message buf.validate.OneofConstraints
 */
class OneofConstraints extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OneofConstraints().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OneofConstraints().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OneofConstraints().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(OneofConstraints, a, b);
    }
}
exports.OneofConstraints = OneofConstraints;
OneofConstraints.runtime = protobuf_1.proto3;
OneofConstraints.typeName = "buf.validate.OneofConstraints";
OneofConstraints.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "required", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
]);
/**
 * FieldConstraints encapsulates the rules for each type of field. Depending on
 * the field, the correct set should be used to ensure proper validations.
 *
 * @generated from message buf.validate.FieldConstraints
 */
class FieldConstraints extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `cel` is a repeated field used to represent a textual expression
         * in the Common Expression Language (CEL) syntax. For more information on
         * CEL, [see our documentation](https://github.com/bufbuild/protovalidate/blob/main/docs/cel.md).
         *
         * ```proto
         * message MyMessage {
         *   // The field `value` must be greater than 42.
         *   optional int32 value = 1 [(buf.validate.field).cel = {
         *     id: "my_message.value",
         *     message: "value must be greater than 42",
         *     expression: "this > 42",
         *   }];
         * }
         * ```
         *
         * @generated from field: repeated buf.validate.Constraint cel = 23;
         */
        this.cel = [];
        /**
         * If `required` is true, the field must be populated. A populated field can be
         * described as "serialized in the wire format," which includes:
         *
         * - the following "nullable" fields must be explicitly set to be considered populated:
         *   - singular message fields (whose fields may be unpopulated/default values)
         *   - member fields of a oneof (may be their default value)
         *   - proto3 optional fields (may be their default value)
         *   - proto2 scalar fields (both optional and required)
         * - proto3 scalar fields must be non-zero to be considered populated
         * - repeated and map fields must be non-empty to be considered populated
         *
         * ```proto
         * message MyMessage {
         *   // The field `value` must be set to a non-null value.
         *   optional MyOtherMessage value = 1 [(buf.validate.field).required = true];
         * }
         * ```
         *
         * @generated from field: bool required = 25;
         */
        this.required = false;
        /**
         * Skip validation on the field if its value matches the specified criteria.
         * See Ignore enum for details.
         *
         * ```proto
         * message UpdateRequest {
         *   // The uri rule only applies if the field is populated and not an empty
         *   // string.
         *   optional string url = 1 [
         *     (buf.validate.field).ignore = IGNORE_IF_DEFAULT_VALUE,
         *     (buf.validate.field).string.uri = true,
         *   ];
         * }
         * ```
         *
         * @generated from field: buf.validate.Ignore ignore = 27;
         */
        this.ignore = Ignore.UNSPECIFIED;
        /**
         * @generated from oneof buf.validate.FieldConstraints.type
         */
        this.type = { case: undefined };
        /**
         * DEPRECATED: use ignore=IGNORE_ALWAYS instead. TODO: remove this field pre-v1.
         *
         * @generated from field: bool skipped = 24 [deprecated = true];
         * @deprecated
         */
        this.skipped = false;
        /**
         * DEPRECATED: use ignore=IGNORE_IF_UNPOPULATED instead. TODO: remove this field pre-v1.
         *
         * @generated from field: bool ignore_empty = 26 [deprecated = true];
         * @deprecated
         */
        this.ignoreEmpty = false;
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
FieldConstraints.typeName = "buf.validate.FieldConstraints";
FieldConstraints.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 23, name: "cel", kind: "message", T: expression_pb_js_1.Constraint, repeated: true },
    { no: 25, name: "required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 27, name: "ignore", kind: "enum", T: protobuf_1.proto3.getEnumType(Ignore) },
    { no: 1, name: "float", kind: "message", T: FloatRules, oneof: "type" },
    { no: 2, name: "double", kind: "message", T: DoubleRules, oneof: "type" },
    { no: 3, name: "int32", kind: "message", T: Int32Rules, oneof: "type" },
    { no: 4, name: "int64", kind: "message", T: Int64Rules, oneof: "type" },
    { no: 5, name: "uint32", kind: "message", T: UInt32Rules, oneof: "type" },
    { no: 6, name: "uint64", kind: "message", T: UInt64Rules, oneof: "type" },
    { no: 7, name: "sint32", kind: "message", T: SInt32Rules, oneof: "type" },
    { no: 8, name: "sint64", kind: "message", T: SInt64Rules, oneof: "type" },
    { no: 9, name: "fixed32", kind: "message", T: Fixed32Rules, oneof: "type" },
    { no: 10, name: "fixed64", kind: "message", T: Fixed64Rules, oneof: "type" },
    { no: 11, name: "sfixed32", kind: "message", T: SFixed32Rules, oneof: "type" },
    { no: 12, name: "sfixed64", kind: "message", T: SFixed64Rules, oneof: "type" },
    { no: 13, name: "bool", kind: "message", T: BoolRules, oneof: "type" },
    { no: 14, name: "string", kind: "message", T: StringRules, oneof: "type" },
    { no: 15, name: "bytes", kind: "message", T: BytesRules, oneof: "type" },
    { no: 16, name: "enum", kind: "message", T: EnumRules, oneof: "type" },
    { no: 18, name: "repeated", kind: "message", T: RepeatedRules, oneof: "type" },
    { no: 19, name: "map", kind: "message", T: MapRules, oneof: "type" },
    { no: 20, name: "any", kind: "message", T: AnyRules, oneof: "type" },
    { no: 21, name: "duration", kind: "message", T: DurationRules, oneof: "type" },
    { no: 22, name: "timestamp", kind: "message", T: TimestampRules, oneof: "type" },
    { no: 24, name: "skipped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 26, name: "ignore_empty", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * FloatRules describes the constraints applied to `float` values. These
 * rules may also be applied to the `google.protobuf.FloatValue` Well-Known-Type.
 *
 * @generated from message buf.validate.FloatRules
 */
class FloatRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.FloatRules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.FloatRules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message
         * is generated.
         *
         * ```proto
         * message MyFloat {
         *   // value must be in list [1.0, 2.0, 3.0]
         *   repeated float value = 1 (buf.validate.field).float = { in: [1.0, 2.0, 3.0] };
         * }
         * ```
         *
         * @generated from field: repeated float in = 6;
         */
        this.in = [];
        /**
         * `in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyFloat {
         *   // value must not be in list [1.0, 2.0, 3.0]
         *   repeated float value = 1 (buf.validate.field).float = { not_in: [1.0, 2.0, 3.0] };
         * }
         * ```
         *
         * @generated from field: repeated float not_in = 7;
         */
        this.notIn = [];
        /**
         * `finite` requires the field value to be finite. If the field value is
         * infinite or NaN, an error message is generated.
         *
         * @generated from field: bool finite = 8;
         */
        this.finite = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FloatRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FloatRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FloatRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(FloatRules, a, b);
    }
}
exports.FloatRules = FloatRules;
FloatRules.runtime = protobuf_1.proto3;
FloatRules.typeName = "buf.validate.FloatRules";
FloatRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 8, name: "finite", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * DoubleRules describes the constraints applied to `double` values. These
 * rules may also be applied to the `google.protobuf.DoubleValue` Well-Known-Type.
 *
 * @generated from message buf.validate.DoubleRules
 */
class DoubleRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.DoubleRules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.DoubleRules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyDouble {
         *   // value must be in list [1.0, 2.0, 3.0]
         *   repeated double value = 1 (buf.validate.field).double = { in: [1.0, 2.0, 3.0] };
         * }
         * ```
         *
         * @generated from field: repeated double in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyDouble {
         *   // value must not be in list [1.0, 2.0, 3.0]
         *   repeated double value = 1 (buf.validate.field).double = { not_in: [1.0, 2.0, 3.0] };
         * }
         * ```
         *
         * @generated from field: repeated double not_in = 7;
         */
        this.notIn = [];
        /**
         * `finite` requires the field value to be finite. If the field value is
         * infinite or NaN, an error message is generated.
         *
         * @generated from field: bool finite = 8;
         */
        this.finite = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DoubleRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DoubleRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DoubleRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DoubleRules, a, b);
    }
}
exports.DoubleRules = DoubleRules;
DoubleRules.runtime = protobuf_1.proto3;
DoubleRules.typeName = "buf.validate.DoubleRules";
DoubleRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 8, name: "finite", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * Int32Rules describes the constraints applied to `int32` values. These
 * rules may also be applied to the `google.protobuf.Int32Value` Well-Known-Type.
 *
 * @generated from message buf.validate.Int32Rules
 */
class Int32Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.Int32Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.Int32Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyInt32 {
         *   // value must be in list [1, 2, 3]
         *   repeated int32 value = 1 (buf.validate.field).int32 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated int32 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error message
         * is generated.
         *
         * ```proto
         * message MyInt32 {
         *   // value must not be in list [1, 2, 3]
         *   repeated int32 value = 1 (buf.validate.field).int32 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated int32 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Int32Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Int32Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Int32Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Int32Rules, a, b);
    }
}
exports.Int32Rules = Int32Rules;
Int32Rules.runtime = protobuf_1.proto3;
Int32Rules.typeName = "buf.validate.Int32Rules";
Int32Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
]);
/**
 * Int64Rules describes the constraints applied to `int64` values. These
 * rules may also be applied to the `google.protobuf.Int64Value` Well-Known-Type.
 *
 * @generated from message buf.validate.Int64Rules
 */
class Int64Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.Int64Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.Int64Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyInt64 {
         *   // value must be in list [1, 2, 3]
         *   repeated int64 value = 1 (buf.validate.field).int64 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated int64 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyInt64 {
         *   // value must not be in list [1, 2, 3]
         *   repeated int64 value = 1 (buf.validate.field).int64 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated int64 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Int64Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Int64Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Int64Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Int64Rules, a, b);
    }
}
exports.Int64Rules = Int64Rules;
Int64Rules.runtime = protobuf_1.proto3;
Int64Rules.typeName = "buf.validate.Int64Rules";
Int64Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
]);
/**
 * UInt32Rules describes the constraints applied to `uint32` values. These
 * rules may also be applied to the `google.protobuf.UInt32Value` Well-Known-Type.
 *
 * @generated from message buf.validate.UInt32Rules
 */
class UInt32Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.UInt32Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.UInt32Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyUInt32 {
         *   // value must be in list [1, 2, 3]
         *   repeated uint32 value = 1 (buf.validate.field).uint32 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated uint32 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyUInt32 {
         *   // value must not be in list [1, 2, 3]
         *   repeated uint32 value = 1 (buf.validate.field).uint32 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated uint32 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UInt32Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UInt32Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UInt32Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(UInt32Rules, a, b);
    }
}
exports.UInt32Rules = UInt32Rules;
UInt32Rules.runtime = protobuf_1.proto3;
UInt32Rules.typeName = "buf.validate.UInt32Rules";
UInt32Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
]);
/**
 * UInt64Rules describes the constraints applied to `uint64` values. These
 * rules may also be applied to the `google.protobuf.UInt64Value` Well-Known-Type.
 *
 * @generated from message buf.validate.UInt64Rules
 */
class UInt64Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.UInt64Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.UInt64Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyUInt64 {
         *   // value must be in list [1, 2, 3]
         *   repeated uint64 value = 1 (buf.validate.field).uint64 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated uint64 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyUInt64 {
         *   // value must not be in list [1, 2, 3]
         *   repeated uint64 value = 1 (buf.validate.field).uint64 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated uint64 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UInt64Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UInt64Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UInt64Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(UInt64Rules, a, b);
    }
}
exports.UInt64Rules = UInt64Rules;
UInt64Rules.runtime = protobuf_1.proto3;
UInt64Rules.typeName = "buf.validate.UInt64Rules";
UInt64Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
]);
/**
 * SInt32Rules describes the constraints applied to `sint32` values.
 *
 * @generated from message buf.validate.SInt32Rules
 */
class SInt32Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.SInt32Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.SInt32Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MySInt32 {
         *   // value must be in list [1, 2, 3]
         *   repeated sint32 value = 1 (buf.validate.field).sint32 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sint32 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MySInt32 {
         *   // value must not be in list [1, 2, 3]
         *   repeated sint32 value = 1 (buf.validate.field).sint32 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sint32 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SInt32Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SInt32Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SInt32Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SInt32Rules, a, b);
    }
}
exports.SInt32Rules = SInt32Rules;
SInt32Rules.runtime = protobuf_1.proto3;
SInt32Rules.typeName = "buf.validate.SInt32Rules";
SInt32Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 17 /* ScalarType.SINT32 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 17 /* ScalarType.SINT32 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 17 /* ScalarType.SINT32 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 17 /* ScalarType.SINT32 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
]);
/**
 * SInt64Rules describes the constraints applied to `sint64` values.
 *
 * @generated from message buf.validate.SInt64Rules
 */
class SInt64Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.SInt64Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.SInt64Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message
         * is generated.
         *
         * ```proto
         * message MySInt64 {
         *   // value must be in list [1, 2, 3]
         *   repeated sint64 value = 1 (buf.validate.field).sint64 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sint64 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MySInt64 {
         *   // value must not be in list [1, 2, 3]
         *   repeated sint64 value = 1 (buf.validate.field).sint64 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sint64 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SInt64Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SInt64Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SInt64Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SInt64Rules, a, b);
    }
}
exports.SInt64Rules = SInt64Rules;
SInt64Rules.runtime = protobuf_1.proto3;
SInt64Rules.typeName = "buf.validate.SInt64Rules";
SInt64Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 18 /* ScalarType.SINT64 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 18 /* ScalarType.SINT64 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 18 /* ScalarType.SINT64 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 18 /* ScalarType.SINT64 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
]);
/**
 * Fixed32Rules describes the constraints applied to `fixed32` values.
 *
 * @generated from message buf.validate.Fixed32Rules
 */
class Fixed32Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.Fixed32Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.Fixed32Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message
         * is generated.
         *
         * ```proto
         * message MyFixed32 {
         *   // value must be in list [1, 2, 3]
         *   repeated fixed32 value = 1 (buf.validate.field).fixed32 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated fixed32 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyFixed32 {
         *   // value must not be in list [1, 2, 3]
         *   repeated fixed32 value = 1 (buf.validate.field).fixed32 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated fixed32 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Fixed32Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Fixed32Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Fixed32Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Fixed32Rules, a, b);
    }
}
exports.Fixed32Rules = Fixed32Rules;
Fixed32Rules.runtime = protobuf_1.proto3;
Fixed32Rules.typeName = "buf.validate.Fixed32Rules";
Fixed32Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
]);
/**
 * Fixed64Rules describes the constraints applied to `fixed64` values.
 *
 * @generated from message buf.validate.Fixed64Rules
 */
class Fixed64Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.Fixed64Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.Fixed64Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyFixed64 {
         *   // value must be in list [1, 2, 3]
         *   repeated fixed64 value = 1 (buf.validate.field).fixed64 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated fixed64 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyFixed64 {
         *   // value must not be in list [1, 2, 3]
         *   repeated fixed64 value = 1 (buf.validate.field).fixed64 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated fixed64 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Fixed64Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Fixed64Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Fixed64Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Fixed64Rules, a, b);
    }
}
exports.Fixed64Rules = Fixed64Rules;
Fixed64Rules.runtime = protobuf_1.proto3;
Fixed64Rules.typeName = "buf.validate.Fixed64Rules";
Fixed64Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
]);
/**
 * SFixed32Rules describes the constraints applied to `fixed32` values.
 *
 * @generated from message buf.validate.SFixed32Rules
 */
class SFixed32Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.SFixed32Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.SFixed32Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MySFixed32 {
         *   // value must be in list [1, 2, 3]
         *   repeated sfixed32 value = 1 (buf.validate.field).sfixed32 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sfixed32 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MySFixed32 {
         *   // value must not be in list [1, 2, 3]
         *   repeated sfixed32 value = 1 (buf.validate.field).sfixed32 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sfixed32 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SFixed32Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SFixed32Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SFixed32Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SFixed32Rules, a, b);
    }
}
exports.SFixed32Rules = SFixed32Rules;
SFixed32Rules.runtime = protobuf_1.proto3;
SFixed32Rules.typeName = "buf.validate.SFixed32Rules";
SFixed32Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
]);
/**
 * SFixed64Rules describes the constraints applied to `fixed64` values.
 *
 * @generated from message buf.validate.SFixed64Rules
 */
class SFixed64Rules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.SFixed64Rules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.SFixed64Rules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` requires the field value to be equal to one of the specified values.
         * If the field value isn't one of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MySFixed64 {
         *   // value must be in list [1, 2, 3]
         *   repeated sfixed64 value = 1 (buf.validate.field).sfixed64 = { in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sfixed64 in = 6;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to not be equal to any of the specified
         * values. If the field value is one of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MySFixed64 {
         *   // value must not be in list [1, 2, 3]
         *   repeated sfixed64 value = 1 (buf.validate.field).sfixed64 = { not_in: [1, 2, 3] };
         * }
         * ```
         *
         * @generated from field: repeated sfixed64 not_in = 7;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SFixed64Rules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SFixed64Rules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SFixed64Rules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SFixed64Rules, a, b);
    }
}
exports.SFixed64Rules = SFixed64Rules;
SFixed64Rules.runtime = protobuf_1.proto3;
SFixed64Rules.typeName = "buf.validate.SFixed64Rules";
SFixed64Rules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 2, name: "lt", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, oneof: "less_than" },
    { no: 3, name: "lte", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, oneof: "less_than" },
    { no: 4, name: "gt", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, oneof: "greater_than" },
    { no: 5, name: "gte", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, oneof: "greater_than" },
    { no: 6, name: "in", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 7, name: "not_in", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
]);
/**
 * BoolRules describes the constraints applied to `bool` values. These rules
 * may also be applied to the `google.protobuf.BoolValue` Well-Known-Type.
 *
 * @generated from message buf.validate.BoolRules
 */
class BoolRules extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BoolRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BoolRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BoolRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BoolRules, a, b);
    }
}
exports.BoolRules = BoolRules;
BoolRules.runtime = protobuf_1.proto3;
BoolRules.typeName = "buf.validate.BoolRules";
BoolRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
]);
/**
 * StringRules describes the constraints applied to `string` values These
 * rules may also be applied to the `google.protobuf.StringValue` Well-Known-Type.
 *
 * @generated from message buf.validate.StringRules
 */
class StringRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `in` specifies that the field value must be equal to one of the specified
         * values. If the field value isn't one of the specified values, an error
         * message will be generated.
         *
         * ```proto
         * message MyString {
         *   // value must be in list ["apple", "banana"]
         *   repeated string value = 1 [(buf.validate.field).string.in = "apple", (buf.validate.field).string.in = "banana"];
         * }
         * ```
         *
         * @generated from field: repeated string in = 10;
         */
        this.in = [];
        /**
         * `not_in` specifies that the field value cannot be equal to any
         * of the specified values. If the field value is one of the specified values,
         * an error message will be generated.
         * ```proto
         * message MyString {
         *   // value must not be in list ["orange", "grape"]
         *   repeated string value = 1 [(buf.validate.field).string.not_in = "orange", (buf.validate.field).string.not_in = "grape"];
         * }
         * ```
         *
         * @generated from field: repeated string not_in = 11;
         */
        this.notIn = [];
        /**
         * `WellKnown` rules provide advanced constraints against common string
         * patterns
         *
         * @generated from oneof buf.validate.StringRules.well_known
         */
        this.wellKnown = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StringRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StringRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StringRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StringRules, a, b);
    }
}
exports.StringRules = StringRules;
StringRules.runtime = protobuf_1.proto3;
StringRules.typeName = "buf.validate.StringRules";
StringRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 19, name: "len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "min_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 3, name: "max_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 20, name: "len_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "min_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "max_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 6, name: "pattern", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "contains", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 23, name: "not_contains", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "not_in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "email", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 13, name: "hostname", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 14, name: "ip", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 15, name: "ipv4", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 16, name: "ipv6", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 17, name: "uri", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 18, name: "uri_ref", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 21, name: "address", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 22, name: "uuid", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 33, name: "tuuid", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 26, name: "ip_with_prefixlen", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 27, name: "ipv4_with_prefixlen", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 28, name: "ipv6_with_prefixlen", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 29, name: "ip_prefix", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 30, name: "ipv4_prefix", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 31, name: "ipv6_prefix", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 32, name: "host_and_port", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 24, name: "well_known_regex", kind: "enum", T: protobuf_1.proto3.getEnumType(KnownRegex), oneof: "well_known" },
    { no: 25, name: "strict", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
]);
/**
 * BytesRules describe the constraints applied to `bytes` values. These rules
 * may also be applied to the `google.protobuf.BytesValue` Well-Known-Type.
 *
 * @generated from message buf.validate.BytesRules
 */
class BytesRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `in` requires the field value to be equal to one of the specified
         * values. If the field value doesn't match any of the specified values, an
         * error message is generated.
         *
         * ```protobuf
         * message MyBytes {
         *   // value must in ["\x01\x02", "\x02\x03", "\x03\x04"]
         *   optional bytes value = 1 [(buf.validate.field).bytes.in = {"\x01\x02", "\x02\x03", "\x03\x04"}];
         * }
         * ```
         *
         * @generated from field: repeated bytes in = 8;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to be not equal to any of the specified
         * values.
         * If the field value matches any of the specified values, an error message is
         * generated.
         *
         * ```proto
         * message MyBytes {
         *   // value must not in ["\x01\x02", "\x02\x03", "\x03\x04"]
         *   optional bytes value = 1 [(buf.validate.field).bytes.not_in = {"\x01\x02", "\x02\x03", "\x03\x04"}];
         * }
         * ```
         *
         * @generated from field: repeated bytes not_in = 9;
         */
        this.notIn = [];
        /**
         * WellKnown rules provide advanced constraints against common byte
         * patterns
         *
         * @generated from oneof buf.validate.BytesRules.well_known
         */
        this.wellKnown = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BytesRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BytesRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BytesRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BytesRules, a, b);
    }
}
exports.BytesRules = BytesRules;
BytesRules.runtime = protobuf_1.proto3;
BytesRules.typeName = "buf.validate.BytesRules";
BytesRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 13, name: "len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "min_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 3, name: "max_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "pattern", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 6, name: "suffix", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 7, name: "contains", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 8, name: "in", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 9, name: "not_in", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 10, name: "ip", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 11, name: "ipv4", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
    { no: 12, name: "ipv6", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "well_known" },
]);
/**
 * EnumRules describe the constraints applied to `enum` values.
 *
 * @generated from message buf.validate.EnumRules
 */
class EnumRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `in` requires the field value to be equal to one of the
         * specified enum values. If the field value doesn't match any of the
         * specified values, an error message is generated.
         *
         * ```proto
         * enum MyEnum {
         *   MY_ENUM_UNSPECIFIED = 0;
         *   MY_ENUM_VALUE1 = 1;
         *   MY_ENUM_VALUE2 = 2;
         * }
         *
         * message MyMessage {
         *   // The field `value` must be equal to one of the specified values.
         *   MyEnum value = 1 [(buf.validate.field).enum = { in: [1, 2]}];
         * }
         * ```
         *
         * @generated from field: repeated int32 in = 3;
         */
        this.in = [];
        /**
         * `not_in` requires the field value to be not equal to any of the
         * specified enum values. If the field value matches one of the specified
         * values, an error message is generated.
         *
         * ```proto
         * enum MyEnum {
         *   MY_ENUM_UNSPECIFIED = 0;
         *   MY_ENUM_VALUE1 = 1;
         *   MY_ENUM_VALUE2 = 2;
         * }
         *
         * message MyMessage {
         *   // The field `value` must not be equal to any of the specified values.
         *   MyEnum value = 1 [(buf.validate.field).enum = { not_in: [1, 2]}];
         * }
         * ```
         *
         * @generated from field: repeated int32 not_in = 4;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EnumRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EnumRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EnumRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EnumRules, a, b);
    }
}
exports.EnumRules = EnumRules;
EnumRules.runtime = protobuf_1.proto3;
EnumRules.typeName = "buf.validate.EnumRules";
EnumRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "const", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "defined_only", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "in", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 4, name: "not_in", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
]);
/**
 * RepeatedRules describe the constraints applied to `repeated` values.
 *
 * @generated from message buf.validate.RepeatedRules
 */
class RepeatedRules extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RepeatedRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RepeatedRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RepeatedRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RepeatedRules, a, b);
    }
}
exports.RepeatedRules = RepeatedRules;
RepeatedRules.runtime = protobuf_1.proto3;
RepeatedRules.typeName = "buf.validate.RepeatedRules";
RepeatedRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "min_items", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "max_items", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 3, name: "unique", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 4, name: "items", kind: "message", T: FieldConstraints, opt: true },
]);
/**
 * MapRules describe the constraints applied to `map` values.
 *
 * @generated from message buf.validate.MapRules
 */
class MapRules extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MapRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MapRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MapRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MapRules, a, b);
    }
}
exports.MapRules = MapRules;
MapRules.runtime = protobuf_1.proto3;
MapRules.typeName = "buf.validate.MapRules";
MapRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "min_pairs", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "max_pairs", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "keys", kind: "message", T: FieldConstraints, opt: true },
    { no: 5, name: "values", kind: "message", T: FieldConstraints, opt: true },
]);
/**
 * AnyRules describe constraints applied exclusively to the `google.protobuf.Any` well-known type.
 *
 * @generated from message buf.validate.AnyRules
 */
class AnyRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `in` requires the field's `type_url` to be equal to one of the
         * specified values. If it doesn't match any of the specified values, an error
         * message is generated.
         *
         * ```proto
         * message MyAny {
         *   //  The `value` field must have a `type_url` equal to one of the specified values.
         *   google.protobuf.Any value = 1 [(buf.validate.field).any.in = ["type.googleapis.com/MyType1", "type.googleapis.com/MyType2"]];
         * }
         * ```
         *
         * @generated from field: repeated string in = 2;
         */
        this.in = [];
        /**
         * requires the field's type_url to be not equal to any of the specified values. If it matches any of the specified values, an error message is generated.
         *
         * ```proto
         * message MyAny {
         *   // The field `value` must not have a `type_url` equal to any of the specified values.
         *   google.protobuf.Any value = 1 [(buf.validate.field).any.not_in = ["type.googleapis.com/ForbiddenType1", "type.googleapis.com/ForbiddenType2"]];
         * }
         * ```
         *
         * @generated from field: repeated string not_in = 3;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AnyRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AnyRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AnyRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AnyRules, a, b);
    }
}
exports.AnyRules = AnyRules;
AnyRules.runtime = protobuf_1.proto3;
AnyRules.typeName = "buf.validate.AnyRules";
AnyRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "not_in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * DurationRules describe the constraints applied exclusively to the `google.protobuf.Duration` well-known type.
 *
 * @generated from message buf.validate.DurationRules
 */
class DurationRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.DurationRules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.DurationRules.greater_than
         */
        this.greaterThan = { case: undefined };
        /**
         * `in` asserts that the field must be equal to one of the specified values of the `google.protobuf.Duration` type.
         * If the field's value doesn't correspond to any of the specified values,
         * an error message will be generated.
         *
         * ```proto
         * message MyDuration {
         *   // value must be in list [1s, 2s, 3s]
         *   google.protobuf.Duration value = 1 [(buf.validate.field).duration.in = ["1s", "2s", "3s"]];
         * }
         * ```
         *
         * @generated from field: repeated google.protobuf.Duration in = 7;
         */
        this.in = [];
        /**
         * `not_in` denotes that the field must not be equal to
         * any of the specified values of the `google.protobuf.Duration` type.
         * If the field's value matches any of these values, an error message will be
         * generated.
         *
         * ```proto
         * message MyDuration {
         *   // value must not be in list [1s, 2s, 3s]
         *   google.protobuf.Duration value = 1 [(buf.validate.field).duration.not_in = ["1s", "2s", "3s"]];
         * }
         * ```
         *
         * @generated from field: repeated google.protobuf.Duration not_in = 8;
         */
        this.notIn = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DurationRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DurationRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DurationRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DurationRules, a, b);
    }
}
exports.DurationRules = DurationRules;
DurationRules.runtime = protobuf_1.proto3;
DurationRules.typeName = "buf.validate.DurationRules";
DurationRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "const", kind: "message", T: protobuf_1.Duration, opt: true },
    { no: 3, name: "lt", kind: "message", T: protobuf_1.Duration, oneof: "less_than" },
    { no: 4, name: "lte", kind: "message", T: protobuf_1.Duration, oneof: "less_than" },
    { no: 5, name: "gt", kind: "message", T: protobuf_1.Duration, oneof: "greater_than" },
    { no: 6, name: "gte", kind: "message", T: protobuf_1.Duration, oneof: "greater_than" },
    { no: 7, name: "in", kind: "message", T: protobuf_1.Duration, repeated: true },
    { no: 8, name: "not_in", kind: "message", T: protobuf_1.Duration, repeated: true },
]);
/**
 * TimestampRules describe the constraints applied exclusively to the `google.protobuf.Timestamp` well-known type.
 *
 * @generated from message buf.validate.TimestampRules
 */
class TimestampRules extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof buf.validate.TimestampRules.less_than
         */
        this.lessThan = { case: undefined };
        /**
         * @generated from oneof buf.validate.TimestampRules.greater_than
         */
        this.greaterThan = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TimestampRules().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TimestampRules().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TimestampRules().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TimestampRules, a, b);
    }
}
exports.TimestampRules = TimestampRules;
TimestampRules.runtime = protobuf_1.proto3;
TimestampRules.typeName = "buf.validate.TimestampRules";
TimestampRules.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "const", kind: "message", T: protobuf_1.Timestamp, opt: true },
    { no: 3, name: "lt", kind: "message", T: protobuf_1.Timestamp, oneof: "less_than" },
    { no: 4, name: "lte", kind: "message", T: protobuf_1.Timestamp, oneof: "less_than" },
    { no: 7, name: "lt_now", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "less_than" },
    { no: 5, name: "gt", kind: "message", T: protobuf_1.Timestamp, oneof: "greater_than" },
    { no: 6, name: "gte", kind: "message", T: protobuf_1.Timestamp, oneof: "greater_than" },
    { no: 8, name: "gt_now", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "greater_than" },
    { no: 9, name: "within", kind: "message", T: protobuf_1.Duration, opt: true },
]);
