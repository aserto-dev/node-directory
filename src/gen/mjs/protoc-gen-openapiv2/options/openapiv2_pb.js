// @generated by protoc-gen-es v1.10.0 with parameter "target=js"
// @generated from file protoc-gen-openapiv2/options/openapiv2.proto (package grpc.gateway.protoc_gen_openapiv2.options, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";

/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.Scheme
 */
export const Scheme = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.Scheme",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "HTTP"},
    {no: 2, name: "HTTPS"},
    {no: 3, name: "WS"},
    {no: 4, name: "WSS"},
  ],
);

/**
 * `Swagger` is a representation of OpenAPI v2 specification's Swagger object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#swaggerObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *    };
 *    schemes: HTTPS;
 *    consumes: "application/json";
 *    produces: "application/json";
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Swagger
 */
export const Swagger = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Swagger",
  () => [
    { no: 1, name: "swagger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "info", kind: "message", T: Info },
    { no: 3, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "base_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "schemes", kind: "enum", T: proto3.getEnumType(Scheme), repeated: true },
    { no: 6, name: "consumes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "produces", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "responses", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Response} },
    { no: 11, name: "security_definitions", kind: "message", T: SecurityDefinitions },
    { no: 12, name: "security", kind: "message", T: SecurityRequirement, repeated: true },
    { no: 13, name: "tags", kind: "message", T: Tag, repeated: true },
    { no: 14, name: "external_docs", kind: "message", T: ExternalDocumentation },
    { no: 15, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * `Operation` is a representation of OpenAPI v2 specification's Operation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#operationObject
 *
 * Example:
 *
 *  service EchoService {
 *    rpc Echo(SimpleMessage) returns (SimpleMessage) {
 *      option (google.api.http) = {
 *        get: "/v1/example/echo/{id}"
 *      };
 *
 *      option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation) = {
 *        summary: "Get a message.";
 *        operation_id: "getMessage";
 *        tags: "echo";
 *        responses: {
 *          key: "200"
 *            value: {
 *            description: "OK";
 *          }
 *        }
 *      };
 *    }
 *  }
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Operation
 */
export const Operation = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Operation",
  () => [
    { no: 1, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "external_docs", kind: "message", T: ExternalDocumentation },
    { no: 5, name: "operation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "consumes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "produces", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "responses", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Response} },
    { no: 10, name: "schemes", kind: "enum", T: proto3.getEnumType(Scheme), repeated: true },
    { no: 11, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "security", kind: "message", T: SecurityRequirement, repeated: true },
    { no: 13, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 14, name: "parameters", kind: "message", T: Parameters },
  ],
);

/**
 * `Parameters` is a representation of OpenAPI v2 specification's parameters object.
 * Note: This technically breaks compatibility with the OpenAPI 2 definition structure as we only
 * allow header parameters to be set here since we do not want users specifying custom non-header
 * parameters beyond those inferred from the Protobuf schema.
 * See: https://swagger.io/specification/v2/#parameter-object
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Parameters
 */
export const Parameters = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Parameters",
  () => [
    { no: 1, name: "headers", kind: "message", T: HeaderParameter, repeated: true },
  ],
);

/**
 * `HeaderParameter` a HTTP header parameter.
 * See: https://swagger.io/specification/v2/#parameter-object
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter
 */
export const HeaderParameter = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(HeaderParameter_Type) },
    { no: 4, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * `Type` is a supported HTTP header type.
 * See https://swagger.io/specification/v2/#parameterType.
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.Type
 */
export const HeaderParameter_Type = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.Type",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "STRING"},
    {no: 2, name: "NUMBER"},
    {no: 3, name: "INTEGER"},
    {no: 4, name: "BOOLEAN"},
  ],
);

/**
 * `Header` is a representation of OpenAPI v2 specification's Header object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#headerObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Header
 */
export const Header = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Header",
  () => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "default", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "pattern", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * `Response` is a representation of OpenAPI v2 specification's Response object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#responseObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Response
 */
