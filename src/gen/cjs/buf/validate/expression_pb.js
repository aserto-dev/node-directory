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
exports.ViolationSchema = exports.ViolationsSchema = exports.ConstraintSchema = exports.file_buf_validate_expression = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
/**
 * Describes the file buf/validate/expression.proto.
 */
exports.file_buf_validate_expression = (0, codegenv1_1.fileDesc)("Ch1idWYvdmFsaWRhdGUvZXhwcmVzc2lvbi5wcm90bxIMYnVmLnZhbGlkYXRlIj0KCkNvbnN0cmFpbnQSCgoCaWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCRISCgpleHByZXNzaW9uGAMgASgJIjkKClZpb2xhdGlvbnMSKwoKdmlvbGF0aW9ucxgBIAMoCzIXLmJ1Zi52YWxpZGF0ZS5WaW9sYXRpb24iWAoJVmlvbGF0aW9uEhIKCmZpZWxkX3BhdGgYASABKAkSFQoNY29uc3RyYWludF9pZBgCIAEoCRIPCgdtZXNzYWdlGAMgASgJEg8KB2Zvcl9rZXkYBCABKAhCcAoSYnVpbGQuYnVmLnZhbGlkYXRlQg9FeHByZXNzaW9uUHJvdG9QAVpHYnVmLmJ1aWxkL2dlbi9nby9idWZidWlsZC9wcm90b3ZhbGlkYXRlL3Byb3RvY29sYnVmZmVycy9nby9idWYvdmFsaWRhdGViBnByb3RvMw");
/**
 * Describes the message buf.validate.Constraint.
 * Use `create(ConstraintSchema)` to create a new message.
 */
exports.ConstraintSchema = (0, codegenv1_1.messageDesc)(exports.file_buf_validate_expression, 0);
/**
 * Describes the message buf.validate.Violations.
 * Use `create(ViolationsSchema)` to create a new message.
 */
exports.ViolationsSchema = (0, codegenv1_1.messageDesc)(exports.file_buf_validate_expression, 1);
/**
 * Describes the message buf.validate.Violation.
 * Use `create(ViolationSchema)` to create a new message.
 */
exports.ViolationSchema = (0, codegenv1_1.messageDesc)(exports.file_buf_validate_expression, 2);
