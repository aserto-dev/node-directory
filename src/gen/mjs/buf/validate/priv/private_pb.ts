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

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file buf/validate/priv/private.proto (package buf.validate.priv, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldOptions, Message, proto3 } from "@bufbuild/protobuf";

/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from message buf.validate.priv.FieldConstraints
 */
export class FieldConstraints extends Message<FieldConstraints> {
  /**
   * @generated from field: repeated buf.validate.priv.Constraint cel = 1;
   */
  cel: Constraint[] = [];

  constructor(data?: PartialMessage<FieldConstraints>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.validate.priv.FieldConstraints";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cel", kind: "message", T: Constraint, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldConstraints {
    return new FieldConstraints().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldConstraints {
    return new FieldConstraints().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldConstraints {
    return new FieldConstraints().fromJsonString(jsonString, options);
  }

  static equals(a: FieldConstraints | PlainMessage<FieldConstraints> | undefined, b: FieldConstraints | PlainMessage<FieldConstraints> | undefined): boolean {
    return proto3.util.equals(FieldConstraints, a, b);
  }
}

/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from message buf.validate.priv.Constraint
 */
export class Constraint extends Message<Constraint> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: string expression = 3;
   */
  expression = "";

  constructor(data?: PartialMessage<Constraint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.validate.priv.Constraint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "expression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Constraint {
    return new Constraint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Constraint {
    return new Constraint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Constraint {
    return new Constraint().fromJsonString(jsonString, options);
  }

  static equals(a: Constraint | PlainMessage<Constraint> | undefined, b: Constraint | PlainMessage<Constraint> | undefined): boolean {
    return proto3.util.equals(Constraint, a, b);
  }
}

/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from extension: optional buf.validate.priv.FieldConstraints field = 1160;
 */
export const field = proto3.makeExtension<FieldOptions, FieldConstraints>(
  "buf.validate.priv.field", 
  FieldOptions, 
  () => ({ no: 1160, kind: "message", T: FieldConstraints, opt: true }),
);