export const Response = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Response",
  () => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "schema", kind: "message", T: Schema },
    { no: 3, name: "headers", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Header} },
    { no: 4, name: "examples", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 5, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * `Info` is a representation of OpenAPI v2 specification's Info object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#infoObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Info
 */
export const Info = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Info",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "terms_of_service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contact", kind: "message", T: Contact },
    { no: 5, name: "license", kind: "message", T: License },
    { no: 6, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * `Contact` is a representation of OpenAPI v2 specification's Contact object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#contactObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Contact
 */
export const Contact = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Contact",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * `License` is a representation of OpenAPI v2 specification's License object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#licenseObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.License
 */
export const License = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.License",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * `ExternalDocumentation` is a representation of OpenAPI v2 specification's
 * ExternalDocumentation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#externalDocumentationObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    ...
 *    external_docs: {
 *      description: "More about gRPC-Gateway";
 *      url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *    }
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation
 */
export const ExternalDocumentation = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation",
  () => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * `Schema` is a representation of OpenAPI v2 specification's Schema object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Schema
 */
export const Schema = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Schema",
  () => [
    { no: 1, name: "json_schema", kind: "message", T: JSONSchema },
    { no: 2, name: "discriminator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "read_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "external_docs", kind: "message", T: ExternalDocumentation },
    { no: 6, name: "example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * `JSONSchema` represents properties from JSON Schema taken, and as used, in
 * the OpenAPI v2 spec.
 *
 * This includes changes made by OpenAPI v2.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * See also: https://cswr.github.io/JsonSchema/spec/basic_types/,
 * https://github.com/json-schema-org/json-schema-spec/blob/master/schema.json
 *
 * Example:
 *
 *  message SimpleMessage {
 *    option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema) = {
 *      json_schema: {
 *        title: "SimpleMessage"
 *        description: "A simple message."
 *        required: ["id"]
 *      }
 *    };
 *
 *    // Id represents the message identifier.
 *    string id = 1; [
 *        (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {
 *          description: "The unique identifier of the simple message."
 *        }];
 *  }
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema
 */
export const JSONSchema = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.JSONSchema",
  () => [
    { no: 3, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "default", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "read_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "multiple_of", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 11, name: "maximum", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 12, name: "exclusive_maximum", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "minimum", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 14, name: "exclusive_minimum", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "max_length", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 16, name: "min_length", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 17, name: "pattern", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "max_items", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 21, name: "min_items", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 22, name: "unique_items", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "max_properties", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 25, name: "min_properties", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 26, name: "required", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 34, name: "array", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 35, name: "type", kind: "enum", T: proto3.getEnumType(JSONSchema_JSONSchemaSimpleTypes), repeated: true },
    { no: 36, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 46, name: "enum", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 1001, name: "field_configuration", kind: "message", T: JSONSchema_FieldConfiguration },
    { no: 48, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes
 */
export const JSONSchema_JSONSchemaSimpleTypes = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "ARRAY"},
    {no: 2, name: "BOOLEAN"},
    {no: 3, name: "INTEGER"},
    {no: 4, name: "NULL"},
    {no: 5, name: "NUMBER"},
    {no: 6, name: "OBJECT"},
    {no: 7, name: "STRING"},
  ],
);

/**
 * 'FieldConfiguration' provides additional field level properties used when generating the OpenAPI v2 file.
 * These properties are not defined by OpenAPIv2, but they are used to control the generation.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration
 */
export const JSONSchema_FieldConfiguration = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration",
  () => [
    { no: 47, name: "path_param_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "JSONSchema_FieldConfiguration"},
);

/**
 * `Tag` is a representation of OpenAPI v2 specification's Tag object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#tagObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Tag
 */
export const Tag = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Tag",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "external_docs", kind: "message", T: ExternalDocumentation },
    { no: 4, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * `SecurityDefinitions` is a representation of OpenAPI v2 specification's
 * Security Definitions object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityDefinitionsObject
 *
 * A declaration of the security schemes available to be used in the
 * specification. This does not enforce the security schemes on the operations
 * and only serves to provide the relevant details for each scheme.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions
 */
export const SecurityDefinitions = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions",
  () => [
    { no: 1, name: "security", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: SecurityScheme} },
  ],
);

/**
 * `SecurityScheme` is a representation of OpenAPI v2 specification's
 * Security Scheme object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securitySchemeObject
 *
 * Allows the definition of a security scheme that can be used by the
 * operations. Supported schemes are basic authentication, an API key (either as
 * a header or as a query parameter) and OAuth2's common flows (implicit,
 * password, application and access code).
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme
 */
export const SecurityScheme = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SecurityScheme_Type) },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "in", kind: "enum", T: proto3.getEnumType(SecurityScheme_In) },
    { no: 5, name: "flow", kind: "enum", T: proto3.getEnumType(SecurityScheme_Flow) },
    { no: 6, name: "authorization_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "token_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "scopes", kind: "message", T: Scopes },
    { no: 9, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type
 */
export const SecurityScheme_Type = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type",
  [
    {no: 0, name: "TYPE_INVALID", localName: "INVALID"},
    {no: 1, name: "TYPE_BASIC", localName: "BASIC"},
    {no: 2, name: "TYPE_API_KEY", localName: "API_KEY"},
    {no: 3, name: "TYPE_OAUTH2", localName: "OAUTH2"},
  ],
);

/**
 * The location of the API key. Valid values are "query" or "header".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In
 */
export const SecurityScheme_In = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In",
  [
    {no: 0, name: "IN_INVALID", localName: "INVALID"},
    {no: 1, name: "IN_QUERY", localName: "QUERY"},
    {no: 2, name: "IN_HEADER", localName: "HEADER"},
  ],
);

/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow
 */
export const SecurityScheme_Flow = /*@__PURE__*/ proto3.makeEnum(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow",
  [
    {no: 0, name: "FLOW_INVALID", localName: "INVALID"},
    {no: 1, name: "FLOW_IMPLICIT", localName: "IMPLICIT"},
    {no: 2, name: "FLOW_PASSWORD", localName: "PASSWORD"},
    {no: 3, name: "FLOW_APPLICATION", localName: "APPLICATION"},
    {no: 4, name: "FLOW_ACCESS_CODE", localName: "ACCESS_CODE"},
  ],
);

/**
 * `SecurityRequirement` is a representation of OpenAPI v2 specification's
 * Security Requirement object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityRequirementObject
 *
 * Lists the required security schemes to execute this operation. The object can
 * have multiple security schemes declared in it which are all required (that
 * is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme
 * declared in the Security Definitions.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement
 */
export const SecurityRequirement = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement",
  () => [
    { no: 1, name: "security_requirement", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: SecurityRequirement_SecurityRequirementValue} },
  ],
);

/**
 * If the security scheme is of type "oauth2", then the value is a list of
 * scope names required for the execution. For other security scheme types,
 * the array MUST be empty.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue
 */
export const SecurityRequirement_SecurityRequirementValue = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue",
  () => [
    { no: 1, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SecurityRequirement_SecurityRequirementValue"},
);

/**
 * `Scopes` is a representation of OpenAPI v2 specification's Scopes object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#scopesObject
 *
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Scopes
 */
export const Scopes = /*@__PURE__*/ proto3.makeMessageType(
  "grpc.gateway.protoc_gen_openapiv2.options.Scopes",
  () => [
    { no: 1, name: "scope", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

